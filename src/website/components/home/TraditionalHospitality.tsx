import React from 'react';
import hospitalityBedroom from '../../assets/hospitality-bedroom.png';
import { HeritageButton } from '../ui/HeritageButton';
import './Styles/TraditionalHospitality.css';

export const TraditionalHospitality: React.FC = () => {
  const amenities = [
    {
      id: 'rooms',
      title: 'Comfortable\nRooms',
      icon: (
        <svg viewBox="0 0 36 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          <path d="M4 14V26M32 14V26M4 21H32" strokeLinecap="round" />
          <path d="M7 16H15V21H7V16Z" strokeLinejoin="round" />
          <path d="M21 16H29V21H21V16Z" strokeLinejoin="round" />
          <path d="M4 14C4 11 7 8 10 8H26C29 8 32 11 32 14" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'dining',
      title: 'Homely\nDining',
      icon: (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          {/* Fork */}
          <path d="M8 5V14C8 16 11 16 11 18V27M11 5V14M14 5V14C14 16 11 16 11 18" strokeLinecap="round" />
          {/* Spoon / Knife */}
          <path d="M22 5C20 5 19 8 19 12C19 16 22 17 22 27M22 5C24 5 25 8 25 12C25 16 22 17 22 27" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'wifi-tv',
      title: 'Free Wi-Fi\n& TV',
      icon: (
        <svg viewBox="0 0 36 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          <path d="M6 10C12 4 24 4 30 10" strokeLinecap="round" />
          <path d="M10 15C14 11 22 11 26 15" strokeLinecap="round" />
          <path d="M14 20C16 18 20 18 22 20" strokeLinecap="round" />
          <circle cx="18" cy="24" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'parking',
      title: 'Ample\nParking',
      icon: (
        <svg viewBox="0 0 36 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          <path d="M8 19L11 9H25L28 19H8Z" strokeLinejoin="round" />
          <rect x="6" y="19" width="24" height="9" rx="2" />
          <circle cx="11" cy="24" r="2" fill="currentColor" />
          <circle cx="25" cy="24" r="2" fill="currentColor" />
          <path d="M14 13H22" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'conference',
      title: 'Conference\nHall',
      icon: (
        <svg viewBox="0 0 36 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          {/* Center Leader */}
          <circle cx="18" cy="9" r="3.5" />
          <path d="M11 24C11 20 14 17 18 17C22 17 25 20 25 24" strokeLinecap="round" />
          {/* Left member */}
          <circle cx="7" cy="12" r="2.5" />
          <path d="M2 24C2 21 4.5 19 7 19C8.5 19 9.8 19.8 10.5 21" strokeLinecap="round" />
          {/* Right member */}
          <circle cx="29" cy="12" r="2.5" />
          <path d="M34 24C34 21 31.5 19 29 19C27.5 19 26.2 19.8 25.5 21" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'laundry',
      title: 'Laundry\nService',
      icon: (
        <svg viewBox="0 0 36 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          <path d="M6 14H30L27 27H9L6 14Z" strokeLinejoin="round" />
          <path d="M11 14C11 9 14 7 18 7C22 7 25 9 25 14" strokeLinecap="round" />
          <path d="M14 19H22M16 23H20" strokeLinecap="round" strokeWidth="1.3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="th1" id="stay-hospitality">
      <div className="th2">
        <div className="th3">
          {/* Left Column: Cottage Bedroom Photograph */}
          <div className="th4">
            <img
              src={hospitalityBedroom}
              alt="Traditional bamboo bedroom with comfortable bedding and warm ambiance at The Heritage House"
              className="th5"
              loading="lazy"
            />
          </div>

          {/* Right Column: Narrative & Amenities */}
          <div className="th6">
            <span className="th7">STAY &amp; EXPERIENCE</span>
            <h2 className="th8">
              Experience<br />
              Traditional Hospitality
            </h2>

            <p className="th9">
              Comfortable rooms, rustic interiors and a homely environment offer a
              unique stay experience. Enjoy authentic Assamese cuisine, fresh local
              ingredients and warm hospitality.
            </p>

            {/* 6 Amenities Grid */}
            <div className="th10">
              {amenities.map((item) => (
                <div key={item.id} className="th11">
                  <div className="th12" aria-hidden="true">
                    {item.icon}
                  </div>
                  <span className="th13">{item.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="th14">
              <HeritageButton to="/the-heritage-house#cottages" variant="terracotta">
                Explore Stay &amp; Facilities
              </HeritageButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
