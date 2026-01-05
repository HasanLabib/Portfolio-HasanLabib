import React from 'react';
import { motion } from 'framer-motion';
import { useMagneticEffect } from '../hooks/useAnimations';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/motionVariants';

const Footer = () => {
  const logoMagneticRef = useMagneticEffect();
  const socialLinks = [
    { icon: 'email', href: 'mailto:hasanlabib3@mail.com', label: 'Email' },
    { icon: 'code', href: 'https://github.com/HasanLabib', label: 'GitHub' },
    { icon: 'group', href: 'https://www.linkedin.com/in/hasan-imtiaz-labib/', label: 'LinkedIn' }
  ];

  return (
    <motion.footer 
      className="py-12 border-t border-gray-200 dark:border-gray-800 mt-12 bg-gray-100 dark:bg-background-dark"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          ref={logoMagneticRef}
          className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2 cursor-pointer"
          variants={fadeInUp}
          whileHover={{
            scale: 1.05,
            color: "#3B82F6",
            textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
          }}
        >
          S. M. Hasan Imtiaz Labib
        </motion.h3>
        
        <motion.p 
          className="text-sm text-gray-500 dark:text-gray-400 mb-6"
          variants={fadeInUp}
        >
          Designed with love, all right reserved for Labib.
        </motion.p>
        
        <motion.div 
          className="flex justify-center gap-6"
          variants={staggerContainer}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary hover:shadow-lg transition-all"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                backgroundColor: "#3B82F6",
                color: "#FFFFFF",
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <motion.span 
                className="material-icons text-xl"
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.6 }}
              >
                {link.icon}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
        
        {/* Animated copyright text */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xs text-gray-400 dark:text-gray-500"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            © 2024 Jensen Omega. Built with React & Framer Motion.
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;