import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Phone,
  Clock,
  Calendar,
  Trash2,
  Edit3,
  X,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import api from '../../../api/axios';

export interface VisitEnquiry {
  id: number;
  name: string;
  contact: string;
  visit_date: string | null;
  message: string | null;
  status: 'new' | 'contacted' | 'resolved' | 'archived';
  admin_notes: string | null;
  last_contacted_at: string | null;
  created_at: string;
}

interface Metrics {
  total: number;
  new: number;
  contacted: number;
  resolved: number;
}

export const VisitEnquiriesTab: React.FC = () => {
  const [enquiries, setEnquiries] = useState<VisitEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [metrics, setMetrics] = useState<Metrics>({
    total: 0,
    new: 0,
    contacted: 0,
    resolved: 0,
  });

  // Modal State for Call Notes & Status update
  const [activeModal, setActiveModal] = useState<{
    open: boolean;
    item: VisitEnquiry | null;
    status: 'new' | 'contacted' | 'resolved' | 'archived';
    adminNotes: string;
    submitting: boolean;
  }>({
    open: false,
    item: null,
    status: 'new',
    adminNotes: '',
    submitting: false,
  });

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const res = await api.get('/admin/visit-enquiries');
      if (res.data.status) {
        setEnquiries(res.data.data || []);
        if (res.data.metrics) {
          setMetrics(res.data.metrics);
        }
      }
    } catch (err) {
      console.error('Failed to load visit enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const matchStatus = statusFilter === 'all' || item.status === statusFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.contact.toLowerCase().includes(q) ||
        (item.message && item.message.toLowerCase().includes(q));

      return matchStatus && matchQuery;
    });
  }, [enquiries, statusFilter, searchQuery]);

  const handleOpenEdit = (item: VisitEnquiry) => {
    setActiveModal({
      open: true,
      item,
      status: item.status,
      adminNotes: item.admin_notes || '',
      submitting: false,
    });
  };

  const handleSaveModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModal.item) return;

    try {
      setActiveModal((prev) => ({ ...prev, submitting: true }));
      const res = await api.patch(`/admin/visit-enquiries/${activeModal.item.id}`, {
        status: activeModal.status,
        admin_notes: activeModal.adminNotes,
      });

      if (res.data.status) {
        setActiveModal({
          open: false,
          item: null,
          status: 'new',
          adminNotes: '',
          submitting: false,
        });
        await fetchEnquiries();
      }
    } catch (err) {
      console.error('Failed to update enquiry:', err);
      alert('Failed to save changes. Please try again.');
      setActiveModal((prev) => ({ ...prev, submitting: false }));
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await api.delete(`/admin/visit-enquiries/${id}`);
      if (res.data.status) {
        setEnquiries((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete enquiry:', err);
      alert('Failed to delete enquiry.');
    }
  };

  // Helper to extract clean phone number for dialer/WhatsApp
  const extractCleanPhone = (str: string) => {
    return str.replace(/[^0-9+]/g, '');
  };

  return (
    <div className="adp__orders">
      {/* Header & Controls */}
      <div className="adp__orders-header">
        <div>
          <h3 className="adp__section-title">
            Visit Us Enquiries & Leads
            <span className="adp-count-pill">{metrics.total} Total</span>
            {metrics.new > 0 && (
              <span
                className="adp-count-pill"
                style={{ background: '#fee2e2', color: '#991b1b', marginLeft: '6px' }}
              >
                {metrics.new} Need Call
              </span>
            )}
          </h3>
          <p className="adp-subtitle">
            Prospective guests seeking day visits, tours, and general homestay enquiries.
          </p>
        </div>

        <div className="adp-action-controls">
          {/* Search Box */}
          <div className="adp-search-box">
            <Search size={16} className="adp-search-icon" />
            <input
              type="text"
              placeholder="Search name, phone, email, notes..."
              className="adp-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="adp-search-input"
            style={{ width: 'auto', paddingLeft: '14px' }}
          >
            <option value="all">All Statuses ({metrics.total})</option>
            <option value="new">New ({metrics.new})</option>
            <option value="contacted">Contacted ({metrics.contacted})</option>
            <option value="resolved">Resolved ({metrics.resolved})</option>
            <option value="archived">Archived</option>
          </select>

          {/* Refresh Button */}
          <button
            onClick={fetchEnquiries}
            className="adp-btn-secondary"
            title="Refresh Enquiries"
            type="button"
          >
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="adp-table-wrapper">
        <table className="adp-table">
          <thead>
            <tr>
              <th>Lead / Guest</th>
              <th>Contact & Call</th>
              <th>Preferred Date</th>
              <th>Message</th>
              <th>Status</th>
              <th>Call Notes</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '32px', color: '#64748b' }}>
                  Loading enquiries...
                </td>
              </tr>
            ) : filteredEnquiries.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '36px', color: '#94a3b8' }}>
                  No visit enquiries found matching your filter.
                </td>
              </tr>
            ) : (
              filteredEnquiries.map((item) => {
                const cleanPhone = extractCleanPhone(item.contact);
                const hasPhone = /[0-9]{7,}/.test(cleanPhone);

                return (
                  <tr key={item.id}>
                    {/* Guest Name & Date Received */}
                    <td>
                      <div style={{ fontWeight: 600, color: '#1e293b' }}>{item.name}</div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          marginTop: '2px',
                        }}
                      >
                        <Clock size={11} />
                        {new Date(item.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                    </td>

                    {/* Contact & Direct Dialer Buttons */}
                    <td>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: '#334155' }}>
                        {item.contact}
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                        {hasPhone && (
                          <>
                            {/* Direct Call Button */}
                            <a
                              href={`tel:${cleanPhone}`}
                              className="adp-role-badge"
                              style={{
                                background: '#ecfdf5',
                                color: '#047857',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '3px',
                                padding: '2px 7px',
                                fontSize: '11px',
                              }}
                              title="Click to Call Lead"
                            >
                              <Phone size={11} /> Call
                            </a>

                            {/* WhatsApp Button */}
                            <a
                              href={`https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(
                                `Hello ${item.name}, thank you for contacting The Heritage House, Dibrugarh. We would love to assist you with your visit.`
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="adp-role-badge"
                              style={{
                                background: '#f0fdf4',
                                color: '#15803d',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '3px',
                                padding: '2px 7px',
                                fontSize: '11px',
                              }}
                              title="Message on WhatsApp"
                            >
                              <ExternalLink size={11} /> WhatsApp
                            </a>
                          </>
                        )}
                      </div>
                    </td>

                    {/* Visit Date */}
                    <td>
                      {item.visit_date ? (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '12px',
                            color: '#475569',
                          }}
                        >
                          <Calendar size={13} color="#64748b" />
                          {new Date(item.visit_date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </div>
                      ) : (
                        <span style={{ color: '#94a3b8', fontSize: '12px' }}>Flexible</span>
                      )}
                    </td>

                    {/* Message */}
                    <td style={{ maxWidth: '240px' }}>
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#334155',
                          margin: 0,
                          lineHeight: '1.4',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}
                      >
                        {item.message || <span style={{ color: '#94a3b8' }}>No message provided</span>}
                      </p>
                    </td>

                    {/* Status Pill */}
                    <td>
                      <span
                        className="adp-role-badge"
                        style={{
                          background:
                            item.status === 'new'
                              ? '#fee2e2'
                              : item.status === 'contacted'
                              ? '#e0e7ff'
                              : item.status === 'resolved'
                              ? '#dcfce7'
                              : '#f1f5f9',
                          color:
                            item.status === 'new'
                              ? '#991b1b'
                              : item.status === 'contacted'
                              ? '#3730a3'
                              : item.status === 'resolved'
                              ? '#166534'
                              : '#475569',
                          textTransform: 'capitalize',
                          fontWeight: 600,
                        }}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* Admin Notes */}
                    <td style={{ maxWidth: '200px' }}>
                      {item.admin_notes ? (
                        <div style={{ fontSize: '12px', color: '#1e293b' }}>
                          {item.admin_notes}
                          {item.last_contacted_at && (
                            <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>
                              Called:{' '}
                              {new Date(item.last_contacted_at).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <span style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>
                          No call notes yet
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {/* Edit Notes & Status Button */}
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(item)}
                          className="adp-btn-secondary"
                          style={{ padding: '6px 10px', fontSize: '12px' }}
                          title="Update Status / Log Call Notes"
                        >
                          <Edit3 size={13} />
                          <span>Notes</span>
                        </button>

                        {/* Delete Button */}
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          className="adp-btn-secondary"
                          style={{
                            padding: '6px 8px',
                            color: '#dc2626',
                            borderColor: '#fecaca',
                          }}
                          title="Delete Enquiry"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Notes & Status Modal */}
      {activeModal.open && activeModal.item && (
        <div className="adp-modal-backdrop" onClick={() => setActiveModal((p) => ({ ...p, open: false }))}>
          <div className="adp-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div className="adp-modal-header">
              <h3 className="adp-modal-title">
                Lead Notes: {activeModal.item.name}
              </h3>
              <button
                type="button"
                className="adp-modal-close"
                onClick={() => setActiveModal((p) => ({ ...p, open: false }))}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveModal}>
              <div className="adp-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Guest Contact Recap */}
                <div
                  style={{
                    background: '#f8fafc',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    fontSize: '13px',
                  }}
                >
                  <div>
                    <strong>Contact:</strong> {activeModal.item.contact}
                  </div>
                  {activeModal.item.visit_date && (
                    <div style={{ marginTop: '4px' }}>
                      <strong>Preferred Date:</strong> {activeModal.item.visit_date}
                    </div>
                  )}
                  {activeModal.item.message && (
                    <div style={{ marginTop: '4px', color: '#475569' }}>
                      <strong>Guest Query:</strong> &ldquo;{activeModal.item.message}&rdquo;
                    </div>
                  )}
                </div>

                {/* Status Selector */}
                <div className="adp-form-group">
                  <label className="adp-form-label">Update Enquiry Status *</label>
                  <select
                    className="adp-form-input"
                    value={activeModal.status}
                    onChange={(e: any) =>
                      setActiveModal((prev) => ({ ...prev, status: e.target.value }))
                    }
                  >
                    <option value="new">New (Awaiting Call)</option>
                    <option value="contacted">Contacted (Called Lead)</option>
                    <option value="resolved">Resolved (Booking / Completed)</option>
                    <option value="archived">Archived / Closed</option>
                  </select>
                </div>

                {/* Call Notes Input */}
                <div className="adp-form-group">
                  <label className="adp-form-label">
                    Call Summary & Internal Notes
                  </label>
                  <textarea
                    rows={4}
                    className="adp-form-input"
                    placeholder="E.g. Called guest on Oct 29. Interested in visiting with family of 3 for lunch and garden walk..."
                    value={activeModal.adminNotes}
                    onChange={(e) =>
                      setActiveModal((prev) => ({ ...prev, adminNotes: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="adp-modal-footer">
                <button
                  type="button"
                  className="adp-btn-secondary"
                  onClick={() => setActiveModal((p) => ({ ...p, open: false }))}
                  disabled={activeModal.submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="adp-btn-primary"
                  disabled={activeModal.submitting}
                >
                  {activeModal.submitting ? 'Saving...' : 'Save Lead Notes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
