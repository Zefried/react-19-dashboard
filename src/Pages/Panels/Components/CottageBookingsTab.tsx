import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Phone,
  Home,
  Clock,
  Calendar,
  Trash2,
  Edit3,
  X,
  RefreshCw,
  ExternalLink,
  Moon,
  Users,
} from 'lucide-react';
import api from '../../../api/axios';

export interface CottageBooking {
  id: number;
  cottage_id: string;
  cottage_name: string;
  guest_name: string;
  phone: string;
  email: string | null;
  arrival_date: string | null;
  nights: string | null;
  guests_count: string | null;
  special_requests: string | null;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  price_quoted: string | null;
  admin_notes: string | null;
  last_contacted_at: string | null;
  created_at: string;
}

interface Metrics {
  total: number;
  pending: number;
  confirmed: number;
  cancelled: number;
  completed: number;
}

export const CottageBookingsTab: React.FC = () => {
  const [bookings, setBookings] = useState<CottageBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [cottageFilter, setCottageFilter] = useState<string>('all');
  const [metrics, setMetrics] = useState<Metrics>({
    total: 0,
    pending: 0,
    confirmed: 0,
    cancelled: 0,
    completed: 0,
  });

  // Modal State for Booking Management
  const [activeModal, setActiveModal] = useState<{
    open: boolean;
    item: CottageBooking | null;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    priceQuoted: string;
    adminNotes: string;
    submitting: boolean;
  }>({
    open: false,
    item: null,
    status: 'pending',
    priceQuoted: '',
    adminNotes: '',
    submitting: false,
  });

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await api.get('/admin/cottage-bookings');
      if (res.data.status) {
        setBookings(res.data.data || []);
        if (res.data.metrics) {
          setMetrics(res.data.metrics);
        }
      }
    } catch (err) {
      console.error('Failed to load cottage bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const filteredBookings = useMemo(() => {
    return bookings.filter((item) => {
      const matchStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchCottage = cottageFilter === 'all' || item.cottage_id === cottageFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.guest_name.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        item.cottage_name.toLowerCase().includes(q);

      return matchStatus && matchCottage && matchQuery;
    });
  }, [bookings, statusFilter, cottageFilter, searchQuery]);

  const handleOpenEdit = (item: CottageBooking) => {
    setActiveModal({
      open: true,
      item,
      status: item.status,
      priceQuoted: item.price_quoted || '',
      adminNotes: item.admin_notes || '',
      submitting: false,
    });
  };

  const handleSaveModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModal.item) return;

    try {
      setActiveModal((prev) => ({ ...prev, submitting: true }));
      const payload: any = {
        status: activeModal.status,
        admin_notes: activeModal.adminNotes,
      };

      if (activeModal.priceQuoted) {
        payload.price_quoted = parseFloat(activeModal.priceQuoted);
      }

      const res = await api.patch(`/admin/cottage-bookings/${activeModal.item.id}`, payload);

      if (res.data.status) {
        setActiveModal({
          open: false,
          item: null,
          status: 'pending',
          priceQuoted: '',
          adminNotes: '',
          submitting: false,
        });
        await fetchBookings();
      }
    } catch (err) {
      console.error('Failed to update booking:', err);
      alert('Failed to save changes. Please try again.');
      setActiveModal((prev) => ({ ...prev, submitting: false }));
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this booking lead?')) return;
    try {
      const res = await api.delete(`/admin/cottage-bookings/${id}`);
      if (res.data.status) {
        setBookings((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete booking:', err);
      alert('Failed to delete booking.');
    }
  };

  const extractCleanPhone = (str: string) => {
    return str.replace(/[^0-9+]/g, '');
  };

  return (
    <div className="adp__orders">
      {/* Header & Controls */}
      <div className="adp__orders-header">
        <div>
          <h3 className="adp__section-title">
            Cottage Stays & Reservations
            <span className="adp-count-pill">{metrics.total} Total</span>
            {metrics.pending > 0 && (
              <span
                className="adp-count-pill"
                style={{ background: '#fef3c7', color: '#92400e', marginLeft: '6px' }}
              >
                {metrics.pending} Pending Calls
              </span>
            )}
          </h3>
          <p className="adp-subtitle">
            Direct stay enquiries for House on Air, Wheels, Water, and Underground Cave.
          </p>
        </div>

        <div className="adp-action-controls">
          {/* Search Box */}
          <div className="adp-search-box">
            <Search size={16} className="adp-search-icon" />
            <input
              type="text"
              placeholder="Search guest, cottage, phone..."
              className="adp-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Cottage Filter */}
          <select
            value={cottageFilter}
            onChange={(e) => setCottageFilter(e.target.value)}
            className="adp-search-input"
            style={{ width: 'auto', paddingLeft: '14px' }}
          >
            <option value="all">All Cottages</option>
            <option value="air">House on Air</option>
            <option value="wheels">House on Wheels</option>
            <option value="water">House on Water</option>
            <option value="cave">Stone Cave House</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="adp-search-input"
            style={{ width: 'auto', paddingLeft: '14px' }}
          >
            <option value="all">All Statuses ({metrics.total})</option>
            <option value="pending">Pending ({metrics.pending})</option>
            <option value="confirmed">Confirmed ({metrics.confirmed})</option>
            <option value="completed">Completed ({metrics.completed})</option>
            <option value="cancelled">Cancelled ({metrics.cancelled})</option>
          </select>

          {/* Refresh Button */}
          <button
            onClick={fetchBookings}
            className="adp-btn-secondary"
            title="Refresh Bookings"
            type="button"
          >
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="adp-table-wrapper">
        <table className="adp-table">
          <thead>
            <tr>
              <th>Cottage</th>
              <th>Guest Name</th>
              <th>Direct Dialer / Call</th>
              <th>Stay Logistics</th>
              <th>Status</th>
              <th>Price Quoted</th>
              <th>Call Notes</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '32px', color: '#64748b' }}>
                  Loading reservations...
                </td>
              </tr>
            ) : filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '36px', color: '#94a3b8' }}>
                  No cottage reservations found matching your criteria.
                </td>
              </tr>
            ) : (
              filteredBookings.map((item) => {
                const cleanPhone = extractCleanPhone(item.phone);
                const hasPhone = /[0-9]{7,}/.test(cleanPhone);

                return (
                  <tr key={item.id}>
                    {/* Cottage Name & Badge */}
                    <td>
                      <div
                        style={{
                          fontWeight: 600,
                          color: '#0f172a',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <Home size={14} color="#6E261A" />
                        {item.cottage_name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                        ID: {item.cottage_id}
                      </div>
                    </td>

                    {/* Guest Name */}
                    <td>
                      <div style={{ fontWeight: 600, color: '#1e293b' }}>{item.guest_name}</div>
                      {item.email && (
                        <div style={{ fontSize: '11px', color: '#64748b' }}>{item.email}</div>
                      )}
                      <div
                        style={{
                          fontSize: '11px',
                          color: '#94a3b8',
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
                        })}
                      </div>
                    </td>

                    {/* Contact & Dialer */}
                    <td>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: '#334155' }}>
                        {item.phone}
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                        {hasPhone && (
                          <>
                            {/* Call Button */}
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
                              title="Call Guest to Confirm"
                            >
                              <Phone size={11} /> Call
                            </a>

                            {/* WhatsApp Button */}
                            <a
                              href={`https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(
                                `Hello ${item.guest_name}, this is The Heritage House in Dibrugarh regarding your reservation enquiry for ${item.cottage_name}.`
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

                    {/* Stay Logistics */}
                    <td>
                      <div style={{ fontSize: '12px', color: '#334155' }}>
                        {item.arrival_date ? (
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontWeight: 500,
                            }}
                          >
                            <Calendar size={12} color="#475569" />
                            {new Date(item.arrival_date).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </div>
                        ) : (
                          <span style={{ color: '#94a3b8' }}>Dates Flexible</span>
                        )}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '8px',
                          fontSize: '11px',
                          color: '#64748b',
                          marginTop: '3px',
                        }}
                      >
                        {item.nights && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                            <Moon size={11} /> {item.nights}
                          </span>
                        )}
                        {item.guests_count && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                            <Users size={11} /> {item.guests_count}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Status Pill */}
                    <td>
                      <span
                        className="adp-role-badge"
                        style={{
                          background:
                            item.status === 'pending'
                              ? '#fef3c7'
                              : item.status === 'confirmed'
                              ? '#dcfce7'
                              : item.status === 'completed'
                              ? '#e0e7ff'
                              : '#fee2e2',
                          color:
                            item.status === 'pending'
                              ? '#92400e'
                              : item.status === 'confirmed'
                              ? '#166534'
                              : item.status === 'completed'
                              ? '#3730a3'
                              : '#991b1b',
                          textTransform: 'capitalize',
                          fontWeight: 600,
                        }}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* Price Quoted */}
                    <td>
                      {item.price_quoted ? (
                        <span style={{ fontWeight: 600, color: '#047857', fontSize: '13px' }}>
                          ₹{parseFloat(item.price_quoted).toLocaleString('en-IN')}
                        </span>
                      ) : (
                        <span style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>
                          Not Quoted
                        </span>
                      )}
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
                          No call notes
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
                        {/* Manage Booking Button */}
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(item)}
                          className="adp-btn-secondary"
                          style={{ padding: '6px 10px', fontSize: '12px' }}
                          title="Update Status / Pricing / Call Notes"
                        >
                          <Edit3 size={13} />
                          <span>Manage</span>
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
                          title="Delete Booking Lead"
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

      {/* Edit Booking & Notes Modal */}
      {activeModal.open && activeModal.item && (
        <div className="adp-modal-backdrop" onClick={() => setActiveModal((p) => ({ ...p, open: false }))}>
          <div className="adp-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
            <div className="adp-modal-header">
              <h3 className="adp-modal-title">
                Manage Reservation: {activeModal.item.guest_name}
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
                {/* Stay Info Card */}
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
                    <strong>Cottage:</strong> {activeModal.item.cottage_name}
                  </div>
                  <div style={{ marginTop: '3px' }}>
                    <strong>Phone:</strong> {activeModal.item.phone}
                  </div>
                  <div style={{ marginTop: '3px' }}>
                    <strong>Arrival:</strong> {activeModal.item.arrival_date || 'Flexible'} |{' '}
                    {activeModal.item.nights} | {activeModal.item.guests_count}
                  </div>
                </div>

                {/* Status Selector */}
                <div className="adp-form-group">
                  <label className="adp-form-label">Booking Status *</label>
                  <select
                    className="adp-form-input"
                    value={activeModal.status}
                    onChange={(e: any) =>
                      setActiveModal((prev) => ({ ...prev, status: e.target.value }))
                    }
                  >
                    <option value="pending">Pending (Awaiting Confirmation Call)</option>
                    <option value="confirmed">Confirmed (Dates & Booking Locked)</option>
                    <option value="completed">Completed (Stay Finished)</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                {/* Quoted Price */}
                <div className="adp-form-group">
                  <label className="adp-form-label">Total Price Quoted (INR ₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="adp-form-input"
                    placeholder="E.g. 15000"
                    value={activeModal.priceQuoted}
                    onChange={(e) =>
                      setActiveModal((prev) => ({ ...prev, priceQuoted: e.target.value }))
                    }
                  />
                </div>

                {/* Call Notes Input */}
                <div className="adp-form-group">
                  <label className="adp-form-label">Call Summary & Notes</label>
                  <textarea
                    rows={4}
                    className="adp-form-input"
                    placeholder="E.g. Spoke with guest on phone. Confirmed House on Air for 2 nights. Advance received..."
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
                  {activeModal.submitting ? 'Saving...' : 'Save Reservation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
