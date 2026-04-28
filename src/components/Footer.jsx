import React from 'react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Campaign Message', href: '#campaign-message' },
  { label: 'Platform', href: '#platform' },
  { label: 'Leadership Record', href: '#leadership-record' },
  { label: 'Magic Bus Tour', href: '#magicbus' },
  { label: 'Delegate FAQ', href: '#delegate-faq' },
  { label: 'Resolutions', href: '#resolutions' },
  { label: 'Contact', href: '#contact' },
];

const resources = [
  { label: 'Molae Ministeria', href: 'https://molaeministeria.org/', external: true },
  { label: 'View CV', href: 'https://www.dropbox.com/scl/fi/eappuhy3ozh58ub7uijtw/cv.mck.gop.pdf?rlkey=c7uhtcur5n7shid1ofwi2ohdo&e=1&st=ur862oiq&dl=0', external: true },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Lewis_Mckenzie?ev=hdr_xprf', external: true },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61587755792506', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/thedr.brooksmckenzie/', external: true },
  { label: 'X / Twitter', href: 'https://x.com/B_MckenziePhD', external: true },
  { label: 'Privacy Policy', href: '/privacy-policy.html', external: false },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="footer-brand">Dr. Brooks <span>McKenzie</span></div>
          <p className="footer-blurb">
            Candidate for Chair, Republican Party of Texas. Grassroots-first, faith-driven leadership
            to restore integrity, protect Texas families, and return the Party to the people who built
            it. Turn back to God. Restore the Family. Restore Texas.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link, i) => (
              <li key={i}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            {resources.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Dr. Brooks McKenzie for Chair of the Republican Party of Texas. All Rights Reserved.</span>
        <span>*Not affiliated with Robert McKenzie, candidate for Texas House District 137.</span>
      </div>
    </>
  );
};

export default Footer;
