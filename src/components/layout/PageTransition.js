// src/components/layout/PageTransition.js
import React, { useEffect, useRef } from 'react';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    const el = pageRef.current;
    
    // Set initial state
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(15px)';
      
      // Trigger animation after a small delay
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 50);
    }

    return () => {
      // Optional exit animation
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-15px)';
      }
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen w-full">
      {children}
    </div>
  );
};

export default PageTransition;