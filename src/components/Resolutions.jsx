import React from 'react';

const Resolutions = () => {
  return (
    <section id="resolutions" className="section" role="region" aria-label="Legislative Resolutions">
      <div className="section-header reveal">
        <div className="section-tag">Legislative Resolutions</div>
        <h2 className="section-h2">Save James Younger &amp;<br />SCOTX Censure Resolutions</h2>
        <p className="section-intro" style={{ color: 'var(--mid-strong)', fontSize: '1rem', lineHeight: '1.75', maxWidth: '640px', fontWeight: '400', marginTop: '0.8rem' }}>
          James Younger, an innocent Texas boy, is being subjected to prohibited procedures in
          California — with damage growing more irreversible every day. Dr. McKenzie has introduced
          resolutions demanding the RPT act immediately.
        </p>
      </div>

      <div className="reveal cards-grid cards-grid-2 resolutions-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="resolution-card reveal" style={{ background: 'var(--light-gray)', borderRadius: '2px', padding: '2rem', borderTop: '4px solid var(--red)' }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '3px', fontSize: '1rem', color: 'var(--red)', marginBottom: '0.8rem' }}>
            Emergency Legislative Priority
          </div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem' }}>
            Resolution to Save James Younger
          </h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--mid)', lineHeight: '1.7', fontWeight: '400', marginBottom: '1rem' }}>
            This resolution calls on the Republican Party of Texas to make saving James Younger a top
            legislative priority — commanding Republican legislators to pass legislation in the 2027
            session that declares exclusive Texas UCCJEA jurisdiction, empowers the AG to issue emergency
            relief, and imposes felony penalties on any person facilitating prohibited gender procedures
            on Texas children.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--red)', fontWeight: '600' }}>
            Carries forward the 2024 RPT Platform classification of gender modification of minors as
            child abuse.
          </p>
        </div>

        <div className="resolution-card reveal" style={{ background: 'var(--light-gray)', borderRadius: '2px', padding: '2rem', borderTop: '4px solid var(--navy)' }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '3px', fontSize: '1rem', color: 'var(--navy)', marginBottom: '0.8rem' }}>
            Rule 44 Censure Resolution
          </div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem' }}>
            SCOTX Censure Resolution
          </h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--mid)', lineHeight: '1.7', fontWeight: '400', marginBottom: '1rem' }}>
            Formal censure of Texas Supreme Court Justices Jane Bland, Jimmy Blacklock, Jeffrey S.
            Boyd, Brett Busby, Rebeca Huddle, Debra Lehrmann, and Evan Young under Rule 44 — for three
            or more failures to protect James Younger that violated core RPT platform principles,
            enabling his relocation to California and continued exposure to procedures Texas law
            classifies as child abuse.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--navy)', fontWeight: '600' }}>
            Seek adoption at your County or Senatorial District Convention with instructions to carry
            forward to State Convention.
          </p>
        </div>
      </div>

      <p className="reveal" style={{ marginTop: '1.5rem', fontSize: '1rem', color: 'var(--text-muted-light)', textAlign: 'center' }}>
        Contact the campaign for full resolution text to present at your precinct or county convention.
      </p>
    </section>
  );
};

export default Resolutions;
