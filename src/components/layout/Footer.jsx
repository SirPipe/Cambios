import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-green">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 868.7 760.7" xmlns="http://www.w3.org/2000/svg" width="150" height="150" style={{ flexShrink: 0 }}>
              <path fill="white" d="M523.83,208.65c-22.98,23.04-68.08,24.73-75.33-12-5.65-36.01,33.05-72.34,68.62-64.19,35.92,9.71,31.16,54.56,7.14,75.78l-.43.41Z"/>
              <path fill="white" d="M690.29,345.02c-3.08-30.48-10.89-109.01-40.3-113.46-18.79-.56-31.48,20.33-44.45,31.61-51.85,48.37-103.01,99.49-163.61,137.04-41.39,25.58-91.93,27.5-123.95-13.27-42.85-61.47-5.88-142.35,29.16-199.17,62.27-98.93,4.14-59.45-53.48-27.24-87.75,49.01-136.27,146.11-110.81,245.19,11.75,44.12,55.59,170.64,93.25,198.39,7.72,5.64,16.94,9.14,26.2,11.42,96.81,24.99,205.84,27.35,304.12,4.71,33.75-5.17,52.54-32.59,62.08-63.28,22.79-67.78,27.71-140.09,21.85-211.25l-.06-.67ZM395.3,560.4c-101.86-12.9-153.53-113.86-165.19-175.67-.9-3.03-.61-8.64,3.25-8.53,4.46.51,6.74,5.48,9.49,8.66,8.51,11.02,16.61,20.8,25.71,31.38,26.18,29.83,57.75,62.38,94.9,77.14,77.21,30.68,155.64-38.26,203.47-91.24.87-.97,4.6-4.53,9-8.74,3.82-3.66,9.9.62,7.74,5.45-1.16,2.6-2.17,4.76-2.85,6.01-11.63,21.28-24.35,40.96-40.34,58.99-12.58,14.19-37.57,34.33-55.77,49.84-1.72,1.46-3.52,3.06-4.11,5.24-2.16,8.04,10.74,4.65,14.2,3.52,22.34-7.29,43.44-17.84,63.8-29.47,10.47-5.98,20.78-12.26,31.06-18.56,3.49-2.13,17.74-12.01,16.48-1.09-.97,8.43-11.55,20.02-17.52,25.4-19.61,17.66-42.87,31.69-66.77,43.23-25.31,12.25-53.02,19.74-81.12,21.29-14.86.82-29.82-.03-44.47-2.7l-.97-.15Z"/>
              <path fill="white" d="M396.23,190.54c-37.33,25.56-60.53,71.81-57.23,117.1,1.77,22.66,9.1,50.72,32.09,59.71,42.24,19.09,169.5-68.2,190.63-105.7,4.85-8.88,4.21-20.86-5.6-25.18-25.34-8.27-64.89,18.22-90.64,24.21-18.95,6.06-42.84,4.15-45.24-19.58-1.61-12.22,3.19-23.54,3.53-35.69.85-16.7-13.2-23.67-27.09-15.12l-.45.25Z"/>
            </svg>
            <h2>CAMBIANDO<br/>LA COSTA</h2>
          </div>
          <div className="footer-about">
            <p className="about-title">Cambiando la Costa</p>
            <p className="about-desc">Proyecto ambiental dedicado al consumo masivo de empaques y embalajes, y su incidencia ambiental en los espacios turísticos de Puerto Vallarta.</p>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h3>Explora</h3>
            <ul>
              <li><a href="#negocios">Negocios</a></li>
              <li><a href="#mapa">Mapa</a></li>
              <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Aliados</h3>
            <div className="aliados-logos">
              <div className="aliado-logo">
                <img src="/logo-cambiando-vertical.png" alt="Logo Cambiando La Costa" />
              </div>
              <div className="aliado-logo">
                <img src="/logo-nakawe-white.png" alt="Logo NAKAWE A.C." />
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contacto</h3>
            <ul className="contact-list">
              <li>
                <Mail size={18} />
                <span>cambiandolacosta@gmail.com</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>@cambiandolacosta</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Puerto Vallarta, Jalisco, México</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
