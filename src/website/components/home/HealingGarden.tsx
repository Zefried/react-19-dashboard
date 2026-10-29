import React from 'react';
import gardenFlowers from '../../assets/garden-flowers.png';
import { HeritageButton } from '../ui/HeritageButton';
import './Styles/HealingGarden.css';

export const HealingGarden: React.FC = () => {
  return (
    <section className="hg1" id="garden-traditions">
      <div className="hg2">
        <div className="hg3">
          {/* Left Column: Narrative & CTA */}
          <div className="hg4">
            <span className="hg5">NATURE &amp; HERITAGE</span>
            <h2 className="hg6">
              A Garden of<br />
              Healing Traditions
            </h2>

            <p className="hg7">
              Walk through a living collection of medicinal plants, rare species
              and edible herbs, surrounded by the tranquil greenery of Upper
              Assam.
            </p>

            <div className="hg8">
              <HeritageButton to="/garden" variant="parchment">
                Take a Garden Tour
              </HeritageButton>
            </div>
          </div>

          {/* Center Column: Blooming White Flowers Visual */}
          <div className="hg9">
            <div className="hg10-wrap">
              <img
                src={gardenFlowers}
                alt="Blooming white flowers in the medicinal and edible herb garden"
                className="hg10"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Botanical Stats & Features */}
          <div className="hg11">
            {/* Stat 1: 275+ Varieties */}
            <div className="hg12">
              <div className="hg13" aria-hidden="true">
                <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path
                    d="M6 26C6 26 10 17 26 6C26 6 26 22 15 25C11 26 6 26 6 26Z"
                    strokeLinejoin="round"
                  />
                  <path d="M6 26C11 21 16 16 23 9" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M12 20C14 17 17 16 17 16" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="hg14-block">
                <span className="hg14">275+</span>
                <span className="hg15">Varieties of Plants</span>
              </div>
            </div>

            {/* Stat 2: Rare & Endangered Species */}
            <div className="hg16">
              <div className="hg13" aria-hidden="true">
                <svg className="w-9 h-9" viewBox="0 0 36 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M18 6C18 6 12 14 12 20C12 23.3 14.7 26 18 26C21.3 26 24 23.3 24 20C24 14 18 6 18 6Z" />
                  <path d="M12 20C9 17 5 18 5 21C5 24 9 26 14 26" />
                  <path d="M24 20C27 17 31 18 31 21C31 24 27 26 22 26" />
                </svg>
              </div>
              <span className="hg17">Rare &amp; Endangered<br />Species</span>
            </div>

            {/* Subtle Divider */}
            <div className="hg18" aria-hidden="true">
              <span className="hg18-line" />
              <span>❦</span>
              <span className="hg18-line" />
            </div>

            {/* Stat 3: Medicinal & Edible Herbs */}
            <div className="hg19">
              <div className="hg13" aria-hidden="true">
                <svg className="w-9 h-9" viewBox="0 0 36 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M7 16H29C29 23 24 27 18 27C12 27 7 23 7 16Z" />
                  <path d="M10 27H26" strokeWidth="1.8" />
                  <path d="M25 8L15 18" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M13 13C11 11 10 7 13 5C16 7 15 11 13 13Z" strokeWidth="1.2" fill="currentColor" fillOpacity="0.3" />
                  <path d="M21 10C23 8 26 7 27 10C25 12 22 12 21 10Z" strokeWidth="1.2" fill="currentColor" fillOpacity="0.3" />
                </svg>
              </div>
              <span className="hg20">Medicinal &amp;<br />Edible Herbs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
