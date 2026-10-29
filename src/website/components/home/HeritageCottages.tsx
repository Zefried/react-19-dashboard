import React from 'react';
import cottageAir from '../../assets/cottage-house-on-air.png';
import cottageCave from '../../assets/cottage-stone-cave.png';
import cottageWheels from '../../assets/cottage-house-on-wheels.png';
import cottageWater from '../../assets/cottage-house-on-water.png';
import { HeritageButton } from '../ui/HeritageButton';
import './Styles/HeritageCottages.css';

export const HeritageCottages: React.FC = () => {
  const cottages = [
    {
      id: 'air',
      title: 'House on Air',
      subtitle: 'A breezy traditional bamboo stay',
      image: cottageAir,
    },
    {
      id: 'cave',
      title: 'Stone Cave House',
      subtitle: 'A unique earthy experience',
      image: cottageCave,
    },
    {
      id: 'wheels',
      title: 'House on Wheels',
      subtitle: 'A mobile heritage stay',
      image: cottageWheels,
    },
    {
      id: 'water',
      title: 'House on Water',
      subtitle: 'A tranquil stay amidst nature',
      image: cottageWater,
    },
  ];

  return (
    <section className="hc1" id="heritage-cottages">
      {/* Botanical Leaf Accent on Left Margin */}
      <svg
        className="hc-botanical-accent"
        viewBox="0 0 220 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#9E8256" strokeWidth="1.2" opacity="0.65">
          <path d="M-10 560C20 480 35 380 20 280C10 210 -5 140 30 70C42 45 60 25 80 5" strokeWidth="1.6" />
          <path d="M12 490C35 470 60 475 75 495C55 515 30 510 12 490Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M12 490C35 485 55 490 75 495" strokeWidth="0.8" />
          <path d="M30 488C35 480 45 478 50 480" strokeWidth="0.7" />
          <path d="M42 492C48 500 58 502 62 501" strokeWidth="0.7" />
          <path d="M25 430C55 410 90 415 110 440C85 460 50 455 25 430Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M25 430C55 425 85 432 110 440" strokeWidth="0.9" />
          <path d="M50 427C60 418 75 416 85 420" strokeWidth="0.7" />
          <path d="M68 433C78 444 92 446 100 443" strokeWidth="0.7" />
          <path d="M24 350C2 330 -15 338 -30 360C-8 375 10 370 24 350Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M24 350C5 345 -12 352 -30 360" strokeWidth="0.8" />
          <path d="M20 310C50 285 85 290 105 312C82 332 48 328 20 310Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M20 310C50 302 80 307 105 312" strokeWidth="0.9" />
          <path d="M45 304C55 295 70 293 80 297" strokeWidth="0.7" />
          <path d="M62 308C70 318 85 320 92 317" strokeWidth="0.7" />
          <path d="M10 230C35 205 65 210 82 228C62 245 32 242 10 230Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M10 230C35 222 60 225 82 228" strokeWidth="0.8" />
          <path d="M30 224C38 217 50 216 58 219" strokeWidth="0.6" />
          <path d="M48 226C55 234 66 235 72 233" strokeWidth="0.6" />
          <path d="M6 180C-15 160 -30 168 -45 188C-25 202 -8 198 6 180Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M6 180C-12 175 -28 180 -45 188" strokeWidth="0.8" />
          <path d="M18 110C40 90 68 95 82 112C64 128 36 124 18 110Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M18 110C40 104 62 108 82 112" strokeWidth="0.8" />
          <path d="M30 70C50 48 75 52 88 68C72 82 46 79 30 70Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M30 70C50 63 70 66 88 68" strokeWidth="0.8" />
          <path d="M80 5C95 -12 112 -8 120 4C108 16 90 14 80 5Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M80 5C95 1 108 3 120 4" strokeWidth="0.8" />
        </g>
      </svg>

      <div className="hc2">
        <div className="hc3">
          {/* Left Column: Narrative Content */}
          <div className="hc4">
            <span className="hc5">UNIQUE STAYS</span>
            
            <h2 className="hc6">
              Heritage Cottages<br />
              with a Story
            </h2>

            {/* Vintage Flourish Divider */}
            <div className="hc7" aria-hidden="true">
              <span className="hc7-line" />
              <svg className="hc7-icon" viewBox="0 0 32 16" fill="currentColor">
                <path
                  d="M16 8C13 4 8 2 4 6C0 10 4 14 8 12C11 10.5 13 8 16 8ZM16 8C19 4 24 2 28 6C32 10 28 14 24 12C21 10.5 19 8 16 8Z"
                  opacity="0.85"
                />
                <circle cx="16" cy="8" r="2" />
              </svg>
              <span className="hc7-line" />
            </div>

            <p className="hc8">
              Stay in beautifully crafted traditional cottages, each with a unique
              character — built with bamboo, wood, stone and other natural
              materials, inspired by the traditional architecture of Assam.
            </p>

            <div className="hc9">
              <HeritageButton
                to="/the-heritage-house#cottages"
                variant="terracotta"
                className="hc-btn"
              >
                Explore Our Cottages
              </HeritageButton>
            </div>
          </div>

          {/* Right Column: 2x2 Cottage Showcase Grid */}
          <div className="hc10">
            {cottages.map((item) => (
              <div
                key={item.id}
                className="hc11"
                tabIndex={0}
                role="article"
                aria-label={`${item.title}: ${item.subtitle}`}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.subtitle}`}
                  className="hc12"
                  loading="lazy"
                />
                <span className="sr-only">
                  <strong>{item.title}</strong>: {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
