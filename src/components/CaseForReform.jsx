import React from 'react';

const CaseForReform = () => {
  return (
    <section className="media-section" id="media" aria-labelledby="media-heading">
      <div className="section-header reveal">
        <div className="section-tag">Why This Matters</div>
        <h2 className="section-h2" id="media-heading">The Case for Reform</h2>
      </div>

      <div className="reform-panel reveal" role="region" aria-label="Why reform is needed">
        <div className="reform-kicker">Truth. Family. Accountability.</div>
        <p className="reform-lead">
          Texas families deserve party leadership that will confront broken systems directly, defend
          parental rights, and restore trust without hiding behind consultants, excuses, or empty slogans.
        </p>
        <p className="reform-body">
          This campaign is built around a simple promise: tell the truth about what families are facing,
          stand up for children, and push for real accountability wherever public institutions have failed
          the people they were supposed to protect.
        </p>

        <div className="reform-pillars">
          <div className="reform-pillar reveal">
            <h3>Protect Children</h3>
            <p>Put child safety ahead of bureaucracy, incentives, and political convenience.</p>
          </div>
          <div className="reform-pillar reveal">
            <h3>Defend Families</h3>
            <p>Fight for parental rights, due process, and a system families can trust again.</p>
          </div>
          <div className="reform-pillar reveal">
            <h3>Demand Accountability</h3>
            <p>Hold institutions, party leadership, and public actors to the same standard they demand from Texans.</p>
          </div>
        </div>

        <div className="reform-quote-inline">
          <blockquote>
            "My work has always been about protecting children, strengthening families, and restoring
            trust in the systems that serve Texans — including our Party rules and reforms. I will not
            compromise on truth, accountability, or the people we are commanded to serve."
          </blockquote>
          <div className="quote-attr">— Dr. Brooks McKenzie, RPT Chair Candidate</div>
        </div>
      </div>
    </section>
  );
};

export default CaseForReform;
