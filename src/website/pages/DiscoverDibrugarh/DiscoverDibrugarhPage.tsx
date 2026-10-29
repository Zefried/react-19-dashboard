import React from 'react';
import { TornEdgeDivider } from '../../components/hero/TornEdgeDivider';
import { Footer } from '../../components/footer/Footer';

// Image assets (extracted & 2x Bicubic upscaled from reference)
import dibrugarhHero from '../../assets/dibrugarh-hero.png';
import dibrugarhTeaEstate from '../../assets/dibrugarh-tea-estate.png';
import dibrugarhBrahmaputra from '../../assets/dibrugarh-brahmaputra.png';
import dibrugarhTeaGardens from '../../assets/dibrugarh-tea-gardens.png';
import dibrugarhBogibeel from '../../assets/dibrugarh-bogibeel.png';
import dibrugarhJokai from '../../assets/dibrugarh-jokai.png';
import dibrugarhTemple from '../../assets/dibrugarh-temple.png';
import dibrugarhWildlife from '../../assets/dibrugarh-wildlife.png';
import dibrugarhStayPanorama from '../../assets/dibrugarh-stay-panorama.png';

import './Styles/DiscoverDibrugarhPage.css';

/**
 * Assamese Infinity Loop / Knot Flourish Divider
 */
