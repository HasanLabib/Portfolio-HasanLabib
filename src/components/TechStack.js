import React from 'react';

const TechStack = () => {
  return (
    <div className="w-full bg-gray-200 dark:bg-[#0D1218] py-8 border-y border-gray-300 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4 text-gray-500 dark:text-gray-400 font-semibold text-lg uppercase tracking-wider">
          <span className="hover:text-primary transition-colors cursor-default">HTML5</span>
          <span className="hover:text-primary transition-colors cursor-default">CSS</span>
          <span className="hover:text-primary transition-colors cursor-default">Javascript</span>
          <span className="hover:text-primary transition-colors cursor-default">Node.js</span>
          <span className="hover:text-primary transition-colors cursor-default">React</span>
          <span className="hover:text-primary transition-colors cursor-default">Git</span>
          <span className="hover:text-primary transition-colors cursor-default">Github</span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;