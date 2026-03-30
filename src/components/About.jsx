import React, { useCallback } from 'react';

const About = () => {
  const handleFacadeClick = useCallback((e) => {
    const facade = e.currentTarget;
    const id = facade.dataset.videoid;
    if (!id) return;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title = 'Campaign video';
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;opacity:0;transition:opacity 0.3s;';
    facade.innerHTML = '';
    facade.appendChild(iframe);
    requestAnimationFrame(() => { iframe.style.opacity = '1'; });
  }, []);

  return (
    <section id="about" className="section" role="region" aria-label="About the candidate">
      <div className="section-header reveal about-header">
        <div className="section-tag">About the Candidate</div>
        <h2 className="section-h2">A Proven Texas Leader Rooted<br />in Research, Family, and Faith</h2>
      </div>

      <div className="bio-grid">
        {/* Video panel */}
        <div className="bio-photo-wrap reveal from-left bio-video-panel">
          <div className="video-kicker" style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '3px', fontSize: '0.75rem', color: 'var(--red)', marginBottom: '0.6rem' }}>
            Watch — Who is Dr. McKenzie?
          </div>
          <div
            className="bio-video-embed yt-facade"
            data-videoid="-nStCWHu_JM"
            role="region"
            aria-label="Who is Dr. Brooks McKenzie — campaign video"
            onClick={handleFacadeClick}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleFacadeClick(e); } }}
            tabIndex={0}
          >
            <img
              className="yt-thumb"
              alt="Watch: Who is Dr. Brooks McKenzie?"
              src="https://i.ytimg.com/vi/-nStCWHu_JM/maxresdefault.jpg"
              width="1280"
              height="720"
              loading="lazy"
            />
            <button className="yt-play-btn" type="button" aria-label="Play campaign video — Who is Dr. McKenzie?">
              <svg width="76" height="54" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="var(--red)" />
                <path d="M45 24 27 14v20" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bio content */}
        <div className="bio-content reveal from-right">
          <p>Dr. Brooks McKenzie earned his Ph.D. in Experimental Psychology with an emphasis in Developmental Psychology from Texas Christian University in 2010. He served as Research Scientist and Assistant Director at the TCU Institute of Child Development, where he led TBRI (Trust-Based Relational Intervention) research and training that equips frontline interventionists with trauma-informed, practical care for at-risk children.</p>
          <p>His peer-reviewed scholarship documents the irreversible harm caused when courts and agencies violate parental rights. He helped advance SB293 and SJR27, and in 2025 he personally gathered and submitted hundreds of signatures to qualify conservative challengers to Texas Supreme Court Justices Blacklock and Busby for the 2026 primary — confronting judicial failures tied to the James Younger case.</p>
          <p>As Tarrant County GOP Precinct 2468 Chair, Dr. McKenzie has trained thousands of DFPS/CPS caseworkers, attorneys, and judges with evidence-based practices, exposed corruption in family courts, and authored emergency resolutions under Rule 44 to save James Younger and censure complicit justices. His campaign is anchored in a simple mandate: <em>Turn back to God, Restore the Family, Restore Texas.</em></p>

          <div className="bio-credentials">
            <div className="cred-item"><strong>Ph.D. Experimental Psychology — Texas Christian University (2010)</strong></div>
            <div className="cred-item"><strong>Research Scientist &amp; Asst. Director — TCU Institute of Child Development</strong></div>
            <div className="cred-item"><strong>Tarrant County GOP Precinct 2468 Chair</strong></div>
            <div className="cred-item"><strong>SB293 &amp; SJR27 Advocate — 2025 Texas Legislative Session</strong></div>
            <div className="cred-item"><strong>Rule 44 Reform Leader — 2024 RPT Convention</strong></div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a className="btn-primary" href="https://www.dropbox.com/scl/fi/eappuhy3ozh58ub7uijtw/cv.mck.gop.pdf?rlkey=c7uhtcur5n7shid1ofwi2ohdo&e=1&st=ur862oiq&dl=0" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.78rem' }}>View CV / Curriculum Vitae</a>
            <a className="btn-secondary" href="https://www.researchgate.net/profile/Lewis_Mckenzie?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.78rem', color: 'var(--dark)', borderColor: 'rgba(0,0,0,0.25)' }}>ResearchGate Publications</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
