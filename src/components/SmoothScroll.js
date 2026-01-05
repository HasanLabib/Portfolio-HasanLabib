import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    
    // Make lenis available globally for scrollTo function
    window.lenis = lenis;

    // Get scroll value and integrate with GSAP ScrollTrigger if available
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // Update GSAP ScrollTrigger if available
      if (window.ScrollTrigger) {
        window.ScrollTrigger.update();
      }
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor link clicks with Lenis smooth scrolling
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          lenis.scrollTo(element, {
            offset: -80, // Account for fixed header
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      lenis.destroy();
      if (window.lenis === lenis) {
        delete window.lenis;
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;