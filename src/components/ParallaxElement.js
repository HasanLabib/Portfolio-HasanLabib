import React from 'react';
import { useParallax, useScrollPosition } from '../hooks/useParallax';

const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  rotate = false, 
  scale = false, 
  className = '',
  style = {} 
}) => {
  const parallaxOffset = useParallax(speed);
  const scrollPosition = useScrollPosition();

  const getTransform = () => {
    let transform = `translateY(${parallaxOffset}px)`;
    
    if (rotate) {
      transform += ` rotate(${scrollPosition * 0.02}deg)`;
    }
    
    if (scale) {
      const scaleValue = 1 + (scrollPosition * 0.0001);
      transform += ` scale(${scaleValue})`;
    }
    
    return transform;
  };

  return (
    <div 
      className={className}
      style={{
        ...style,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;