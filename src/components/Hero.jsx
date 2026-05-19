import React from 'react';

const Hero = () => {
  return (
    <section className="hero" role="region" aria-label="Campaign introduction">
      <div className="hero-bg-img" aria-hidden="true">
        <img
          src="/images/brooks-headshot.webp"
          alt=""
          width="1620"
          height="892"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-text reveal">
          <div className="hero-eyebrow">
            Republican Party of Texas Chair Candidate
          </div>
          <h1>
            <span className="first-name">DR. BROOKS</span>
            <span className="last-name">McKENZIE</span>
          </h1>
          <div className="hero-title-sub">God-fearing &middot; Texas-born &middot; Uncompromising</div>
          <p className="hero-desc">
            End corruption. Restore trust. Dr. McKenzie is leading a direct, faith-first campaign to
            confront judicial failure, defend Texas families, and return the Republican Party of Texas
            to the grassroots delegates who built it.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href="#platform">The Platform</a>
            <a className="btn btn-outline btn-lg" href="#about">Meet Dr. McKenzie</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
