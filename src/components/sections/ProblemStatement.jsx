import React from 'react';
import { InfoWaves } from './WavesDecoration';
import './ProblemStatement.css';

const ProblemStatement = () => {
  return (
    <section className="problem-section" id="quienes-somos">
      <div className="problem-background" style={{ backgroundImage: 'url(/bg-TurtlePrincipal.png)' }}>
        <div className="problem-overlay"></div>
      </div>
      
      <div className="container problem-content">
        <div className="glass-card info-card">
          <h2 className="info-title">
            ¿Por qué es importante<br/>esta <em>problemática?</em>
          </h2>
          
          <div className="info-text">
            <p>
              Vivimos rodeados de plástico: lo encontramos en objetos cotidianos como bolsas, botellas o cepillos de dientes. Son materiales diseñados para facilitarnos la vida, pero que muchos de estos productos se usan solo <strong>entre 5 y 20 minutos</strong> pese a que su tiempo de vida es mucho más largo.
            </p>
            <p>
              En México, cada persona consume en promedio <strong>66 kg de plástico al año</strong>. Lo preocupante es que la degradación puede tardar <strong>entre 50 y 1000 años</strong>, acumulándose en el entorno y llegando a mares y ecosistemas de la región.
            </p>
            <p>
              Más de <strong>600 especies marinas</strong> ya se ven afectadas por el plástico, y se estima que para 2050 el 99% de las aves marinas habrán ingerido este material al menos una vez.
            </p>
            <p>
              Bajo este contexto, el <strong>Mapa Verde</strong> nace para visibilizar acciones reales y conectar a quienes ya están apostando por un cambio hacia un futuro más sostenible.
            </p>
          </div>
        </div>
      </div>

      <InfoWaves />
    </section>
  );
};

export default ProblemStatement;
