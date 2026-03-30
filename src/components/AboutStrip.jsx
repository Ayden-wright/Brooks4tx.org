import React from 'react';

const stats = [
  { target: 20, suffix: '+', label: 'Years Defending Texas Children & Families' },
  { target: 1000, suffix: '+', label: 'DFPS/CPS Caseworkers & Judges Trained' },
  { target: 254, suffix: '', label: 'Texas Counties Fighting With Us' },
];

const AboutStrip = () => {
  return (
    <div className="about-strip">
      {stats.map((stat, i) => (
        <div className="stat-item reveal" key={i}>
          <span
            className="stat-num"
            data-target={stat.target}
            data-suffix={stat.suffix}
          >
            {stat.target}{stat.suffix}
          </span>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutStrip;
