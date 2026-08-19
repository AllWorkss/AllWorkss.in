import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function Card3DTilt({ children, className = '', maxTilt = 12 }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0.15, 0, 0.15]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {/* Holographic Glare Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl z-20 transition-opacity duration-300"
        style={{
          opacity: glareOpacity,
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
