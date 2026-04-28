import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    // Keep ScrollTrigger in sync with Lenis virtual scroll position.
    // Without this, ScrollTrigger reads native scroll which lags Lenis by one frame.
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from the GSAP ticker so both systems share one rAF loop.
    // gsap.ticker.lagSmoothing(0) prevents GSAP from throttling when the tab
    // loses focus and then regains it, which would cause a large time-delta jump.
    function onTick(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(onTick);
    };
  }, []);

  return lenisRef;
}
