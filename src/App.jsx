import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { styles } from './App.styles';

const Icons = {
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
  ),
  External: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1 1.1-1.1 2.35-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  UpArrow: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
  )
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);
  
  const words = ["Digital Logic.", "UI/UX Aesthetics.", "Web Development."];
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollY } = useScroll();

  const bgTextScale = useTransform(scrollY, [0, 500], [1, 1.12]);
  const bgTextOpacity = useTransform(scrollY, [0, 400], [0.12, 0]);
  const parallaxImageScale = useTransform(scrollY, [0, 500], [1, 0.92]);
  const parallaxImageOpacity = useTransform(scrollY, [0, 500], [1, 0.25]);
  const parallaxImageY = useTransform(scrollY, [0, 500], [0, 60]);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentWord = words[index];
      if (!isDeleting) {
        setSubText(currentWord.substring(0, subText.length + 1));
        if (subText === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setSubText(currentWord.substring(0, subText.length - 1));
        if (subText === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
      timer = setTimeout(handleTyping, isDeleting ? 40 : 100);
    };

    if (!loading) {
      timer = setTimeout(handleTyping, 100);
    }
    return () => clearTimeout(timer);
  }, [subText, isDeleting, index, loading]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    const checkDevice = () => { setIsMobile(window.innerWidth <= 768); };
    checkDevice();

    const handleMouseMove = (e) => { setMousePos({ x: e.clientX, y: e.clientY }); };
    const handleScroll = () => {
      if (window.scrollY > 400) { setShowScroll(true); } 
      else { setShowScroll(false); }
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

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <>
      <style>{`
  .bg-portfolio-text {
    white-space: nowrap !important;
  }
  @media (max-width: 768px) {
    header { padding: 15px 5% !important; }
    nav { gap: 15px !important; }
    .nav-link-main { display: none !important; }
    .hero-section { height: auto !important; min-height: 100vh; padding: 120px 5% 60px 5% !important; flex-direction: column; justify-content: flex-start !important; }
    .hero-image { position: relative !important; height: 45vh !important; bottom: unset !important; margin-top: 20px; margin-bottom: 20px; }
    .info-top-left, .info-top-right, .info-bottom-left, .info-bottom-right { position: relative !important; top: unset !important; bottom: unset !important; left: unset !important; right: unset !important; text-align: center !important; max-width: 100% !important; margin: 10px 0; }
    .info-bottom-left { order: 5; }
    .info-bottom-right { order: 6; }
    .links-container { justify-content: center; }
    .section-padding { padding: 60px 5% !important; }
    .philosophy-card { flex-direction: column; text-align: center; padding: 30px !important; gap: 20px !important; }
    .contact-box { padding: 40px 15px !important; }
    .bg-portfolio-text {
      white-space: pre-line !important;
      line-height: 0.95 !important;
      font-size: 18vw !important;
    }
  }
  .nav-item:hover { color: #fff !important; }
  html { scroll-behavior: smooth; }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  .status-dot {
    width: 8px; height: 8px; background-color: #10b981; borderRadius: 50%;
    animation: pulse-glow 2s infinite ease-in-out;
    box-shadow: 0 0 10px #10b981;
  }
  @keyframes local-pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  .local-dot {
    width: 6px; height: 6px; background-color: #64748b; borderRadius: 50%;
    animation: local-pulse 1.8s infinite ease-in-out;
  }
`}</style>

      {!isMobile && !loading && (
        <motion.div 
          className="custom-cursor"
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.2 }}
          style={styles.customCursor}
        />
      )}

      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            style={styles.loaderContainer}
          >
            <div style={styles.loaderContent}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={styles.loaderLogo}>
                RAHAJENG<span style={{ color: '#3b82f6' }}>EKA</span>
              </motion.div>
              <div style={styles.loaderTrack}>
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.8, ease: "easeInOut" }} style={styles.loaderFill} />
              </div>
              <motion.p animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }} style={styles.loaderText}>
                LOADING PORTOFOLIO...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={styles.body}>
        <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 2.2 }} style={styles.header}>
          <div style={styles.logo}>RAHAJENG<span style={styles.logoAccent}>EKA</span></div>
          <nav style={styles.nav}>
            <a href="#home" style={styles.navLink} className="nav-link-main nav-item">Home</a>
            <a href="#portfolio" style={styles.navLink} className="nav-link-main nav-item">Works</a>
            <a href="#skills" style={styles.navLink} className="nav-link-main nav-item">Skills</a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" style={styles.navLinkContact}>
              Let's Talk
            </motion.a>
          </nav>
        </motion.header>

        <section id="home" style={styles.heroSection} className="hero-section">
          <div style={styles.heroBlurBg}></div>
          
          <motion.h1 
            className="bg-portfolio-text"
            style={{ 
              ...styles.bgPortfolioText, 
              scale: bgTextScale, 
              opacity: bgTextOpacity 
            }}
          >
            {"PORTO\nFOLIO"}
          </motion.h1>

          {!loading && (
            <motion.img 
              style={{
                ...styles.heroImage,
                scale: parallaxImageScale,
                opacity: parallaxImageOpacity,
                y: parallaxImageY
              }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src="/foto-rahajeng.webp" 
              alt="Rahajeng Eka" 
              className="hero-image"
            />
          )}

          <div style={styles.infoTopLeft} className="info-top-left">CREATIVE PORTFOLIO</div>
          
          <div style={styles.infoTopRight} className="info-top-right">
            <span className="status-dot"></span>
            AVAILABLE FOR HIRE
          </div>
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} style={styles.infoBottomLeft} className="info-bottom-left">
            <p style={styles.shortDesc}>
              Halo, saya <b>Rahajeng Eka Wahyuningtiyas</b>, membawa ketajaman estetika desain ke dalam dunia pemrograman. Blending Visual Art with <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>{subText}</span>
              <span style={{ color: '#3b82f6', fontWeight: 'bold' }} className="cursor">|</span>
            </p>
            <div style={styles.linksContainer} className="links-container">
              <span style={styles.infoLink}>Frontend Developer & UI Designer</span>
            </div>
          </motion.div>
          <div style={styles.infoBottomRight} className="info-bottom-right">Based in Malang, Indonesia</div>
        </section>

        <section id="portfolio" style={styles.section} className="section-padding">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Portofolio Projek</h2>
            <div style={styles.titleLine}></div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} style={styles.portfolioGrid}>
            <ProjectCard title="Smart Oryza Platform" tags={["Laravel", "Flutter"]} desc="Integrasi dashboard web dan aplikasi mobile untuk optimalisasi sektor agrikultur pangan." link="http://smartoryza.site" image="/project-smartoryza.png" />
            <ProjectCard title="Pintar Ceria — Web Edu" tags={["Native PHP", "UI/UX"]} desc="Platform e-learning interaktif ramah anak untuk siswa Sekolah Dasar (SD)." image="/project-edukasi.png" />
            <ProjectCard title="Tatik Catering" tags={["Web Dev", "Sistem Informasi"]} desc="Sistem katalog informasi menu kuliner estetis dengan fitur simulasi pemesanan." image="/project-catering.png" />
          </motion.div>
        </section>

        <section id="skills" style={styles.section} className="section-padding">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Expertise</h2>
            <div style={styles.titleLine}></div>
          </motion.div>
          <div style={styles.skillsWrapper}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} style={styles.skillBox}>
              <h3 style={styles.skillBoxTitle}>Frontend Stack</h3>
              <div style={styles.skillTags}>
                {["Flutter", "Laravel", "React.js", "PHP OOP", "Tailwind CSS"].map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} style={styles.skillBox}>
              <h3 style={styles.skillBoxTitle}>Creative Design</h3>
              <div style={styles.skillTags}>
                {["Figma", "UI/UX Wireframing", "Canva", "CapCut Editor"].map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" style={styles.section} className="section-padding">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Services I Offer</h2>
            <div style={styles.titleLine}></div>
          </motion.div>
          <div style={styles.servicesGrid}>
            <motion.div whileHover={{ y: -8, borderColor: 'rgba(59,130,246,0.3)' }} style={styles.serviceCard}>
              <span style={styles.serviceIcon}>💻</span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Web Development</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>Membangun platform digital tangguh, responsif, dan adaptif menggunakan ekosistem framework modern.</p>
            </motion.div>
            <motion.div whileHover={{ y: -8, borderColor: 'rgba(59,130,246,0.3)' }} style={styles.serviceCard}>
              <span style={styles.serviceIcon}>📐</span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>UI/UX Architecture</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>Mentransformasikan wireframe mentah menjadi cetak biru antarmuka fungsional yang intuitif & berestetika tinggi.</p>
            </motion.div>
            <motion.div whileHover={{ y: -8, borderColor: 'rgba(59,130,246,0.3)' }} style={styles.serviceCard}>
              <span style={styles.serviceIcon}>🎬</span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Visual Production</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>Mengombinasikan ritme konten multimedia & keselarasan palet warna dinamis untuk representasi *brand* yang kuat.</p>
            </motion.div>
          </div>
        </section>

        <section id="education" style={styles.section} className="section-padding">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Education & Credentials</h2>
            <div style={styles.titleLine}></div>
          </motion.div>
          <div style={styles.eduWrapper}>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={styles.eduCard}>
              <div>
                <h3 style={styles.eduTitle}>Universitas Brawijaya</h3>
                <p style={styles.eduSub}>Information Technology Student & Developer</p>
              </div>
              <span style={styles.eduYear}>Malang, ID</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={styles.eduCard}>
              <div>
                <h3 style={styles.eduTitle}>SMAN 1 Dringu</h3>
                <p style={styles.eduSub}>Jurusan Ilmu Pengetahuan Alam</p>
              </div>
              <span style={styles.eduYear}>Probolinggo, ID</span>
            </motion.div>
          </div>
        </section>

        <section id="philosophy" style={styles.section} className="section-padding">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={styles.philosophyCard} className="philosophy-card">
            <div style={styles.philoIcon}>✨</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>The MUA Precision</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1.1rem' }}>
                Pengalaman saya sebagai <b>Freelance MUA</b> mengasah detail visual dan keselarasan warna. Saya mentransformasikan estetika ini ke UI Design yang bersih, harmonis, dan fungsional.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="workflow" style={{ ...styles.section, textAlign: 'center' }} className="section-padding">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }} style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Daily Infrastructure & Deployment Ecosystem
          </motion.p>
          <div style={styles.toolsGrid}>
            {["Flutter Framework", "VS Code Editor", "Capcut Video Editor", "Figma Design Engine"].map((tool, idx) => (
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                key={tool} 
                style={styles.toolItem}
              >
                <Icons.Sparkles /> {tool}
              </motion.span>
            ))}
          </div>
        </section>

        <footer id="contact" style={styles.footer} className="section-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={styles.contactBox} className="contact-box">
            <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Let's Create Magic!</h2>
            <p style={{ color: '#94a3b8', marginBottom: '35px' }}>Tertarik membangun projek digital yang memikat? Hubungi saya sekarang.</p>
            <div style={styles.socialLinks}>
              <motion.a whileHover={{ y: -5 }} href="mailto:rahajengg29@gmail.com" style={styles.socialBtn}><Icons.Mail /> Email</motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/rahajeng-eka-a18b7b320" target="_blank" rel="noreferrer" style={styles.socialBtn}><Icons.Linkedin /> LinkedIn</motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://github.com/rahajengeka" target="_blank" rel="noreferrer" style={styles.socialBtn}><Icons.Github /> GitHub</motion.a>
            </div>
          </motion.div>
          <p style={styles.copyright}>&copy; 2026 Rahajeng Eka Wahyuningtiyas. Crafted for Perfection.</p>
        </footer>

        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1, backgroundColor: '#2563eb' }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              style={styles.scrollTopBtn}
              aria-label="Scroll to top"
            >
              <Icons.UpArrow />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function ProjectCard({ title, tags, desc, link, image }) {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -10 }} style={styles.card}>
      <div style={{ ...styles.cardTop, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div style={styles.cardBody}>
        <div style={styles.cardTagGroup}>
          {tags.map(t => <span key={t} style={styles.cardTag}>{t}</span>)}
        </div>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDesc}>{desc}</p>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer" style={styles.cardLink}>
            Visit Website <Icons.External />
          </a>
        ) : (
          <span style={styles.cardLinkDisabled}>
            <span className="local-dot"></span>
            Local Environment
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default App;