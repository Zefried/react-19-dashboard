import React, { useState } from 'react';
import {
  Home,
  Leaf,
  Mountain,
  Disc,
  Sparkles,
  Waves,
  BedDouble,
  Wind,
} from 'lucide-react';
import { TornEdgeDivider } from '../../components/hero/TornEdgeDivider';
import { HeritageButton } from '../../components/ui/HeritageButton';
import { Footer } from '../../components/footer/Footer';
import {
  CottageEnquiryModal,
  type CottageModalItem,
} from '../../components/cottages/CottageEnquiryModal';
import heritageHouseHero from '../../assets/heritage-house-hero.png';
import heritageHouseTradition from '../../assets/heritage-house-tradition.png';
import cottageDuskAir from '../../assets/cottage-dusk-air.png';
import cottageDuskWheels from '../../assets/cottage-dusk-wheels.png';
import cottageDuskWater from '../../assets/cottage-dusk-water.png';
import cottageDuskCave from '../../assets/cottage-dusk-cave.png';
import modalCottageAir from '../../assets/modal-cottage-air.png';
import heritageBambooCottages from '../../assets/heritage-bamboo-cottages.png';
import './Styles/HeritageHousePage.css';

/**
 * Assamese Infinity Loop / Knot Flourish Divider
 */
