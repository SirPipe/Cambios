import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import MapSection from '../components/sections/MapSection';
import ProblemStatement from '../components/sections/ProblemStatement';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MapSection />
        <ProblemStatement />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
