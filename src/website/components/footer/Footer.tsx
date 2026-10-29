import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../ui/BrandLogo';
import footerRiverSketch from '../../assets/footer-river-sketch.png';
import './Styles/Footer.css';

const InstagramIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="ft1" aria-label="The Heritage House Footer">
      {/* Vintage Etched Brahmaputra River Background */}
      <div
        className="ft-sketch-bg"
        style={{ backgroundImage: `url(${footerRiverSketch})` }}
        aria-hidden="true"
      />

      <div className="ft2">
        {/* Main 3-Column Navigation Grid */}
        <div className="ft3">
          {/* Column 1: Brand & Identity */}
          <div className="ft4">
            <BrandLogo variant="dark" />
            <p className="ft5">
              A living colonial heritage estate on the banks of the Brahmaputra in Dibrugarh, Assam.
              Preserving Assamese hospitality, healing botanicals, and timeless tranquility.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="ft6">
            <span className="ft7">EXPLORE THE ESTATE</span>
            <div className="ft8-grid">
              <div className="flex flex-col gap-2">
                <Link to="/" className="ft9">Home</Link>
                <Link to="/our-story" className="ft9">Our Story</Link>
                <Link to="/the-heritage-house" className="ft9">The Heritage House</Link>
                <Link to="/garden" className="ft9">Garden</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/experiences" className="ft9">Experiences</Link>
                <Link to="/dibrugarh" className="ft9">Discover Dibrugarh</Link>
                <Link to="/visit" className="ft9">Visit Us</Link>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Us & Social */}
          <div className="ft10">
            <span className="ft7">FOLLOW US</span>
            <div className="ft11-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ft12-btn"
                aria-label="Follow The Heritage House on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ft12-btn"
                aria-label="Follow The Heritage House on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ft12-btn"
                aria-label="Follow The Heritage House on YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
            <span className="ft13-handle">@heritagehouse</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="ft14">
          <p className="ft15-copy">
            &copy; 2026 The Heritage House. All rights reserved.
          </p>

          <div className="ft16-links">
            <Link to="/privacy" className="ft17-link">Privacy Policy</Link>
            <span className="ft18-sep" aria-hidden="true">&bull;</span>
            <Link to="/terms" className="ft17-link">Terms</Link>
            <span className="ft18-sep" aria-hidden="true">&bull;</span>
            <Link to="/contact" className="ft17-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
