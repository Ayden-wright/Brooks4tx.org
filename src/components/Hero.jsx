import React from 'react';

const Hero = () => {
  return (
    <section className="hero" role="region" aria-label="Campaign introduction">
      <div className="hero-text">
        <div className="hero-eyebrow">Republican Party of Texas Chair Candidate</div>
        <h1>DR. BROOKS<br /><span>McKENZIE</span></h1>
        <div className="hero-title-sub">God-fearing · Texas-born · Uncompromising</div>
        <p className="hero-desc">
          End corruption. Restore trust. Dr. McKenzie is leading a direct, faith-first campaign to
          confront judicial failure, defend Texas families, and return the Republican Party of Texas
          to the grassroots delegates who built it.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#platform" style={{ borderRadius: '3px' }}>
            Our Platform
          </a>
          <a className="btn-secondary" href="#about">Meet Dr. McKenzie</a>
        </div>
      </div>

      <div className="hero-image-col">
        <div className="hero-image-stack">
          <div className="hero-photo-frame">
            <img
              alt="Dr. Brooks McKenzie — Republican Party of Texas Chair Candidate"
              src="/images/brooks-headshot.webp"
              width="1620"
              height="892"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '48% 16%',
                borderRadius: '6px',
                display: 'block',
              }}
            />
          </div>
          <div className="hero-credentials">
            <p>PhD · TCU · Tarrant County</p>
            <p>Precinct 2468 Chair, Tarrant Co. GOP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;