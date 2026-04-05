import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  useEffect(() => {
    // ─── Scroll reveal animations ───
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      const fromLeft = el.classList.contains('from-left');
      const fromRight = el.classList.contains('from-right');
      const xOffset = fromLeft ? -40 : fromRight ? 40 : 0;

      gsap.fromTo(
        el,
        { opacity: 0, y: fromLeft || fromRight ? 0 : 30, x: xOffset, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          x: 0,
          visibility: 'visible',
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      );
    });

    // ─── Platform card stagger ───
    const platformCards = document.querySelectorAll('.platform-card.reveal');
    if (platformCards.length) {
      gsap.fromTo(
        platformCards,
        { opacity: 0, y: 30, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.platform-grid', start: 'top 80%', once: true },
        }
      );
    }

    // ─── Animated stat counters ───
    document.querySelectorAll('.stat-num[data-target]').forEach((el) => {
      const targetVal = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix !== undefined ? el.dataset.suffix : '';
      if (isNaN(targetVal)) return;

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: targetVal,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + suffix;
            },
          });
        },
      });
    });

    // ─── Infographic bar animations ───
    // Use scaleX (GPU-composited transform) instead of width to avoid layout thrashing.
    // Set the target width via inline style first so scaleX scales to the right size.
    document.querySelectorAll('.bar-fill').forEach((bar) => {
      bar.style.width = (bar.dataset.width || 0) + '%';
      gsap.fromTo(
        bar,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: { trigger: bar, start: 'top 88%', once: true },
        }
      );
    });

    // ─── Scroll progress ribbon ───
    const updateProgress = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      document.documentElement.style.setProperty('--progress-pct', pct.toFixed(2) + '%');
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // ─── Active nav section highlighting ───
    const navLinks = document.querySelectorAll('.nav-links a:not(.nav-donate)');
    const sectionTargets = document.querySelectorAll('section[id], div[id].about-strip');
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove('nav-active'));
            const href = '#' + entry.target.id;
            const activeLink = document.querySelector(`.nav-links a[href="${href}"]`);
            if (activeLink) activeLink.classList.add('nav-active');
          }
        });
      },
      { threshold: 0.25, rootMargin: '-70px 0px -30% 0px' }
    );
    sectionTargets.forEach((s) => sectionObserver.observe(s));

    // ─── GA event tracking stubs ───
    function trackEvent(action, category, label) {
      if (typeof gtag !== 'undefined') {
        gtag('event', action, { event_category: category, event_label: label });
      }
    }
    document.querySelectorAll('.nav-donate, [href="#donate"]').forEach((el) => {
      el.addEventListener('click', () => trackEvent('click', 'CTA', 'Donate'));
    });
    const platSection = document.getElementById('platform');
    if (platSection) {
      ScrollTrigger.create({
        trigger: platSection,
        start: 'top 70%',
        once: true,
        onEnter: () => trackEvent('view', 'Section', 'Platform'),
      });
    }

    return () => {
      window.removeEventListener('scroll', updateProgress);
      sectionObserver.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
