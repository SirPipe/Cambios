import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { AtSign, ExternalLink, Mail, MapPin, Maximize2, Users, X } from 'lucide-react';
import Button from '../ui/Button';
import './MapSection.css';

const CAMPAMENTO = {
  name: 'NAKAWE A.C.',
  subtitle: 'Campamento Tortuguero',
  position: [20.668583, -105.271417],
  mapCenter: [20.674, -105.272],
  address: 'Calle Tortuga Verde #128, Col. Boca de Tomates, 48330',
  email: 'cambiandolacosta@gmail.com',
  instagram: '@tortuguerobocadetomates',
  facebook: 'Campamento Tortuguero Boca de Tomates Saving Sea Turtles in Puerto Vallarta',
  summary: 'Asociacion civil comprometida con la conservacion ambiental y el desarrollo sostenible.',
  description:
    'Impulsa proyectos, alianzas y estrategias que promueven el cuidado del ecosistema y la participacion activa de la comunidad.',
  image: '/qs-clean-real.png',
  logo: '/logo-nakawe-black.png',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=20.668583,-105.271417',
};

const nakawePinIcon = L.divIcon({
  className: 'nakawe-leaflet-pin',
  html: '<span class="nakawe-pin-shape"><span class="nakawe-pin-logo-wrap"><img src="/nakawe-map-pin.svg" alt="" /></span></span>',
  iconSize: [78, 92],
  iconAnchor: [39, 88],
});

const CampamentoInfoCard = ({ expanded, onClose, onExpand }) => {
  if (expanded) {
    return (
      <div className="map-info-panel map-info-panel-expanded" role="dialog" aria-label="Informacion de Nakawe">
        <button className="map-info-close" type="button" onClick={onClose} aria-label="Cerrar informacion">
          <X size={18} aria-hidden="true" />
        </button>

        <div className="map-info-expanded-content">
          <div className="map-info-expanded-main">
            <div className="map-info-header">
              <strong>{CAMPAMENTO.name}</strong>
              <span>{CAMPAMENTO.subtitle}</span>
            </div>

            <div className="map-info-body">
              <img className="map-info-logo" src={CAMPAMENTO.logo} alt="Nakawe A.C." />

              <div className="map-info-copy">
                <p>{CAMPAMENTO.summary}</p>
                <p>{CAMPAMENTO.description}</p>
              </div>

              <div className="map-info-divider" />

              <div className="map-info-details">
                <span>
                  <MapPin size={19} aria-hidden="true" />
                  {CAMPAMENTO.address}
                </span>
                <span>
                  <Mail size={18} aria-hidden="true" />
                  {CAMPAMENTO.email}
                </span>
                <span>
                  <AtSign size={18} aria-hidden="true" />
                  {CAMPAMENTO.instagram}
                </span>
                <span>
                  <Users size={18} aria-hidden="true" />
                  {CAMPAMENTO.facebook}
                </span>
              </div>

              <a className="map-info-directions" href={CAMPAMENTO.directionsUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={16} aria-hidden="true" />
                Como llegar
              </a>
            </div>
          </div>

          <img className="map-info-photo" src={CAMPAMENTO.image} alt="Limpieza de playa en Boca de Tomates" />
        </div>
      </div>
    );
  }

  return (
    <div className="map-info-panel map-info-panel-compact">
      <button className="map-info-close" type="button" onClick={onClose} aria-label="Cerrar informacion">
        <X size={16} aria-hidden="true" />
      </button>

      <button className="map-info-compact-content" type="button" onClick={onExpand}>
        <div className="map-info-header">
          <strong>{CAMPAMENTO.name}</strong>
          <span>{CAMPAMENTO.subtitle}</span>
        </div>

        <div className="map-info-compact-body">
          <img className="map-info-logo" src={CAMPAMENTO.logo} alt="" />
          <p>{CAMPAMENTO.summary}</p>
        </div>

        <span className="map-info-more">
          <Maximize2 size={14} aria-hidden="true" />
          Ver ficha completa
        </span>
      </button>
    </div>
  );
};

const InteractiveMap = ({ isFullscreen = false }) => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoExpanded, setInfoExpanded] = useState(false);

  const showInfo = () => {
    setInfoVisible(true);
    setInfoExpanded(false);
  };

  return (
    <div className="interactive-map-shell">
      <MapContainer
        center={CAMPAMENTO.mapCenter}
        zoom={14}
        minZoom={12}
        maxZoom={18}
        scrollWheelZoom={isFullscreen}
        className="leaflet-map"
        zoomControl={isFullscreen}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={CAMPAMENTO.position}
          icon={nakawePinIcon}
          eventHandlers={{
            click: showInfo,
          }}
        />
      </MapContainer>

      {infoVisible && (
        <CampamentoInfoCard
          expanded={infoExpanded}
          onClose={() => setInfoVisible(false)}
          onExpand={() => setInfoExpanded(true)}
        />
      )}
    </div>
  );
};

const MapSection = () => {
  const [mapActive, setMapActive] = useState(false);

  return (
    <>
      {mapActive && (
        <div className="map-fullscreen-overlay" onClick={() => setMapActive(false)}>
          <div className="map-fullscreen-container" onClick={(e) => e.stopPropagation()}>
            <button className="map-close-btn" onClick={() => setMapActive(false)} aria-label="Cerrar mapa">
              <X size={22} aria-hidden="true" />
            </button>
            <InteractiveMap isFullscreen />
          </div>
        </div>
      )}

      <section className="map-section" id="mapa">
        <div className="container map-header">
          <h2 className="map-title">
            <span className="text-green">Explora</span> el cambio.<br />
            <span className="text-blue-light">Aliados por la Costa</span>
          </h2>
        </div>

        <div className="map-container-wrapper container">
          <div className={`map-card ${mapActive ? 'active' : ''}`}>
            {!mapActive && (
              <div className="map-overlay-cta glass-panel">
                <Button
                  variant="salmon"
                  onClick={() => setMapActive(true)}
                  icon={<Maximize2 size={18} aria-hidden="true" />}
                >
                  Abrir Mapa
                </Button>
              </div>
            )}

            <InteractiveMap />
          </div>
        </div>

        <div className="logos-bar">
          <div className="container">
            <div className="logos-grid">
              <div className="logo-item">
                <img src="/logo-cambiando-vertical.png" alt="Cambiando la Costa" className="logo-img" />
              </div>
              <div className="logo-item">
                <img src="/logo-nakawe-white.png" alt="Nakawe A.C." className="logo-img" />
              </div>
              <div className="logos-text">
                <p>
                  Conoce los negocios en <strong>Puerto Vallarta</strong> que apuestan por la{' '}
                  <strong>sostenibilidad y la gestion de residuos inorganicos</strong>.
                </p>
                <p>Cada aliado es un paso mas hacia un mejor destino y hogar para todos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapSection;