const FlourishDivider: React.FC<{ center?: boolean }> = ({ center = false }) => (
  <div className={`dd-flourish ${center ? 'center' : ''}`} aria-hidden="true">
    <span className="dd-flourish-line" />
    <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="dd-flourish-icon">
      <path
        d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
        stroke="#8C3A27"
        strokeWidth="1.4"
      />
    </svg>
    <span className="dd-flourish-line reverse" />
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
 * 1. River Waves Icon (The Brahmaputra)
 */
const RiverWavesIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M3 8C5.5 6.5 8.5 6.5 11 8C13.5 9.5 16.5 9.5 19 8C21.5 6.5 24.5 6.5 26 8"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 14C5.5 12.5 8.5 12.5 11 14C13.5 15.5 16.5 15.5 19 14C21.5 12.5 24.5 12.5 26 14"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 20C5.5 18.5 8.5 18.5 11 20C13.5 21.5 16.5 21.5 19 20C21.5 18.5 24.5 18.5 26 20"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 2. Tea Leaf Icon (Tea Gardens)
 */
const TeaLeafIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
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
 * 3. Bridge Icon (Bogibeel Bridge)
 */
const BridgeIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M2 17H26" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5 17C7 11 21 11 23 17" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 11V17" stroke="#8C3A27" strokeWidth="1.5" />
    <path d="M7 17V24 M21 17V24" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 24H10 M18 24H24" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * 4. Botanical Sprout Icon (Jokai Botanical Garden)
 */
const BotanicalSproutIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M5 23H23" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 23V11" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M14 13C10 13 6 10 6 7C10 7 13 9 14 13Z"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 13C18 13 22 10 22 7C18 7 15 9 14 13Z"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 5. Temple Shrine Icon (Jagannath Temple)
 */
const TempleShrineIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M4 24H24" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6 24V14H22V24" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 24V18C11 16.5 12.5 15.5 14 15.5C15.5 15.5 17 16.5 17 18V24" stroke="#8C3A27" strokeWidth="1.5" />
    <path d="M7 14L14 5L21 14" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 5V2 M12 2H16" stroke="#8C3A27" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * 6. Binoculars Icon (Nearby Nature Destinations)
 */
const BinocularsIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="8" cy="18" r="4.5" stroke="#8C3A27" strokeWidth="1.8" />
    <path d="M4.5 15L7 7H10L11.5 14" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="18" r="4.5" stroke="#8C3A27" strokeWidth="1.8" />
    <path d="M23.5 15L21 7H18L16.5 14" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 9H18 M12 14H16" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

interface AroundDibrugarhCard {
  image: string;
  alt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AROUND_DIBRUGARH_CARDS: AroundDibrugarhCard[] = [
  {
    image: dibrugarhBrahmaputra,
    alt: 'Ferry boat sailing on the vast Brahmaputra river near Dibrugarh',
    icon: <RiverWavesIcon />,
    title: 'The Brahmaputra',
    description:
      'Dibrugarh town is situated on the southern bank of the Brahmaputra. The river shapes the region\'s landscape, way of life and cultural heritage.',
  },
  {
    image: dibrugarhTeaGardens,
    alt: 'Lush green tea bushes in Upper Assam tea estate',
    icon: <TeaLeafIcon />,
    title: 'Tea Gardens',
    description:
      'The district is part of Assam\'s renowned tea belt, home to some of the finest tea gardens in the world, known for their beautiful landscapes and rich heritage.',
  },
  {
    image: dibrugarhBogibeel,
    alt: 'Bogibeel rail-cum-road bridge spanning the Brahmaputra river at sunset',
    icon: <BridgeIcon />,
    title: 'Bogibeel Bridge',
    description:
      'The Bogibeel Bridge, one of India\'s longest rail-cum-road bridges, connects Dibrugarh to the northern banks of the Brahmaputra and neighbouring regions.',
  },
  {
    image: dibrugarhJokai,
    alt: 'Jokai Botanical Garden paved walkway flanked by lush green trees and flowers',
    icon: <BotanicalSproutIcon />,
    title: 'Jokai Botanical Garden',
    description:
      'Located in Dibrugarh, the Jokai Botanical Garden is known for its rich diversity of plants, including many native and rare species from Assam and the North East.',
  },
  {
    image: dibrugarhTemple,
    alt: 'Jagannath Temple Dibrugarh white tiered domes and cultural shrine',
    icon: <TempleShrineIcon />,
    title: 'Jagannath Temple',
    description:
      'The Jagannath Temple in Dibrugarh is a well-known place of worship and a significant cultural landmark in the region.',
  },
  {
    image: dibrugarhWildlife,
    alt: 'Scenic forest wetlands near Dibrugarh with white migratory birds swimming',
    icon: <BinocularsIcon />,
    title: 'Nearby Nature Destinations',
    description:
      'The region around Dibrugarh offers scenic landscapes, wetlands and forested areas, providing opportunities for nature lovers and birdwatchers.',
  },
];

export const DiscoverDibrugarhPage: React.FC = () => {
  return (
    <div className="dd-page">
      {/* ====================================================================
          1. Hero Section ("The Tea City of Assam")
          ==================================================================== */}
      <section className="dd-hero" aria-label="Discover Dibrugarh Hero Banner">
        <div className="dd-hero-media">
          <img
            src={dibrugarhHero}
            alt="Scenic sunset over the Brahmaputra river with traditional ferry boats and lush trees in Dibrugarh"
            className="dd-hero-img"
          />
          <div className="dd-hero-overlay" aria-hidden="true" />

          {/* Hero Content */}
          <div className="dd-hero-content">
            <span className="dd-hero-eyebrow">DISCOVER DIBRUGARH</span>
            <h1 className="dd-hero-title">The Tea City of Assam</h1>

            <div className="dd-hero-flourish" aria-hidden="true">
              <span className="dd-hero-line" />
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="dd-hero-icon">
                <path
                  d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
                  stroke="#E2D2BC"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="dd-hero-line reverse" />
            </div>

            <p className="dd-hero-subtitle">
              Set in Upper Assam on the southern bank of the Brahmaputra, Dibrugarh is known for its
              tea gardens, river landscapes and rich cultural heritage.
            </p>
          </div>
        </div>

        {/* Organic Torn Edge Divider */}
        <TornEdgeDivider fillColor="#FAF5ED" />
      </section>

      {/* ====================================================================
          2. Section: Nature, Heritage and Warm Hospitality
          ==================================================================== */}
      <section className="dd-region-section" aria-label="Nature, Heritage and Warm Hospitality">
        <BotanicalSprigWatermark className="dd-leaf-watermark-left" flipped />

        <div className="dd-text-col">
          <span className="dd-eyebrow">THE REGION</span>
          <h2 className="dd-heading">Nature, Heritage and Warm Hospitality</h2>
          <FlourishDivider />

          <p className="dd-para">
            Dibrugarh lies in the Upper Assam region and is one of the most important centres of tea
            cultivation in the world. The district is known for its lush tea gardens, the mighty
            Brahmaputra, its vibrant culture and the warm hospitality of its people.
          </p>
        </div>

        <div className="dd-img-col">
          <div className="dd-img-frame">
            <img
              src={dibrugarhTeaEstate}
              alt="Expansive green tea plantations under a bright sky with native shade trees in Upper Assam"
              className="dd-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Section: Around Dibrugarh (6-Card Grid)
          ==================================================================== */}
      <section className="dd-places-section" aria-label="Around Dibrugarh Attractions">
        <div className="dd-places-header">
          <span className="dd-eyebrow">PLACES AND EXPERIENCES</span>
          <h2 className="dd-heading">Around Dibrugarh</h2>
          <FlourishDivider center />
        </div>

        <div className="dd-cards-grid">
          {AROUND_DIBRUGARH_CARDS.map((card) => (
            <div key={card.title} className="dd-card">
              <div className="dd-card-media">
                <img src={card.image} alt={card.alt} className="dd-card-img" loading="lazy" />
              </div>
              <div className="dd-card-body">
                <div className="dd-card-header">
                  <div className="dd-card-icon-wrap" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3 className="dd-card-title">{card.title}</h3>
                </div>
                <p className="dd-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          4. Section: Full-Width Panoramic Tea Garden Banner
          ==================================================================== */}
      <section className="dd-panorama" aria-label="Experience the Region Extension">
        <div className="dd-panorama-media">
          <img
            src={dibrugarhStayPanorama}
            alt="Golden hour panoramic view of tea plantations in Dibrugarh Assam"
            className="dd-panorama-img"
            loading="lazy"
          />
          <div className="dd-panorama-overlay" aria-hidden="true" />

          <div className="dd-panorama-content">
            <span className="dd-panorama-eyebrow">EXPERIENCE THE REGION</span>
            <h2 className="dd-panorama-title">A Perfect Extension of Your Stay</h2>

            <div className="dd-hero-flourish" aria-hidden="true">
              <span className="dd-hero-line" />
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="dd-hero-icon">
                <path
                  d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
                  stroke="#E2D2BC"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="dd-hero-line reverse" />
            </div>

            <p className="dd-panorama-desc">
              Explore the natural beauty, cultural landmarks and unique charm of Dibrugarh and
              return to the peaceful gardens of The Heritage House.
            </p>
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
