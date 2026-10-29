import React from 'react';
import { TornEdgeDivider } from '../../components/hero/TornEdgeDivider';
import { Footer } from '../../components/footer/Footer';

// Image assets (extracted & 2x Bicubic upscaled from page reference)
import experiencesHero from '../../assets/experiences-hero.png';
import experiencesMedicinalGarden from '../../assets/experiences-medicinal-garden.png';
import experiencesCardRareSpecies from '../../assets/experiences-card-rare-species.png';
import experiencesCardGuidedWalks from '../../assets/experiences-card-guided-walks.png';
import experiencesCardLearningSpace from '../../assets/experiences-card-learning-space.png';
import experiencesVintageAntiques from '../../assets/experiences-vintage-antiques.png';
import experiencesHeritageArchitecture from '../../assets/experiences-heritage-architecture.png';

import './Styles/ExperiencesPage.css';

/**
 * Assamese Infinity Loop / Knot Flourish Divider
 */
const FlourishDivider: React.FC<{ center?: boolean }> = ({ center = false }) => (
  <div className={`ep-flourish ${center ? 'center' : ''}`} aria-hidden="true">
    <span className="ep-flourish-line" />
    <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="ep-flourish-icon">
      <path
        d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
        stroke="#8C3A27"
        strokeWidth="1.4"
      />
    </svg>
    <span className="ep-flourish-line reverse" />
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
    {/* Main curving stem */}
    <path
      d="M100 10 C60 70, 30 160, 95 310"
      stroke="#C5A059"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.45"
    />
    {/* Leaf 1 (top left) */}
    <path
      d="M85 45 C45 35, 30 65, 70 85 C60 65, 75 50, 85 45 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
    <path d="M85 45 C65 58, 55 68, 50 72" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.35" />

    {/* Leaf 2 (mid right) */}
    <path
      d="M58 110 C90 95, 115 125, 75 145 C80 125, 70 115, 58 110 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
    <path d="M58 110 C75 122, 85 130, 92 135" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.35" />

    {/* Leaf 3 (mid left) */}
    <path
      d="M48 180 C15 165, 5 195, 42 215 C35 195, 42 185, 48 180 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
    <path d="M48 180 C32 192, 22 200, 18 206" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.35" />

    {/* Leaf 4 (lower right) */}
    <path
      d="M62 235 C95 220, 115 250, 80 270 C85 250, 75 240, 62 235 Z"
      stroke="#C5A059"
      strokeWidth="1.2"
      strokeOpacity="0.45"
      fill="none"
    />
    <path d="M62 235 C78 248, 88 256, 95 262" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.35" />

    {/* Leaf 5 (bottom left) */}
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
 * Assamese Wheel / Decorative Sunburst Watermark
 */
const AssameseWheelWatermark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="90" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="70" stroke="#C5A059" strokeWidth="1.2" strokeOpacity="0.25" />
    <circle cx="100" cy="100" r="45" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.2" />
    <circle cx="100" cy="100" r="16" stroke="#C5A059" strokeWidth="1.2" strokeOpacity="0.28" />
    {Array.from({ length: 16 }).map((_, i) => (
      <line
        key={i}
        x1="100"
        y1="100"
        x2={100 + 70 * Math.cos((i * Math.PI) / 8)}
        y2={100 + 70 * Math.sin((i * Math.PI) / 8)}
        stroke="#C5A059"
        strokeWidth="0.9"
        strokeOpacity="0.2"
      />
    ))}
  </svg>
);

/**
 * Botanical Sprig Icon (Card 1)
 */
const SprigCardIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M12 28C14 22 17 16 18 6" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M18 6C20 3 24 3 24 6C24 9 20 10 18 10"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 12C22 11 26 13 26 16C26 18 22 19 17 17"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 16C10 15 6 17 6 20C6 22 10 23 15 21"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 22C19 21 22 23 22 25C22 27 18 28 14 26"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Traditional Tree Icon (Card 2)
 */
const TreeCardIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 18V28 M12 28H20" stroke="#8C3A27" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M16 4C19 4 21 5.5 22.5 7C25.5 7 27.5 9.5 27.5 12.5C27.5 15.5 25 18 22 18.5C20.5 19 18 18.5 16 18.5C14 18.5 11.5 19 10 18.5C7 18 4.5 15.5 4.5 12.5C4.5 9.5 6.5 7 9.5 7C11 5.5 13 4 16 4Z"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Single Leaf with Veins Icon (Card 3)
 */
const LeafCardIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path
      d="M7 26C7 26 9 15 17 8C25 1 28 5 28 5C28 5 29 13 21 21C13 29 7 26 7 26Z"
      stroke="#8C3A27"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7 26L22 11" stroke="#8C3A27" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M11 22L15 19" stroke="#8C3A27" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M15 18L19 15" stroke="#8C3A27" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M14 20L11 17" stroke="#8C3A27" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M18 16L15 13" stroke="#8C3A27" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

