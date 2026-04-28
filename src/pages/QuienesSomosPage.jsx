import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroQuienesSomos from '../components/sections/HeroQuienesSomos';
import OrgCambiando from '../components/sections/OrgCambiando';
import OrgNakawe from '../components/sections/OrgNakawe';
import Campamento from '../components/sections/Campamento';
import ContactSection from '../components/sections/ContactSection';

const QuienesSomosPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroQuienesSomos />
        <OrgCambiando />
        <OrgNakawe />
        <Campamento />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default QuienesSomosPage;
