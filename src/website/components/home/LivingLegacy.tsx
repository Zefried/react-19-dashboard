import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import legacyHouseBanner from '../../assets/legacy-house-banner.png';
import cardMuseum from '../../assets/legacy-card-museum.png';
import cardCottage from '../../assets/legacy-card-cottage.png';
import cardGarden from '../../assets/legacy-card-garden.png';
import { HeritageButton } from '../ui/HeritageButton';
import './Styles/LivingLegacy.css';

export const LivingLegacy: React.FC = () => {
  const cards = [
    {
      id: 'museum',
      image: cardMuseum,
      alt: 'Vintage Gramophone and antique wooden furnishings at The Heritage House museum',
      icon: (
        <svg className="ll20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 26C6 26 10 17 26 6C26 6 26 22 15 25C11 26 6 26 6 26Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M6 26C11 21 16 16 23 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 20C14 17 17 16 17 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
      title: 'Museum & Antique Collection',
      description:
        'A fascinating collection of vintage household items, traditional furniture and rare artefacts preserving the lifestyle of a bygone era.',
      linkText: 'Explore Collection',
      linkTo: '/the-heritage-house#museum',
    },
    {
      id: 'cottages',
      image: cardCottage,
      alt: 'Handcrafted traditional bamboo and stone cottages at Far East Heritage',
      icon: (
        <svg className="ll20" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 3L4 14H32L18 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M18 3V14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <rect x="7" y="14" width="22" height="15" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <path d="M15 29V21C15 19.3431 16.3431 18 18 18C19.6569 18 21 19.3431 21 21V29" stroke="currentColor" strokeWidth="1.4" />
          <line x1="3" y1="29" x2="33" y2="29" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: 'Unique Heritage Cottages',
      description:
        'Stay in beautifully crafted bamboo and stone cottages — House on Air, House on Water, House on Wheels and Stone Cave House.',
      linkText: 'View Cottages',
      linkTo: '/the-heritage-house#cottages',
    },
    {
      id: 'garden',
      image: cardGarden,
      alt: 'Medicinal and edible herb garden stone pathway with botanical signs',
      icon: (
        <svg className="ll20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 5C14 2 18 2 16 5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M16 11C21 8 24 13 16 15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M16 15C11 12 8 17 16 19" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M16 20C22 17 25 23 16 25" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Medicinal & Edible Herb Garden',
      description:
        'Explore our heritage garden with more than 275 varieties of medicinal plants, rare species and edible herbs from across the Northeast.',
      linkText: 'Discover the Garden',
      linkTo: '/garden',
    },
  ];

  return (
    <section className="ll1" id="living-legacy">
      <div className="ll2">
        {/* Top Split Banner: Story Card + Traditional House Photograph */}
        <div className="ll3">
          {/* Left Parchment Story Card */}
          <div className="ll4">
            <span className="ll5">THE HERITAGE HOUSE</span>
            <h2 className="ll6">
              A Living Legacy<br />
              in Every Detail
            </h2>

            {/* Vintage Flourish Divider */}
            <div className="ll7" aria-hidden="true">
              <span className="ll7-line" />
              <svg className="ll7-icon" viewBox="0 0 32 16" fill="currentColor">
                <path d="M16 8C13 4 8 2 4 6C0 10 4 14 8 12C11 10.5 13 8 16 8ZM16 8C19 4 24 2 28 6C32 10 28 14 24 12C21 10.5 19 8 16 8Z" opacity="0.8" />
                <circle cx="16" cy="8" r="2" />
              </svg>
              <span className="ll7-line" />
            </div>

            <p className="ll8">
              Built in the late 1940s and early 1950s, this traditional Assam-type
              house is more than 70 years old. Carefully preserved and thoughtfully
              refurbished, it blends original architecture, antique furniture and
              fresh bamboo craftsmanship — offering a rare glimpse into the
              cultural heritage of Upper Assam.
            </p>

            <div className="ll9">
              <HeritageButton to="/the-heritage-house" variant="terracotta">
                Explore The Heritage House
              </HeritageButton>
            </div>
          </div>

          {/* Right House Visual Container (Heritage House photo with badge) */}
          <div className="ll10">
            <img
              src={legacyHouseBanner}
              alt="The Heritage House traditional Assam-type gabled architecture at dusk with tropical trees and Over 70 Years of Heritage badge"
              className="ll11"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom 3 Feature Cards Showcase */}
        <div className="ll15">
          {cards.map((card) => (
            <div key={card.id} className="ll16">
              <div className="ll17">
                <img src={card.image} alt={card.alt} className="ll18" loading="lazy" />
              </div>
              <div className="ll19">
                {card.icon}
                <div className="ll21">
                  <h3 className="ll22">{card.title}</h3>
                </div>
              </div>
              <p className="ll23">{card.description}</p>
              <Link to={card.linkTo} className="ll24">
                <span>{card.linkText}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
