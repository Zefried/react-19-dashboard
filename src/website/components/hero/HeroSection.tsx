import React from 'react';
import heroBg from '../../assets/hero-house-raw.png';
import { HeritageButton } from '../ui/HeritageButton';
import { TornEdgeDivider } from './TornEdgeDivider';
import { HighlightsBar } from './HighlightsBar';
import './Styles/HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="hs1">
      {/* Hero Visual Container */}
      <div className="hs2">
        {/* Background Dusk Heritage House Photography */}
        <div
          className="hs3"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
          role="img"
          aria-label="The Heritage House Dibrugarh traditional Assam-type architecture at dusk"
        />

        {/* Ambient Dark Gradient Overlays for High Contrast & Foliage Depth */}
        <div className="hs4" />
        <div className="hs5" />
        <div className="hs6" />

        {/* Hero Content Grid */}
        <div className="hs7">
          <div className="hs8">
            {/* Left Column: Negative space for illuminated Heritage House view */}
            <div className="hs9" />

            {/* Right Column: Hero Typography & Call-To-Action */}
            <div className="hs10">
              {/* Category / Pre-heading */}
              <div className="hs11">
                <span className="hs12">
                  AMIDST LUSH GREENERY
                </span>
              </div>

              {/* Main Heading with Golden Botanical Leaf Accent */}
              <h1 className="hs13">
                <span>A Home Where </span>
                <span className="hs14">
                  Heritage
                  {/* Subtle Botanical Gold Leaf Sprig */}
                  <svg
                    className="hs15"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 28C13 20 20 12 31 5C31 5 29 16 23 22C18 26 10 28 10 28Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 26C16 21 21 16 28 7"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 20C19 18 22 17 22 17"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 16C23 14 25 13 25 13"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="hs16">Lives On</span>
              </h1>

              {/* Description Body */}
              <p className="hs17">
                Experience a unique blend of history, nature and Assamese culture at The Heritage House — the first vintage homestay in Upper Assam.
              </p>

              {/* Primary Hero CTA Button */}
              <div className="hs18">
                <HeritageButton to="/our-story" variant="parchment">
                  Explore Our Heritage
                </HeritageButton>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Right-edge Scroll Indicator */}
        <div className="hs19">
          <span className="hs20">
            SCROLL
          </span>
          <div className="hs21" />
        </div>

        {/* Organic Torn Paper Edge Transition */}
        <div className="hs22">
          <TornEdgeDivider fillColor="#F5EDE1" />
        </div>
      </div>

      {/* 4 Heritage Highlights Bar */}
      <HighlightsBar />
    </section>
  );
};
