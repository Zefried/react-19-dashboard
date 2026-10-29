import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/BrandLogo.css';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'dark' }) => {
  const isDark = variant === 'dark';
  const primaryColor = isDark ? '#2E221D' : '#FFFFFF';
  const iconColor = isDark ? '#7A2A1E' : '#C5A059';
  const subColor = isDark ? '#6E5F57' : '#E0D6C8';

  return (
    <Link to="/" className={`bl1 ${className}`}>
      {/* Traditional Assamese Gable Roof Motif */}
      <svg
        className="bl2"
        viewBox="0 0 48 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M24 3L4 35H44L24 3Z"
          stroke={iconColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M1 35H47"
          stroke={iconColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 13V35M14 26L34 26M17 35L24 23L31 35"
          stroke={iconColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="24" cy="3" r="1.5" fill={iconColor} />
      </svg>

      {/* Brand Typography */}
      <div className="bl3">
        <span className="bl4" style={{ color: primaryColor }}>
          THE
        </span>
        <span className="bl5" style={{ color: primaryColor }}>
          HERITAGE HOUSE
        </span>
        <span className="bl6" style={{ color: subColor }}>
          DIBRUGARH &bull; ASSAM
        </span>
      </div>
    </Link>
  );
};
