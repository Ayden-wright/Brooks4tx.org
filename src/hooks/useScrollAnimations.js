import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVEAL_DURATION = 0.65;
const REVEAL_START    = 'top 85%';
const WILL_CHANGE     = 'transform, opacity';

function clearWillChange(batch) {
  gsap.set(batch, { clearProps: 'willChange' });
}

export default function useScrollAnimations() {
  useEffect(() => {
    // ─── Scroll reveal animations (batched by direction) ───
    // ScrollTrigger.batch() replaces per-element triggers (~40 instances → 3).
    // .platform-card is excluded here — it has its own stagger block below.
    // autoAlpha is used instead of opacity+visibility because autoAlpha keeps
    // visibility:hidden while opacity is 0 (invisible to AT and renderer), then
    // sets visibility:visible only when opacity > 0, preventing the mid-tween
    // "pop" that a discrete visibility toggle causes.

    ScrollTrigger.batch('.reveal:not(.from-left):not(.from-right):not(.platform-card)', {
      onEnter: (batch) => {
        gsap.set(batch, { willChange: WILL_CHANGE });
        gsap.fromTo(batch,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1, y: 0,
            duration: REVEAL_DURATION, ease: 'power2.out', stagger: 0.05,
            onComplete() { clearWillChange(batch); },
          }
        );
      },
      start: REVEAL_START,
      once: true,
    });

    ScrollTrigger.batch('.reveal.from-left:not(.platform-card)', {
      onEnter: (batch) => {
        gsap.set(batch, { willChange: WILL_CHANGE });
        gsap.fromTo(batch,
          { autoAlpha: 0, x: -40 },
          {
            autoAlpha: 1, x: 0,
            duration: REVEAL_DURATION, ease: 'power2.out', stagger: 0.05,
            onComplete() { clearWillChange(batch); },
          }
        );
      },
      start: REVEAL_START,
      once: true,
    });

    ScrollTrigger.batch('.reveal.from-right:not(.platform-card)', {
      onEnter: (batch) => {
        gsap.set(batch, { willChange: WILL_CHANGE });
        gsap.fromTo(batch,
          { autoAlpha: 0, x: 40 },
          {
            autoAlpha: 1, x: 0,
            duration: REVEAL_DURATION, ease: 'power2.out', stagger: 0.05,
            onComplete() { clearWillChange(batch); },
          }
        );
      },
      start: REVEAL_START,
      once: true,
    });

    // ─── Platform card stagger ───
    const platformCards = document.querySelectorAll('.platform-card.reveal');
    if (platformCards.length) {
      gsap.set(platformCards, { willChange: WILL_CHANGE });
      gsap.fromTo(platformCards,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1, y: 0,
          duration: 0.5, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: '.platform-grid', start: 'top 82%', once: true },
          onComplete() { clearWillChange(platformCards); },
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
            onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
          });
        },
      });
    });

    // ─── Infographic bar animations ───
    document.querySelectorAll('.bar-fill').forEach((bar) => {
      bar.style.width = (bar.dataset.width || 0) + '%';
      gsap.fromTo(bar,
        { scaleX: 0, transformOrigin: 'left center', willChange: 'transform' },
        {
          scaleX: 1,
          duration: 1.0, ease: 'power2.out',
          scrollTrigger: { trigger: bar, start: 'top 88%', once: true },
          onComplete() { gsap.set(bar, { clearProps: 'willChange' }); },
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
