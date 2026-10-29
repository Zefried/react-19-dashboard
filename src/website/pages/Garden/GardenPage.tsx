import React from 'react';
import { Leaf, Flower2, TreeDeciduous } from 'lucide-react';
import { TornEdgeDivider } from '../../components/hero/TornEdgeDivider';
import { Footer } from '../../components/footer/Footer';
import gardenHero from '../../assets/garden-hero.png';
import gardenPathway from '../../assets/garden-pathway.png';
import gardenSerenityBanner from '../../assets/garden-serenity-banner.png';
import './Styles/GardenPage.css';

/**
 * Assamese Infinity Loop / Knot Flourish Divider
 */
const FlourishDivider: React.FC<{ center?: boolean }> = ({ center = false }) => (
  <div className={`gp-flourish ${center ? 'center' : ''}`} aria-hidden="true">
    <span className="gp-flourish-line" />
    <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="gp-flourish-icon">
      <path
        d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
        stroke="#8C3A27"
        strokeWidth="1.4"
      />
    </svg>
    <span className="gp-flourish-line reverse" />
  </div>
);

/**
 * Botanical Leaf Watermark Accent
 */
const BotanicalLeafWatermark: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = '',
  flipped = false,
}) => (
  <svg
    className={className}
    viewBox="0 0 100 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={flipped ? { transform: 'scaleX(-1)' } : undefined}
    aria-hidden="true"
  >
    <path
      d="M95 10 C60 50, 40 120, 95 230 M85 45 C45 75, 55 95, 80 105 M80 115 C40 145, 50 165, 85 175 M85 185 C55 205, 65 220, 95 230"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      strokeLinecap="round"
    />
  </svg>
);

interface HighlightPillar {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const HIGHLIGHTS_DATA: HighlightPillar[] = [
  {
    icon: <Leaf size={28} strokeWidth={1.8} />,
    title: 'Lush Greenery',
    subtitle: 'Nature at its finest',
  },
  {
    icon: <Flower2 size={28} strokeWidth={1.8} />,
    title: 'Flowering Gardens',
    subtitle: 'A splash of colour',
  },
  {
    icon: <TreeDeciduous size={28} strokeWidth={1.8} />,
    title: 'Peaceful Ambience',
    subtitle: 'A calm retreat',
  },
];

export const GardenPage: React.FC = () => {
  return (
    <div className="gp1">
      {/* ====================================================================
          1. Hero Section ("Our Garden")
          ==================================================================== */}
      <section className="gp-hero" aria-label="Our Garden Hero Banner">
        <div className="gp-hero-media">
          <img
            src={gardenHero}
            alt="The Heritage House sprawling lush green lawn and flowering garden with the colonial bungalow"
            className="gp-hero-img"
          />
          <div className="gp-hero-overlay" aria-hidden="true" />

          {/* Hero Typography Overlay */}
          <div className="gp-hero-content">
            <span className="gp-hero-eyebrow">THE HERITAGE HOUSE</span>
            <h1 className="gp-hero-title">Our Garden</h1>

            <div className="gp-hero-flourish" aria-hidden="true">
              <span className="gp-hero-line" />
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="gp-hero-icon">
                <path
                  d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
                  stroke="#E2D2BC"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="gp-hero-line reverse" />
            </div>

            <p className="gp-hero-subtitle">
              A green haven of heritage, nature and tranquility.
            </p>
          </div>
        </div>

        {/* Organic Torn Edge Divider */}
        <TornEdgeDivider fillColor="#FAF5ED" />
      </section>

      {/* ====================================================================
          2. Section: Nature in Heritage Surroundings
          ==================================================================== */}
      <section className="gp-surroundings" aria-label="Nature in Heritage Surroundings">
        <BotanicalLeafWatermark className="gp-leaf-left" flipped />

        <div className="gp-surroundings-content">
          <span className="gp-eyebrow">THE HERITAGE HOUSE</span>
          <FlourishDivider />
          <h2 className="gp-heading">Nature in Heritage Surroundings</h2>

          <p className="gp-para">
            Our garden is a tranquil retreat, where heritage meets nature. Lush greenery,
            flowering plants, and towering trees create a serene space to relax, reflect and reconnect.
          </p>

          <p className="gp-para">
            Whether you&apos;re enjoying a morning walk, sipping tea under the trees, or simply
            soaking in the peaceful ambience, the garden offers a perfect blend of comfort and calm.
          </p>
        </div>

        <div className="gp-surroundings-img-col">
          <div className="gp-pathway-frame">
            <img
              src={gardenPathway}
              alt="Stone walkway through lush heritage garden flanked by traditional lanterns and trees"
              className="gp-pathway-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Section: Garden Highlights — A Space to Unwind (3 Pillars)
          ==================================================================== */}
      <section className="gp-highlights" aria-label="Garden Highlights">
        <div className="gp-highlights-header">
          <span className="gp-eyebrow">GARDEN HIGHLIGHTS</span>
          <h2 className="gp-heading">A Space to Unwind</h2>
          <FlourishDivider center />
        </div>

        <div className="gp-pillars-row">
          {HIGHLIGHTS_DATA.map((pillar) => (
            <div key={pillar.title} className="gp-pillar">
              <div className="gp-pillar-icon-wrap" aria-hidden="true">
                {pillar.icon}
              </div>
              <h3 className="gp-pillar-title">{pillar.title}</h3>
              <p className="gp-pillar-subtitle">{pillar.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          4. Section: Full-Width Scenic Garden Panorama with Quote
          ==================================================================== */}
      <section className="gp-panorama" aria-label="Garden Serenity Quote">
        <div className="gp-panorama-media">
          <img
            src={gardenSerenityBanner}
            alt="Panoramic view of heritage garden with tropical flowers, lush lawn, and carriage cottage"
            className="gp-panorama-img"
            loading="lazy"
          />
          <div className="gp-panorama-overlay" aria-hidden="true" />

          <div className="gp-panorama-content">
            <div className="gp-quote-box">
              <blockquote className="gp-quote-text">
                &ldquo;Experience the serenity of our garden &mdash; a timeless part of The Heritage House.&rdquo;
              </blockquote>
              <span className="gp-quote-line" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Organic Torn Edge Divider Transition to Footer */}
        <TornEdgeDivider fillColor="#FAF5ED" />
      </section>

      {/* ====================================================================
          5. Global Heritage Footer
          ==================================================================== */}
      <Footer />
    </div>
  );
};
