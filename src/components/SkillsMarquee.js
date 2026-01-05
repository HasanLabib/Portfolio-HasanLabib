import React from 'react';
import { motion } from 'framer-motion';

const SkillsMarquee = () => {
  const skills = [
    { name: 'HTML', icon: '🌐', color: '#E34F26' },
    { name: 'CSS', icon: '🎨', color: '#1572B6' },
    { name: 'Tailwind CSS', icon: '💨', color: '#38B2AC' },
    { name: 'Javascript', icon: '⚡', color: '#F7DF1E' },
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'React Router', icon: '🛣️', color: '#CA4245' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'Express', icon: '🚀', color: '#000000' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
    { name: 'JWT', icon: '🔐', color: '#D63AFF' },
    { name: 'Git', icon: '📝', color: '#F05032' },
    { name: 'Postman', icon: '📮', color: '#FF6C37' },
  ];

  // Create seamless marquee animation
  const MarqueeRow = ({ items, direction = 'left', speed = 30 }) => {
    const duplicatedItems = [...items, ...items, ...items]; // Triple for smoother loop
    const isReverse = direction === 'right';
    
    return (
      <div className="flex">
        <motion.div
          className="flex gap-6 items-center whitespace-nowrap"
          animate={{
            x: isReverse ? [0, items.length * 200] : [0, -items.length * 200]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-white/40 dark:border-gray-700/60 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group min-w-max"
              style={{
                boxShadow: `0 4px 15px ${skill.color}15`
              }}
            >
              <span 
                className="text-2xl group-hover:scale-110 transition-transform duration-200" 
                role="img" 
                aria-label={skill.name}
              >
                {skill.icon}
              </span>
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  // Split skills into two rows
  const firstRowSkills = skills.slice(0, 6);
  const secondRowSkills = skills.slice(6, 12);

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-gray-50/30 via-primary/3 to-gray-50/30 dark:from-gray-900/30 dark:via-primary/3 dark:to-gray-900/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* First marquee row - moving left */}
      <div className="mb-4">
        <MarqueeRow items={firstRowSkills} direction="left" speed={25} />
      </div>
      
      {/* Second marquee row - moving right */}
      <div>
        <MarqueeRow items={secondRowSkills} direction="right" speed={30} />
      </div>
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default SkillsMarquee;