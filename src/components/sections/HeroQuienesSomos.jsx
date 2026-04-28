import React from 'react';
import './HeroQuienesSomos.css';

const HeroQuienesSomos = () => {
  return (
    <section className="qs-hero-section" id="quienes-somos">
      <div className="qs-hero-background" style={{ backgroundImage: 'url(/qs-hero-real.jpg)' }}>
        <div className="qs-hero-overlay"></div>
      </div>
      
      <div className="container qs-hero-content">
        <h1 className="qs-hero-title">¿Quienes <em>somos?</em></h1>
      </div>

      <div className="qs-waves-container">
        <svg className="qs-waves-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          {/* Blue thick bottom wave */}
          <path fill="#026e99" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          {/* Green thick bottom wave */}
          <path fill="var(--color-green)" d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,240C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          {/* Salmon thin wave */}
          <path fill="var(--color-salmon)" d="M0,300L1440,220L1440,225L0,305Z"></path>
          {/* Bottom Green border to blend */}
          <path fill="var(--color-green)" d="M0,290L80,293.3C160,297,320,304,480,298.7C640,293,800,277,960,272C1120,267,1280,272,1360,274.7L1440,277L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          <path fill="white" d="M0,310L1440,310L1440,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroQuienesSomos;
