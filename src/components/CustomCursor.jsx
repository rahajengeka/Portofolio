import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor — Sleek glowing cursor matching the portfolio blue/cyan theme.
 * - Inner dot: sharp, instant-follow
 * - Outer ring: smooth lag-follow with glow
 * - Hover state: ring expands + fills with glow on interactive elements
 * - Click state: burst scale animation
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onEnter = (e) => {
      const t = e.target;
      if (
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.closest('a') ||
        t.closest('button') ||
        t.getAttribute('role') === 'button' ||
        t.style?.cursor === 'pointer' ||
        window.getComputedStyle(t).cursor === 'pointer'
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const animate = () => {
      const ease = 0.11;
      ring.current.x += (pos.current.x - ring.current.x) * ease;
      ring.current.y += (pos.current.y - ring.current.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onEnter);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Inner dot — sharp, instant */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: '#38bdf8',
          boxShadow: '0 0 8px 3px rgba(56,189,248,0.8)',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          transition: clicked ? 'width 0.1s, height 0.1s' : 'none',
          mixBlendMode: 'plus-lighter',
        }}
      />

      {/* Outer ring — lagged, glowing */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovered ? '52px' : '36px',
          height: hovered ? '52px' : '36px',
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? 'rgba(56,189,248,0.9)' : 'rgba(56,189,248,0.55)'}`,
          background: hovered
            ? 'rgba(56,189,248,0.08)'
            : 'transparent',
          boxShadow: hovered
            ? '0 0 18px 4px rgba(56,189,248,0.35), inset 0 0 12px rgba(56,189,248,0.12)'
            : '0 0 10px 1px rgba(56,189,248,0.2)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform, width, height',
          transition: 'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
          transform: clicked ? 'translate(-50%,-50%) scale(0.8)' : undefined,
        }}
      />
    </>
  );
}