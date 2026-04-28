import React from 'react';

const records = [
  { kicker: 'Frontline Service', kickerColor: 'var(--red)', title: 'Over Two Decades Defending Children and Families', desc: 'A career devoted to protecting the vulnerable and strengthening the Texas family through TBRI research, training, and frontline intervention work.' },
  { kicker: 'Leadership in Practice', kickerColor: 'var(--navy)', title: 'Training Organizations for Effective Leadership', desc: 'Guiding policy and operations with a hard focus on accountability and ethical outcomes in state and nonprofit agencies across Texas.' },
  { kicker: 'Scholarship', kickerColor: 'var(--dark-red)', title: 'Peer-Reviewed Publications', desc: "Research grounded in evidence, integrity, and real-world impact — documenting the harm caused when courts and agencies violate parental rights." },
  { kicker: 'Statewide Training', kickerColor: 'var(--red)', title: 'Trained Thousands of DFPS/CPS Caseworkers, Attorneys, and Judges', desc: 'Equipping frontline teams with evidence-based tools to protect Texas children and enforce accountability throughout the state system.' },
];

const LeadershipRecord = () => {
  return (
    <section id="leadership-record" className="section section-alt" role="region" aria-label="Leadership record">
      <div className="section-header reveal">
        <div className="section-tag">Leadership Record</div>
        <h2 className="section-h2">Hard-Edged Conservative Leadership<br />That Confronts Corruption</h2>
        <p className="section-intro" style={{ color: 'var(--mid-strong)', fontSize: '1rem', lineHeight: '1.75', maxWidth: '640px', fontWeight: '400', marginTop: '0.8rem' }}>
          No spin, no excuses — accountable leadership that protects children, restores parental
          authority, and demands constitutional integrity across the Republican Party of Texas.
        </p>
      </div>

      <div className="reveal cards-grid cards-grid-2 record-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        {records.map((item, i) => (
          <div key={i} className="info-card reveal" style={{ background: 'white', padding: '2rem', borderRadius: '2px', borderLeft: '4px solid var(--red)', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '3px', fontSize: '1rem', color: item.kickerColor, marginBottom: '0.5rem' }}>{item.kicker}</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.6rem' }}>{item.title}</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--mid-strong)', fontWeight: '400' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="reveal highlight-banner" style={{ background: 'linear-gradient(to right,var(--red),var(--dark-red))', color: 'white', padding: '2rem', borderRadius: '2px', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
        </svg>
        <div>
          <strong style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.45rem', fontWeight: '900', display: 'block', marginBottom: '0.4rem' }}>
            Conservative Judicial Reform — 2025
          </strong>
          <span style={{ fontSize: '1.1rem', fontWeight: '500', opacity: 1 }}>
            Signature effort backing challengers to Justices Blacklock and Busby for the 2026 GOP
            primary — confronting judicial failure and demanding constitutional accountability on the
            Texas Supreme Court.
          </span>
        </div>
      </div>
    </section>
  );
};

export default LeadershipRecord;
