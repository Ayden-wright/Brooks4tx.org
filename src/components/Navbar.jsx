import React, { useState, useEffect, useCallback } from 'react';

const Navbar = ({ lenisRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('menu-open');
        if (lenisRef?.current) lenisRef.current.stop();
      } else {
        document.body.classList.remove('menu-open');
        if (lenisRef?.current) lenisRef.current.start();
      }
      return next;
    });
  }, [lenisRef]);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
    if (lenisRef?.current) lenisRef.current.start();
  }, [lenisRef]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) closeMenu();
    };
    const handleClickOutside = (e) => {
      const menu = document.getElementById('mobileMenu');
      const hamburger = document.getElementById('hamburger');
      if (
        mobileMenuOpen &&
        menu &&
        hamburger &&
        !menu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen, closeMenu]);

  return (
    <>
      <nav className={isScrolled ? 'nav-scrolled' : ''} aria-label="Main navigation">
        <a className="nav-brand" href="#main-content" aria-label="Dr. McKenzie campaign home">
          DR. McKENZIE
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#campaign-message">Message</a></li>
          <li><a href="#platform">Platform</a></li>
          <li><a href="#leadership-record">Record</a></li>
          <li><a href="#magicbus">Magic Bus</a></li>
          <li><a href="#delegate-faq">Delegate FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="nav-donate" href="#donate">Donate</a></li>
        </ul>
        <button
          className="hamburger"
          id="hamburger"
          type="button"
          aria-controls="mobileMenu"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <a className="mm-link" href="#about" onClick={closeMenu}>About</a>
        <a className="mm-link" href="#campaign-message" onClick={closeMenu}>Message</a>
        <a className="mm-link" href="#platform" onClick={closeMenu}>Platform</a>
        <a className="mm-link" href="#leadership-record" onClick={closeMenu}>Record</a>
        <a className="mm-link" href="#magicbus" onClick={closeMenu}>Magic Bus</a>
        <a className="mm-link" href="#delegate-faq" onClick={closeMenu}>Delegate FAQ</a>
        <a className="mm-link" href="#contact" onClick={closeMenu}>Contact</a>
        <a className="mm-link" href="#donate" onClick={closeMenu}>Donate</a>
      </div>
    </>
  );
};

export default Navbar;
