import React from 'react';

export default function ShinyText({
  text,
  disabled = false,
  speed = 3.5,
  className = '',
  shimmerColor = '#ffffff',
  baseColor = 'inherit',
  style = {}
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        display: 'inline-block',
        color: baseColor,
        backgroundImage: disabled
          ? 'none'
          : `linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, ${shimmerColor} 50%, rgba(255, 255, 255, 0) 70%)`,
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: disabled ? 'unset' : 'text',
        backgroundClip: disabled ? 'unset' : 'text',
        animation: disabled ? 'none' : `shineSweep ${animationDuration} ease-in-out infinite`,
        ...style
      }}
    >
      {text}
      <style>{`
        @keyframes shineSweep {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </span>
  );
}
