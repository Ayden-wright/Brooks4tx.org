import React from 'react';

const UnifiedTicket = () => {
  return (
    <section id="unified-ticket" className="section section-alt" role="region" aria-label="Unified Ticket">
      <div className="section-header reveal">
        <div className="section-tag">Unified Ticket</div>
        <h2 className="section-h2">Together They Will Fight for Texas</h2>
      </div>

      <div className="bio-grid">
        {/* Photo panel */}
        <div className="bio-photo-wrap reveal from-left">
          <div className="bio-photo-box" style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #ffe8d5 0%, #ffc28d 100%)' }}>
            <img
              src="/images/kaitlan-ross.webp"
              alt="Kaitlan Ross — RPT Vice Chair Candidate"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
          </div>
          <div className="bio-accent" aria-hidden="true" />
        </div>

        {/* Bio content */}
        <div className="bio-content reveal from-right">
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: '4px',
              fontSize: '0.8rem',
              color: 'var(--red)',
              textTransform: 'uppercase',
            }}>
              RPT Vice Chair Candidate
            </span>
          </div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 900,
            color: 'var(--dark)',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}>
            Kaitlan Ross
          </h3>

          <p>
            Kaitlan Ross is a former Firefighter, EMT, and EHS professional with 15+ years of leadership in
            high-hazard industries. A dedicated Texas mother and fierce advocate for parental rights, she joins
            Dr. Brooks McKenzie to confront judicial misconduct, defend the nuclear family, and restore
            accountability across Texas.
          </p>

          <div className="bio-credentials">
            <div className="cred-item"><strong>Former Firefighter &amp; EMT</strong></div>
            <div className="cred-item"><strong>EHS Professional — 15+ Years in High-Hazard Industries</strong></div>
            <div className="cred-item"><strong>Texas Mother &amp; Parental Rights Advocate</strong></div>
            <div className="cred-item"><strong>RPT Vice Chair Candidate</strong></div>
          </div>

          <blockquote style={{
            borderLeft: '4px solid var(--red)',
            paddingLeft: '1.25rem',
            marginTop: '1.75rem',
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: 'var(--mid-strong)',
            lineHeight: 1.6,
          }}>
            Together they will fight to Turn back to God, Restore the Family, and Restore Texas.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default UnifiedTicket;
