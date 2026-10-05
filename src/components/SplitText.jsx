import React from 'react';
import { motion } from 'framer-motion';

/**
 * SplitText - Premium Character-by-Character Stagger Animation (React Bits Style)
 * Splits text into individual animated characters with spring dynamics, 3D tilt, and blur transitions.
 */
export default function SplitText({
  text = '',
  className = '',
  delay = 40, // ms between each character
  initialDelay = 0.2, // seconds before starting
  animationFrom = { opacity: 0, transform: 'translate3d(0, 36px, 0) rotateX(40deg) scale(0.85)', filter: 'blur(10px)' },
  animationTo = { opacity: 1, transform: 'translate3d(0, 0, 0) rotateX(0deg) scale(1)', filter: 'blur(0px)' },
  easing = [0.22, 1, 0.36, 1], // snappy luxury cubic bezier
  style = {},
  charStyle = {},
  onLetterAnimationComplete
}) {
  const letters = Array.from(text);

  return (
    <span
      className={`react-bits-split-text ${className}`}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        perspective: '1000px',
        ...style
      }}
    >
      {letters.map((char, index) => {
        const isSpace = char === ' ';
        return (
          <motion.span
            key={index}
            initial={animationFrom}
            animate={animationTo}
            transition={{
              duration: 0.65,
              delay: initialDelay + (index * delay) / 1000,
              ease: easing
            }}
            onAnimationComplete={() => {
              if (index === letters.length - 1 && onLetterAnimationComplete) {
                onLetterAnimationComplete();
              }
            }}
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity, filter',
              whiteSpace: isSpace ? 'pre' : 'normal',
              ...charStyle
            }}
          >
            {isSpace ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </span>
  );
}