const FlourishDivider: React.FC<{ center?: boolean }> = ({ center = false }) => (
  <div className={`hhp-flourish ${center ? 'center' : ''}`} aria-hidden="true">
    <span className="hhp-flourish-line" />
    <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="hhp-flourish-icon">
      <path
        d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
        stroke="#8C3A27"
        strokeWidth="1.4"
      />
    </svg>
    <span className="hhp-flourish-line reverse" />
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

const COTTAGES_DATA: CottageModalItem[] = [
  {
    id: 'air',
    name: 'House on Air',
    description:
      'An elevated cottage inspired by the traditional tribal Chang Ghor, showcasing distinctive bamboo craftsmanship and traditional bamboo matting.',
    image: cottageDuskAir,
    showcaseImage: modalCottageAir,
    alt: 'House on Air elevated stilt bamboo cottage with warm evening lights',
    tags: [
      { icon: <Home size={15} />, label: 'Elevated Stay' },
      { icon: <Leaf size={15} />, label: 'Bamboo Craft' },
      { icon: <Mountain size={15} />, label: 'Unique Experience' },
    ],
  },
  {
    id: 'wheels',
    name: 'House on Wheels',
    description:
      'A cottage mounted on four large iron-spoked wheels, with split bamboo walls and an iron structural framework.',
    image: cottageDuskWheels,
    alt: 'House on Wheels wooden cottage with four large iron spoked wheels and warm lanterns',
    tags: [
      { icon: <Disc size={15} />, label: 'On Iron Wheels' },
      { icon: <Leaf size={15} />, label: 'Bamboo Walls' },
      { icon: <Sparkles size={15} />, label: 'Heritage Design' },
    ],
  },
  {
    id: 'water',
    name: 'House on Water',
    description:
      'An open house set buoyantly on water, offering the charm of a traditional-style boathouse with modern comforts.',
    image: cottageDuskWater,
    alt: 'House on Water floating cottage on serene lake with glowing warm reflections',
    tags: [
      { icon: <Waves size={15} />, label: 'On Water' },
      { icon: <Home size={15} />, label: 'Traditional Style' },
      { icon: <BedDouble size={15} />, label: 'Modern Comforts' },
    ],
  },
  {
    id: 'cave',
    name: 'Underground Stone Cave House',
    description:
      'An executive cottage with an underground architectural design and stone-boulder walls, offering a cool and tranquil retreat.',
    image: cottageDuskCave,
    alt: 'Underground Stone Cave House built into earth with round stone boulder walls and warm arched entrance',
    tags: [
      { icon: <Mountain size={15} />, label: 'Stone-Boulder Walls' },
      { icon: <Wind size={15} />, label: 'Cool & Tranquil' },
      { icon: <BedDouble size={15} />, label: 'Executive Cottage' },
    ],
  },
];

export const HeritageHousePage: React.FC = () => {
  const [selectedCottage, setSelectedCottage] = useState<CottageModalItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (cottage: CottageModalItem) => {
    setSelectedCottage(cottage);
    setIsModalOpen(true);
  };

  return (
    <div className="hhp1">
      {/* ====================================================================
          1. Hero Section ("A Living Heritage of Assam")
          ==================================================================== */}
      <section className="hhp-hero" aria-label="The Heritage House Hero Banner">
        <div className="hhp-hero-media">
          <img
            src={heritageHouseHero}
            alt="The Heritage House traditional Assam-type colonial bungalow illuminated at dusk"
            className="hhp-hero-img"
          />
          <div className="hhp-hero-overlay" aria-hidden="true" />

          {/* Hero Typography Overlay */}
          <div className="hhp-hero-content">
            <span className="hhp-hero-eyebrow">THE HERITAGE HOUSE</span>
            <h1 className="hhp-hero-title">A Living Heritage of Assam</h1>

            <div className="hhp-hero-flourish" aria-hidden="true">
              <span className="hhp-hero-line" />
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="hhp-hero-icon">
                <path
                  d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
                  stroke="#E2D2BC"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="hhp-hero-line reverse" />
            </div>

            <p className="hhp-hero-subtitle">
              A traditional Assam-type home with unique cottages and a lasting legacy, where
              heritage, nature and warm hospitality come together.
            </p>

            {/* Optional Hero CTA */}
            <div className="mt-5">
              <HeritageButton
                variant="terracotta"
                onClick={() => handleOpenModal(COTTAGES_DATA[0])}
              >
                Explore Our Heritage Stay
              </HeritageButton>
            </div>
          </div>
        </div>

        {/* Organic Torn Edge Divider */}
        <TornEdgeDivider fillColor="#FAF5ED" />
      </section>

      {/* ====================================================================
          2. Section: Tradition, Architecture and Timeless Charm
          ==================================================================== */}
      <section className="hhp-tradition" aria-label="Tradition, Architecture and Timeless Charm">
        <BotanicalLeafWatermark className="hhp-leaf-left" flipped />

        <div className="hhp-tradition-content">
          <span className="hhp-eyebrow">THE HERITAGE HOUSE</span>
          <h2 className="hhp-heading">Tradition, Architecture and Timeless Charm</h2>
          <FlourishDivider />
          <p className="hhp-para">
            The Heritage House is a traditional Assam-type home that preserves the architectural
            character and cultural heritage of the region. Its unique cottages showcase traditional
            craftsmanship and offer guests an experience rooted in the heritage of Assam.
          </p>
        </div>

        <div className="hhp-tradition-img-col">
          <div className="hhp-tradition-frame">
            <img
              src={heritageHouseTradition}
              alt="The Heritage House illuminated with dusk sky, white lattice woodwork and traditional Assamese gable roof"
              className="hhp-tradition-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Section: Unique Heritage Cottages (2x2 Grid)
          ==================================================================== */}
      <section className="hhp-cottages" aria-label="Unique Heritage Cottages">
        <div className="hhp-cottages-header">
          <span className="hhp-eyebrow">OUR ACCOMMODATIONS</span>
          <h2 className="hhp-heading">Unique Heritage Cottages</h2>
          <FlourishDivider center />
        </div>

        <div className="hhp-cottages-grid">
          {COTTAGES_DATA.map((cottage) => (
            <article key={cottage.id} className="hhp-card" aria-label={cottage.name}>
              <div className="hhp-card-media">
                <img
                  src={cottage.image}
                  alt={cottage.alt}
                  className="hhp-card-img"
                  loading="lazy"
                />
              </div>

              <div className="hhp-card-body">
                <h3 className="hhp-card-title">{cottage.name}</h3>
                <p className="hhp-card-desc">{cottage.description}</p>

                <div className="hhp-card-tags">
                  {cottage.tags.map((tag) => (
                    <span key={tag.label} className="hhp-tag-item">
                      <span className="hhp-tag-icon" aria-hidden="true">
                        {tag.icon}
                      </span>
                      <span>{tag.label}</span>
                    </span>
                  ))}
                </div>

                <div className="hhp-card-action">
                  <HeritageButton
                    variant="terracotta"
                    onClick={() => handleOpenModal(cottage)}
                  >
                    Explore This Stay
                  </HeritageButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ====================================================================
          4. Section: Cottages of Bamboo — Crafted by Tradition
          ==================================================================== */}
      <section className="hhp-bamboo" aria-label="Cottages of Bamboo — Crafted by Tradition">
        <div className="hhp-bamboo-inner">
          {/* Left: Row of Bamboo Cottages */}
          <div className="hhp-bamboo-img-col">
            <img
              src={heritageBambooCottages}
              alt="Row of five attached double-bedded bamboo cottages with warm porch lanterns and landscaped stone walkway"
              className="hhp-bamboo-img"
              loading="lazy"
            />
            <div className="hhp-bamboo-overlay" aria-hidden="true" />
          </div>

          {/* Right: Narrative Details */}
          <div className="hhp-bamboo-content">
            <BotanicalLeafWatermark className="hhp-leaf-right" />
            <span className="hhp-eyebrow">COTTAGES OF BAMBOO</span>
            <h2 className="hhp-heading">Crafted by Tradition</h2>
            <FlourishDivider />
            <p className="hhp-para">
              Five attached, double-bedded, single-room cottages showcasing traditional bamboo
              craftsmanship and the creativity of Assam&apos;s artisans.
            </p>

            <div className="mt-6">
              <HeritageButton
                variant="terracotta"
                onClick={() => handleOpenModal(COTTAGES_DATA[0])}
              >
                Explore These Cottages
              </HeritageButton>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. Global Heritage Footer
          ==================================================================== */}
      <Footer />

      {/* ====================================================================
          6. Cottage Booking / Enquiry Modal
          ==================================================================== */}
      <CottageEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cottage={selectedCottage}
      />
    </div>
  );
};
