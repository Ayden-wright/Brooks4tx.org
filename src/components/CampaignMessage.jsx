import React from 'react';

const missionHighlights = [
  { bold: 'Restore integrity:', text: 'honest leadership that earns trust through transparency and accountability.' },
  { bold: 'Defend parental rights:', text: 'families deserve respect, voice, and protection in every policy decision.' },
  { bold: 'Put Texas families first:', text: 'policy priorities that safeguard children and strengthen communities statewide.' },
  { bold: 'Accountable public servants:', text: 'the RPT panders no more.' },
];

const CampaignMessage = () => {
  return (
    <section
      id="campaign-message"
      className="section"
      role="region"
      aria-label="Campaign message"
      style={{
        background: 'linear-gradient(180deg,var(--cream) 0%,var(--light-gray) 100%)',
        paddingBlock: 'clamp(5rem,10vw,8rem)',
        borderTop: '4px solid var(--red)',
      }}
    >
      <div className="section-header reveal" style={{ maxWidth: '900px' }}>
        <div className="section-tag">Campaign Message</div>
        <h2
          className="section-h2"
          style={{
            fontSize: 'clamp(2.6rem,5.5vw,4.2rem)',
            lineHeight: '1.08',
            fontWeight: '900',
            marginTop: '0.5rem',
          }}
        >
          Restore Judicial Accountability.<br />Defend the Nuclear Family.
        </h2>
      </div>

      <div className="reveal two-col-layout campaign-layout">
        <div className="reveal from-left">
          <p style={{ fontSize: '1.25rem', lineHeight: '1.85', color: 'var(--dark)', fontWeight: '500', marginBottom: '1.75rem' }}>
            Dr. Brooks McKenzie is a lifelong conservative Texan running for RPT Chair to restore
            grassroots trust, uphold faith, and enforce the rule of law.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.85', color: 'var(--mid-strong)', fontWeight: '400', marginBottom: '1.75rem' }}>
            He calls delegates to protect children, defend parental rights, and preserve the nuclear
            family as Texas's cornerstone — focusing upon integrity and accountability in every reform.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.85', color: 'var(--mid-strong)', fontWeight: '400' }}>
            Restoring God's design ends the chaos of gender-mutilation, abortion accommodation, school
            abuse, and the multitude of state-sponsored child abuses. He will confront corruption, honor
            the Constitution, and serve God alone.
          </p>
        </div>

        <div
          className="content-panel scripture-panel from-right"
          style={{
            background: '#fdf6ee',
            padding: '2.5rem 2.75rem',
            borderRadius: '4px',
            borderLeft: '5px solid #c94010',
          }}
        >
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '4px', fontSize: '0.9rem', color: '#c94010', marginBottom: '1.5rem' }}>
            Scripture for This Season
          </div>
          <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontWeight: '400', fontSize: '1.15rem', lineHeight: '2', color: '#2a1206', marginBottom: '1.25rem' }}>
            "I came to send fire on the earth, and how I wish it were already kindled! But I have a
            baptism to be baptized with, and how distressed I am till it is accomplished! Do you suppose
            that I came to give peace on earth? I tell you, not at all, but rather division."
          </p>
          <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontWeight: '400', fontSize: '1.15rem', lineHeight: '2', color: '#2a1206', marginBottom: '1.75rem' }}>
            "From now on five in one house will be divided: three against two, and two against three.
            Father will be divided against son and son against father, mother against daughter and
            daughter against mother, mother-in-law against her daughter-in-law and daughter-in-law
            against her mother-in-law."
          </p>
          <p style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '3px', fontSize: '0.9rem', color: '#c94010' }}>
            Luke 12:49–53 (NKJV)
          </p>
        </div>
      </div>

      <div className="reveal mission-highlights" style={{ marginTop: '3.5rem', paddingTop: '3.5rem', borderTop: '2px solid rgba(216,67,21,0.2)' }}>
        <div className="section-tag" style={{ marginBottom: '2rem' }}>Mission Highlights</div>
        <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
          {missionHighlights.map((item, i) => (
            <div
              key={i}
              className="bullet-card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '4px',
                boxShadow: '0 2px 12px rgba(36,16,8,0.07)',
                borderLeft: '4px solid var(--red)',
              }}
            >
              <div className="bullet-dot" style={{ width: '10px', height: '10px', background: 'var(--red)', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--mid-strong)', fontWeight: '400' }}>
                <strong style={{ color: 'var(--dark)', fontSize: '1.15rem' }}>{item.bold}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignMessage;
