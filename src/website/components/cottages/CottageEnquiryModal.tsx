import React, { useState, useEffect } from 'react';
import api from '../../../api/axios';
import {
  X,
  Leaf,
  Calendar,
  Moon,
  Users,
  Lock,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import './Styles/CottageEnquiryModal.css';

export interface CottageModalItem {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  tags: Array<{
    icon: React.ReactNode;
    label: string;
  }>;
  showcaseImage?: string;
}

interface CottageEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  cottage: CottageModalItem | null;
}

export const CottageEnquiryModal: React.FC<CottageEnquiryModalProps> = ({
  isOpen,
  onClose,
  cottage,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [numberOfNights, setNumberOfNights] = useState('2 Nights');
  const [numberOfGuests, setNumberOfGuests] = useState('2 Guests');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset submitted state when modal is opened for a different cottage
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setSubmitError('');
    }
  }, [isOpen, cottage?.id]);

  if (!isOpen || !cottage) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) return;

    try {
      setIsSubmitting(true);
      setSubmitError('');
      await api.post('/cottage-bookings', {
        cottage_id: cottage.id,
        cottage_name: cottage.name,
        guest_name: fullName.trim(),
        phone: `+91 ${phoneNumber.trim()}`,
        arrival_date: arrivalDate || null,
        nights: numberOfNights,
        guests_count: numberOfGuests,
      });
      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(
        err?.response?.data?.message || 'Unable to submit reservation enquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayImage = cottage.showcaseImage || cottage.image;

  return (
    <div
      className="cem-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cem-modal-title"
    >
      <div className="cem-modal" onClick={(e) => e.stopPropagation()}>
        {/* ==================================================================
            Left Column: Visual Showcase & Stay Info
            ================================================================== */}
        <div className="cem-visual-col">
          <img
            src={displayImage}
            alt={cottage.alt}
            className="cem-bg-img"
          />
          <div className="cem-gradient-overlay" aria-hidden="true" />

          <div className="cem-visual-content">
            <div className="cem-flourish" aria-hidden="true">
              <span className="cem-flourish-line" />
              <span className="cem-flourish-dot" />
              <span className="cem-flourish-line reverse" />
            </div>

            <h3 className="cem-stay-title">{cottage.name}</h3>
            <p className="cem-stay-desc">{cottage.description}</p>

            <div className="cem-tags-row">
              {cottage.tags.map((tag) => (
                <span key={tag.label} className="cem-tag-item">
                  <span className="cem-tag-icon" aria-hidden="true">
                    {tag.icon}
                  </span>
                  <span>{tag.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================================
            Right Column: Enquiry Form & Actions
            ================================================================== */}
        <div className="cem-form-col">
          {/* Close Button */}
          <button
            type="button"
            className="cem-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} strokeWidth={2.2} />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="cem-eyebrow">
                <Leaf size={14} className="text-[#8C3A27]" />
                <span>ENQUIRY</span>
              </div>

              <h2 id="cem-modal-title" className="cem-title">
                Explore This Stay
              </h2>

              <p className="cem-subtitle">
                Share a few details and our team will get in touch with you to plan your visit.
              </p>

              {/* Selected Stay Mini Banner */}
              <div className="cem-selected-card">
                <img
                  src={cottage.image}
                  alt={cottage.name}
                  className="cem-selected-thumb"
                />
                <div className="cem-selected-meta">
                  <span className="cem-selected-lbl">Selected Stay</span>
                  <span className="cem-selected-name">{cottage.name}</span>
                </div>

                {/* Subtle Assamese botanical watermark */}
                <svg
                  className="cem-selected-leaf"
                  viewBox="0 0 100 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 90 C40 60, 50 30, 90 10 M40 50 C60 40, 70 30, 80 15 M50 65 C70 55, 80 45, 90 25"
                    stroke="#C5A059"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Enquiry Form */}
              <form onSubmit={handleSubmit} className="cem-form">
                {/* 1. Full Name */}
                <div className="cem-field-group">
                  <label htmlFor="cem-name" className="cem-label">
                    Full Name *
                  </label>
                  <input
                    id="cem-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    className="cem-input"
                  />
                </div>

                {/* 2. Phone Number */}
                <div className="cem-field-group">
                  <label htmlFor="cem-phone" className="cem-label">
                    Phone Number *
                  </label>
                  <div className="cem-phone-wrap">
                    <span className="cem-phone-prefix">+91</span>
                    <input
                      id="cem-phone"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Your phone number"
                      className="cem-phone-input"
                    />
                  </div>
                </div>

                {/* 3. Arrival Date & Nights */}
                <div className="cem-two-col">
                  <div className="cem-field-group">
                    <label htmlFor="cem-date" className="cem-label">
                      Preferred Arrival Date
                    </label>
                    <div className="cem-select-wrap">
                      <Calendar size={15} className="cem-select-icon" />
                      <input
                        id="cem-date"
                        type="date"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                        className="cem-select"
                      />
                    </div>
                  </div>

                  <div className="cem-field-group">
                    <label htmlFor="cem-nights" className="cem-label">
                      Number of Nights *
                    </label>
                    <div className="cem-select-wrap">
                      <Moon size={15} className="cem-select-icon" />
                      <select
                        id="cem-nights"
                        value={numberOfNights}
                        onChange={(e) => setNumberOfNights(e.target.value)}
                        className="cem-select"
                      >
                        <option value="1 Night">1 Night</option>
                        <option value="2 Nights">2 Nights</option>
                        <option value="3 Nights">3 Nights</option>
                        <option value="4+ Nights">4+ Nights</option>
                      </select>
                      <ChevronDown size={14} className="cem-select-arrow" />
                    </div>
                  </div>
                </div>

                {/* 4. Number of Guests */}
                <div className="cem-field-group">
                  <label htmlFor="cem-guests" className="cem-label">
                    Number of Guests *
                  </label>
                  <div className="cem-select-wrap">
                    <Users size={15} className="cem-select-icon" />
                    <select
                      id="cem-guests"
                      value={numberOfGuests}
                      onChange={(e) => setNumberOfGuests(e.target.value)}
                      className="cem-select"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4+ Guests">4+ Guests</option>
                      <option value="Family / Group">Family / Group</option>
                    </select>
                    <ChevronDown size={14} className="cem-select-arrow" />
                  </div>
                </div>

                {submitError && (
                  <div className="p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg">
                    {submitError}
                  </div>
                )}

                {/* Submit CTA */}
                <button type="submit" className="cem-submit-btn" disabled={isSubmitting}>
                  <Leaf size={16} className="cem-submit-icon" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Enquiry →'}</span>
                </button>

                {/* Footer Security Note */}
                <p className="cem-note">
                  <Lock size={12} className="cem-note-icon" />
                  <span>This is an enquiry request. No booking or payment is required.</span>
                </p>
              </form>
            </>
          ) : (
            /* Success Confirmation Screen */
            <div className="cem-success-wrap">
              <div className="cem-success-icon">
                <CheckCircle2 size={32} />
              </div>

              <h3 className="cem-success-title">Enquiry Received</h3>

              <p className="cem-success-msg">
                Thank you, <strong>{fullName}</strong>! We have received your enquiry for{' '}
                <strong>{cottage.name}</strong>. Our team will get in touch with you at{' '}
                <strong>+91 {phoneNumber}</strong> shortly to curate your stay.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="cem-submit-btn max-w-[200px]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
