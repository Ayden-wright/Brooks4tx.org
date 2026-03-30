import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStrip from './components/AboutStrip';
import About from './components/About';
import Platform from './components/Platform';
import CaseForReform from './components/CaseForReform';
import CampaignMessage from './components/CampaignMessage';
import LeadershipRecord from './components/LeadershipRecord';
import Accountability from './components/Accountability';
import MagicBusTour from './components/MagicBusTour';
import DelegateFAQ from './components/DelegateFAQ';
import Resolutions from './components/Resolutions';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimations from './hooks/useScrollAnimations';
import useLenis from './hooks/useLenis';

function App() {
  const lenisRef = useLenis();
  useScrollAnimations();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar lenisRef={lenisRef} />
      <main id="main-content">
        <Hero />
        <AboutStrip />
        <About />
        <Platform />
        <CaseForReform />
        <CampaignMessage />
        <LeadershipRecord />
        <Accountability />
        <MagicBusTour />
        <DelegateFAQ />
        <Resolutions />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
