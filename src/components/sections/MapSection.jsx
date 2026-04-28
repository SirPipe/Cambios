import React, { useState } from 'react';
import Button from '../ui/Button';
import './MapSection.css';

const MapSection = () => {
  const [mapActive, setMapActive] = useState(false);

  return (
    <>
      {mapActive && (
        <div className="map-fullscreen-overlay" onClick={() => setMapActive(false)}>
          <div className="map-fullscreen-container" onClick={(e) => e.stopPropagation()}>
            <button className="map-close-btn" onClick={() => setMapActive(false)}>✕</button>
            <iframe 
              title="Mapa Central"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              className="leaflet-map"
              src="https://maps.google.com/maps?q=Campamento%20Tortuguero%20Boca%20de%20Tomates&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      )}

      <section className="map-section" id="mapa">
      <div className="container map-header">
        <h2 className="map-title">
          <span className="text-green">Explora</span> el cambio.<br/>
          <span className="text-blue-light">Aliados por la Costa</span>
        </h2>
      </div>

      <div className="map-container-wrapper container">
        <div className={`map-card ${mapActive ? 'active' : ''}`}>
          {!mapActive && (
            <div className="map-overlay-cta glass-panel">
              <Button variant="salmon" onClick={() => setMapActive(true)}>
                Abrir Mapa
              </Button>
            </div>
          )}
          
          <iframe 
            title="Mapa Central"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0, pointerEvents: mapActive ? 'auto' : 'none' }} 
            className="leaflet-map"
            src="https://maps.google.com/maps?q=Campamento%20Tortuguero%20Boca%20de%20Tomates&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
      
      <div className="logos-bar">
        <div className="container">
          <div className="logos-grid">
            <div className="logo-item">
              <img 
                src="/logo-cambiando-vertical.png" 
                alt="Cambiando la Costa" 
                className="logo-img"
              />
            </div>
            <div className="logo-item">
              <img 
                src="/logo-nakawe-white.png" 
                alt="Nakawe A.C." 
                className="logo-img"
              />
            </div>
            <div className="logos-text">
              <p>Conoce los negocios en <strong>Puerto Vallarta</strong> que apuestan por la <strong>sostenibilidad y la gestión de residuos inorgánicos</strong>.</p>
              <p>Cada aliado es un paso más hacia un mejor destino y hogar para todos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MapSection;
