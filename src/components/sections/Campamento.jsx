import React from 'react';
import './Campamento.css';

const Campamento = () => {
  return (
    <section className="campamento-section">
      <div className="campamento-curved-top">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="var(--color-salmon)" d="M0,120L1440,120L1440,0C1440,0 1100,50 720,50C340,50 0,0 0,0Z"></path>
          <path fill="var(--color-green)" d="M0,120L1440,120L1440,30C1440,30 1100,100 720,100C340,100 0,30 0,30Z"></path>
        </svg>
      </div>
      
      <div className="campamento-content">
        <div className="container">
          <h2 className="campamento-title">¡Visita el Campamento Tortuguero!</h2>
          
          <div className="campamento-grid">
            <div className="campamento-map-wrapper">
              <iframe 
                title="Mapa Boca de Tomates"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0, borderRadius: '20px' }} 
                src="https://maps.google.com/maps?q=Playa%20Boca%20de%20Tomates%2C%20Jalisco&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                allowFullScreen>
              </iframe>
            </div>
            
            <div className="campamento-info-card">
              <h4 className="camp-info-title">Playa Boca de Tomates.</h4>
              <p className="camp-info-desc">
                Descubre la ruta para llegar al campamento desde la plaza marina.
              </p>
              
              <button 
                className="video-route-btn"
                onClick={() => window.open('https://www.youtube.com/watch?v=yKTLEKCjb2g', '_blank')}
              >
                <div className="play-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <span>Ver ruta en formato<br/>video explicativo.</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campamento;
