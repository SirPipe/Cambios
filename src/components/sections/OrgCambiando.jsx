import React from 'react';
import './OrgSections.css';

const OrgCambiando = () => {
  return (
    <section className="org-section org-section-cambiando bg-white">
      <div className="container org-section-heading-row">
        <h2 className="org-title org-cambiando-heading text-primary">Cambiando la Costa</h2>
      </div>
      <div className="container org-grid">
        <div className="org-content">
          <div className="org-brand">
            <div className="org-logo-icon">
              <svg viewBox="0 0 868.7 760.7" xmlns="http://www.w3.org/2000/svg" className="org-brand-vector" width="120" height="120">
                <path fill="var(--color-primary-dark)" d="M523.83,208.65c-22.98,23.04-68.08,24.73-75.33-12-5.65-36.01,33.05-72.34,68.62-64.19,35.92,9.71,31.16,54.56,7.14,75.78l-.43.41Z"/>
                <path fill="var(--color-primary-dark)" d="M690.29,345.02c-3.08-30.48-10.89-109.01-40.3-113.46-18.79-.56-31.48,20.33-44.45,31.61-51.85,48.37-103.01,99.49-163.61,137.04-41.39,25.58-91.93,27.5-123.95-13.27-42.85-61.47-5.88-142.35,29.16-199.17,62.27-98.93,4.14-59.45-53.48-27.24-87.75,49.01-136.27,146.11-110.81,245.19,11.75,44.12,55.59,170.64,93.25,198.39,7.72,5.64,16.94,9.14,26.2,11.42,96.81,24.99,205.84,27.35,304.12,4.71,33.75-5.17,52.54-32.59,62.08-63.28,22.79-67.78,27.71-140.09,21.85-211.25l-.06-.67ZM395.3,560.4c-101.86-12.9-153.53-113.86-165.19-175.67-.9-3.03-.61-8.64,3.25-8.53,4.46.51,6.74,5.48,9.49,8.66,8.51,11.02,16.61,20.8,25.71,31.38,26.18,29.83,57.75,62.38,94.9,77.14,77.21,30.68,155.64-38.26,203.47-91.24.87-.97,4.6-4.53,9-8.74,3.82-3.66,9.9.62,7.74,5.45-1.16,2.6-2.17,4.76-2.85,6.01-11.63,21.28-24.35,40.96-40.34,58.99-12.58,14.19-37.57,34.33-55.77,49.84-1.72,1.46-3.52,3.06-4.11,5.24-2.16,8.04,10.74,4.65,14.2,3.52,22.34-7.29,43.44-17.84,63.8-29.47,10.47-5.98,20.78-12.26,31.06-18.56,3.49-2.13,17.74-12.01,16.48-1.09-.97,8.43-11.55,20.02-17.52,25.4-19.61,17.66-42.87,31.69-66.77,43.23-25.31,12.25-53.02,19.74-81.12,21.29-14.86.82-29.82-.03-44.47-2.7l-.97-.15Z"/>
                <path fill="var(--color-primary-dark)" d="M396.23,190.54c-37.33,25.56-60.53,71.81-57.23,117.1,1.77,22.66,9.1,50.72,32.09,59.71,42.24,19.09,169.5-68.2,190.63-105.7,4.85-8.88,4.21-20.86-5.6-25.18-25.34-8.27-64.89,18.22-90.64,24.21-18.95,6.06-42.84,4.15-45.24-19.58-1.61-12.22,3.19-23.54,3.53-35.69.85-16.7-13.2-23.67-27.09-15.12l-.45.25Z"/>
              </svg>
            </div>
            <h3 className="org-subtitle text-primary">CAMBIANDO<br/>LA COSTA</h3>
          </div>
          <div className="org-text text-dark">
            <p>
              Movimiento enfocado en <strong>visibilizar, y transformar</strong> la relación que tenemos con nuestro consumo en el entorno costero.
            </p>
            <p>
              A través de herramientas digitales y acción colectiva, <strong>buscamos generar conciencia, conectar esfuerzos y activar cambios reales en favor del medio ambiente</strong>.
            </p>
          </div>
        </div>
        <div className="org-image-wrapper">
          <img src="/qs-booth-real.jpg" alt="Stand Educativo Cambiando La Costa" className="org-image" />
        </div>
      </div>
    </section>
  );
};

export default OrgCambiando;