interface BotanicalCardItem {
  image: string;
  alt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BOTANICAL_CARDS: BotanicalCardItem[] = [
  {
    image: experiencesCardRareSpecies,
    alt: 'Pink Ixora and rare medicinal plant varieties in The Heritage House garden',
    icon: <SprigCardIcon />,
    title: 'Native & Rare Species',
    description:
      'Discover a wide variety of traditional medicinal plants, many of which are native to Assam and the surrounding region.',
  },
  {
    image: experiencesCardGuidedWalks,
    alt: 'Stone pathway winding through sunlit tropical trees with traditional ground lanterns',
    icon: <TreeCardIcon />,
    title: 'Guided Garden Walks',
    description:
      'Take a relaxed walk through the garden and learn about the traditional uses and cultural significance of native plants.',
  },
  {
    image: experiencesCardLearningSpace,
    alt: 'Lush greenery and blooming white star jasmine flowers in the botanical garden',
    icon: <LeafCardIcon />,
    title: 'A Living Learning Space',
    description:
      'The garden is a space for curiosity, conversation and a deeper connection with nature and the traditional knowledge of the region.',
  },
];

export const ExperiencesPage: React.FC = () => {
  return (
    <div className="ep-page">
      {/* ====================================================================
          1. Hero Section ("Experiences")
          ==================================================================== */}
      <section className="ep-hero" aria-label="Experiences Hero Banner">
        <div className="ep-hero-media">
          <img
            src={experiencesHero}
            alt="The Heritage House dusk garden walkway with glowing lanterns leading to the historic colonial bungalow"
            className="ep-hero-img"
          />
          <div className="ep-hero-overlay" aria-hidden="true" />

          {/* Hero Content */}
          <div className="ep-hero-content">
            <span className="ep-hero-eyebrow">THE HERITAGE HOUSE</span>
            <h1 className="ep-hero-title">Experiences</h1>

            <div className="ep-hero-flourish" aria-hidden="true">
              <span className="ep-hero-line" />
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="ep-hero-icon">
                <path
                  d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
                  stroke="#E2D2BC"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="ep-hero-line reverse" />
            </div>

            <p className="ep-hero-subtitle">
              Meaningful experiences rooted in nature, heritage and the cultural spirit of Assam.
            </p>
          </div>
        </div>

        {/* Organic Torn Edge Divider */}
        <TornEdgeDivider fillColor="#FAF5ED" />
      </section>

      {/* ====================================================================
          2. Section: The Medicinal Plant Garden
          ==================================================================== */}
      <section className="ep-section ep-medicinal" aria-label="The Medicinal Plant Garden">
        <BotanicalSprigWatermark className="ep-leaf-watermark-left" flipped />

        <div className="ep-text-col">
          <span className="ep-eyebrow">A UNIQUE EXPERIENCE</span>
          <h2 className="ep-heading">The Medicinal Plant Garden</h2>
          <FlourishDivider />

          <p className="ep-para">
            Explore a remarkable collection of over 275 varieties of medicinal and native plants,
            including rare and endangered species from across North East India. The garden offers a
            rare opportunity to experience the region&apos;s rich botanical heritage in a natural and
            peaceful setting.
          </p>
        </div>

        <div className="ep-img-col">
          <div className="ep-img-frame">
            <img
              src={experiencesMedicinalGarden}
              alt="Sunlit path through lush botanical garden with botanical plant identification marker"
              className="ep-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Section: 3 Botanical Highlight Cards
          ==================================================================== */}
      <section className="ep-cards-section" aria-label="Botanical Garden Highlights">
        <div className="ep-cards-grid">
          {BOTANICAL_CARDS.map((card) => (
            <div key={card.title} className="ep-card">
              <div className="ep-card-media">
                <img src={card.image} alt={card.alt} className="ep-card-img" loading="lazy" />
              </div>
              <div className="ep-card-body">
                <div className="ep-card-header">
                  <div className="ep-card-icon-wrap" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3 className="ep-card-title">{card.title}</h3>
                </div>
                <p className="ep-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          4. Section: Vintage & Antique Collection
          ==================================================================== */}
      <section className="ep-section ep-vintage" aria-label="Vintage and Antique Collection">
        <div className="ep-img-col">
          <div className="ep-img-frame">
            <img
              src={experiencesVintageAntiques}
              alt="Colonial antique collection with brass gramophone and traditional carved wooden chest"
              className="ep-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="ep-text-col">
          <BotanicalSprigWatermark className="ep-leaf-watermark-right" />
          <span className="ep-eyebrow">HERITAGE COLLECTION</span>
          <h2 className="ep-heading">Vintage &amp; Antique Collection</h2>
          <FlourishDivider />

          <p className="ep-para">
            A thoughtfully preserved collection of household items, tools and artifacts from the
            20th century, showcasing the lifestyle, craftsmanship and everyday culture of the region.
          </p>
        </div>
      </section>

      {/* ====================================================================
          5. Section: Heritage in Every Detail
          ==================================================================== */}
      <section className="ep-section ep-architecture" aria-label="Heritage in Every Detail">
        <div className="ep-text-col">
          <BotanicalSprigWatermark className="ep-leaf-watermark-left" flipped />
          <AssameseWheelWatermark className="ep-wheel-watermark" />

          <span className="ep-eyebrow">ARCHITECTURE &amp; CRAFTSMANSHIP</span>
          <h2 className="ep-heading">Heritage in Every Detail</h2>
          <FlourishDivider />

          <p className="ep-para">
            From traditional Assamese architecture to bamboo craftsmanship and natural materials,
            every element at The Heritage House reflects a deep respect for the region&apos;s
            heritage and way of life.
          </p>
        </div>

        <div className="ep-img-col">
          <div className="ep-img-frame">
            <img
              src={experiencesHeritageArchitecture}
              alt="Illuminated facade of The Heritage House with traditional Assamese sunburst wheel and lanterns"
              className="ep-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. Global Heritage Footer
          ==================================================================== */}
      <Footer />
    </div>
  );
};
