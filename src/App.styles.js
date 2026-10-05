// =============================================================================
// RAHAJENG EKA — HIGH-TECH CREATIVE & PROFESSIONAL PORTFOLIO STYLES
// =============================================================================

export const styles = {
  // Preloader
  loaderContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#06080d',
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '24px',
    boxSizing: 'border-box'
  },
  loaderContent: {
    textAlign: 'center',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  loaderMonogram: {
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
    fontSize: '1.65rem',
    fontWeight: '800',
    letterSpacing: '5px',
    color: '#ffffff',
    marginBottom: '22px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  loaderMonogramAccent: {
    color: '#3b82f6',
    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  loaderTrack: {
    width: '200px',
    height: '3px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 0 16px rgba(59, 130, 246, 0.25)'
  },
  loaderFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #2563eb, #38bdf8)',
    boxShadow: '0 0 10px #38bdf8'
  },
  loaderText: {
    color: '#94a3b8',
    fontSize: '0.72rem',
    marginTop: '16px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: '600'
  },
  loaderButton: {
    marginTop: '18px',
    background: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '9999px',
    fontSize: '0.82rem',
    fontWeight: '700',
    letterSpacing: '0.6px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.45)',
    transition: 'all 0.3s ease'
  },

  // Main Page Structure
  body: {
    backgroundColor: '#06080d',
    color: '#f8fafc',
    minHeight: '100vh',
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    position: 'relative',
    overflowX: 'hidden'
  },

  // Scroll Progress Bar
  progressBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 50%, #818cf8 100%)',
    transformOrigin: '0%',
    zIndex: 10001
  },

  // Header & Navigation
  header: {
    position: 'fixed',
    top: '16px',
    left: 0,
    right: 0,
    margin: '0 auto',
    width: 'calc(100% - 40px)',
    maxWidth: '1060px',
    padding: '9px 24px',
    background: 'rgba(9, 12, 19, 0.82)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '9999px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
    boxSizing: 'border-box'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  logo: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.02rem',
    fontWeight: '800',
    letterSpacing: '2px',
    color: '#ffffff'
  },
  logoAccent: {
    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '800'
  },
  nav: {
    display: 'flex',
    gap: '22px',
    alignItems: 'center'
  },
  navLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.82rem',
    fontWeight: '600',
    letterSpacing: '0.3px',
    transition: 'color 0.3s ease',
    position: 'relative',
    padding: '4px 0'
  },
  navLinkContact: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '0.3px',
    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    padding: '7px 20px',
    borderRadius: '9999px',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 18px rgba(37, 99, 235, 0.4)',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.3s ease'
  },

  // Hero Section
  heroSection: {
    position: 'relative',
    width: '100%',
    minHeight: '94vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '90px 8% 24px 8%',
    boxSizing: 'border-box'
  },
  heroAmbientAura: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '680px',
    height: '680px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)',
    filter: 'blur(80px)',
    pointerEvents: 'none',
    zIndex: 1
  },
  heroBlurBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/foto-rahajeng.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center 35%',
    filter: 'blur(60px) grayscale(95%) brightness(12%)',
    transform: 'scale(1.15)',
    zIndex: 1
  },
  bgBackdropText: {
    position: 'absolute',
    top: '32%',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(4.5rem, 14vw, 15.5rem)',
    fontStyle: 'italic',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.085)',
    letterSpacing: 'clamp(3px, 1vw, 14px)',
    margin: 0,
    zIndex: 2,
    userSelect: 'none',
    pointerEvents: 'none',
    lineHeight: 0.9,
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
    WebkitTextStroke: '1px rgba(255, 255, 255, 0.16)',
    textShadow: '0 0 35px rgba(59, 130, 246, 0.15)'
  },
  heroImageWrapper: {
    position: 'relative',
    height: '78vh',
    maxHeight: '740px',
    zIndex: 3,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  heroImage: {
    height: '100%',
    width: 'auto',
    objectFit: 'contain',
    zIndex: 3,
    filter: 'drop-shadow(0 20px 45px rgba(0, 0, 0, 0.85))',
    maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
  },
  heroPortraitGlow: {
    position: 'absolute',
    bottom: '12%',
    width: '420px',
    height: '420px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(55px)',
    zIndex: 2,
    pointerEvents: 'none'
  },

  // Hero Floating Badges
  infoTopLeft: {
    position: 'absolute',
    top: '110px',
    left: '8%',
    color: '#cbd5e1',
    fontSize: '0.78rem',
    fontWeight: '800',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  topLeftDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#38bdf8',
    boxShadow: '0 0 10px #38bdf8'
  },
  infoTopRight: {
    position: 'absolute',
    top: '104px',
    right: '8%',
    color: '#e2e8f0',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '1.5px',
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(12, 17, 28, 0.78)',
    backdropFilter: 'blur(16px)',
    padding: '8px 20px',
    borderRadius: '9999px',
    border: '1px solid rgba(16, 185, 129, 0.28)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
  },
  infoBottomLeft: {
    position: 'absolute',
    bottom: '45px',
    left: '8%',
    maxWidth: '440px',
    zIndex: 4,
    textAlign: 'left'
  },
  heroLeadTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.45rem',
    fontWeight: '800',
    lineHeight: '1.3',
    marginBottom: '10px',
    color: '#ffffff',
    letterSpacing: '-0.3px'
  },
  shortDesc: {
    fontSize: '0.88rem',
    color: '#94a3b8',
    lineHeight: '1.7',
    margin: '0 0 20px 0',
    fontWeight: '400'
  },
  heroCtaGroup: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  heroCtaPrimary: {
    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    color: '#ffffff',
    padding: '11px 24px',
    borderRadius: '9999px',
    fontSize: '0.82rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 6px 24px rgba(37, 99, 235, 0.45)',
    transition: 'all 0.3s ease'
  },
  heroCtaCv: {
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.18) 0%, rgba(56, 189, 248, 0.18) 100%)',
    color: '#38bdf8',
    padding: '11px 22px',
    borderRadius: '9999px',
    fontSize: '0.82rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    textDecoration: 'none',
    border: '1px solid rgba(56, 189, 248, 0.45)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  heroCtaSecondary: {
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#f8fafc',
    padding: '11px 22px',
    borderRadius: '9999px',
    fontSize: '0.82rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease'
  },
  infoBottomRight: {
    position: 'absolute',
    bottom: '45px',
    right: '8%',
    zIndex: 4,
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '4px'
  },
  locationLabel: {
    color: '#cbd5e1',
    fontSize: '0.88rem',
    fontWeight: '600',
    letterSpacing: '0.5px'
  },
  locationSub: {
    color: '#64748b',
    fontSize: '0.75rem',
    letterSpacing: '1px'
  },

  // Sections Common
  section: {
    padding: '65px 8% 45px 8%',
    maxWidth: '1360px',
    margin: '0 auto',
    boxSizing: 'border-box',
    position: 'relative'
  },
  sectionHeader: {
    marginBottom: '36px',
    textAlign: 'center',
    position: 'relative'
  },
  sectionEyebrow: {
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#38bdf8',
    marginBottom: '10px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  },
  sectionTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 'clamp(2rem, 3.6vw, 3rem)',
    fontWeight: '800',
    letterSpacing: '-0.5px',
    color: '#ffffff',
    lineHeight: '1.2',
    marginBottom: '12px'
  },
  sectionSubtitle: {
    fontSize: '0.92rem',
    color: '#94a3b8',
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontWeight: '400'
  },
  titleDivider: {
    width: '60px',
    height: '3px',
    background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
    margin: '14px auto 0 auto',
    borderRadius: '10px'
  },

  // Supporting Component 1: Metrics Strip
  metricsStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
    gap: '18px',
    maxWidth: '1260px',
    margin: '-10px auto 45px auto',
    padding: '0 8%',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 10
  },
  metricCard: {
    background: 'linear-gradient(145deg, rgba(16, 22, 35, 0.72) 0%, rgba(9, 12, 20, 0.88) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '18px 20px',
    backdropFilter: 'blur(16px)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease'
  },
  metricIconBox: {
    width: '44px',
    height: '44px',
    borderRadius: '13px',
    background: 'rgba(59, 130, 246, 0.12)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#38bdf8',
    flexShrink: 0
  },
  metricVal: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.45rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.5px',
    lineHeight: 1.1
  },
  metricLabel: {
    fontSize: '0.74rem',
    color: '#94a3b8',
    marginTop: '4px',
    fontWeight: '500',
    lineHeight: 1.3
  },

  // Supporting Component 2: Milestones Journey
  timelineWrapper: {
    maxWidth: '920px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    position: 'relative'
  },
  timelineCard: {
    background: 'linear-gradient(145deg, rgba(16, 22, 35, 0.75) 0%, rgba(9, 12, 20, 0.9) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '22px',
    padding: '22px 26px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '18px',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease'
  },
  timelineRole: {
    fontSize: '1.05rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '4px'
  },
  timelineOrg: {
    fontSize: '0.84rem',
    color: '#38bdf8',
    fontWeight: '600',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  timelineDesc: {
    fontSize: '0.84rem',
    color: '#94a3b8',
    lineHeight: '1.6'
  },
  timelineYear: {
    padding: '6px 14px',
    borderRadius: '9999px',
    background: 'rgba(59, 130, 246, 0.15)',
    border: '1px solid rgba(59, 130, 246, 0.35)',
    color: '#93c5fd',
    fontSize: '0.72rem',
    fontWeight: '700',
    whiteSpace: 'nowrap'
  },

  // Supporting Component 3: Digital Artisan Code & Design Sandbox
  sandboxWrapper: {
    maxWidth: '960px',
    margin: '0 auto',
    borderRadius: '22px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    background: '#090d16',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.15)'
  },
  sandboxHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 18px',
    background: 'rgba(15, 23, 42, 0.95)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
  },
  sandboxDots: {
    display: 'flex',
    gap: '7px'
  },
  sandboxDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%'
  },
  sandboxTabs: {
    display: 'flex',
    gap: '6px'
  },
  sandboxTab: {
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    border: 'none',
    background: 'transparent'
  },
  sandboxContent: {
    padding: '24px 28px',
    fontFamily: "'Fira Code', 'Consolas', monospace",
    fontSize: '0.84rem',
    lineHeight: '1.7',
    color: '#cbd5e1',
    overflowX: 'auto',
    maxHeight: '340px'
  },

  // Portfolio Grid & Cards
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
    gap: '32px'
  },
  card: {
    background: 'linear-gradient(160deg, rgba(16, 22, 35, 0.78) 0%, rgba(9, 12, 20, 0.92) 100%)',
    borderRadius: '26px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
    transition: 'border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease',
    display: 'flex',
    flexDirection: 'column'
  },
  cardTop: {
    height: '235px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#0a0d16'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(6, 8, 13, 0.1) 0%, rgba(6, 8, 13, 0.88) 100%)',
    zIndex: 1
  },
  cardBody: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  cardTagGroup: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
    flexWrap: 'wrap'
  },
  cardTag: {
    fontSize: '0.72rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    color: '#60a5fa',
    background: 'rgba(59, 130, 246, 0.12)',
    border: '1px solid rgba(59, 130, 246, 0.28)',
    padding: '4px 12px',
    borderRadius: '9999px',
    textTransform: 'uppercase'
  },
  cardTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.45rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#ffffff',
    lineHeight: '1.3'
  },
  cardDesc: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.65',
    marginBottom: '26px',
    flexGrow: 1
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)'
  },
  cardLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#60a5fa',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '0.86rem',
    letterSpacing: '0.3px',
    transition: 'color 0.3s ease, gap 0.3s ease'
  },
  cardLinkDisabled: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.78rem',
    fontWeight: '500',
    color: '#94a3b8',
    background: 'rgba(255, 255, 255, 0.04)',
    padding: '5px 12px',
    borderRadius: '9999px',
    border: '1px solid rgba(255, 255, 255, 0.07)'
  },

  // Philosophy Card
  philosophyCard: {
    background: 'linear-gradient(145deg, rgba(18, 25, 45, 0.75) 0%, rgba(10, 13, 22, 0.92) 100%)',
    padding: '60px 50px',
    borderRadius: '32px',
    border: '1px solid rgba(59, 130, 246, 0.22)',
    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden'
  },
  philoAmbientGlow: {
    position: 'absolute',
    top: '-35%',
    right: '-10%',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(65px)',
    pointerEvents: 'none'
  },
  philoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2
  },
  philoQuoteMark: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '4.5rem',
    lineHeight: '0.8',
    color: '#3b82f6',
    opacity: 0.5,
    marginBottom: '10px'
  },
  philoHeading: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 'clamp(1.8rem, 2.5vw, 2.3rem)',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.25',
    marginBottom: '18px'
  },
  philoQuoteText: {
    color: '#cbd5e1',
    lineHeight: '1.85',
    fontSize: '1.02rem',
    marginBottom: '20px'
  },
  philoAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '15px'
  },
  philoAuthorDot: {
    width: '8px',
    height: '8px',
    background: '#38bdf8',
    borderRadius: '50%',
    boxShadow: '0 0 10px #38bdf8'
  },
  philoAuthorName: {
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#f8fafc'
  },
  philoPillars: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  philoPillarItem: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    borderRadius: '18px',
    padding: '20px 24px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    transition: 'all 0.3s ease'
  },
  philoPillarNum: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.2rem',
    fontWeight: '800',
    color: '#38bdf8',
    lineHeight: '1'
  },
  philoPillarTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '4px'
  },
  philoPillarDesc: {
    fontSize: '0.85rem',
    color: '#94a3b8',
    lineHeight: '1.5'
  },

  // Skills & Disciplines
  skillsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px'
  },
  skillBox: {
    background: 'linear-gradient(150deg, rgba(16, 22, 35, 0.75) 0%, rgba(9, 12, 19, 0.88) 100%)',
    padding: '42px 34px',
    borderRadius: '26px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease, transform 0.3s ease'
  },
  skillBoxHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '26px'
  },
  skillBoxIconBadge: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'rgba(59, 130, 246, 0.12)',
    border: '1px solid rgba(59, 130, 246, 0.28)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#38bdf8'
  },
  skillBoxTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.35rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  skillTag: {
    padding: '9px 18px',
    background: 'rgba(255, 255, 255, 0.04)',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#cbd5e1',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.25s ease'
  },

  // Services Grid
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '28px'
  },
  serviceCard: {
    background: 'linear-gradient(150deg, rgba(16, 22, 35, 0.75) 0%, rgba(9, 12, 19, 0.88) 100%)',
    padding: '42px 32px',
    borderRadius: '26px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    textAlign: 'left',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative'
  },
  serviceIconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.18) 0%, rgba(59, 130, 246, 0.04) 100%)',
    border: '1px solid rgba(59, 130, 246, 0.28)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#38bdf8',
    marginBottom: '24px'
  },
  serviceTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '12px',
    lineHeight: '1.3'
  },
  serviceDesc: {
    color: '#94a3b8',
    fontSize: '0.88rem',
    lineHeight: '1.7',
    fontWeight: '400'
  },

  // Education & Credentials
  eduWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '860px',
    margin: '0 auto'
  },
  eduCard: {
    background: 'linear-gradient(145deg, rgba(16, 22, 35, 0.65) 0%, rgba(9, 12, 19, 0.82) 100%)',
    padding: '30px 36px',
    borderRadius: '22px',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    transition: 'border-color 0.3s ease'
  },
  eduTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '4px'
  },
  eduSub: {
    color: '#94a3b8',
    fontSize: '0.88rem'
  },
  eduYearBadge: {
    fontSize: '0.78rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#60a5fa',
    background: 'rgba(59, 130, 246, 0.12)',
    border: '1px solid rgba(59, 130, 246, 0.28)',
    padding: '6px 16px',
    borderRadius: '9999px'
  },

  // Tools & Daily Ecosystem
  toolsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
    justifyContent: 'center',
    marginTop: '36px'
  },
  toolItem: {
    padding: '12px 26px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '9999px',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#cbd5e1',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    letterSpacing: '0.5px'
  },

  // Footer & Contact Concierge
  footer: {
    padding: '120px 8% 60px 8%',
    textAlign: 'center',
    boxSizing: 'border-box',
    position: 'relative'
  },
  contactBox: {
    background: 'linear-gradient(150deg, rgba(18, 25, 42, 0.8) 0%, rgba(9, 12, 20, 0.95) 100%)',
    padding: '70px 40px',
    borderRadius: '36px',
    maxWidth: '920px',
    margin: '0 auto 70px auto',
    border: '1px solid rgba(59, 130, 246, 0.25)',
    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.1)',
    position: 'relative',
    overflow: 'hidden'
  },
  contactHeading: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
    fontWeight: '800',
    lineHeight: '1.2',
    color: '#ffffff',
    marginBottom: '16px'
  },
  contactSub: {
    color: '#94a3b8',
    fontSize: '0.98rem',
    maxWidth: '540px',
    margin: '0 auto 40px auto',
    lineHeight: '1.7'
  },
  contactActions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: '40px'
  },
  emailCopyBtn: {
    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '14px 30px',
    borderRadius: '9999px',
    fontWeight: '700',
    fontSize: '0.88rem',
    letterSpacing: '0.5px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.45)',
    transition: 'all 0.3s ease'
  },
  directMailLink: {
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#f8fafc',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    padding: '14px 28px',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '0.88rem',
    letterSpacing: '0.5px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '14px',
    flexWrap: 'wrap'
  },
  socialBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 22px',
    background: 'rgba(255, 255, 255, 0.04)',
    color: '#cbd5e1',
    textDecoration: 'none',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '0.82rem',
    letterSpacing: '0.5px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'all 0.3s ease'
  },
  footerMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px'
  },
  footerTime: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#8492a6',
    fontSize: '0.78rem',
    letterSpacing: '1.5px',
    textTransform: 'uppercase'
  },
  copyright: {
    color: '#475569',
    fontSize: '0.82rem',
    letterSpacing: '0.5px'
  },

  // Interactive Micro-Elements
  customCursor: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '32px',
    height: '32px',
    border: '1px solid rgba(59, 130, 246, 0.65)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 999999,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.2s, height 0.2s, background-color 0.2s'
  },
  customCursorDot: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '6px',
    height: '6px',
    backgroundColor: '#38bdf8',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 999999,
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 10px #38bdf8'
  },
  scrollTopBtn: {
    position: 'fixed',
    bottom: '32px',
    right: '32px',
    width: '46px',
    height: '46px',
    backgroundColor: '#0c101c',
    color: '#60a5fa',
    border: '1px solid rgba(59, 130, 246, 0.35)',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  },
  toast: {
    position: 'fixed',
    bottom: '90px',
    left: 0,
    right: 0,
    margin: '0 auto',
    width: 'fit-content',
    background: 'rgba(12, 17, 28, 0.95)',
    border: '1px solid rgba(59, 130, 246, 0.4)',
    color: '#e2e8f0',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    zIndex: 100000,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(16px)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }
};