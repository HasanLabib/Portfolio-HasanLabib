import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useAnimations';
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem, cardHover } from '../utils/motionVariants';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'Tailwind CSS', color: '#38B2AC', svg: true },
    { name: 'Javascript', icon: 'fab fa-js', color: '#F7DF1E' },
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'React Router', color: '#CA4245', svg: true },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
    { name: 'Express', color: 'white', text: 'ex' },
    { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' },
    { name: 'JWT', icon: 'fas fa-key', color: '#D63AFF' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'Postman', icon: 'fas fa-paper-plane', color: '#FF6C37' }
  ];

  const titleRef = useScrollAnimation({
    from: { opacity: 0, x: -100, rotateY: -15 },
    to: { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: "power3.out" }
  });

  const skillsGridRef = useStaggerAnimation('.skill-card', {
    from: { opacity: 0, y: 50, scale: 0.8, rotateY: -15 },
    to: { opacity: 1, y: 0, scale: 1, rotateY: 0, duration: 0.6, ease: "back.out(1.7)" },
    stagger: 0.1
  });

  const renderIcon = (skill) => {
    if (skill.svg && skill.name === 'Tailwind CSS') {
      return (
        <motion.svg 
          className="w-8 h-8 text-gray-400 group-hover:text-[#38B2AC] transition-colors" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"></path>
        </motion.svg>
      );
    }
    
    if (skill.svg && skill.name === 'React Router') {
      return (
        <motion.svg 
          className="w-8 h-8 text-gray-400 group-hover:text-[#CA4245] transition-colors" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.2, rotate: 180 }}
          transition={{ duration: 0.4 }}
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
        </motion.svg>
      );
    }
    
    if (skill.text) {
      return (
        <motion.span 
          className="text-xl font-bold text-gray-400 group-hover:text-black dark:group-hover:text-white font-mono transition-colors"
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -5, 5, 0],
            color: skill.color 
          }}
          transition={{ duration: 0.3 }}
        >
          {skill.text}
        </motion.span>
      );
    }
    
    return (
      <motion.i 
        className={`${skill.icon} text-3xl text-gray-400 group-hover:text-[${skill.color}] transition-colors`}
        whileHover={{ 
          scale: 1.2,
          rotate: 360,
          color: skill.color
        }}
        transition={{ duration: 0.5 }}
      />
    );
  };

  return (
    <motion.section 
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800" 
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <motion.div 
          ref={titleRef}
          className="w-full md:w-1/3"
          variants={staggerContainer}
        >
          <div className="sticky top-24">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={fadeInLeft}
            >
              <motion.div 
                className="h-[1px] w-8 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-primary font-mono text-sm tracking-widest uppercase">Expertise</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6"
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
            >
              My <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Technical Skills.
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
              variants={fadeInUp}
            >
              I master a wide range of technologies to build end-to-end solutions. From pixel-perfect frontend to robust backend logic.
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          ref={skillsGridRef}
          className="w-full md:w-2/3"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card group bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#1E1E1E] rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary dark:hover:border-primary transition-colors duration-300 shadow-sm dark:shadow-none"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                custom={index}
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-gray-50 dark:bg-[#1E1E1E] flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                  whileHover={{
                    backgroundColor: `${skill.color}15`,
                    scale: 1.1,
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {renderIcon(skill)}
                </motion.div>
                
                <motion.span 
                  className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-primary dark:group-hover:text-white transition-colors text-center"
                  whileHover={{ 
                    color: skill.color,
                    scale: 1.05
                  }}
                >
                  {skill.name}
                </motion.span>
                
                {/* Animated background glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`
                  }}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;