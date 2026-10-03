import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Mail, 
  ArrowUp, 
  ArrowUpRight, 
  Code2, 
  Palette, 
  Layers, 
  Copy, 
  Check, 
  GraduationCap, 
  Clock, 
  Menu, 
  X,
  Compass,
  MonitorCheck,
  Smartphone,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { styles } from './App.styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.18, delayChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
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
  const [sandboxTab, setSandboxTab] = useState('arch');
  const [dossierOpen, setDossierOpen] = useState(false);
  const [dossierTab, setDossierTab] = useState('metrics');

  // Typewriter effect phrases
  const words = [
    "Digital Precision.",
    "Editorial Aesthetics.",
    "Frontend Architecture.",
    "Color Harmonization."
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
    const timer = setTimeout(() => setLoading(false), 3200);
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
        .bg-backdrop-text {
          white-space: nowrap !important;
          letter-spacing: 0.08em !important;
        }
        .nav-item-link {
          transition: all 0.3s ease;
        }
        .nav-item-link:hover {
          color: #f7e7c4 !important;
        }
        .card-project:hover .project-img {
          transform: scale(1.05);
        }
        .card-project:hover {
          border-color: rgba(212, 175, 55, 0.45) !important;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.12) !important;
          transform: translateY(-6px);
        }
        .service-hover-card:hover {
          border-color: rgba(212, 175, 55, 0.4) !important;
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5), 0 0 20px rgba(212, 175, 55, 0.1) !important;
        }
        .interactive-btn {
          cursor: pointer;
        }
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
            padding: 130px 6% 60px 6% !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
          }
          .hero-img-wrap {
            height: 48vh !important;
            margin: 20px 0 !important;
          }
          .info-pos-static {
            position: relative !important;
            top: unset !important;
            bottom: unset !important;
            left: unset !important;
            right: unset !important;
            text-align: center !important;
            max-width: 100% !important;
            margin: 8px 0;
            justify-content: center !important;
          }
          .philo-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            padding: 36px 24px !important;
          }
          .bg-backdrop-text {
            font-size: 16vw !important;
            white-space: pre-line !important;
            line-height: 1 !important;
          }
        }
        @media (min-width: 891px) {
          .mobile-menu-trigger { display: none !important; }
          .mobile-nav-drawer { display: none !important; }
        }
      `}</style>

      {/* Top Reading Progress Line */}
      <motion.div style={{ ...styles.progressBar, scaleX }} />

      {/* Dual Luxury Cursor (Desktop Only) */}
      {!isMobile && !loading && (
        <>
          <motion.div 
            className="custom-cursor"
            animate={{ 
              x: mousePos.x, 
              y: mousePos.y,
              scale: cursorHovered ? 1.4 : 1,
              borderColor: cursorHovered ? '#f7e7c4' : 'rgba(212, 175, 55, 0.65)'
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.15 }}
            style={styles.customCursor}
          />
          <motion.div 
            className="custom-cursor-dot"
            animate={{ x: mousePos.x, y: mousePos.y }}
            transition={{ type: "spring", stiffness: 900, damping: 35 }}
            style={styles.customCursorDot}
          />
        </>
      )}

      {/* Toast Notification on Email Copy */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={styles.toast}
          >
            <Check size={16} color="#d4af37" />
            <span>Email copied to clipboard · rahajengg29@gmail.com</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Haute Couture Preloader with Hanging Lanyard */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="luxury-loader"
            exit={{ opacity: 0, scale: 0.97, y: -20, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
            style={styles.loaderContainer}
            onClick={() => setLoading(false)}
          >
            <div style={styles.loaderContent} onClick={(e) => e.stopPropagation()}>
              <HangingLanyard />

              <div style={styles.loaderTrack}>
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }} 
                  style={styles.loaderFill} 
                />
              </div>
              <motion.p 
                animate={{ opacity: [0.6, 1, 0.6] }} 
                transition={{ repeat: Infinity, duration: 1.8 }} 
                style={styles.loaderText}
              >
                Access Granted · Entering Portfolio
              </motion.p>
              <span 
                style={{ fontSize: '0.62rem', color: '#64748b', marginTop: '6px', letterSpacing: '0.4px', cursor: 'pointer' }}
                onClick={() => setLoading(false)}
              >
                (Klik untuk langsung masuk)
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={styles.body}>
        {/* Ambient Moving Shadow & Colors Canvas (Latar Belakang Bergerak) */}
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
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(37, 99, 235, 0.06) 45%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'float-orb-3 25s ease-in-out infinite'
          }} />
        </div>

        {/* Floating Navigation Pill */}
        <motion.header 
          initial={{ y: -60, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.9, delay: 1.8, ease: [0.16, 1, 0.3, 1] }} 
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

          {/* Desktop Nav */}
          <nav style={styles.nav} className="nav-desktop">
            <a href="#home" style={styles.navLink} className="nav-item-link">Home</a>
            <a href="#portfolio" style={styles.navLink} className="nav-item-link">Selected Works</a>
            <a href="#philosophy" style={styles.navLink} className="nav-item-link">Philosophy</a>
            <a href="#skills" style={styles.navLink} className="nav-item-link">Expertise</a>
            <a href="#services" style={styles.navLink} className="nav-item-link">Services</a>
            <motion.a 
              whileHover={{ scale: 1.04, boxShadow: '0 6px 24px rgba(212,175,55,0.45)' }} 
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
              color: '#d4af37',
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
                backgroundColor: 'rgba(10, 12, 18, 0.95)',
                backdropFilter: 'blur(24px)',
                borderRadius: '24px',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                padding: '30px 24px',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7)'
              }}
              className="mobile-nav-drawer"
            >
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', letterSpacing: '1px' }}
              >
                Home
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', letterSpacing: '1px' }}
              >
                Selected Works
              </a>
              <a 
                href="#philosophy" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', letterSpacing: '1px' }}
              >
                Aesthetic Philosophy
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', letterSpacing: '1px' }}
              >
                Expertise
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', letterSpacing: '1px' }}
              >
                Services
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

        {/* HERO SECTION */}
        <section id="home" style={styles.heroSection} className="hero-section-wrap">
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
            transition={{ duration: 0.8, delay: 1.2 }}
            style={styles.infoTopLeft} 
            className="info-pos-static"
          >
            <Sparkles size={14} color="#d4af37" />
            <span>Digital Artisan & Engineer</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={styles.infoTopRight} 
            className="info-pos-static"
          >
            <span className="jewel-dot"></span>
            <span>AVAILABLE FOR COMMISSIONS</span>
          </motion.div>
          
          {/* Bottom Left Intro & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.4 }} 
            style={styles.infoBottomLeft} 
            className="info-pos-static"
          >
            <h2 style={styles.heroLeadTitle}>
              Where Digital Logic <br />
              <span className="gold-gradient-text" style={{ fontStyle: 'italic', fontWeight: '700' }}>
                Meets Visual Poetics.
              </span>
            </h2>
            <p style={styles.shortDesc}>
              Halo, saya <b>Rahajeng Eka Wahyuningtiyas</b> — mentransformasikan kepekaan visual tingkat tinggi ke dalam arsitektur kode mutakhir.
              <br />
              Blending Aesthetics with <span style={{ color: '#f7e7c4', fontWeight: '700' }}>{subText}</span>
              <span style={{ color: '#d4af37', fontWeight: 'bold' }}>|</span>
            </p>
            <div style={styles.heroCtaGroup}>
              <motion.a 
                whileHover={{ scale: 1.04 }} 
                whileTap={{ scale: 0.96 }} 
                href="#portfolio" 
                style={styles.heroCtaPrimary}
              >
                <span>Curated Works</span>
                <ArrowUpRight size={15} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.04, borderColor: 'rgba(212,175,55,0.4)' }} 
                whileTap={{ scale: 0.96 }} 
                href="#philosophy" 
                style={styles.heroCtaSecondary}
              >
                <span>My Philosophy</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Right Location & Time */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.4 }} 
            style={styles.infoBottomRight} 
            className="info-pos-static"
          >
            <span style={styles.locationLabel}>Malang, Indonesia</span>
            <span style={styles.locationSub}>
              {localTime ? `${localTime} WIB · GMT+7` : 'Universitas Brawijaya'}
            </span>
          </motion.div>
        </section>

        {/* INTERACTIVE ACTIVITY: ENGINEERING & CREDENTIALS CONSOLE (CLICK TO REVEAL) */}
        <div style={{ maxWidth: '1240px', margin: '0 auto 40px auto', padding: '0 8%', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <motion.button
            onClick={() => setDossierOpen(!dossierOpen)}
            whileHover={{ scale: 1.025, borderColor: 'rgba(59, 130, 246, 0.6)', boxShadow: '0 10px 35px rgba(59,130,246,0.25)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, rgba(16, 22, 35, 0.88) 0%, rgba(9, 12, 20, 0.96) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.35)',
              borderRadius: '9999px',
              padding: '12px 28px',
              color: '#ffffff',
              fontSize: '0.86rem',
              fontWeight: '700',
              letterSpacing: '0.6px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 12px 35px rgba(0,0,0,0.55)',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.3s ease'
            }}
          >
            <span className="jewel-dot" style={{ width: '7px', height: '7px' }}></span>
            <Sparkles size={16} color="#38bdf8" />
            <span>Interactive Engineering & Systems Console</span>
            <span style={{
              background: 'rgba(59, 130, 246, 0.22)',
              padding: '4px 14px',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              color: '#93c5fd',
              border: '1px solid rgba(59, 130, 246, 0.4)'
            }}>
              {dossierOpen ? "Tutup Panel ✕" : "Klik untuk Buka ▾"}
            </span>
          </motion.button>

          {/* Expandable Interactive Activity Drawer */}
          <AnimatePresence>
            {dossierOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -15 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  overflow: 'hidden',
                  marginTop: '22px',
                  textAlign: 'left'
                }}
              >
                <div style={{
                  background: 'linear-gradient(160deg, rgba(16, 22, 35, 0.94) 0%, rgba(9, 12, 20, 0.98) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.35)',
                  borderRadius: '24px',
                  padding: '26px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(59, 130, 246, 0.15)',
                  backdropFilter: 'blur(24px)'
                }}>
                  {/* Activity Tabs */}
                  <div style={{
                    display: 'flex',
                    gap: '10px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingBottom: '14px',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => setDossierTab('metrics')}
                        style={{
                          padding: '8px 18px',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          border: dossierTab === 'metrics' ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid transparent',
                          background: dossierTab === 'metrics' ? 'rgba(59, 130, 246, 0.22)' : 'transparent',
                          color: dossierTab === 'metrics' ? '#93c5fd' : '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Layers size={14} />
                        <span>System Telemetry & Impact</span>
                      </button>

                      <button
                        onClick={() => setDossierTab('code')}
                        style={{
                          padding: '8px 18px',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          border: dossierTab === 'code' ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid transparent',
                          background: dossierTab === 'code' ? 'rgba(59, 130, 246, 0.22)' : 'transparent',
                          color: dossierTab === 'code' ? '#93c5fd' : '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Code2 size={14} />
                        <span>Code & Design Tokens</span>
                      </button>

                      <button
                        onClick={() => setDossierTab('credentials')}
                        style={{
                          padding: '8px 18px',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          border: dossierTab === 'credentials' ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid transparent',
                          background: dossierTab === 'credentials' ? 'rgba(59, 130, 246, 0.22)' : 'transparent',
                          color: dossierTab === 'credentials' ? '#93c5fd' : '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <ShieldCheck size={14} />
                        <span>Verified Institutional Credentials</span>
                      </button>
                    </div>

                    <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'monospace' }}>
                      STATUS: ACTIVE CONSOLE
                    </span>
                  </div>

                  {/* Tab 1: Metrics */}
                  {dossierTab === 'metrics' && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '16px'
                    }}>
                      <div style={styles.metricCard}>
                        <div style={styles.metricIconBox}><Code2 size={20} /></div>
                        <div>
                          <div style={styles.metricVal}>05+ Systems</div>
                          <div style={styles.metricLabel}>Diskominfo Batu, Smart Oryza, SIA Sekolah</div>
                        </div>
                      </div>

                      <div style={styles.metricCard}>
                        <div style={styles.metricIconBox}><Layers size={20} /></div>
                        <div>
                          <div style={styles.metricVal}>Cross-Platform</div>
                          <div style={styles.metricLabel}>Flutter Mobile & React/Laravel Web</div>
                        </div>
                      </div>

                      <div style={styles.metricCard}>
                        <div style={styles.metricIconBox}><Palette size={20} /></div>
                        <div>
                          <div style={styles.metricVal}>Dual Craft</div>
                          <div style={styles.metricLabel}>MUA Chromatic Theory & Code Architecture</div>
                        </div>
                      </div>

                      <div style={styles.metricCard}>
                        <div style={styles.metricIconBox}><GraduationCap size={20} /></div>
                        <div>
                          <div style={styles.metricVal}>UB 2026</div>
                          <div style={styles.metricLabel}>Universitas Brawijaya Software Eng.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Code & Tokens */}
                  {dossierTab === 'code' && (
                    <div>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <button
                          onClick={() => setSandboxTab('arch')}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '6px',
                            fontSize: '0.74rem',
                            fontFamily: 'monospace',
                            background: sandboxTab === 'arch' ? 'rgba(59, 130, 246, 0.25)' : 'rgba(255,255,255,0.04)',
                            color: sandboxTab === 'arch' ? '#93c5fd' : '#64748b',
                            border: '1px solid rgba(255,255,255,0.06)',
                            cursor: 'pointer'
                          }}
                        >
                          SIMIKP_Engine.tsx
                        </button>
                        <button
                          onClick={() => setSandboxTab('tokens')}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '6px',
                            fontSize: '0.74rem',
                            fontFamily: 'monospace',
                            background: sandboxTab === 'tokens' ? 'rgba(59, 130, 246, 0.25)' : 'rgba(255,255,255,0.04)',
                            color: sandboxTab === 'tokens' ? '#93c5fd' : '#64748b',
                            border: '1px solid rgba(255,255,255,0.06)',
                            cursor: 'pointer'
                          }}
                        >
                          ChromaticTokens.css
                        </button>
                      </div>
                      <div style={{
                        background: '#070a12',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '18px 22px',
                        fontFamily: "'Fira Code', 'Consolas', monospace",
                        fontSize: '0.82rem',
                        lineHeight: '1.6',
                        color: '#cbd5e1',
                        overflowX: 'auto',
                        maxHeight: '260px'
                      }}>
                        {sandboxTab === 'arch' ? (
                          <pre style={{ margin: 0 }}>
                            <code>{`// SIMIKP Kota Batu — Dispatch Pipeline
