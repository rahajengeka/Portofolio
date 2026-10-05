import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SplitText from './SplitText';
import ShinyText from './ShinyText';

/**
 * InteractiveLanyard - Physics-Driven Hanging Lanyard with React Bits Typography
 * Features:
 * - Extended length lanyard ribbon
 * - Realistic "tossed / thrown in" entrance swing animation oscillating left-and-right
 * - Pure React Bits animated typography badge (replacing previous ID card format)
 * - Spring-loaded physics drag and pendulum dynamics
 */
export default function InteractiveLanyard({ showHelper = false, image = null, frontImage = null }) {
  const displayImage = image || frontImage;
  const [entranceDone, setEntranceDone] = useState(false);

  // Motion value for interactive dragging
  const dragX = useMotionValue(0);

  // Smooth spring for reactive swing rotation when dragged
  const smoothX = useSpring(dragX, { stiffness: 420, damping: 22 });

  // As x moves from -160 to +160px, card tilts between -24deg and +24deg
  const tiltRotate = useTransform(smoothX, [-160, 160], [-24, 24]);

  // Dynamic light sheen moves as the card tilts
  const sheenX = useTransform(smoothX, [-160, 160], ['-20%', '130%']);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        userSelect: 'none',
        touchAction: 'none',
        zIndex: 25
      }}
    >
      {/* Optional Interactive Helper */}
      {showHelper && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          style={{
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.45)',
            borderRadius: '9999px',
            padding: '5px 14px',
            fontSize: '0.68rem',
            fontWeight: 700,
            color: '#38bdf8',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6), 0 0 12px rgba(56, 189, 248, 0.25)',
            backdropFilter: 'blur(12px)',
            pointerEvents: 'none'
          }}
        >
          <Sparkles size={12} color="#38bdf8" />
          <span>✦ Swipe to swing</span>
        </motion.div>
      )}

      {/* Anchor Wall Peg / Ceiling Mount */}
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #cbd5e1 0%, #475569 60%, #0f172a 100%)',
          border: '2px solid rgba(255, 255, 255, 0.35)',
          boxShadow: '0 4px 14px rgba(0,0,0,0.85), 0 0 10px rgba(56,189,248,0.4)',
          zIndex: 30,
          marginBottom: '-5px',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '5px',
            left: '5px',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.7)',
            filter: 'blur(1px)'
          }}
        />
      </div>

      {/* 
        Tossed / Thrown-In Entrance Swinger:
        Starts rotated at -36deg and thrown down, then oscillates left & right:
        -36° -> +28° -> -20° -> +14° -> -8° -> +4° -> -1.5° -> 0°
      */}
      <motion.div
        initial={{
          rotate: -36,
          y: -90,
          opacity: 0,
          scale: 0.95
        }}
        animate={{
          rotate: [-36, 28, -20, 14, -8, 4, -1.5, 0],
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.35 },
          scale: { duration: 0.8, ease: 'easeOut' },
          rotate: {
            duration: 3.4,
            times: [0, 0.22, 0.42, 0.58, 0.72, 0.84, 0.93, 1],
            ease: 'easeInOut'
          }
        }}
        onAnimationComplete={() => setEntranceDone(true)}
        style={{
          transformOrigin: 'top center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Physics Hanging Draggable Body */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.65}
          dragTransition={{
            bounceStiffness: 420,
            bounceDamping: 12
          }}
          style={{
            x: dragX,
            rotate: entranceDone ? tiltRotate : 0,
            transformOrigin: 'top center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'grab'
          }}
          whileTap={{ cursor: 'grabbing', scale: 1.02 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* 1. Extended Lanyard Woven Fabric Ribbon (Height increased for longer look) */}
          <div
            style={{
              width: '32px',
              height: '210px', // Extended longer lanyard strap
              background: 'linear-gradient(90deg, #090e17 0%, #1e293b 25%, #2563eb 50%, #1e293b 75%, #090e17 100%)',
              position: 'relative',
              boxShadow: '0 10px 24px rgba(0, 0, 0, 0.75)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.14)',
              borderRight: '1px solid rgba(255, 255, 255, 0.14)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Edge Stitches */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '2px',
                right: '2px',
                borderLeft: '1px dashed rgba(96, 165, 250, 0.5)',
                borderRight: '1px dashed rgba(96, 165, 250, 0.5)',
                pointerEvents: 'none'
              }}
            />

            {/* Top Metallic Slider Ring */}
            <div
              style={{
                width: '30px',
                height: '8px',
                background: 'linear-gradient(180deg, #cbd5e1 0%, #64748b 70%, #1e293b 100%)',
                marginTop: '16px',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.6)',
                zIndex: 2
              }}
            />

            {/* Woven Identity Name Along Longer Ribbon */}
            <span
              style={{
                fontSize: '0.44rem',
                color: 'rgba(255, 255, 255, 0.9)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                letterSpacing: '3.2px',
                fontWeight: 800,
                textShadow: '0 1px 3px rgba(0,0,0,0.9)',
                zIndex: 2
              }}
            >
              ✦ RAHAJENG • EKA • PORTFOLIO ✦
            </span>

            {/* Lower Accent Stitch */}
            <div style={{ width: '100%', height: '10px' }} />
          </div>

          {/* 2. Metal Swivel Hardware & Clasp */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '-1px',
              zIndex: 3
            }}
          >
            {/* Clamp */}
            <div
              style={{
                width: '30px',
                height: '9px',
                background: 'linear-gradient(180deg, #cbd5e1 0%, #475569 60%, #1e293b 100%)',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.6)'
              }}
            />
            {/* Ring */}
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: '2.5px solid #cbd5e1',
                margin: '-2px 0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.45)'
              }}
            />
            {/* Carabiner Hook */}
            <div
              style={{
                width: '12px',
                height: '17px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #94a3b8 40%, #334155 100%)',
                borderRadius: '3px 3px 6px 6px',
                boxShadow: '0 3px 8px rgba(0,0,0,0.7)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: '-2px',
                  top: '4px',
                  width: '3px',
                  height: '7px',
                  background: '#64748b',
                  borderRadius: '1px'
                }}
              />
            </div>
          </div>

          {/* 
            3. Pure React Bits Typography Badge (Replaces old ID card)
            Ultra-sleek frosted obsidian glass with gold & cyan illumination
          */}
          <div
            style={{
              marginTop: '-3px',
              width: '320px',
              background: 'linear-gradient(165deg, rgba(17, 24, 39, 0.94) 0%, rgba(6, 10, 20, 0.96) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '20px 18px 20px 18px',
              border: '1.5px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Top Carabiner Punch Hole */}
            <div
              style={{
                width: '38px',
                height: '7px',
                background: '#040711',
                borderRadius: '9999px',
                marginBottom: '14px',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9)'
              }}
            />

            {/* Dynamic Light Sheen across card */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-70%',
                left: sheenX,
                width: '160%',
                height: '240%',
                background: 'linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 70%)',
                pointerEvents: 'none',
                transform: 'rotate(-25deg)'
              }}
            />

            {/* Top Pill / Badge Tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                marginBottom: '14px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#38bdf8',
                  boxShadow: '0 0 8px #38bdf8'
                }}
              />
              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  letterSpacing: '1.8px',
                  color: '#93c5fd',
                  textTransform: 'uppercase'
                }}
              >
                PORTFOLIO · 2026
              </span>
            </div>

            {/* Profile Avatar / Photo if provided */}
            {displayImage && (
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '2px solid rgba(56, 189, 248, 0.55)',
                  boxShadow: '0 10px 28px rgba(0, 0, 0, 0.75), 0 0 20px rgba(56, 189, 248, 0.25)',
                  marginBottom: '14px',
                  backgroundColor: '#0a0f1d'
                }}
              >
                <img
                  src={displayImage}
                  alt="Rahajeng Eka Wahyuningtiyas"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 18%'
                  }}
                />
              </div>
            )}

            {/* 
              MAIN TEXT: React Bits SplitText Animation
              Staggers character by character with 3D tilt, spring bounce & blur
            */}
            <div style={{ margin: '4px 0 8px 0', textAlign: 'center' }}>
              <SplitText
                text="RAHAJENG EKA"
                delay={38}
                initialDelay={0.3}
                style={{
                  fontSize: '1.48rem',
                  fontWeight: 900,
                  letterSpacing: '2.8px',
                  color: '#ffffff',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textShadow: '0 0 24px rgba(96, 165, 250, 0.6), 0 2px 10px rgba(0,0,0,0.9)'
                }}
              />
            </div>

            {/* 
              SUBTITLE TEXT: React Bits ShinyText Animation
              Gleaming metallic gold / cyan shimmer sweeping continuously
            */}
            <div style={{ marginBottom: '16px', textAlign: 'center' }}>
              <ShinyText
                text="✦ SOFTWARE ARTISAN & ENGINEER ✦"
                speed={2.8}
                shimmerColor="#ffffff"
                baseColor="#93c5fd"
                style={{
                  fontSize: '0.70rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textShadow: '0 0 12px rgba(56, 189, 248, 0.45)'
                }}
              />
            </div>

            {/* Bottom High-Tech Status Console Bar */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.035)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 6px #22c55e'
                  }}
                />
                <span
                  style={{
                    fontSize: '0.52rem',
                    color: '#94a3b8',
                    fontFamily: 'monospace',
                    letterSpacing: '1px'
                  }}
                >
                  STATUS: LIVE
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.52rem',
                  color: '#38bdf8',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  fontFamily: 'monospace'
                }}
              >
                SWING PHYSICS
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
