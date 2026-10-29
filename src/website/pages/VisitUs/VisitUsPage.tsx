import React, { useState } from 'react';
import api from '../../../api/axios';
import { TornEdgeDivider } from '../../components/hero/TornEdgeDivider';
import { Footer } from '../../components/footer/Footer';

// Image assets (extracted & 2x Bicubic upscaled from reference)
import visitHero from '../../assets/visit-hero.png';
import visitEstateGarden from '../../assets/visit-estate-garden.png';
import visitMapGraphic from '../../assets/visit-map-graphic.png';
import visitClosingPanorama from '../../assets/visit-closing-panorama.png';

import './Styles/VisitUsPage.css';

/**
 * Assamese Infinity Loop / Knot Flourish Divider
 */
const FlourishDivider: React.FC<{ center?: boolean }> = ({ center = false }) => (
  <div className={`vu-flourish ${center ? 'center' : ''}`} aria-hidden="true">
    <span className="vu-flourish-line" />
    <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="vu-flourish-icon">
      <path
        d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
        stroke="#8C3A27"
        strokeWidth="1.4"
      />
    </svg>
    <span className="vu-flourish-line reverse" />
  </div>
);

/**
 * Botanical Leaf Sprig Watermark Accent
 */
const BotanicalSprigWatermark: React.FC<{
  className?: string;
  flipped?: boolean;
}> = ({ className = '', flipped = false }) => (
  <svg
    className={className}
    viewBox="0 0 120 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={flipped ? { transform: 'scaleX(-1)' } : undefined}
    aria-hidden="true"
  >
    <path
      d="M100 10 C60 70, 30 160, 95 310"
      stroke="#C5A059"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.45"
    />
    <path
      d="M85 45 C45 35, 30 65, 70 85 C60 65, 75 50, 85 45 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
    <path d="M85 45 C65 58, 55 68, 50 72" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.35" />

    <path
      d="M58 110 C90 95, 115 125, 75 145 C80 125, 70 115, 58 110 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
    <path d="M58 110 C75 122, 85 130, 92 135" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.35" />

    <path
      d="M48 180 C15 165, 5 195, 42 215 C35 195, 42 185, 48 180 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
    <path d="M48 180 C32 192, 22 200, 18 206" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.35" />

    <path
      d="M62 235 C95 220, 115 250, 80 270 C85 250, 75 240, 62 235 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
    <path d="M62 235 C78 248, 88 256, 95 262" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.35" />

    <path
      d="M78 280 C45 270, 30 300, 72 315 C62 300, 70 288, 78 280 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
  </svg>
);

/**
 * 1. Location Pin Icon
 */
const MapPinCircleIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M14 26C14 26 22 18.5 22 12C22 7.58 18.42 4 14 4C9.58 4 6 7.58 6 12C6 18.5 14 26 14 26Z"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="14" cy="12" r="3.5" stroke="#8C3A27" strokeWidth="1.8" />
  </svg>
);

/**
 * 2. Peaceful Setting Leaf Icon
 */
const LeafSettingIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M5 23C5 23 7 13 15 6C23 -1 25 3 25 3C25 3 26 11 19 19C12 26 5 23 5 23Z"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5 23L20 8" stroke="#8C3A27" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M9 19L13 16" stroke="#8C3A27" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M13 15L17 12" stroke="#8C3A27" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

/**
 * 3. Explore House / Colonial Porch Icon
 */
const ExploreHouseIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M4 24H24" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6 24V14H22V24" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 24V17H17V24" stroke="#8C3A27" strokeWidth="1.6" />
    <path d="M4 14L14 5L24 14" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 5V2 M12 2H16" stroke="#8C3A27" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const VisitUsPage: React.FC = () => {
  // Enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    visitDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) return;

    try {
      setIsSubmitting(true);
      setSubmitError('');
      await api.post('/visit-enquiries', {
        name: formData.name.trim(),
        contact: formData.contact.trim(),
        visit_date: formData.visitDate || null,
        message: formData.message.trim() || null,
      });
      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(
        err?.response?.data?.message || 'Unable to submit enquiry. Please check your details and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="vu-page">
      {/* ====================================================================
          1. Hero Section ("A Visit to Remember")
          ==================================================================== */}
      <section className="vu-hero" aria-label="Visit Us Hero Banner">
        <div className="vu-hero-media">
          <img
            src={visitHero}
            alt="The Heritage House colonial bungalow illuminated in warm evening light with lush gardens and lanterns"
            className="vu-hero-img"
          />
          <div className="vu-hero-overlay" aria-hidden="true" />

          {/* Hero Content */}
          <div className="vu-hero-content">
            <span className="vu-hero-eyebrow">VISIT US</span>
            <h1 className="vu-hero-title">A Visit to Remember</h1>

            <div className="vu-hero-flourish" aria-hidden="true">
              <span className="vu-hero-line" />
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="vu-hero-icon">
                <path
                  d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
                  stroke="#E2D2BC"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="vu-hero-line reverse" />
            </div>

            <p className="vu-hero-subtitle">
              Discover a quieter side of Assam, surrounded by heritage, nature and warmth.
            </p>
          </div>
        </div>

        {/* Organic Torn Edge Divider */}
        <TornEdgeDivider fillColor="#FAF5ED" />
      </section>

      {/* ====================================================================
          2. Section: Plan Your Visit (The Heritage House Dibrugarh, Assam)
          ==================================================================== */}
      <section className="vu-intro-section" aria-label="Plan Your Visit Introduction">
        <BotanicalSprigWatermark className="vu-leaf-watermark-left" flipped />

        <div className="vu-text-col">
          <span className="vu-eyebrow">PLAN YOUR VISIT</span>
          <h2 className="vu-heading">
            The Heritage House<br />Dibrugarh, Assam
          </h2>
          <FlourishDivider />

          <p className="vu-para">
            Come and experience our heritage home, peaceful gardens and unique collection in a relaxed
            and natural setting. Whether you are a nature lover, a culture enthusiast or simply seeking
            a quiet retreat, we would be delighted to welcome you.
          </p>
        </div>

        <div className="vu-img-col">
          <div className="vu-img-frame">
            <img
              src={visitEstateGarden}
              alt="Sunlit walkway through lush tropical garden leading to cottage veranda at The Heritage House"
              className="vu-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Section: Contact Details & Interactive Enquiry Form Grid
          ==================================================================== */}
      <section className="vu-form-section" aria-label="Enquire About Your Visit">
        <div className="vu-grid-2col">
          {/* Left Column: Estate Highlights & Location Card */}
          <div className="vu-info-card">
            {/* Item 1: Location */}
            <div className="vu-info-item">
              <div className="vu-info-icon-wrap" aria-hidden="true">
                <MapPinCircleIcon />
              </div>
              <div className="vu-info-content">
                <h3 className="vu-info-title">Location</h3>
                <p className="vu-info-text">
                  The Heritage House{'\n'}Dibrugarh, Assam, India
                </p>
              </div>
            </div>

            <div className="vu-info-divider" aria-hidden="true" />

            {/* Item 2: A Peaceful Setting */}
            <div className="vu-info-item">
              <div className="vu-info-icon-wrap" aria-hidden="true">
                <LeafSettingIcon />
              </div>
              <div className="vu-info-content">
                <h3 className="vu-info-title">A Peaceful Setting</h3>
                <p className="vu-info-text">
                  Surrounded by gardens and green landscapes, away from the rush of the city.
                </p>
              </div>
            </div>

            <div className="vu-info-divider" aria-hidden="true" />

            {/* Item 3: Explore at Your Pace */}
            <div className="vu-info-item">
              <div className="vu-info-icon-wrap" aria-hidden="true">
                <ExploreHouseIcon />
              </div>
              <div className="vu-info-content">
                <h3 className="vu-info-title">Explore at Your Pace</h3>
                <p className="vu-info-text">
                  Experience our heritage home, garden and unique collection during your visit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form Card */}
          <div className="vu-form-card">
            <div className="vu-form-header">
              <span className="vu-eyebrow">GET IN TOUCH</span>
              <h2 className="vu-heading">Enquire About Your Visit</h2>
              <FlourishDivider />
              <p className="vu-form-subtitle">
                We&apos;d be happy to hear from you. Share a few details and we will get in touch with you.
              </p>
            </div>

            {submitted ? (
              <div className="vu-success-box" role="status">
                <strong>Thank you for reaching out!</strong>
                <p className="mt-1">
                  We have received your enquiry for The Heritage House and our host team will connect
                  with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="vu-form">
                <div className="vu-form-row">
                  <input
                    type="text"
                    required
                    placeholder="Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="vu-input"
                    aria-label="Your Name"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Email / Phone *"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="vu-input"
                    aria-label="Email or Phone Number"
                  />
                </div>

                <input
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className="vu-input"
                  aria-label="Preferred Visit Date"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="vu-textarea"
                  aria-label="Your Message"
                />

                {submitError && (
                  <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
                    {submitError}
                  </div>
                )}

                <button type="submit" className="vu-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Enquiry...' : 'Send an Enquiry →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. Section: Map Location ("In the Heart of Upper Assam")
          ==================================================================== */}
      <section className="vu-map-section" aria-label="Location Map">
        <BotanicalSprigWatermark className="vu-leaf-watermark-left" flipped />

        <div className="vu-text-col">
          <span className="vu-eyebrow">FIND US</span>
          <h2 className="vu-heading">In the Heart of Upper Assam</h2>
          <FlourishDivider />

          <p className="vu-para">
            The Heritage House is located in Dibrugarh, a vibrant tea town in Upper Assam, well
            connected by road, rail and air.
          </p>
        </div>

        <div className="vu-img-col">
          <div className="vu-map-frame">
            <img
              src={visitMapGraphic}
              alt="Map of Dibrugarh Assam along the Brahmaputra river marking The Heritage House location"
              className="vu-map-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. Section: Closing Panoramic Sunset Banner
          ==================================================================== */}
      <section className="vu-panorama" aria-label="We Look Forward To Welcoming You">
        <div className="vu-panorama-media">
          <img
            src={visitClosingPanorama}
            alt="Warm sunset over the veranda of The Heritage House with flowering plants and garden view"
            className="vu-panorama-img"
            loading="lazy"
          />
          <div className="vu-panorama-overlay" aria-hidden="true" />

          <div className="vu-panorama-content">
            <span className="vu-panorama-eyebrow">WE LOOK FORWARD TO WELCOMING YOU</span>
            <h2 className="vu-panorama-title">A Place to Experience, Explore and Unwind</h2>

            <div className="vu-hero-flourish" aria-hidden="true">
              <span className="vu-hero-line" />
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="vu-hero-icon">
                <path
                  d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
                  stroke="#E2D2BC"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="vu-hero-line reverse" />
            </div>
          </div>
        </div>

        {/* Organic Torn Edge Divider Transition to Footer */}
        <TornEdgeDivider fillColor="#FAF5ED" />
      </section>

      {/* ====================================================================
          6. Global Heritage Footer
          ==================================================================== */}
      <Footer />
    </div>
  );
};
