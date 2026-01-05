import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToTop } from '../utils/scrollUtils';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = ({ scroll }) => {
      if (scroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen to Lenis scroll events
    if (window.lenis) {
      window.lenis.on('scroll', toggleVisibility);
    } else {
      // Fallback to regular scroll events
      const handleScroll = () => {
        toggleVisibility({ scroll: window.pageYOffset });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', toggleVisibility);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          onClick={() => scrollToTop()}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <motion.span 
            className="material-icons text-xl"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            keyboard_arrow_up
          </motion.span>
          
          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;