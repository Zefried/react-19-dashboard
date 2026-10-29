import React from 'react';
import { TornEdgeDivider } from '../../components/hero/TornEdgeDivider';
import { Footer } from '../../components/footer/Footer';
import storyHeroImg from '../../assets/story-hero-house.png';
import storyPortrait from '../../assets/story-portrait-couple.png';
import storyDrDesk from '../../assets/story-dr-kanak-desk.png';
import storyMrsDesk from '../../assets/story-mrs-basundhora.png';
import storyHouseFacade from '../../assets/story-house-facade.png';
import './Styles/OurStoryPage.css';

/**
 * Assamese Infinity Loop / Knot Flourish Divider
 */
const FlourishDivider: React.FC = () => (
  <div className="osp-flourish" aria-hidden="true">
    <span className="osp-flourish-line" />
    <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="osp-flourish-icon">
      <path
        d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
        stroke="#8C3A27"
        strokeWidth="1.4"
      />
    </svg>
    <span className="osp-flourish-line reverse" />
  </div>
);

/**
 * Botanical Leaf Watermark Accent (Right Margin)
 */
const BotanicalLeafWatermark: React.FC = () => (
  <svg
    className="osp-leaf-watermark"
    viewBox="0 0 100 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

export const OurStoryPage: React.FC = () => {
  return (
    <div className="osp1">
      {/* ====================================================================
          1. Hero Section ("Our Story")
          ==================================================================== */}
      <section className="osp-hero" aria-label="Our Story Hero Banner">
        <div className="osp-hero-media">
          <img
            src={storyHeroImg}
            alt="The Heritage House Dibrugarh colonial facade amidst palm trees"
            className="osp-hero-img"
          />
          <div className="osp-hero-overlay" aria-hidden="true" />

          {/* Hero Typography Overlay */}
          <div className="osp-hero-content">
            <h1 className="osp-hero-title">Our Story</h1>

            <div className="osp-hero-flourish" aria-hidden="true">
              <span className="osp-hero-line" />
              <svg width="22" height="12" viewBox="0 0 24 12" fill="none" className="osp-hero-icon">
                <path
                  d="M6 6C6 4.5 4.5 3 3 3C1.5 3 0.5 4.5 0.5 6C0.5 7.5 1.5 9 3 9C4.5 9 6 7.5 6 6ZM6 6C8 6 10 3 12 3C14 3 16 6 18 6M6 6C8 6 10 9 12 9C14 9 16 6 18 6M18 6C18 4.5 19.5 3 21 3C22.5 3 23.5 4.5 23.5 6C23.5 7.5 22.5 9 21 9C19.5 9 18 7.5 18 6Z"
                  stroke="#E2D2BC"
                  strokeWidth="1.4"
                />
              </svg>
              <span className="osp-hero-line reverse" />
            </div>

            <p className="osp-hero-subtitle">
              The story of a family, a home and a lasting legacy in Assam.
            </p>
          </div>
        </div>

        {/* Organic Torn Paper Edge Divider */}
        <TornEdgeDivider fillColor="#FAF5ED" />
      </section>

      {/* ====================================================================
          2. Narrative Story Sections
          ==================================================================== */}
      <main className="osp-body">
        {/* Subtle Botanical Leaf Accent in right margin */}
        <BotanicalLeafWatermark />

        {/* ------------------------------------------------------------------
            Block 1: The Heritage House – A Family Legacy
            ------------------------------------------------------------------ */}
        <article className="osp-block" aria-label="A Family Legacy">
          <div className="osp-text-col">
            <h2 className="osp-heading">The Heritage House – A Family Legacy</h2>
            <FlourishDivider />
            <p className="osp-para">
              The Heritage House was once the private residence of Late Dr. Kanak Chandra Gogoi
              and Late Mrs. Basundhora Gogoi. Today, their family preserves this historic home as
              a vintage homestay, honouring its memories, architecture and cultural heritage.
            </p>
          </div>

          <div className="osp-img-col flex justify-center lg:justify-end">
            <div className="osp-portrait-frame">
              <img
                src={storyPortrait}
                alt="Vintage framed portrait of Late Dr. Kanak Chandra Gogoi and Late Mrs. Basundhora Gogoi"
                className="osp-portrait-img"
                loading="lazy"
              />
            </div>
          </div>
        </article>

        {/* ------------------------------------------------------------------
            Block 2: A Life of Service
            ------------------------------------------------------------------ */}
        <article className="osp-block" aria-label="A Life of Service">
          <div className="osp-img-col order-2 md:order-1">
            <div className="osp-photo-frame">
              <img
                src={storyDrDesk}
                alt="Late Dr. Kanak Chandra Gogoi at his study desk writing with medical books"
                className="osp-photo-img"
                loading="lazy"
              />
            </div>
          </div>

          <div className="osp-text-col order-1 md:order-2">
            <h2 className="osp-heading">A Life of Service</h2>
            <FlourishDivider />
            <p className="osp-para">
              Dr. Kanak Chandra Gogoi, from Khanikar Village in Dibrugarh, was a Licentiate Medical
              Practitioner trained at Dr. John Berry White Medical School. During World War II,
              he served as a military doctor in Baluchistan with the Royal Army Medical Corps of
              the Allied Forces.
            </p>
          </div>
        </article>

        {/* ------------------------------------------------------------------
            Block 3: A Literary Connection
            ------------------------------------------------------------------ */}
        <article className="osp-block" aria-label="A Literary Connection">
          <div className="osp-text-col">
            <h2 className="osp-heading">A Literary Connection</h2>
            <FlourishDivider />
            <p className="osp-para">
              Mrs. Basundhora Gogoi, from Nakari Gaon in North Lakhimpur, was a close relative
              of Padmanath Gohain Baruah, the first founder-president of the Assam Sahitya Sabha.
            </p>
          </div>

          <div className="osp-img-col">
            <div className="osp-photo-frame">
              <img
                src={storyMrsDesk}
                alt="Late Mrs. Basundhora Gogoi engrossed in literary writing and study"
                className="osp-photo-img"
                loading="lazy"
              />
            </div>
          </div>
        </article>

        {/* ------------------------------------------------------------------
            Block 4: A House Preserved Through Generations
            ------------------------------------------------------------------ */}
        <article className="osp-block" aria-label="A House Preserved Through Generations">
          <div className="osp-img-col order-2 md:order-1">
            <div className="osp-photo-frame">
              <img
                src={storyHouseFacade}
                alt="Assam-type colonial architecture of The Heritage House with peaked gabled wooden archway"
                className="osp-photo-img"
                loading="lazy"
              />
            </div>
          </div>

          <div className="osp-text-col order-1 md:order-2">
            <h2 className="osp-heading">A House Preserved Through Generations</h2>
            <FlourishDivider />
            <p className="osp-para">
              Built between the late 1940s and early 1950s, this traditional Assam-type house
              reflects the architectural character of its time. Its family has carefully preserved
              its original character while refurbishing its interiors with traditional furniture,
              antique wood and bamboo.
            </p>
          </div>
        </article>
      </main>

      {/* ====================================================================
          3. Global Heritage Footer
          ==================================================================== */}
      <Footer />
    </div>
  );
};
