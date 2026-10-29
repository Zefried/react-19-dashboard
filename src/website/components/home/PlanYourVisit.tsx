import React from 'react';
import { MapPin, Leaf, Landmark, Users } from 'lucide-react';
import { HeritageButton } from '../ui/HeritageButton';
import planVisitHouse from '../../assets/plan-visit-house.png';
import './Styles/PlanYourVisit.css';

export const PlanYourVisit: React.FC = () => {
  return (
    <section className="pyv1" aria-label="Plan Your Visit to The Heritage House">
      {/* 1. Main Split Hero Banner */}
      <div className="pyv2">
        {/* Left Column: Narrative Content & CTA */}
        <div className="pyv3">
          <div className="pyv4">
            <svg
              className="pyv5"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8 7 9.5-.5-1.5-.5-3.5 0-5.5 1-4 4.5-6.5 7.5-6.5 1 0 2 .5 2.5 1 .5-4.5-2.5-8.5-7-8.5z" />
            </svg>
            <span>PLAN YOUR VISIT</span>
          </div>

          <h2 className="pyv6">
            Come Experience The Heritage House
          </h2>

          <div className="pyv7" aria-hidden="true">
            <span className="pyv7-line" />
            <span className="pyv7-diamond" />
            <span className="pyv7-line reverse" />
          </div>

          <p className="pyv8">
            Whether you wish to unwind amidst nature, explore Assamese culture, or simply experience
            the charm of a heritage home, we would be delighted to welcome you.
          </p>

          <div className="pyv9">
            <HeritageButton variant="terracotta" to="/visit">
              Enquire Now
            </HeritageButton>

            <p className="pyv10">
              Get in touch for stays, experiences or any other enquiries. We&apos;ll be happy to assist you.
            </p>
          </div>
        </div>

        {/* Right Column: Warm-lit Heritage Bungalow Image */}
        <div className="pyv11">
          <img
            src={planVisitHouse}
            alt="The Heritage House evening ambiance with warm glowing lights and lush garden"
            className="pyv12"
            loading="lazy"
          />
          <div className="pyv13" aria-hidden="true" />
        </div>
      </div>

      {/* 2. Highlights Ribbon Bar (4 Badges) */}
      <div className="pyv14">
        <div className="pyv14-inner">
          {/* Badge 1: Location */}
          <div className="pyv16">
            <span className="pyv17" aria-hidden="true">
              <MapPin size={18} strokeWidth={2} />
            </span>
            <span className="pyv18">DIBRUGARH, ASSAM</span>
          </div>

          {/* Badge 2: Nature */}
          <div className="pyv16">
            <span className="pyv17" aria-hidden="true">
              <Leaf size={18} strokeWidth={2} />
            </span>
            <span className="pyv18">NATURE &amp; TRANQUILITY</span>
          </div>

          {/* Badge 3: Heritage */}
          <div className="pyv16">
            <span className="pyv17" aria-hidden="true">
              <Landmark size={18} strokeWidth={2} />
            </span>
            <span className="pyv18">HERITAGE EXPERIENCE</span>
          </div>

          {/* Badge 4: Hospitality */}
          <div className="pyv16">
            <span className="pyv17" aria-hidden="true">
              <Users size={18} strokeWidth={2} />
            </span>
            <span className="pyv18">WARM HOSPITALITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
