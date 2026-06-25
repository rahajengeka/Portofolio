export const styles = {
  loaderContainer: { 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    background: '#05070a', 
    zIndex: 9999, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  loaderContent: { 
    textAlign: 'center', 
    width: '250px' 
  },
  loaderLogo: { 
    fontSize: '1.4rem', 
    fontWeight: '900', 
    color: '#fff', 
    letterSpacing: '4px', 
    marginBottom: '20px' 
  },
  loaderTrack: { 
    width: '100%', 
    height: '2px', 
    background: 'rgba(255,255,255,0.1)', 
    borderRadius: '10px', 
    overflow: 'hidden' 
  },
  loaderFill: { 
    height: '100%', 
    background: '#3b82f6' 
  },
  loaderText: { 
    color: '#3b82f6', 
    fontSize: '0.7rem', 
    marginTop: '12px', 
    letterSpacing: '2px', 
    textTransform: 'uppercase' 
  },

  body: { 
    backgroundColor: '#05070a', 
    color: '#f1f5f9', 
    minHeight: '100vh', 
    fontFamily: 'system-ui, -apple-system, sans-serif', 
    scrollBehavior: 'smooth' 
  },
  header: { 
    position: 'fixed', 
    top: 0, 
    width: '100%', 
    padding: '20px 8%', 
    background: 'rgba(5, 7, 10, 0.4)', 
    backdropFilter: 'blur(15px)', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    zIndex: 1000, 
    boxSizing: 'border-box', 
    borderBottom: '1px solid rgba(255,255,255,0.05)' 
  },
  logo: { 
    fontSize: '1.1rem', 
    fontWeight: '900', 
    letterSpacing: '2px' 
  },
  logoAccent: { 
    color: '#3b82f6' 
  },
  nav: { 
    display: 'flex', 
    gap: '30px', 
    alignItems: 'center' 
  },
  navLink: { 
    color: '#94a3b8', 
    textDecoration: 'none', 
    fontSize: '0.85rem', 
    fontWeight: '600', 
    transition: '0.3s' 
  },
  navLinkContact: { 
    color: '#fff', 
    textDecoration: 'none', 
    fontSize: '0.85rem', 
    fontWeight: '700', 
    background: '#3b82f6', 
    padding: '8px 20px', 
    borderRadius: '50px', 
    whiteSpace: 'nowrap' 
  },
  
  heroSection: { 
    position: 'relative', 
    width: '100%', 
    height: '100vh', 
    backgroundColor: '#000', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    overflow: 'hidden', 
    boxSizing: 'border-box' 
  },
  heroBlurBg: { 
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    backgroundImage: 'url("/foto-rahajeng.webp")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    filter: 'blur(35px) grayscale(100%) brightness(20%)', 
    transform: 'scale(1.1)', 
    zIndex: 1 
  },
  bgPortfolioText: { 
    position: 'absolute', 
    fontSize: 'clamp(3rem, 15vw, 15rem)', 
    fontWeight: '900', 
    color: '#ffffff', 
    letterSpacing: '-2px', 
    margin: 0, 
    zIndex: 2, 
    textAlign: 'center', 
    width: '100%', 
    userSelect: 'none' 
  },
  heroImage: { 
    position: 'absolute', 
    bottom: 0, 
    height: '85vh', 
    maxHeight: '100%', 
    zIndex: 3, 
    objectFit: 'contain' 
  },
  infoTopLeft: { 
    position: 'absolute', 
    top: '100px', 
    left: '8%', 
    color: '#fff', 
    fontSize: '0.8rem', 
    fontWeight: '700', 
    letterSpacing: '2px', 
    zIndex: 4 
  },
  infoTopRight: { 
    position: 'absolute', 
    top: '100px', 
    right: '8%', 
    color: '#3b82f6', 
    fontSize: '0.8rem', 
    fontWeight: '700', 
    letterSpacing: '2px', 
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(59, 130, 246, 0.1)',
    padding: '6px 14px',
    borderRadius: '50px',
    border: '1px solid rgba(59, 130, 246, 0.2)'
  },
  infoBottomLeft: { 
    position: 'absolute', 
    bottom: '40px', 
    left: '8%', 
    maxWidth: '350px', 
    zIndex: 4, 
    textAlign: 'left' 
  },
  shortDesc: { 
    fontSize: '0.75rem', 
    color: '#94a3b8', 
    lineHeight: '1.6', 
    margin: '0 0 15px 0' 
  },
  linksContainer: { 
    display: 'flex', 
    gap: '20px' 
  },
  infoLink: { 
    fontSize: '0.8rem', 
    color: '#fff', 
    fontWeight: '500', 
    wordBreak: 'break-all' 
  },
  infoBottomRight: { 
    position: 'absolute', 
    bottom: '40px', 
    right: '8%', 
    color: '#94a3b8', 
    fontSize: '0.8rem', 
    zIndex: 4 
  },

  section: { 
    padding: '100px 8%', 
    boxSizing: 'border-box' 
  },
  sectionHeader: { 
    marginBottom: '50px' 
  },
  sectionTitle: { 
    fontSize: '2rem', 
    fontWeight: '800', 
    marginBottom: '10px' 
  },
  titleLine: { 
    width: '40px', 
    height: '4px', 
    background: '#3b82f6', 
    borderRadius: '10px' 
  },

  portfolioGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '30px' 
  },
  card: { 
    background: '#0f172a', 
    borderRadius: '24px', 
    overflow: 'hidden', 
    border: '1px solid rgba(255,255,255,0.05)' 
  },
  cardTop: { 
    height: '180px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: 'rgba(255,255,255,0.2)' 
  },
  cardBody: { 
    padding: '30px' 
  },
  cardTagGroup: { 
    display: 'flex', 
    gap: '8px', 
    marginBottom: '15px', 
    flexWrap: 'wrap' 
  },
  cardTag: { 
    fontSize: '0.7rem', 
    fontWeight: '700', 
    color: '#3b82f6', 
    background: 'rgba(59,130,246,0.1)', 
    padding: '4px 10px', 
    borderRadius: '6px' 
  },
  cardTitle: { 
    fontSize: '1.4rem', 
    marginBottom: '12px' 
  },
  cardDesc: { 
    color: '#94a3b8', 
    fontSize: '0.95rem', 
    lineHeight: '1.6', 
    marginBottom: '25px' 
  },
  cardLink: { 
    display: 'inline-flex', 
    alignItems: 'center', 
    gap: '8px', 
    color: '#fff', 
    textDecoration: 'none', 
    fontWeight: '700', 
    fontSize: '0.9rem' 
  },
  cardLinkDisabled: { 
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#64748b',
    background: 'rgba(100, 116, 139, 0.1)',
    padding: '4px 10px',
    borderRadius: '6px',
    border: '1px solid rgba(100, 116, 139, 0.15)'
  },

  skillsWrapper: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '30px' 
  },
  skillBox: { 
    background: '#0f172a', 
    padding: '40px 30px', 
    borderRadius: '24px', 
    border: '1px solid rgba(255,255,255,0.05)', 
    boxSizing: 'border-box' 
  },
  skillBoxTitle: { 
    fontSize: '1.2rem', 
    marginBottom: '25px', 
    color: '#3b82f6' 
  },
  skillTags: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '10px' 
  },
  skillTag: { 
    padding: '10px 20px', 
    background: 'rgba(255,255,255,0.03)', 
    borderRadius: '12px', 
    fontSize: '0.9rem', 
    border: '1px solid rgba(255,255,255,0.05)' 
  },

  philosophyCard: { 
    background: 'linear-gradient(135deg, #1e1b4b, #0f172a)', 
    padding: '50px', 
    borderRadius: '32px', 
    display: 'flex', 
    gap: '30px', 
    alignItems: 'center', 
    border: '1px solid rgba(99,102,241,0.2)', 
    boxSizing: 'border-box' 
  },
  philoIcon: { 
    fontSize: '2.5rem', 
    background: 'rgba(255,255,255,0.05)', 
    padding: '20px', 
    borderRadius: '20px' 
  },

  footer: { 
    padding: '100px 8% 50px 8%', 
    textAlign: 'center', 
    boxSizing: 'border-box' 
  },
  contactBox: { 
    background: '#0f172a', 
    padding: '60px 20px', 
    borderRadius: '40px', 
    marginBottom: '60px', 
    border: '1px solid rgba(255,255,255,0.05)', 
    boxSizing: 'border-box' 
  },
  socialLinks: { 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '15px', 
    flexWrap: 'wrap' 
  },
  socialBtn: { 
    display: 'inline-flex', 
    alignItems: 'center', 
    gap: '10px', 
    padding: '12px 25px', 
    background: '#1e293b', 
    color: '#fff', 
    textDecoration: 'none', 
    borderRadius: '12px', 
    fontWeight: '600', 
    transition: '0.3s' 
  },
  copyright: { 
    color: '#475569', 
    fontSize: '0.85rem' 
  },

  customCursor: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '20px',
    height: '20px',
    backgroundColor: 'rgba(59, 130, 246, 0.4)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 99999,
    mixBlendMode: 'screen',
    boxShadow: '0 0 20px #3b82f6, 0 0 40px #3b82f6',
    transform: 'translate(-50%, -50%)',
    display: 'block'
  },
  scrollTopBtn: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '45px',
    height: '45px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
  },

  eduWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px'
  },
  eduCard: {
    background: '#0f172a',
    padding: '30px',
    borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '15px'
  },
  eduTitle: { fontSize: '1.2rem', fontWeight: '700', marginBottom: '5px' },
  eduSub: { color: '#94a3b8', fontSize: '0.9rem' },
  eduYear: { 
    fontSize: '0.85rem', 
    fontWeight: '700', 
    color: '#3b82f6', 
    background: 'rgba(59,130,246,0.1)', 
    padding: '6px 14px', 
    borderRadius: '50px' 
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
    marginTop: '20px'
  },
  serviceCard: {
    background: '#0f172a',
    padding: '35px 25px',
    borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.02)',
    textAlign: 'left',
    transition: '0.3s'
  },
  serviceIcon: {
    fontSize: '2rem',
    color: '#3b82f6',
    marginBottom: '15px',
    display: 'inline-block'
  },
  toolsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '30px'
  },
  toolItem: {
    padding: '12px 24px',
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '16px',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#94a3b8',
    border: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }
};