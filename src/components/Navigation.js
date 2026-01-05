import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMagneticEffect } from '../hooks/useAnimations';
import { staggerContainer, staggerItem } from '../utils/motionVariants';
import { scrollToSection, scrollToTop } from '../utils/scrollUtils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoMagneticRef = useMagneticEffect();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '#', section: null },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contacts', href: '#contacts', section: 'contacts' }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (location.pathname === '/') {
      if (item.section) {
        scrollToSection(item.section);
      } else {
        scrollToTop();
      }
    } else {
      navigate('/', { state: { section: item.section || null } });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto relative z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        ref={logoMagneticRef}
        className="font-display font-bold text-xl md:text-2xl tracking-wide dark:text-white cursor-pointer"
        whileHover={{
          scale: 1.05,
          color: "#3B82F6"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (location.pathname === '/') {
            scrollToTop();
          } else {
            navigate('/', { state: { section: null } });
          }
        }}
      >
        S. M. Hasan Imtiaz Labib
      </motion.div>
      
      {/* Desktop Navigation */}
      <motion.div 
        className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item, index) => (
          <motion.a 
            key={item.name}
            className="hover:text-primary transition-colors relative group cursor-pointer"
            href={item.href}
            onClick={(e) => handleNavClick(e, item)}
            variants={staggerItem}
            whileHover={{
              scale: 1.1,
              color: "#3B82F6"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </motion.a>
        ))}
      </motion.div>
      
      {/* Mobile Menu Button */}
      <motion.button 
        className="md:hidden text-gray-600 dark:text-gray-300 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isMenuOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span 
          className="material-icons"
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? 'close' : 'menu'}
        </motion.span>
      </motion.button>
      
      {/* Mobile Menu */}
      <motion.div
        className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: 'hidden' }}
      >
        <motion.div 
          className="py-4 px-6 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              className="block text-gray-600 dark:text-gray-300 hover:text-primary transition-colors py-2 cursor-pointer"
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              variants={staggerItem}
              whileHover={{
                x: 10,
                color: "#3B82F6"
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
