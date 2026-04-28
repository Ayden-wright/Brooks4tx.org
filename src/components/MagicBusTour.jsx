import React from 'react';

const stops = [
  {
    kicker: 'Upcoming Stop',
    kickerColor: 'var(--red)',
    borderColor: 'var(--red)',
    title: 'Bay City, Matagorda County, TX',
    desc: "Week of April 5, 2026 — Exact date/time TBD. This stop will focus on restoring trust, defending faith-driven leadership, and rebuilding a Republican Party of Texas that answers to its delegates.",
  },
  {
    kicker: 'Next Stop',
    kickerColor: 'var(--dark-red)',
    borderColor: 'var(--gold)',
    title: 'Carthage, Panola County, TX',
    desc: 'Coming soon — details pending. Check back for updates or email the campaign to stay informed and ready to take action.',
  },
];

const MagicBusTour = () => {
  return (
    <section id="magicbus" className="section section-alt" role="region" aria-label="Magic Bus Tour schedule">
      <div className="section-header reveal">
        <div className="section-tag">Campaign Tour</div>
        <h2 className="section-h2">Magic Bus Tour</h2>
        <p className="section-intro" style={{ color: 'var(--mid-strong)', fontSize: '1rem', lineHeight: '1.75', maxWidth: '640px', fontWeight: '400', marginTop: '0.8rem' }}>
          Taking principled conservative leadership on the road. The Magic Bus has been campaigning
          since the 2022 Convention. Meet Dr. McKenzie, pray, organize, and go to war for God.
        </p>
      </div>

      <div className="reveal cards-grid cards-grid-2 tour-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
        {stops.map((stop, i) => (
          <div
            key={i}
            className="tour-card reveal"
            style={{
              background: 'white',
              borderRadius: '2px',
              padding: '2rem',
              borderLeft: `4px solid ${stop.borderColor}`,
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            }}
          >
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '3px', fontSize: '1rem', color: stop.kickerColor, marginBottom: '0.5rem' }}>
              {stop.kicker}
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.45rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              {stop.title}
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--mid-strong)', fontWeight: '400' }}>
              {stop.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="reveal" style={{ marginTop: '1.5rem', fontSize: '1rem', color: 'var(--text-muted-light)', fontStyle: 'italic' }}>
        More stops will be posted as they are confirmed. Each visit is an open invitation to meet, pray,
        organize, and go to war for God.
      </p>
    </section>
  );
};

export default MagicBusTour;
