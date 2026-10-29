import React from 'react';
import { Link } from 'react-router-dom';
import riverBg from '../../assets/dibrugarh-river-clean-2x.png';
import brahmaImg from '../../assets/dibrugarh-brahmaputra.png';
import teaImg from '../../assets/dibrugarh-tea-gardens.png';
import landmarksImg from '../../assets/dibrugarh-landmarks.png';
import placesImg from '../../assets/dibrugarh-places.png';
import { HeritageButton } from '../ui/HeritageButton';
import { TornEdgeDivider } from '../hero/TornEdgeDivider';
import './Styles/DiscoverDibrugarh.css';

export const DiscoverDibrugarh: React.FC = () => {
  const cards = [
    {
      id: 'brahmaputra',
      title: 'The Mighty Brahmaputra',
      image: brahmaImg,
      link: '/discover-dibrugarh#brahmaputra',
    },
    {
      id: 'tea',
      title: 'Tea Gardens & Culture',
      image: teaImg,
      link: '/discover-dibrugarh#tea-gardens',
    },
    {
      id: 'landmarks',
      title: 'Historical Landmarks',
      image: landmarksImg,
      link: '/discover-dibrugarh#landmarks',
    },
    {
      id: 'places',
      title: 'Places to Explore',
      image: placesImg,
      link: '/discover-dibrugarh#explore',
    },
  ];

  return (
    <section className="dd1" id="discover-dibrugarh">
      {/* Pristine 2x High-Res River Sunset Panorama */}
      <div
        className="dd2"
        style={{ backgroundImage: `url(${riverBg})` }}
        role="img"
        aria-label="Golden sunset over the mighty Brahmaputra river with boats in Dibrugarh"
      />

      {/* Adaptive Ambient Contrast Shield */}
      <div className="dd3" aria-hidden="true" />

      {/* Botanical Leaf Accent on Left Margin */}
      <svg
        className="dd-botanical-accent"
        viewBox="0 0 220 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#9E8256" strokeWidth="1.2" opacity="0.55">
          <path d="M-10 540C15 460 30 360 18 270C8 200 -8 130 25 65C38 40 55 20 75 5" strokeWidth="1.5" />
          <path d="M12 470C35 450 60 455 75 475C55 495 30 490 12 470Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M22 410C50 390 85 395 105 420C80 440 46 435 22 410Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M18 290C45 268 78 272 98 292C76 312 44 308 18 290Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M10 215C32 192 60 196 75 212C57 228 30 225 10 215Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M16 100C36 82 62 86 75 102C58 116 33 113 16 100Z" fill="#9E8256" fillOpacity="0.08" />
          <path d="M75 5C90 -10 106 -6 114 6C102 18 85 15 75 5Z" fill="#9E8256" fillOpacity="0.08" />
        </g>
      </svg>

      <div className="dd4">
        {/* Narrative & Call-To-Action */}
        <div className="dd5">
          <span className="dd6">EXPLORE THE REGION</span>
          
          <h2 className="dd7">Discover Dibrugarh</h2>

          <p className="dd8">
            A charming river beach city with a mild climate, rich tea heritage,
            and breathtaking natural beauty. Explore the culture, cuisine and
            attractions of Upper Assam — from the mighty Brahmaputra to lush tea
            gardens and more.
          </p>

          <div className="dd9">
            <HeritageButton
              to="/discover-dibrugarh"
              variant="parchment"
              className="dd-btn"
            >
              Explore Dibrugarh
            </HeritageButton>
          </div>
        </div>

        {/* 2x2 Ultra High-Resolution Featured Cards Showcase Grid */}
        <div className="dd10">
          {cards.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="dd11"
              aria-label={item.title}
            >
              <img
                src={item.image}
                alt={item.title}
                className="dd12"
                loading="lazy"
              />
              <span className="sr-only">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Torn Paper Bottom Edge Transition */}
      <div className="dd-torn-edge" aria-hidden="true">
        <TornEdgeDivider />
      </div>
    </section>
  );
};
