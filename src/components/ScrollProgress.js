import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = ({ scroll, limit }) => {
      const progress = scroll / limit;
      setScrollProgress(progress);
    };

    // Listen to Lenis scroll events
    if (window.lenis) {
      window.lenis.on('scroll', updateScrollProgress);
    } else {
      // Fallback to regular scroll events
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollTop / docHeight;
        setScrollProgress(progress);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', updateScrollProgress);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 0.01 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-orange-400"
        style={{
          scaleX: scrollProgress,
          transformOrigin: '0%'
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default ScrollProgress;