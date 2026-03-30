import React from 'react';

const cards = [
  { tag: 'Judiciary', title: 'Expose & Remove Corrupt Judges', desc: "Utilizing Rule 44 to censure and remove Republican judges who protect corruption, enable child abuse, or defy the Party platform — including SCOTX justices who failed James Younger. Zero tolerance, full stop." },
  { tag: 'Party Operations', title: 'Direct, Transparent Communication', desc: "Open meetings, clean contracts, and honest leadership that reports first and only to Texas delegates. No backroom deals, no D.C. influence, no donor-driven agenda — the RPT belongs to the grassroots." },
  { tag: 'Faith & Delegates', title: 'Faith-Grounded Delegate-First Leadership', desc: "A grassroots movement under God, carried by delegates in every county and precinct. Dr. McKenzie's campaign runs on prayer, grit, and faithful volunteers — not special interest money or insider backing." },
];

const Accountability = () => {
  return (
    <section id="accountability" className="section section-alt" role="region" aria-label="Accountability initiatives">
      <div className="section-header reveal">
        <div className="section-tag">Accountability</div>
        <h2 className="section-h2">Hard-Edged Conservative Leadership<br />That Confronts Corruption</h2>
      </div>
      <div className="accountability-grid">
        {cards.map((card, i) => (
          <div className="acc-card reveal" key={i}>
            <div className="acc-tag">{card.tag}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accountability;
