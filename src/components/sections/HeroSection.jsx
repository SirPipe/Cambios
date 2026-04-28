import React from 'react';
import Button from '../ui/Button';
import { HeroWaves } from './WavesDecoration';
import { Search, ArrowDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToMap = () => {
    document.getElementById('mapa').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-background" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <h1 className="hero-title">Mapa Verde</h1>
        <p className="hero-subtitle">
          Conoce los negocios que ya están generando un <strong>cambio en la costa</strong>.
        </p>
        
        <div className="hero-cta">
          <Button variant="primary" icon={<Search size={20} />} onClick={scrollToMap}>
            Explorar Mapa Verde
          </Button>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToMap}>
        <ArrowDown size={24} color="#0b3b4f" />
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <HeroWaves />
      </div>
    </section>
  );
};

export default HeroSection;
