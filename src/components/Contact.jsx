import React, { useState, useRef } from 'react';

const Contact = () => {
  const [errors, setErrors] = useState({ fname: false, email: false });
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();
    const email = form.email.value.trim();
    const county = form.county.value.trim();
    const interest = form.interest.value;
    const message = form.message.value.trim();

    const newErrors = { fname: false, email: false };
    let valid = true;

    if (!fname) {
      newErrors.fname = true;
      valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = true;
      valid = false;
    }

    setErrors(newErrors);
    setShowSuccess(false);

    if (!valid) return;

    const recipient = 'info@drbrooks4tx.org';
    const interestText = interest || 'General campaign inquiry';
    const subject = `${interestText} — ${fname} ${lname}`.trim();
    const body = [
      `First Name: ${fname}`,
      `Last Name: ${lname}`,
      `Email: ${email}`,
      `County: ${county || 'Not provided'}`,
      `Interested In: ${interestText}`,
      '',
      'Message:',
      message || 'No message provided.',
    ].join('\n');

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setShowSuccess(true);
  };

  return (
    <section id="contact" className="section" role="region" aria-label="Contact and get involved">
      <div className="section-header reveal">
        <div className="section-tag">Get Involved</div>
        <h2 className="section-h2">Contact Dr. McKenzie</h2>
      </div>

      <div className="contact-grid">
        <form
          ref={formRef}
          className="contact-form reveal from-left"
          aria-label="Campaign contact form"
          noValidate
          onSubmit={handleSubmit}
        >
          <p className="form-hint fine-print" style={{ fontSize: '0.82rem', color: '#7a5a45', marginBottom: '1rem' }}>
            This form opens an email draft to the campaign using your device's default email app.
          </p>
          <p className="form-required-note">
            Fields marked <span className="required-mark">*</span> are required.
          </p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">First Name <span className="required-mark" aria-hidden="true">*</span></label>
              <input type="text" id="fname" name="fname" placeholder="John" required autoComplete="given-name" aria-required="true" />
              {errors.fname && <span className="field-error show" role="alert" aria-live="assertive">Please enter your first name.</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lname" placeholder="Smith" autoComplete="family-name" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address <span className="required-mark" aria-hidden="true">*</span></label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required autoComplete="email" aria-required="true" />
            {errors.email && <span className="field-error show" role="alert" aria-live="assertive">Please enter a valid email.</span>}
          </div>

          <div className="form-group">
            <label htmlFor="county">Your County</label>
            <input type="text" id="county" name="county" placeholder="e.g. Tarrant County" autoComplete="address-level2" />
          </div>

          <div className="form-group">
            <label htmlFor="interest">I'm interested in...</label>
            <select id="interest" name="interest" aria-label="Area of interest">
              <option value="">Select an option</option>
              <option value="volunteer">Volunteering for the campaign</option>
              <option value="media">Media / Press inquiry</option>
              <option value="legal">Legal research support</option>
              <option value="story">Sharing my family court story</option>
              <option value="general">General information</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us how you'd like to get involved..." aria-label="Your message" />
          </div>

          {/* Honeypot */}
          <div className="honeypot" aria-hidden="true">
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </div>
          <input type="hidden" name="_subject" value="New Campaign Inquiry - DrBrooksMcKenzie.com" />

          <p className="form-hint fine-print" style={{ fontSize: '0.78rem', color: 'var(--text-muted-light)' }}>
            By submitting this form you agree to our{' '}
            <a href="/privacy-policy.html" style={{ color: 'var(--red)', textDecoration: 'underline' }}>Privacy Policy</a>.
          </p>

          <button type="submit" className="btn-submit" aria-label="Submit contact form">Send Message</button>

          {showSuccess && (
            <div className="form-success" style={{ display: 'block' }} role="alert" aria-live="polite">
              ✓ Your email app should open with this message ready to send.
            </div>
          )}
        </form>

        <div className="contact-info reveal from-right">
          <h3>Campaign Contacts</h3>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="contact-item-text">
              <strong>Campaign Office</strong>
              Tarrant County, Texas
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="contact-item-text">
              <strong>Campaign Email</strong>
              <a href="mailto:info@drbrooks4tx.org">info@drbrooks4tx.org</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="contact-item-text">
              <strong>Phone</strong>
              <a href="tel:9728375678">(972) 837-5678</a>
            </div>
          </div>

          <div className="divider"><span>Online</span></div>

          <div className="social-links">
            <a className="social-btn" href="https://www.facebook.com/profile.php?id=61587755792506" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              Facebook
            </a>
            <a className="social-btn" href="https://www.instagram.com/thedr.brooksmckenzie/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              Instagram
            </a>
            <a className="social-btn" href="https://x.com/B_MckenziePhD" target="_blank" rel="noopener noreferrer" aria-label="@B_MckenziePhD">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              @B_MckenziePhD
            </a>
            <a className="social-btn" href="https://molaeministeria.org/" target="_blank" rel="noopener noreferrer" aria-label="Molae Ministeria">
              Molae Ministeria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
