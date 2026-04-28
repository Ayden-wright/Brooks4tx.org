import React from 'react';

const platformData = [
  {
    num: '01',
    icon: <path d="M12 2L4 5v6c0 5.25 3.4 10.14 8 11.35C16.6 21.14 20 16.25 20 11V5l-8-3zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V8.18L12 6z" />,
    iconLabel: 'Shield icon',
    title: 'Restore Integrity & Transparency',
    desc: 'Clean governance, open meetings, and transparent contracts. Leadership must answer first and only to Texas delegates — no backroom deals, no Washington influence, no special interests.',
    detail: 'Delegates first — always',
  },
  {
    num: '02',
    icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />,
    iconLabel: 'Gavel icon',
    title: 'Make Rule 44 Reform the Top Priority',
    desc: "Strengthen and use Rule 44 to censure and remove any Republican judge, legislator, or official who protects corruption, enables abuse, or violates the Party platform. Dr. McKenzie personally added judges to the list of censurable officials at the 2024 Convention.",
    detail: 'Delegate accountability replaces backroom protection',
  },
  {
    num: '03',
    icon: <path d="M12 2L4 5v6c0 5.25 3.4 10.14 8 11.35C16.6 21.14 20 16.25 20 11V5l-8-3z" />,
    iconLabel: 'Scale icon',
    title: 'End Party Protection for Court Corruption',
    desc: "Bring every backroom deal into the light. Hold every judge and bureaucrat to their oath and the Texas Constitution. No more shielding fraud upon the court or state-sanctioned harm to children.",
    detail: 'Every Republican is accountable to the platform',
  },
  {
    num: '04',
    icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />,
    iconLabel: 'Children icon',
    title: 'Protect Children from Abuse & Cover-Ups',
    desc: 'Mobilize the full power of the RPT to purge CPS, DFPS, ISDs, and family courts of anyone enabling the destruction of the nuclear family. Making saving James Younger a binding legislative priority is non-negotiable.',
    detail: 'Defend the least among us — no exceptions',
  },
  {
    num: '05',
    icon: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    iconLabel: 'Family icon',
    title: 'Defend Parental Rights & the Nuclear Family',
    desc: "Parents — not bureaucrats or activist judges — must lead the upbringing, education, and moral formation of their children. The RPT will stand without apology for faith, family, and the structure that built Texas.",
    detail: "Restoring God's design ends the chaos",
  },
  {
    num: '06',
    icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />,
    iconLabel: 'Grassroots icon',
    title: 'Grassroots-First Operation',
    desc: 'Run the RPT for the delegates who elect its leaders. Demand accountability from every Republican, reject D.C. influence, and return the Party to the people of Texas who built it and sustain it.',
    detail: 'The RPT panders to no one but the grassroots',
  },
];

const Platform = () => {
  return (
    <section id="platform" className="section section-alt" role="region" aria-label="Campaign platform">
      <div className="section-header reveal">
        <div className="section-tag">The Platform</div>
        <h2 className="section-h2">Six Non-Negotiable Reforms<br />for a Delegate-Led Party</h2>
      </div>

      <div className="platform-grid">
        {platformData.map((item, i) => (
          <div className="platform-card reveal" key={i}>
            <div className="platform-num" aria-hidden="true">{item.num}</div>
            <div className="platform-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-label={item.iconLabel} xmlns="http://www.w3.org/2000/svg">
                {item.icon}
              </svg>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="detail">{item.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Platform;
