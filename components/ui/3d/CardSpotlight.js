import React, { useState, useRef } from 'react';

export default function CardSpotlight({ children, className = '', spotlightColor = 'rgba(59, 130, 246, 0.18)' }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl bg-slate-900/90 backdrop-blur-md border border-slate-800 transition-colors duration-300 ${className}`}
    >
      {/* Mouse-following glowing radial spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      
      {/* Subtle border highlight line follow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 border border-blue-500/50"
        style={{
          opacity,
          WebkitMaskImage: `radial-gradient(240px circle at ${position.x}px ${position.y}px, black 0%, transparent 80%)`,
          maskImage: `radial-gradient(240px circle at ${position.x}px ${position.y}px, black 0%, transparent 80%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
