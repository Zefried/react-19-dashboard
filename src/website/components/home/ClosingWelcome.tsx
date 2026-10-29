import React from 'react';
import { HeritageButton } from '../ui/HeritageButton';
import welcomeGate from '../../assets/welcome-gate.png';
import './Styles/ClosingWelcome.css';

export const ClosingWelcome: React.FC = () => {
  return (
    <section className="cw1" aria-label="A Heritage Story That Continues">
      <div className="cw1-glow" aria-hidden="true" />

      <div className="cw2">
        {/* Left Column: Illuminated Heritage Entrance Gate */}
        <div className="cw3">
          <img
            src={welcomeGate}
            alt="Warmly illuminated heritage wooden entrance archway with lantern lights and stone path"
            className="cw4"
            loading="lazy"
          />
          <div className="cw5" aria-hidden="true" />
        </div>

        {/* Right Column: Narrative Invitation & CTA */}
        <div className="cw6">
          <span className="cw7">A HERITAGE STORY THAT CONTINUES</span>

          <h2 className="cw8">
            We Look Forward to Welcoming You
          </h2>

          <div className="cw9" aria-hidden="true">
            <span className="cw9-line" />
            <span className="cw9-diamond" />
            <span className="cw9-line reverse" />
          </div>

          <p className="cw10">
            Step into a world of history, nature and Assamese traditions. Create memories,
            experience our culture, and be a part of the ongoing story of The Heritage House.
          </p>

          <div className="cw11">
            <HeritageButton variant="parchment" to="/visit">
              Plan Your Visit
            </HeritageButton>
          </div>
        </div>
      </div>
    </section>
  );
};
