import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Sparkles,
  Mail,
  ArrowUp,
  ArrowUpRight,
  Code2,
  Palette,
  Copy,
  Check,
  Clock,
  Menu,
  X,
  Cpu,
  Download,
  Terminal
} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { styles } from './App.styles';
import ReactBitsLanyard from './components/ReactBitsLanyard';
import SplitText from './components/SplitText';
import BorderGlow from './components/BorderGlow';
import CustomCursor from './components/CustomCursor';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Typewriter effect phrases
  const words = [
    "React & Vite.",
    "Flutter & Dart.",
    "Laravel & PHP.",
    "Next.js.",
    "Clean Architecture."
  ];
  const [wordIdx, setWordIdx] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Scroll animations
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  const bgTextScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const bgTextOpacity = useTransform(scrollY, [0, 450], [0.65, 0.12]);
  const parallaxImageScale = useTransform(scrollY, [0, 600], [1, 0.94]);
  const parallaxImageY = useTransform(scrollY, [0, 600], [0, 45]);

  // Real-time Malang clock (WIB / UTC+7)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter logic
  useEffect(() => {
    let timer;
    const currentWord = words[wordIdx];

    const handleTyping = () => {
      if (!isDeleting) {
        setSubText(currentWord.substring(0, subText.length + 1));
        if (subText === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setSubText(currentWord.substring(0, subText.length - 1));
        if (subText === '') {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }
      }
      timer = setTimeout(handleTyping, isDeleting ? 35 : 85);
    };

    if (!loading) {
      timer = setTimeout(handleTyping, 90);
    }
    return () => clearTimeout(timer);
  }, [subText, isDeleting, wordIdx, loading]);

  // General listeners & responsive check
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 890);
    };
    checkDevice();

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkDevice);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("rahajengg29@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        .bg-backdrop-text {
          white-space: nowrap !important;
          letter-spacing: 0.08em !important;
        }
        .nav-item-link {
          transition: all 0.3s ease;
        }
        .nav-item-link:hover {
          color: #38bdf8 !important;
        }
        /* === Glow Border Cards === */
        @keyframes glow-border-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(56,189,248,0), 0 20px 50px rgba(0,0,0,0.5); }
          50% { box-shadow: 0 0 18px 3px rgba(56,189,248,0.18), 0 20px 50px rgba(0,0,0,0.5); }
        }
        .card-project {
          animation: glow-border-pulse 3.5s ease-in-out infinite;
        }
        .card-project:hover .project-img {
          transform: scale(1.05);
        }
        .card-project:hover {
          border-color: rgba(56, 189, 248, 0.55) !important;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.22) !important;
          transform: translateY(-6px);
          animation: none;
        }
        .skill-box-glow {
          animation: glow-border-pulse 4s ease-in-out infinite;
        }
        .skill-box-glow:hover {
          border-color: rgba(56, 189, 248, 0.4) !important;
          box-shadow: 0 0 24px rgba(56, 189, 248, 0.18), 0 20px 50px rgba(0,0,0,0.5) !important;
          animation: none;
        }
        .interactive-btn {
          cursor: pointer;
        }
        /* === Elegant Loading Screen Animations === */
        @keyframes loader-name-in {
          0% { opacity: 0; transform: translateY(22px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes loader-profession-in {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes loader-line-in {
          0% { width: 0; opacity: 0; }
          100% { width: 60px; opacity: 1; }
        }
        @keyframes loader-dot-pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .loader-name-anim {
          animation: loader-name-in 1.1s cubic-bezier(0.16,1,0.3,1) 0.3s both;
        }
        .loader-profession-anim {
          animation: loader-profession-in 1.0s cubic-bezier(0.16,1,0.3,1) 0.85s both;
        }
        .loader-line-anim {
          animation: loader-line-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both;
        }
        .loader-dot-1 { animation: loader-dot-pulse 1.4s ease-in-out 1.4s infinite; }
        .loader-dot-2 { animation: loader-dot-pulse 1.4s ease-in-out 1.6s infinite; }
        .loader-dot-3 { animation: loader-dot-pulse 1.4s ease-in-out 1.8s infinite; }
        @media (max-width: 1040px) and (min-width: 891px) {
          .nav-desktop { gap: 14px !important; }
          .nav-item-link { font-size: 0.78rem !important; }
        }
        @media (max-width: 890px) {
          .nav-desktop { display: none !important; }
          .mobile-menu-trigger { display: flex !important; }
          .hero-section-wrap {
            height: auto !important;
            min-height: 100vh;
            padding: 120px 5% 70px 5% !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            align-items: center !important;
          }
          .hero-img-wrap {
            height: 42vw !important;
            min-height: 260px !important;
            max-height: 360px !important;
            margin: 16px 0 !important;
            width: 100% !important;
          }
          .info-pos-static {
            position: relative !important;
            top: unset !important;
            bottom: unset !important;
            left: unset !important;
            right: unset !important;
            text-align: center !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 8px 0;
            justify-content: center !important;
          }
          .bg-backdrop-text {
            font-size: 18vw !important;
            white-space: pre-line !important;
            line-height: 1 !important;
          }
          .portfolio-grid-responsive {
            grid-template-columns: 1fr !important;
          }
          .skills-wrap-responsive {
            flex-direction: column !important;
          }
          .hero-cta-group-resp {
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
          .contact-actions-resp {
            flex-direction: column !important;
            align-items: center !important;
          }
          .social-links-resp {
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .hero-img-wrap {
            height: 55vw !important;
            min-height: 200px !important;
          }
        }
        @media (min-width: 891px) {
          .mobile-menu-trigger { display: none !important; }
          .mobile-nav-drawer { display: none !important; }
        }
      `}</style>

      {/* Top Reading Progress Line */}
      <motion.div style={{ ...styles.progressBar, scaleX }} />

      {/* Custom Cursor — rAF smooth glowing cursor (Desktop only) */}
      {!isMobile && <CustomCursor />}

      {/* Toast Notification on Email Copy */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={styles.toast}
          >
            <Check size={16} color="#38bdf8" />
            <span>Email copied to clipboard · rahajengg29@gmail.com</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. LOADING SCREEN — Lanyard + Elegant Text */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="split-loader"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            style={{
              ...styles.loaderContainer,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
              cursor: 'pointer',
              padding: '20px 5%'
            }}
            onClick={() => setLoading(false)}
          >
            {/* Ambient Orbs */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

            {/* Flex Wrapper — stops click propagation so lanyard is draggable */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column-reverse' : 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '1100px',
                gap: isMobile ? '24px' : '60px',
                zIndex: 10
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* LEFT: Text content — animates in after lanyard */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  flex: '1 1 45%',
                  maxWidth: '420px',
                  textAlign: isMobile ? 'center' : 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : 'flex-start',
                  gap: '10px'
                }}
              >
                {/* Decorative thin line */}
                <div className="loader-line-anim" style={{
                  height: '1px',
                  width: '50px',
                  background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.7), transparent)',
                  borderRadius: '9999px',
                  marginBottom: '4px'
                }} />

                {/* Name — Serif, lighter weight, smaller than before */}
                <h1 style={{
                  fontFamily: "'Cormorant Garamond', 'Garamond', serif",
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  fontWeight: '300',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  lineHeight: 1.15,
                  margin: 0,
                  textShadow: '0 0 50px rgba(56,189,248,0.15)'
                }}>
                  Rahajeng Eka
                  <br />
                  <span style={{
                    fontStyle: 'italic',
                    fontWeight: '300',
                    background: 'linear-gradient(135deg, #e2e8f0 0%, #38bdf8 60%, #93c5fd 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Wahyuningtiyas
                  </span>
                </h1>

                {/* Profession */}
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(0.68rem, 1.2vw, 0.82rem)',
                  fontWeight: '400',
                  letterSpacing: '0.3em',
                  color: '#64748b',
                  textTransform: 'uppercase',
                  marginTop: '4px'
                }}>
                  Software Engineer · Creative Developer
                </p>

                {/* Progress bar */}
                <div style={{ marginTop: '28px', width: '100%', maxWidth: '220px' }}>
                  <div style={styles.loaderTrack}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3.0, ease: [0.16, 1, 0.3, 1] }}
                      style={styles.loaderFill}
                    />
                  </div>
                </div>

                {/* Dots */}
                <div style={{ display: 'flex', gap: '7px', marginTop: '16px', alignItems: 'center' }}>
                  <div className="loader-dot-1" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#38bdf8' }} />
                  <div className="loader-dot-2" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#60a5fa' }} />
                  <div className="loader-dot-3" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#93c5fd' }} />
                </div>

                <span style={{ marginTop: '20px', fontSize: '0.65rem', color: '#334155', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Tap anywhere to skip
                </span>
              </motion.div>

              {/* RIGHT: Lanyard — loads immediately, no delay */}
              <div style={{
                flex: '1 1 50%',
                maxWidth: '480px',
                height: isMobile ? '560px' : '500px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <ReactBitsLanyard frontImage="/foto-rahajeng.webp" />
                <div style={{ marginTop: '8px', fontSize: '0.7rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={11} color="#38bdf8" />
                  <span>Interactive 3D · Drag to swing</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={styles.body}>
        {/* Ambient Moving Shadow & Colors Canvas */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          {/* Orb 1: Royal Blue Drift */}
          <div style={{
            position: 'absolute',
            top: '8%',
            left: '10%',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.20) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
            filter: 'blur(95px)',
            animation: 'float-orb-1 18s ease-in-out infinite'
          }} />

          {/* Orb 2: Electric Cyan & Azure Glow */}
          <div style={{
            position: 'absolute',
            bottom: '12%',
            right: '8%',
            width: '680px',
            height: '680px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(37, 99, 235, 0.06) 45%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'float-orb-2 22s ease-in-out infinite'
          }} />

          {/* Orb 3: Deep Indigo / Violet Shadow Aura */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '32%',
            width: '540px',
            height: '540px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'float-orb-3 25s ease-in-out infinite'
          }} />
        </div>

        {/* Floating Navigation Pill */}
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={styles.header}
        >
          <a
            href="#home"
            style={styles.logoContainer}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <span style={styles.logo}>RAHAJENG</span>
            <span style={styles.logoAccent}>EKA</span>
          </a>

          {/* Desktop Nav: Kept concise (About Me, Projects, Tech Tools, Contact) */}
          <nav style={styles.nav} className="nav-desktop">
            <a href="#about" style={styles.navLink} className="nav-item-link">About Me</a>
            <a href="#portfolio" style={styles.navLink} className="nav-item-link">Projects</a>
            <a href="#skills" style={styles.navLink} className="nav-item-link">Tech & Tools</a>
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: '0 6px 24px rgba(56, 189, 248, 0.45)' }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              style={styles.navLinkContact}
            >
              <Sparkles size={14} />
              Let's Connect
            </motion.a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#38bdf8',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px'
            }}
            className="mobile-menu-trigger"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.header>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'fixed',
                top: '80px',
                left: '20px',
                right: '20px',
                backgroundColor: 'rgba(10, 13, 22, 0.96)',
                backdropFilter: 'blur(24px)',
                borderRadius: '24px',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '28px 24px',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7)'
              }}
              className="mobile-nav-drawer"
            >
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', letterSpacing: '1px' }}
              >
                About Me
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', letterSpacing: '1px' }}
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', letterSpacing: '1px' }}
              >
                Tech & Tools
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  ...styles.navLinkContact,
                  justifyContent: 'center',
                  marginTop: '10px'
                }}
              >
                Let's Connect
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. HERO / ABOUT ME SECTION */}
        <section id="about" style={styles.heroSection} className="hero-section-wrap">
          <div id="home" style={{ position: 'absolute', top: 0 }} />
          <div style={styles.heroAmbientAura}></div>
          <div style={styles.heroBlurBg}></div>

          {/* Subtle Parallax Editorial Backdrop */}
          <motion.h1
            className="bg-backdrop-text"
            style={{
              ...styles.bgBackdropText,
              scale: bgTextScale,
              opacity: bgTextOpacity
            }}
          >
            {"Portfolio"}
          </motion.h1>

          {/* Central Portrait with Studio Rim Glow */}
          <div style={styles.heroImageWrapper} className="hero-img-wrap">
            <div style={styles.heroPortraitGlow}></div>
            {!loading && (
              <motion.img
                style={{
                  ...styles.heroImage,
                  scale: parallaxImageScale,
                  y: parallaxImageY
                }}
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                src="/foto-rahajeng.webp"
                alt="Rahajeng Eka Wahyuningtiyas"
                className="hero-image"
              />
            )}
          </div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={styles.infoTopLeft}
            className="info-pos-static"
          >
            <Sparkles size={14} color="#38bdf8" />
            <span>Software Engineer & Creative Technologist</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={styles.infoTopRight}
            className="info-pos-static"
          >
            <span className="jewel-dot"></span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Bottom Left Intro & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={styles.infoBottomLeft}
            className="info-pos-static"
          >
            <h2 style={styles.heroLeadTitle}>
              Software Engineer & <br />
              <span className="gradient-text-cyan" style={{ fontStyle: 'italic', fontWeight: '700' }}>
                Creative Developer.
              </span>
            </h2>
            <p style={styles.shortDesc}>
              Halo, saya <b>Rahajeng Eka Wahyuningtiyas</b> — Software Engineer &amp; Frontend Developer dari Universitas Brawijaya, yang fokus membangun aplikasi web modern, antarmuka yang intuitif, dan sistem mobile cross-platform.
            </p>
            <p style={{ ...styles.shortDesc, marginTop: '6px', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
              Currently building with{' '}
              <span style={{ color: '#38bdf8', fontWeight: '700' }}>
                {subText}
              </span>
              <span style={{ color: '#38bdf8', fontWeight: 'bold', lineHeight: 1 }}>|</span>
            </p>

            {/* Hero CTA Group — Curated Projects + Download CV only */}
            <div style={styles.heroCtaGroup} className="hero-cta-group-resp">
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: '0 6px 24px rgba(37, 99, 235, 0.45)' }}
                whileTap={{ scale: 0.96 }}
                href="#portfolio"
                style={styles.heroCtaPrimary}
              >
                <span>Curated Projects</span>
                <ArrowUpRight size={15} />
              </motion.a>

              {/* DOWNLOAD CV BUTTON */}
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(56, 189, 248, 0.4)', borderColor: 'rgba(56, 189, 248, 0.7)' }}
                whileTap={{ scale: 0.96 }}
                href="/CV_Rahajeng.pdf"
                download="CV_Rahajeng.pdf"
                style={styles.heroCtaCv}
                title="Download Curriculum Vitae (PDF)"
              >
                <Download size={15} />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Right Location & Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={styles.infoBottomRight}
            className="info-pos-static"
          >
            <span style={styles.locationLabel}>Malang, Indonesia</span>
            <span style={styles.locationSub}>
              {localTime ? `${localTime} WIB · Universitas Brawijaya` : 'Universitas Brawijaya'}
            </span>
          </motion.div>
        </section>

        {/* 2. SECTION: SELECTED WORKS / PROJECTS */}
        <section id="portfolio" style={styles.section}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={styles.sectionHeader}
          >
            <span style={styles.sectionEyebrow}>
              <Sparkles size={13} color="#38bdf8" />
              Selected Portfolio
            </span>
            <h2 style={styles.sectionTitle}>Curated Projects</h2>
            <p style={styles.sectionSubtitle}>
              Karya terpilih yang mengawinkan ketahanan arsitektur kode dengan antarmuka digital yang intuitif dan berkinerja tinggi.
            </p>
            <div style={styles.titleDivider}></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.08 }}
            style={styles.portfolioGrid}
          >
            <ProjectCard
              title="Smart Oryza Platform"
              tags={["Laravel", "Flutter", "Agri-Tech", "IoT"]}
              desc="Admin dashboard agrikultur yang terkoneksi langsung ke perangkat IoT — mengintegrasikan pemantauan sensor real-time, analitik web, dan mobile dashboard untuk efisiensi rantai pasok pangan."
              link="http://smartoryza.site"
              image="/project-smartoryza.png"
              category="Web & Mobile System"
            />
            <ProjectCard
              title="SIMIKP — Diskominfo Kota Batu"
              tags={["React", "Web App", "E-Government", "Public Comm"]}
              desc="Sistem Informasi Manajemen Informasi dan Komunikasi Publik (SIMIKP) untuk Diskominfo Kota Batu guna sentralisasi data informasi kedinasan dan portal dashboard terpadu."
              link="https://simikp.onrender.com/login"
              linkText="Visit Portal"
              image="/project-simikp.png"
              category="E-Government System"
            />
            <ProjectCard
              title="SIA Sekolah — Platform Akademik"
              tags={["Flutter", "Dart", "Multi-Role", "Academic System"]}
              desc="Sistem Informasi Akademik sekolah terpadu berbasis Flutter untuk administrasi, rekapitulasi penilaian Kurikulum Merdeka, statistik & rapor digital, serta sinkronisasi multi-role."
              link="https://github.com/rahajengeka/sia_sekolah"
              linkText="View Repository"
              image="/project-siasekolah.png"
              category="Cross-Platform System"
            />
            <ProjectCard
              title="Pintar Ceria — Web Edu"
              tags={["Native PHP", "UI/UX", "Interactive", "Education"]}
              desc="Platform pembelajaran digital gamified dengan antarmuka child-friendly yang interaktif, intuitif, dan responsif untuk siswa Sekolah Dasar."
              link="https://github.com/rahajengeka/Pintar-Ceria"
              linkText="View Repository"
              image="/project-edukasi.png"
              category="Interactive Learning"
            />
            <ProjectCard
              title="Tatik Catering System"
              tags={["Laravel", "Web Dev", "Culinary Commerce", "Information System"]}
              desc="Sistem katalog kuliner modern berbasis Laravel yang dilengkapi fitur kalkulator estimasi pesanan katering dan alur reservasi pesanan terpadu."
              link="https://tatik-catering-web.vercel.app/"
              linkText="Visit Website"
              image="/project-catering.png"
              category="Bespoke Information System"
            />
          </motion.div>
        </section>

        {/* 3. SECTION: TECH TOOLS & COMPETENCIES */}
        <section id="skills" style={styles.section}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={styles.sectionHeader}
          >
            <span style={styles.sectionEyebrow}>
              <Cpu size={13} color="#38bdf8" />
              Technical Stack & Tools
            </span>
            <h2 style={styles.sectionTitle}>Tech & Tools</h2>
            <p style={styles.sectionSubtitle}>
              Bahasa pemrograman, framework modern, dan perangkat lunak desain yang saya gunakan dalam membangun produk digital.
            </p>
            <div style={styles.titleDivider}></div>
          </motion.div>

          <div style={styles.skillsWrapper} className="skills-wrap-responsive">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <BorderGlow
                style={styles.skillBox}
                borderRadius="26px"
                glowColor="#38bdf8"
                glowColor2="#6366f1"
                glowRadius={240}
                glowIntensity={0.75}
                borderWidth={1}
              >
                <div style={{ ...styles.skillBox, border: 'none', boxShadow: 'none' }}>
                  <div style={styles.skillBoxHeader}>
                    <div style={styles.skillBoxIconBadge}>
                      <Code2 size={22} />
                    </div>
                    <h3 style={styles.skillBoxTitle}>Frontend &amp; Engineering Stack</h3>
                  </div>
                  <div style={styles.skillTags}>
                    {[
                      { name: "React.js" },
                      { name: "Flutter" },
                      { name: "Laravel" },
                      { name: "JavaScript ESNext" },
                      { name: "PHP OOP" },
                      { name: "Tailwind CSS" },
                      { name: "HTML5 / CSS3" },
                      { name: "Git & GitHub" }
                    ].map(skill => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(56,189,248,0.5)', color: '#38bdf8' }}
                        style={styles.skillTag}
                      >
                        <span className="blue-dot"></span>
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>

            {/* Design & Tools */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <BorderGlow
                style={styles.skillBox}
                borderRadius="26px"
                glowColor="#38bdf8"
                glowColor2="#6366f1"
                glowRadius={240}
                glowIntensity={0.75}
                borderWidth={1}
              >
                <div style={{ ...styles.skillBox, border: 'none', boxShadow: 'none' }}>
                  <div style={styles.skillBoxHeader}>
                    <div style={styles.skillBoxIconBadge}>
                      <Palette size={22} />
                    </div>
                    <h3 style={styles.skillBoxTitle}>UI/UX Design &amp; Productivity Tools</h3>
                  </div>
                  <div style={styles.skillTags}>
                    {[
                      { name: "Figma Prototyping" },
                      { name: "UI/UX Wireframing" },
                      { name: "Design Systems" },
                      { name: "Canva Pro" },
                      { name: "CapCut Studio" },
                      { name: "VS Code" }
                    ].map(skill => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(56,189,248,0.5)', color: '#38bdf8' }}
                        style={styles.skillTag}
                      >
                        <span className="blue-dot"></span>
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          </div>
        </section>

        {/* 4. FOOTER & CONTACT */}
        <footer id="contact" style={styles.footer}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            style={styles.contactBox}
          >
            <span style={styles.sectionEyebrow}>
              <Mail size={13} color="#38bdf8" />
              Direct Inquiries
            </span>
            <h2 style={styles.contactHeading}>
              Let's Build Something <br />
              <span className="gradient-text-cyan" style={{ fontStyle: 'italic', fontWeight: '800' }}>
                Exceptional Together.
              </span>
            </h2>
            <p style={styles.contactSub}>
              Tertarik mendiskusikan peluang kolaborasi, proyek rekayasa perangkat lunak, atau pengembangan antarmuka UI/UX? Silakan hubungi saya melalui kanal di bawah.
            </p>

            <div style={styles.contactActions} className="contact-actions-resp">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(56, 189, 248, 0.45)' }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyEmail}
                style={styles.emailCopyBtn}
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email Address"}</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, borderColor: 'rgba(56, 189, 248, 0.5)' }}
                whileTap={{ scale: 0.96 }}
                href="mailto:rahajengg29@gmail.com"
                style={styles.directMailLink}
              >
                <Mail size={16} color="#38bdf8" />
                <span>Send Direct Mail</span>
              </motion.a>

              {/* Download CV button in Footer */}
              <motion.a
                whileHover={{ scale: 1.04, borderColor: 'rgba(56, 189, 248, 0.5)' }}
                whileTap={{ scale: 0.96 }}
                href="/CV_Rahajeng.pdf"
                download="CV_Rahajeng.pdf"
                style={{ ...styles.directMailLink, borderColor: 'rgba(56, 189, 248, 0.35)' }}
                title="Download CV (PDF)"
              >
                <Download size={16} color="#38bdf8" />
                <span>Download CV (PDF)</span>
              </motion.a>
            </div>

            <div style={styles.socialLinks} className="social-links-resp">
              <motion.a
                whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38bdf8' }}
                href="https://www.linkedin.com/in/rahajeng-eka-a18b7b320"
                target="_blank"
                rel="noreferrer"
                style={styles.socialBtn}
              >
                <FaLinkedinIn size={14} color="#38bdf8" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38bdf8' }}
                href="https://github.com/rahajengeka"
                target="_blank"
                rel="noreferrer"
                style={styles.socialBtn}
              >
                <FaGithub size={14} color="#38bdf8" />
                <span>GitHub</span>
              </motion.a>
            </div>

            <div style={{ ...styles.copyright, marginTop: '48px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p>© 2026 Rahajeng Eka Wahyuningtiyas · All rights reserved.</p>
              <p style={{ marginTop: '4px', fontSize: '0.72rem', color: '#475569' }}>
                Built with React, Three.js & Framer Motion
              </p>
            </div>
          </motion.div>
        </footer>

        {/* Back To Top Floating Action Button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(56, 189, 248, 0.5)' }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              style={styles.backToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// Subcomponent: Project Card
function ProjectCard({ title, tags, desc, link, linkText, image, category }) {
  return (
    <motion.div variants={itemVariants} style={{ height: '100%' }}>
      <BorderGlow
        style={{ ...styles.card, height: '100%', animation: 'none' }}
        className="card-project"
        borderRadius={styles.card.borderRadius || '20px'}
        glowColor="#38bdf8"
        glowColor2="#3b82f6"
        glowRadius={220}
        glowIntensity={0.85}
        borderWidth={1}
      >
        <div style={{ ...styles.card, border: 'none', boxShadow: 'none', height: '100%' }}>
          <div style={styles.cardTop}>
            <img
              src={image}
              alt={title}
              style={styles.cardImage}
              className="project-img"
            />
            <div style={styles.cardOverlay}></div>
          </div>
          <div style={styles.cardBody}>
            <div style={styles.cardTagGroup}>
              {tags.map(t => (
                <span key={t} style={styles.cardTag}>{t}</span>
              ))}
            </div>
            <h3 style={styles.cardTitle}>{title}</h3>
            <p style={styles.cardDesc}>{desc}</p>
            <div style={styles.cardFooter}>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.cardLink}
                >
                  <span>{linkText || (link.includes('github.com') ? 'View Repository' : 'Explore Platform')}</span>
                  <ArrowUpRight size={15} color="#38bdf8" />
                </a>
              ) : (
                <span style={styles.cardLinkDisabled}>
                  <span className="blue-dot"></span>
                  <span>Case Study / Local Repo</span>
                </span>
              )}
              <span style={{ fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                {category}
              </span>
            </div>
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

export default App;