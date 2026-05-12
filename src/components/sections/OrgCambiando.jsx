import React from 'react';
import CambiandoLogo from '../ui/CambiandoLogo';
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
              <CambiandoLogo className="org-brand-vector org-cambiando-logo" />
            </div>
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
