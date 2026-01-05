import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimation = (trigger, animation, dependencies = []) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      animation(element);
    }, element);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};

export const useScrollAnimation = (animationConfig) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(element, 
        animationConfig.from,
        {
          ...animationConfig.to,
          scrollTrigger: {
            trigger: element,
            start: animationConfig.start || "top 80%",
            end: animationConfig.end || "bottom 20%",
            scrub: animationConfig.scrub || false,
            toggleActions: animationConfig.toggleActions || "play none none reverse",
            scroller: document.body, // Use body as scroller for Lenis
            ...animationConfig.scrollTrigger
          }
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return ref;
};

export const useStaggerAnimation = (selector, animationConfig) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(container.querySelectorAll(selector),
        animationConfig.from,
        {
          ...animationConfig.to,
          stagger: animationConfig.stagger || 0.1,
          scrollTrigger: {
            trigger: container,
            start: animationConfig.start || "top 80%",
            toggleActions: "play none none reverse",
            scroller: document.body, // Use body as scroller for Lenis
            ...animationConfig.scrollTrigger
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
};

export const useMagneticEffect = () => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

// Lenis integration utility
export const useLenisScrollTrigger = () => {
  useEffect(() => {
    // Update ScrollTrigger when Lenis scrolls
    const updateScrollTrigger = () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    };

    // Listen for Lenis scroll events
    if (window.lenis) {
      window.lenis.on('scroll', updateScrollTrigger);
    }

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', updateScrollTrigger);
      }
    };
  }, []);
};