export interface SystemClearance {
  id: "REW-2026-ARTISAN";
  institutionalDomain: "simikp.onrender.com";
  role: "Diskominfo Kedinasan & Multi-Tenant";
}

export const executeSyncPipeline = async (audit: SystemClearance) => {
  const session = await authProvider.verifyInstitutionalKey(audit.id);
  if (!session.isValid) throw new UnauthorizedClearanceError();
  return await telemetrySync({ target: audit.institutionalDomain, visualHarmonization: "SubPixel" });
};`}</code>
                          </pre>
                        ) : (
                          <pre style={{ margin: 0 }}>
                            <code>{`/* Chromatic Precision Tokens (MUA to UI) */
:root {
  --canvas-primary: #06080d;
  --azure-electric: #3b82f6;
  --cyan-luminescence: #38bdf8;
  --grid-rhythm: 4px;
  --glass-refraction: blur(24px) saturate(180%);
  --hairline-border: 1px solid rgba(255, 255, 255, 0.08);
  --tactile-easing: cubic-bezier(0.16, 1, 0.3, 1);
}`}</code>
                          </pre>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Credentials */}
                  {dossierTab === 'credentials' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontWeight: '700', fontSize: '0.86rem', marginBottom: '6px' }}>
                          <ShieldCheck size={16} />
                          <span>Dinas Kominfo Kota Batu</span>
                        </div>
                        <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                          Pengembangan sistem informasi manajemen komunikasi publik SIMIKP untuk aparatur pemerintahan daerah.
                        </p>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontWeight: '700', fontSize: '0.86rem', marginBottom: '6px' }}>
                          <Sparkles size={16} />
                          <span>Smart Oryza Platform</span>
                        </div>
                        <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                          Arsitektur frontend & mobile dashboard IoT analitik agrikultur rantai pasok pangan presisi tinggi.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 1: SELECTED OEUVRE / CURATED WORKS */}
        <section id="portfolio" style={styles.section}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.15 }} 
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
            style={styles.sectionHeader}
          >
            <span style={styles.sectionEyebrow}>
              <Sparkles size={13} />
              Selected Portfolio
            </span>
            <h2 style={styles.sectionTitle}>Curated Projects</h2>
            <p style={styles.sectionSubtitle}>
              Karya terpilih yang mengawinkan ketahanan arsitektur sistem dengan kemewahan desain antarmuka digital.
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
              desc="Platform ekosistem komprehensif mengintegrasikan portal analitik web & mobile dashboard demi efisiensi presisi rantai pasok agrikultur pangan." 
              link="http://smartoryza.site" 
              image="/project-smartoryza.png" 
              category="Web & Mobile System"
            />
            <ProjectCard 
              title="SIMIKP — Diskominfo Kota Batu" 
              tags={["React", "Web App", "E-Government", "Public Comm"]} 
              desc="Sistem Informasi Manajemen Informasi dan Komunikasi Publik (SIMIKP) untuk Diskominfo Kota Batu guna sentralisasi tata kelola informasi kedinasan, komunikasi publik terpadu, dan portal dashboard kedinasan." 
              link="https://simikp.onrender.com/login" 
              linkText="Visit Portal" 
              image="/project-simikp.png" 
              category="E-Government System"
            />
            <ProjectCard 
              title="SIA Sekolah — Platform Akademik" 
              tags={["Flutter", "Dart", "Multi-Role", "Academic System"]} 
              desc="Sistem Informasi Akademik sekolah terpadu berbasis Flutter untuk tata kelola administrasi, rekapitulasi penilaian Kurikulum Merdeka, statistik & rapor digital, serta sinkronisasi multi-role (Admin, Guru, Siswa)." 
              link="https://github.com/rahajengeka/sia_sekolah" 
              linkText="View Repository"
              image="/project-siasekolah.png" 
              category="Cross-Platform System"
            />
            <ProjectCard 
              title="Pintar Ceria — Web Edu" 
              tags={["Native PHP", "UI/UX", "Interactive", "Education"]} 
              desc="Platform pembelajaran digital gamified dengan antarmuka child-friendly yang ramah anak, intuitif, dan responsif untuk siswa Sekolah Dasar." 
              image="/project-edukasi.png" 
              category="Interactive Learning"
            />
            <ProjectCard 
              title="Tatik Catering System" 
              tags={["Information System", "Web Dev", "Culinary Commerce"]} 
              desc="Sistem katalog kuliner berestetika premium yang dilengkapi fitur kalkulator simulasi pesanan katering dan alur reservasi terpadu." 
              image="/project-catering.png" 
              category="Bespoke Information System"
            />
          </motion.div>
        </section>

        {/* SECTION 2: THE AESTHETIC PHILOSOPHY (MUA to UI ARCHITECTURE) */}
        <section id="philosophy" style={styles.section}>
          <motion.div 
            initial={{ opacity: 0, y: 45, scale: 0.98 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            viewport={{ once: false, amount: 0.15 }} 
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }} 
            style={styles.philosophyCard} 
            className="philo-grid-responsive"
          >
            <div style={styles.philoAmbientGlow}></div>
            <div style={styles.philoGrid} className="philo-grid-responsive">
              {/* Quote / Manifesto */}
              <div>
                <div style={styles.philoQuoteMark}>“</div>
                <h3 style={styles.philoHeading}>
                  The Art of Visual Precision: <br />
                  <span className="gold-gradient-text">From Haute Artistry to Digital Architecture</span>
                </h3>
                <p style={styles.philoQuoteText}>
                  "Pengalaman saya sebagai <b>Freelance MUA</b> mengasah kepekaan visual terhadap mikroskopis warna, gradasi pencahayaan, dan keseimbangan proporsi. Prinsip estetika inilah yang saya tanamkan ke dalam setiap baris kode — melahirkan produk digital yang tidak hanya berkinerja tinggi, tetapi juga memancarkan harmoni visual yang memikat."
                </p>
                <div style={styles.philoAuthor}>
                  <div style={styles.philoAuthorDot}></div>
                  <span style={styles.philoAuthorName}>Rahajeng Eka Wahyuningtiyas</span>
                </div>
              </div>

              {/* 3 Aesthetic Pillars */}
              <div style={styles.philoPillars}>
                <div style={styles.philoPillarItem}>
                  <span style={styles.philoPillarNum}>01</span>
                  <div>
                    <h4 style={styles.philoPillarTitle}>Chromatic Harmony</h4>
                    <p style={styles.philoPillarDesc}>
                      Penguasaan kontras, suhu warna, dan hierarki visual agar antarmuka nyaman dipandang dan memperkuat identitas brand.
                    </p>
                  </div>
                </div>

                <div style={styles.philoPillarItem}>
                  <span style={styles.philoPillarNum}>02</span>
                  <div>
                    <h4 style={styles.philoPillarTitle}>Sub-Pixel Alignment</h4>
                    <p style={styles.philoPillarDesc}>
                      Ketelitian terhadap ritme tipografi, konsistensi whitespace, dan simetri tata letak yang memberi rasa tenang dan mewah.
                    </p>
                  </div>
                </div>

                <div style={styles.philoPillarItem}>
                  <span style={styles.philoPillarNum}>03</span>
                  <div>
                    <h4 style={styles.philoPillarTitle}>Tactile Motion</h4>
                    <p style={styles.philoPillarDesc}>
                      Mikro-animasi yang halus dan bertujuan, menciptakan pengalaman pengguna yang dinamis, organik, dan menyenangkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: EXPERTISE & DISCIPLINES */}
        <section id="skills" style={styles.section}>
          <motion.div 
            initial={{ opacity: 0, y: 35 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.15 }} 
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
            style={styles.sectionHeader}
          >
            <span style={styles.sectionEyebrow}>
              <Cpu size={13} />
              Technical Disciplines
            </span>
            <h2 style={styles.sectionTitle}>Craft & Competencies</h2>
            <p style={styles.sectionSubtitle}>
              Kombinasi keahlian pemrograman modern dan ketajaman desain grafis digital.
            </p>
            <div style={styles.titleDivider}></div>
          </motion.div>

          <div style={styles.skillsWrapper}>
            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, x: -45 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: false, amount: 0.15 }} 
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
              style={styles.skillBox}
            >
              <div style={styles.skillBoxHeader}>
                <div style={styles.skillBoxIconBadge}>
                  <Code2 size={22} />
                </div>
                <h3 style={styles.skillBoxTitle}>Frontend & Engineering Stack</h3>
              </div>
              <div style={styles.skillTags}>
                {[
                  { name: "React.js", level: "Modern Component Architecture" },
                  { name: "Flutter", level: "Cross-Platform Mobile" },
                  { name: "Laravel", level: "Backend & RESTful API" },
                  { name: "PHP OOP", level: "Clean Architecture" },
                  { name: "JavaScript ESNext", level: "Interactive Logic" },
                  { name: "Tailwind CSS", level: "Utility Styling" },
                  { name: "HTML5 / CSS3", level: "Semantic Markup" }
                ].map(skill => (
                  <motion.span 
                    key={skill.name} 
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.5)', color: '#93c5fd' }} 
                    style={styles.skillTag}
                  >
                    <span className="blue-dot"></span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Design Stack */}
            <motion.div 
              initial={{ opacity: 0, x: 45 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: false, amount: 0.15 }} 
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
              style={styles.skillBox}
            >
              <div style={styles.skillBoxHeader}>
                <div style={styles.skillBoxIconBadge}>
                  <Palette size={22} />
                </div>
                <h3 style={styles.skillBoxTitle}>Creative Direction & UI/UX</h3>
              </div>
              <div style={styles.skillTags}>
                {[
                  { name: "Figma Engine", level: "Prototyping & Systems" },
                  { name: "UI/UX Wireframing", level: "User Journey Design" },
                  { name: "Design Systems", level: "Scalable Component Kits" },
                  { name: "Canva Pro", level: "Brand Assets" },
                  { name: "CapCut Video Studio", level: "Dynamic Content" },
                  { name: "Color Palette Harmonization", level: "Chromatic Theory" },
                  { name: "Micro-interactions", level: "Motion UX" }
                ].map(skill => (
                  <motion.span 
                    key={skill.name} 
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.5)', color: '#93c5fd' }} 
                    style={styles.skillTag}
                  >
                    <span className="blue-dot"></span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* SECTION 4: BESPOKE SERVICES */}
        <section id="services" style={styles.section}>
          <motion.div 
            initial={{ opacity: 0, y: 35 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.15 }} 
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
            style={styles.sectionHeader}
          >
            <span style={styles.sectionEyebrow}>
              <Layers size={13} />
              Bespoke Services
            </span>
            <h2 style={styles.sectionTitle}>Capabilities & Offerings</h2>
            <p style={styles.sectionSubtitle}>
              Solusi holistik dari perancangan arsitektur sistem hingga penyempurnaan estetika produk digital.
            </p>
            <div style={styles.titleDivider}></div>
          </motion.div>

          <div style={styles.servicesGrid}>
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }} 
              style={styles.serviceCard} 
              className="service-hover-card"
            >
              <div style={styles.serviceIconBox}>
                <Code2 size={26} />
              </div>
              <h4 style={styles.serviceTitle}>Web & Mobile Development</h4>
              <p style={styles.serviceDesc}>
                Mengembangkan platform digital yang cepat, tangguh, dan adaptif menggunakan ekosistem framework modern (React, Laravel, Flutter) dengan standar penulisan kode bersih.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }} 
              style={styles.serviceCard} 
              className="service-hover-card"
            >
              <div style={styles.serviceIconBox}>
                <Palette size={26} />
              </div>
              <h4 style={styles.serviceTitle}>UI/UX Architecture</h4>
              <p style={styles.serviceDesc}>
                Merancang pengalaman pengguna yang intuitif, dimulai dari analisis alur, wireframing teliti, hingga pembuatan desain antarmuka interaktif yang elegan dan berestetika tinggi.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }} 
              style={styles.serviceCard} 
              className="service-hover-card"
            >
              <div style={styles.serviceIconBox}>
                <Sparkles size={26} />
              </div>
              <h4 style={styles.serviceTitle}>Visual Direction & Media</h4>
              <p style={styles.serviceDesc}>
                Mengombinasikan keselarasan palet warna dinamis, ritme multimedia visual, dan video production untuk representasi identitas brand yang memikat dan berkarakter kuat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: MILESTONES & PEDIGREE */}
        <section id="education" style={styles.section}>
          <motion.div 
            initial={{ opacity: 0, y: 35 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.15 }} 
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
            style={styles.sectionHeader}
          >
            <span style={styles.sectionEyebrow}>
              <GraduationCap size={13} />
              Career Milestones & Pedigree
            </span>
            <h2 style={styles.sectionTitle}>Experience & Background</h2>
            <p style={styles.sectionSubtitle}>
              Rekam jejak implementasi sistem institusional, riset teknologi, dan fondasi akademis unggul.
            </p>
            <div style={styles.titleDivider}></div>
          </motion.div>

          {/* Timeline Cards */}
          <div style={styles.timelineWrapper}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.15 }} 
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.45)' }}
              style={styles.timelineCard}
            >
              <div>
                <h3 style={styles.timelineRole}>Web System Developer — SIMIKP</h3>
                <div style={styles.timelineOrg}>
                  <ShieldCheck size={16} />
                  <span>Dinas Komunikasi & Informatika Pemerintah Kota Batu</span>
                </div>
                <p style={styles.timelineDesc}>
                  Merancang dan mengimplementasikan sistem manajemen informasi dan komunikasi publik (SIMIKP) terpadu dengan arsitektur web modern, otentikasi kedinasan, dan panel dashboard analitik.
                </p>
              </div>
              <span style={styles.timelineYear}>2024 — Sekarang</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.15 }} 
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.45)' }}
              style={styles.timelineCard}
            >
              <div>
                <h3 style={styles.timelineRole}>Frontend & Mobile Engineer</h3>
                <div style={styles.timelineOrg}>
                  <Sparkles size={16} />
                  <span>Smart Oryza Platform (Agri-Tech & IoT Ecosystem)</span>
                </div>
                <p style={styles.timelineDesc}>
                  Mengembangkan portal analitik web & mobile dashboard berbasis Flutter dan Laravel untuk pemantauan presisi rantai pasok agrikultur serta integrasi telemetri IoT.
                </p>
              </div>
              <span style={styles.timelineYear}>2023 — 2024</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.15 }} 
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.45)' }}
              style={styles.timelineCard}
            >
              <div>
                <h3 style={styles.timelineRole}>Freelance Visual Artist & MUA</h3>
                <div style={styles.timelineOrg}>
                  <Palette size={16} />
                  <span>Independent Aesthetic Direction & Chromatic Consulting</span>
                </div>
                <p style={styles.timelineDesc}>
                  Mengasah kepekaan tingkat tinggi terhadap mikroskopis warna, gradasi pencahayaan, dan keseimbangan visual yang diterapkan secara langsung ke dalam standar antarmuka UI/UX.
                </p>
              </div>
              <span style={styles.timelineYear}>2022 — Sekarang</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.15 }} 
              transition={{ delay: 0.3 }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.45)' }}
              style={styles.timelineCard}
            >
              <div>
                <h3 style={styles.timelineRole}>Undergraduate Student — Information Technology</h3>
                <div style={styles.timelineOrg}>
                  <GraduationCap size={16} />
                  <span>Universitas Brawijaya</span>
                </div>
                <p style={styles.timelineDesc}>
                  Fokus pada Rekayasa Perangkat Lunak, Arsitektur Sistem Informasi, Pemrograman Berorientasi Objek (OOP), dan interaksi manusia-komputer (HCI).
                </p>
              </div>
              <span style={styles.timelineYear}>Malang, Indonesia</span>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6: TOOLS ECOSYSTEM TICKER */}
        <section id="ecosystem" style={{ ...styles.section, textAlign: 'center', paddingBottom: '30px' }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 0.75, y: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            style={{ fontSize: '0.78rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#38bdf8', fontWeight: '700' }}
          >
            Daily Production & Engineering Suite
          </motion.p>
          <div style={styles.toolsGrid}>
            {[
              "React 19 & Vite",
              "Flutter SDK",
              "Laravel Engine",
              "Figma Prototyping",
              "VS Code Studio",
              "CapCut Creative Suite",
              "Git & GitHub Workflow"
            ].map((tool, idx) => (
              <motion.span 
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.06, borderColor: 'rgba(59,130,246,0.4)', color: '#93c5fd' }} 
                key={tool} 
                style={styles.toolItem}
              >
                <Sparkles size={13} color="#38bdf8" /> 
                {tool}
              </motion.span>
            ))}
          </div>
        </section>

        {/* FOOTER & CONTACT CONCIERGE */}
        <footer id="contact" style={styles.footer}>
          <motion.div 
            initial={{ opacity: 0, y: 35 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.15 }} 
            style={styles.contactBox}
          >
            <span style={styles.sectionEyebrow}>
              <Mail size={13} />
              Direct Inquiries
            </span>
            <h2 style={styles.contactHeading}>
              Let's Craft Something <br />
              <span className="gold-gradient-text" style={{ fontStyle: 'italic' }}>Extraordinary.</span>
            </h2>
            <p style={styles.contactSub}>
              Tertarik mendiskusikan peluang kolaborasi, proyek rekayasa perangkat lunak, atau konsultasi UI/UX? Saya siap menyambut ide-ide luar biasa Anda.
            </p>

            <div style={styles.contactActions}>
              <motion.button 
                whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(212,175,55,0.5)' }} 
                whileTap={{ scale: 0.96 }} 
                onClick={handleCopyEmail}
                style={styles.emailCopyBtn}
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email Address"}</span>
              </motion.button>

              <motion.a 
                whileHover={{ scale: 1.04, borderColor: 'rgba(212,175,55,0.5)' }} 
                whileTap={{ scale: 0.96 }} 
                href="mailto:rahajengg29@gmail.com" 
                style={styles.directMailLink}
              >
                <Mail size={16} color="#d4af37" />
                <span>Send Direct Mail</span>
              </motion.a>
            </div>

            <div style={styles.socialLinks}>
              <motion.a 
                whileHover={{ y: -4, borderColor: 'rgba(212,175,55,0.4)', color: '#f7e7c4' }} 
                href="https://www.linkedin.com/in/rahajeng-eka-a18b7b320" 
                target="_blank" 
                rel="noreferrer" 
                style={styles.socialBtn}
              >
                <FaLinkedinIn size={14} color="#d4af37" /> 
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -4, borderColor: 'rgba(212,175,55,0.4)', color: '#f7e7c4' }} 
                href="https://github.com/rahajengeka" 
                target="_blank" 
                rel="noreferrer" 
                style={styles.socialBtn}
              >
                <FaGithub size={14} color="#d4af37" /> 
                <span>GitHub</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -4, borderColor: 'rgba(212,175,55,0.4)', color: '#f7e7c4' }} 
                href="mailto:rahajengg29@gmail.com" 
                style={styles.socialBtn}
              >
                <Mail size={14} color="#d4af37" /> 
                <span>rahajengg29@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>

          <div style={styles.footerMeta}>
            <div style={styles.footerTime}>
              <Clock size={13} color="#d4af37" />
              <span>Malang, Indonesia · {localTime ? `${localTime} WIB` : 'UTC+7'}</span>
            </div>
            <p style={styles.copyright}>
              &copy; {new Date().getFullYear()} Rahajeng Eka Wahyuningtiyas. Sculpted with Editorial Elegance & Code Precision.
            </p>
          </div>
        </footer>

        {/* Scroll-To-Top Button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              whileHover={{ scale: 1.12, borderColor: '#d4af37', boxShadow: '0 6px 25px rgba(212,175,55,0.4)' }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              style={styles.scrollTopBtn}
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
    <motion.div 
      variants={itemVariants} 
      style={styles.card} 
      className="card-project"
    >
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
              <ArrowUpRight size={15} color="#d4af37" />
            </a>
          ) : (
            <span style={styles.cardLinkDisabled}>
              <span className="gold-dot"></span>
              <span>Case Study / Local Repo</span>
            </span>
          )}
          <span style={{ fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Subcomponent: Hanging Lanyard VIP Pass with Physics Swing
function HangingLanyard() {
  return (
    <motion.div
      initial={{ y: -150, rotate: 12, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        rotate: [-5, 5, -5]
      }}
      transition={{
        y: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.4 },
        rotate: {
          duration: 3.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }
      }}
      drag="x"
      dragConstraints={{ left: -50, right: 50 }}
      dragElastic={0.3}
      whileHover={{ cursor: 'grab' }}
      whileTap={{ cursor: 'grabbing' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transformOrigin: 'top center',
        marginBottom: '22px',
        userSelect: 'none',
        touchAction: 'none'
      }}
    >
      {/* 1. Lanyard Strap extending from above */}
      <div style={{
        width: '26px',
        height: '75px',
        background: 'linear-gradient(90deg, #090e17 0%, #1e293b 22%, #2563eb 50%, #1e293b 78%, #090e17 100%)',
        position: 'relative',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Stitching lines */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '3px',
          right: '3px',
          borderLeft: '1px dashed rgba(96, 165, 250, 0.45)',
          borderRight: '1px dashed rgba(96, 165, 250, 0.45)'
        }} />
        {/* Woven Text */}
        <span style={{
          fontSize: '0.42rem',
          color: 'rgba(255, 255, 255, 0.7)',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          letterSpacing: '2.5px',
          fontWeight: 700,
          alignSelf: 'center',
          opacity: 0.85
        }}>
          RAHAJENG • EKA
        </span>
      </div>

      {/* 2. Metal Swivel Clip */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '-1px',
        zIndex: 3
      }}>
        {/* Clamp */}
        <div style={{
          width: '28px',
          height: '8px',
          background: 'linear-gradient(180deg, #94a3b8 0%, #475569 60%, #1e293b 100%)',
          borderRadius: '2px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }} />
        {/* Ring */}
        <div style={{
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          border: '2.5px solid #94a3b8',
          margin: '-2px 0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
        }} />
        {/* Carabiner Hook */}
        <div style={{
          width: '11px',
          height: '16px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #94a3b8 40%, #334155 100%)',
          borderRadius: '3px 3px 6px 6px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.6)',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            right: '-2px',
            top: '3px',
            width: '3px',
            height: '7px',
            background: '#64748b',
            borderRadius: '1px'
          }} />
        </div>
      </div>

      {/* 3. Outer Clear Acrylic Sleeve */}
      <div style={{
        marginTop: '-3px',
        width: '205px',
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '16px',
        padding: '10px 8px 8px 8px',
        border: '1.5px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75), 0 0 25px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Punch Hole */}
        <div style={{
          width: '30px',
          height: '6px',
          background: '#06080d',
          borderRadius: '9999px',
          margin: '0 auto 8px auto',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8)'
        }} />

        {/* Diagonal Gloss Sheen */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 30%, transparent 60%)',
          pointerEvents: 'none',
          transform: 'rotate(-20deg)'
        }} />

        {/* 4. Inner ID Pass Card */}
        <div style={{
          background: 'linear-gradient(170deg, #0e1526 0%, #060912 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Top Header */}
          <div style={{
            width: '100%',
            background: 'linear-gradient(90deg, #1d4ed8 0%, #3b82f6 50%, #38bdf8 100%)',
            padding: '3px 8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box'
          }}>
            <span style={{
              fontSize: '0.48rem',
              fontWeight: 800,
              letterSpacing: '1.2px',
              color: '#ffffff',
              textTransform: 'uppercase'
            }}>
              ARTISAN PASS
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <span className="jewel-dot" style={{ width: '4px', height: '4px' }}></span>
              <span style={{ fontSize: '0.45rem', color: '#ffffff', fontWeight: 700, letterSpacing: '0.5px' }}>
                VERIFIED
              </span>
            </div>
          </div>

          {/* Photo & Identity Section */}
          <div style={{ padding: '10px 8px 8px 8px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' }}>
            {/* Photo Avatar Frame */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              padding: '2px',
              background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #d4af37 100%)',
              boxShadow: '0 0 14px rgba(59, 130, 246, 0.45)',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'radial-gradient(circle, #1e293b 0%, #090d16 100%)'
              }}>
                <img 
                  src="/foto-rahajeng.webp" 
                  alt="Rahajeng Eka Wahyuningtiyas" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transform: 'scale(1.22) translateY(4px)'
                  }} 
                />
              </div>
            </div>

            {/* Name */}
            <h4 style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#ffffff',
              margin: '7px 0 2px 0',
              letterSpacing: '0.6px',
              textAlign: 'center',
              lineHeight: 1.2
            }}>
              Rahajeng Eka W.
            </h4>

            {/* Role / Title */}
            <span style={{
              fontSize: '0.58rem',
              fontWeight: 600,
              color: '#38bdf8',
              letterSpacing: '0.3px',
              textAlign: 'center'
            }}>
              Frontend & Creative Engineer
            </span>

            {/* Microchip & Badge Code */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '8px',
              padding: '3px 6px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '5px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{
                width: '16px',
                height: '12px',
                borderRadius: '2px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                border: '1px solid #fef08a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 6px rgba(251, 191, 36, 0.4)'
              }}>
                <div style={{ width: '6px', height: '5px', border: '1px solid #78350f' }} />
              </div>

              <span style={{
                fontSize: '0.52rem',
                fontFamily: 'monospace',
                color: '#94a3b8',
                letterSpacing: '0.8px'
              }}>
                #REW-2026-ARTISAN
              </span>
            </div>

            {/* Barcode */}
            <div style={{
              display: 'flex',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'center',
              height: '12px',
              marginTop: '7px',
              opacity: 0.65
            }}>
              {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 4, 2, 1].map((w, idx) => (
                <div key={idx} style={{
                  width: `${w}px`,
                  height: '100%',
                  background: '#ffffff'
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;