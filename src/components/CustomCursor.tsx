import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.interactive-hover') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleElementHover);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center sharp dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 12 : 8,
          height: isHovered ? 12 : 8,
          borderRadius: '50%',
          backgroundColor: '#2563eb',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: isHovered
            ? '0 0 12px rgba(37, 99, 235, 0.5)'
            : '0 0 8px rgba(37, 99, 235, 0.3)',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, box-shadow 0.2s'
        }}
      />

      {/* Smooth outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 46 : 32,
          height: isHovered ? 46 : 32,
          borderRadius: '50%',
          border: isHovered
            ? '1.5px solid rgba(37, 99, 235, 0.6)'
            : '1.5px solid rgba(37, 99, 235, 0.35)',
          backgroundColor: isHovered
            ? 'rgba(37, 99, 235, 0.08)'
            : 'rgba(37, 99, 235, 0.03)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.25s ease-out, height 0.25s ease-out, border 0.2s, background-color 0.2s'
        }}
      />
    </>
  );
};
