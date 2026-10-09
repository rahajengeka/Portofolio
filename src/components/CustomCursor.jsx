import { useEffect, useRef } from 'react';

/**
 * CustomCursor — Lightweight version.
 * - Single dot, follows cursor instantly via direct DOM style
 * - Hover expand effect via CSS class only (no heavy listeners)
 * - No rAF loop, no getComputedStyle, no lag
 */
export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onDown = () => cursor.classList.add('cur-click');
    const onUp   = () => cursor.classList.remove('cur-click');

    const onEnter = (e) => {
      const t = e.target;
      const isInteractive =
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.closest?.('a') ||
        t.closest?.('button');
      cursor.classList.toggle('cur-hover', !!isInteractive);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup',   onUp,   { passive: true });
    window.addEventListener('mouseover', onEnter, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      window.removeEventListener('mouseover', onEnter);
    };
  }, []);

  return (
    <>
      <style>{`
        * { cursor: none !important; }

        .custom-cursor {
          position: fixed;
          top: 0; left: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 10px 4px rgba(56,189,248,0.6);
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          transition:
            width  0.18s cubic-bezier(0.16,1,0.3,1),
            height 0.18s cubic-bezier(0.16,1,0.3,1),
            background 0.18s ease,
            box-shadow 0.18s ease;
          mix-blend-mode: plus-lighter;
        }

        .custom-cursor.cur-hover {
          width: 28px;
          height: 28px;
          background: rgba(56,189,248,0.15);
          box-shadow:
            0 0 0 1.5px rgba(56,189,248,0.8),
            0 0 18px 4px rgba(56,189,248,0.3);
        }

        .custom-cursor.cur-click {
          width: 7px;
          height: 7px;
          box-shadow: 0 0 16px 6px rgba(56,189,248,0.9);
        }
      `}</style>

      <div ref={cursorRef} className="custom-cursor" />
    </>
  );
}