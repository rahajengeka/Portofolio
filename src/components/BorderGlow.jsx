import React, { useRef, useState, useCallback } from 'react';

/**
 * BorderGlow - React Bits-style cursor-following glowing border.
 * Glow follows the mouse and intensifies near edges.
 */
export default function BorderGlow({
  glowColor = '#38bdf8',
  glowColor2 = '#3b82f6',
  glowRadius = 200,
  glowIntensity = 0.8,
  borderRadius = '20px',
  borderWidth = 1,
  style = {},
  className = '',
  children,
}) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: -999, y: -999 });
  }, []);

  const gBg = isHovered
    ? `radial-gradient(${glowRadius}px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, ${glowColor2}, transparent 80%)`
    : 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))';

  const glowBorderStyle = {
    position: 'absolute',
    inset: 0,
    borderRadius,
    padding: `${borderWidth}px`,
    background: gBg,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    opacity: isHovered ? glowIntensity : 0.35,
    transition: isHovered ? 'opacity 0.12s ease' : 'opacity 0.6s ease',
    pointerEvents: 'none',
    zIndex: 1,
  };

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', borderRadius, ...style }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={glowBorderStyle} />
      <div style={{ position: 'relative', zIndex: 2, borderRadius, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}