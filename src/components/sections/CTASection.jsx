import React from 'react';
import Button from '../ui/Button';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section" id="contactanos">
      <div className="container cta-container">
        <h2 className="cta-title">Ayuda a Puerto Vallarta.</h2>
        <p className="cta-subtitle">¿Tienes un negocio y quieres formar parte del <strong>Mapa Verde</strong>?</p>
        
        <div className="cta-button-wrapper">
          <Button variant="white" onClick={() => window.location.href = '/quienes-somos#contactanos-form'}>
            Sumate al Cambio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
