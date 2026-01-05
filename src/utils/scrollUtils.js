// Utility functions for Lenis smooth scrolling

export const scrollTo = (target, options = {}) => {
  const lenis = window.lenis;
  if (lenis) {
    lenis.scrollTo(target, {
      offset: -80, // Account for fixed header
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options
    });
  } else {
    // Fallback for when Lenis is not available
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};

export const scrollToTop = (options = {}) => {
  scrollTo(0, {
    duration: 1.2,
    ...options
  });
};

export const scrollToSection = (sectionId, options = {}) => {
  scrollTo(`#${sectionId}`, {
    offset: -100, // Extra offset for section headers
    ...options
  });
};

// Hook to get current scroll position
export const useScrollPosition = (callback) => {
  const lenis = window.lenis;
  if (lenis && callback) {
    lenis.on('scroll', callback);
    return () => lenis.off('scroll', callback);
  }
  return () => {};
};

// Stop/start Lenis scrolling
export const stopScroll = () => {
  const lenis = window.lenis;
  if (lenis) {
    lenis.stop();
  }
};

export const startScroll = () => {
  const lenis = window.lenis;
  if (lenis) {
    lenis.start();
  }
};

// Check if Lenis is available
export const isLenisAvailable = () => {
  return !!window.lenis;
};