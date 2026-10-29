import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { HeritageButton } from '../ui/HeritageButton';
import type { NavItem } from '../../types/website';
import './Styles/Navbar.css';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'The Heritage House', href: '/the-heritage-house' },
  { label: 'Garden', href: '/garden' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Discover Dibrugarh', href: '/discover-dibrugarh' },
  { label: 'Visit Us', href: '/visit-us' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="nav1">
      <div className="nav2">
        <div className="nav3">
          {/* Brand Logo */}
          <div className="nav4">
            <BrandLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav6 ${isActive ? 'nav6-active' : ''}`}
                >
                  {item.label}
                  {isActive && <span className="nav7" />}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="nav8">
            <HeritageButton to="/visit-us" variant="terracotta">
              Enquire Now
            </HeritageButton>
          </div>

          {/* Mobile Actions: Compact CTA + Hamburger */}
          <div className="nav9">
            <HeritageButton to="/visit-us" variant="terracotta" className="text-xs px-3.5 py-1.5">
              Enquire
            </HeritageButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="nav10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="nav11">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav12 ${isActive ? 'nav12-active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="nav13">
            <HeritageButton
              to="/visit-us"
              variant="terracotta"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enquire Now
            </HeritageButton>
          </div>
        </div>
      )}
    </header>
  );
};
