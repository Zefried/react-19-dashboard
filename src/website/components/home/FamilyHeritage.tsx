import React from 'react';
import familyCollage from '../../assets/family-heritage-collage.png';
import { HeritageButton } from '../ui/HeritageButton';
import './Styles/FamilyHeritage.css';

export const FamilyHeritage: React.FC = () => {
  return (
    <section className="fh1" id="family-heritage">
      <div className="fh2">
        <div className="fh3">
          {/* Left Column: Narrative & Story */}
          <div className="fh4">
            <span className="fh5">MORE THAN A PLACE TO STAY</span>

            <h2 className="fh6">
              A Living<br />
              Heritage of<br />
              Upper Assam
            </h2>

            {/* Vintage Flourish Divider */}
            <div className="fh7" aria-hidden="true">
              <span className="fh8" />
              <svg className="fh9" viewBox="0 0 32 16" fill="currentColor">
                <path d="M16 8C13 4 8 2 4 6C0 10 4 14 8 12C11 10.5 13 8 16 8ZM16 8C19 4 24 2 28 6C32 10 28 14 24 12C21 10.5 19 8 16 8Z" opacity="0.8" />
                <circle cx="16" cy="8" r="2" />
              </svg>
              <span className="fh8" />
            </div>

            <p className="fh10">
              The Heritage House was once the beautiful private residence of Late
              Dr. Kanak Chandra Gogoi and Late (Mrs.) Basundhora Gogoi. Today,
              their family has lovingly transformed this historic home into a
              charming vintage homestay, with a mission to preserve its
              architectural character, memories and cultural heritage for
              generations to come.
            </p>

            <div className="fh11">
              <HeritageButton to="/our-story" variant="terracotta">
                Read Our Story
              </HeritageButton>
            </div>
          </div>

          {/* Right Column: Vintage Family Portrait & Collage */}
          <div className="fh12">
            <div className="fh13">
              <img
                src={familyCollage}
                alt="Vintage portrait of Late Dr. Kanak Chandra Gogoi and Late Mrs. Basundhora Gogoi with antique memorabilia"
                className="fh14"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
