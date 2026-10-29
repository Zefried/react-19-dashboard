import React from 'react';
import { HeroSection } from '../../components/hero/HeroSection';
import { FamilyHeritage } from '../../components/home/FamilyHeritage';
import { LivingLegacy } from '../../components/home/LivingLegacy';
import { HealingGarden } from '../../components/home/HealingGarden';
import { TraditionalHospitality } from '../../components/home/TraditionalHospitality';
import { HeritageCottages } from '../../components/home/HeritageCottages';
import { DiscoverDibrugarh } from '../../components/home/DiscoverDibrugarh';
import { PlanYourVisit } from '../../components/home/PlanYourVisit';
import { ClosingWelcome } from '../../components/home/ClosingWelcome';
import { Footer } from '../../components/footer/Footer';
import './Styles/HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="hp1">
      {/* 1. Hero Section & Highlights Ribbon */}
      <HeroSection />

      {/* 2. Family Heritage ("A Living Heritage of Upper Assam") */}
      <FamilyHeritage />

      {/* 3. Living Legacy ("A Living Legacy in Every Detail" & 3 Cards) */}
      <LivingLegacy />

      {/* 4. Healing Garden ("A Garden of Healing Traditions") */}
      <HealingGarden />

      {/* 5. Traditional Hospitality ("Experience Traditional Hospitality") */}
      <TraditionalHospitality />

      {/* 6. Heritage Cottages ("Heritage Cottages with a Story") */}
      <HeritageCottages />

      {/* 7. Discover Dibrugarh ("Discover Dibrugarh") */}
      <DiscoverDibrugarh />

      {/* 8. Plan Your Visit CTA & Highlights Ribbon */}
      <PlanYourVisit />

      {/* 9. Closing Welcome ("We Look Forward to Welcoming You") */}
      <ClosingWelcome />

      {/* 10. Heritage Footer */}
      <Footer />
    </div>
  );
};
