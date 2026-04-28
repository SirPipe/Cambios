import React from 'react';
import './ContactWaves.css';

export const ContactWaves = () => (
  <div className="contact-waves-container">
    <svg className="contact-waves-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
       {/* Background primary blue to match Contact Section and avoid gaps */}
       <path fill="var(--color-primary)" d="M0,0L1440,0L1440,320L0,320Z"></path>
       
       {/* Salmon Wave - Starting at the top */}
       <path fill="var(--color-salmon)" d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,21.3C840,11,960,21,1080,32C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
       
       {/* Dark Blue overlay */}
       <path fill="#072a39" d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
       
       {/* Sand / Beige */}
       <path fill="var(--color-sand)" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,170.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
       
       {/* Green (matches footer) - flush with bottom */}
       <path fill="var(--color-green)" d="M0,224L80,208C160,192,320,160,480,154.7C640,149,800,171,960,186.7C1120,203,1280,213,1360,218.7L1440,224L1440,321L0,321Z"></path>
    </svg>
  </div>
);
