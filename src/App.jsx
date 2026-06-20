import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ICON COMPONENTS (SVG MURNI) ---
const Icons = {
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
  ),
  External: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
  ),
  Layers: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 3.91a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 3.91a2 2 0 0 1-1.66 0L2 12.65"/></svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1 1.1-1.1 2.35-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  )
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* LOADER COMPONENT */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            style={styles.loaderContainer}
          >
            <div style={styles.loaderContent}>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={styles.loaderLogo}
              >
                RAHAJENG<span style={{ color: '#3b82f6' }}>EKA</span>
              </motion.div>
              <div style={styles.loaderTrack}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  style={styles.loaderFill} 
                />
              </div>
              <motion.p 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={styles.loaderText}
              >
                Preparing Aesthetics...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={styles.body}>
        {/* Navbar */}
        <header style={styles.header}>
          <div style={styles.logo}>RAHAJENG<span style={styles.logoAccent}>EKA</span></div>
          <nav style={styles.nav}>
            <a href="#home" style={styles.navLink}>Home</a>
            <a href="#portfolio" style={styles.navLink}>Works</a>
            <a href="#skills" style={styles.navLink}>Skills</a>
            <a href="#contact" style={styles.navLinkContact}>Let's Talk</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" style={styles.heroSection}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={styles.heroContent}
          >
            <div style={styles.badge}>
              <Icons.Sparkles /> FRONTEND DEVELOPER & UI/UX
            </div>
            <h1 style={styles.heroTitle}>
              Blending <span style={styles.gradientText}>Visual Art</span> <br /> 
              with Digital Logic.
            </h1>
            <p style={styles.heroSubtitle}>
              Halo, saya <b>Rahajeng Eka</b>. Mahasiswa Teknologi Informasi yang membawa ketajaman estetika dari dunia MUA ke dalam baris kode pemrograman.
            </p>
            <div style={styles.btnGroup}>
              <a href="#portfolio" style={styles.btnPrimary}>View Projects</a>
              <a href="#contact" style={styles.btnSecondary}>Contact Me</a>
            </div>
          </motion.div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Portofolio Projek</h2>
            <div style={styles.titleLine}></div>
          </div>

          <div style={styles.portfolioGrid}>
            <ProjectCard 
              title="Smart Oryza Platform"
              tags={["Laravel", "Flutter"]}
              desc="Integrasi dashboard web dan aplikasi mobile untuk optimalisasi sektor agrikultur pangan."
              link="http://smartoryza.site"
              color="#065f46"
            />
            <ProjectCard 
              title="Pintar Ceria — Web Edu"
              tags={["Native PHP", "UI/UX"]}
              desc="Platform e-learning interaktif ramah anak untuk siswa Sekolah Dasar (SD)."
              color="#1e293b"
            />
            <ProjectCard 
              title="Tatik Catering"
              tags={["Web Dev", "Sistem Informasi"]}
              desc="Sistem katalog informasi menu kuliner estetis dengan fitur simulasi pemesanan."
              color="#701a75"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Expertise</h2>
            <div style={styles.titleLine}></div>
          </div>
          <div style={styles.skillsWrapper}>
            <div style={styles.skillBox}>
              <h3 style={styles.skillBoxTitle}>Frontend Stack</h3>
              <div style={styles.skillTags}>
                {["Flutter", "Laravel", "React.js", "PHP OOP", "Tailwind CSS"].map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </div>
            <div style={styles.skillBox}>
              <h3 style={styles.skillBoxTitle}>Creative Design</h3>
              <div style={styles.skillTags}>
                {["Figma", "UI/UX Wireframing", "Canva", "CapCut Editor"].map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" style={styles.section}>
          <div style={styles.philosophyCard}>
            <div style={styles.philoIcon}>✨</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>The MUA Precision</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1.1rem' }}>
                Pengalaman saya sebagai <b>Freelance MUA</b> mengasah detail visual dan keselarasan warna. Saya mentransformasikan estetika ini ke UI Design yang bersih, harmonis, dan fungsional.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" style={styles.footer}>
          <div style={styles.contactBox}>
            <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Let's Create Magic!</h2>
            <p style={{ color: '#94a3b8', marginBottom: '35px' }}>Tertarik membangun projek digital yang memikat? Hubungi saya sekarang.</p>
            <div style={styles.socialLinks}>
              <a href="mailto:rahajengg29@gmail.com" style={styles.socialBtn}><Icons.Mail /> Email</a>
              <a href="https://www.linkedin.com/in/rahajeng-eka-a18b7b320" target="_blank" rel="noreferrer" style={styles.socialBtn}><Icons.Linkedin /> LinkedIn</a>
              <a href="https://github.com/rahajengeka" target="_blank" rel="noreferrer" style={styles.socialBtn}><Icons.Github /> GitHub</a>
            </div>
          </div>
          <p style={styles.copyright}>&copy; 2026 Rahajeng Eka Wahyuningtiyas. Crafted for Perfection.</p>
        </footer>
      </div>
    </>
  );
}

// Sub-component Kartu Projek
function ProjectCard({ title, tags, desc, link, color }) {
  return (
    <motion.div whileHover={{ y: -10 }} style={styles.card}>
      <div style={{ ...styles.cardTop, background: `linear-gradient(135deg, ${color}, #000)` }}>
        <Icons.Layers />
      </div>
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
          <span style={styles.cardLinkDisabled}>Environment: Local Host</span>
        )}
      </div>
    </motion.div>
  );
}

const styles = {
  // LOADER STYLES
  loaderContainer: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#05070a', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  loaderContent: { textAlign: 'center', width: '250px' },
  loaderLogo: { fontSize: '1.4rem', fontWeight: '900', color: '#fff', letterSpacing: '4px', marginBottom: '20px' },
  loaderTrack: { width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' },
  loaderFill: { height: '100%', background: '#3b82f6' },
  loaderText: { color: '#3b82f6', fontSize: '0.7rem', marginTop: '12px', letterSpacing: '2px', textTransform: 'uppercase' },

  // MAIN STYLES
  body: { backgroundColor: '#05070a', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', scrollBehavior: 'smooth' },
  header: { position: 'fixed', top: 0, width: '100%', padding: '20px 8%', background: 'rgba(5, 7, 10, 0.8)', backdropFilter: 'blur(15px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, boxSizing: 'border-box', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  logo: { fontSize: '1.1rem', fontWeight: '900', letterSpacing: '2px' },
  logoAccent: { color: '#3b82f6' },
  nav: { display: 'flex', gap: '30px', alignItems: 'center' },
  navLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', transition: '0.3s' },
  navLinkContact: { color: '#fff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '700', background: '#3b82f6', padding: '8px 20px', borderRadius: '50px' },
  
  heroSection: { padding: '160px 8% 80px 8%', minHeight: '80vh', display: 'flex', alignItems: 'center' },
  heroContent: { maxWidth: '850px' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.1)', color: '#60a5fa', padding: '8px 18px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '800', marginBottom: '30px', border: '1px solid rgba(59,130,246,0.2)' },
  heroTitle: { fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', lineHeight: '1.1', margin: '0 0 30px 0' },
  gradientText: { background: 'linear-gradient(to right, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  heroSubtitle: { fontSize: '1.2rem', color: '#94a3b8', lineHeight: '1.8', marginBottom: '45px', maxWidth: '650px' },
  
  btnGroup: { display: 'flex', gap: '15px' },
  btnPrimary: { padding: '15px 35px', borderRadius: '12px', background: '#3b82f6', color: '#fff', textDecoration: 'none', fontWeight: '700', boxShadow: '0 10px 20px rgba(59,130,246,0.2)' },
  btnSecondary: { padding: '15px 35px', borderRadius: '12px', border: '1px solid #334155', color: '#fff', textDecoration: 'none', fontWeight: '700' },

  section: { padding: '100px 8%' },
  sectionHeader: { marginBottom: '50px' },
  sectionTitle: { fontSize: '2rem', fontWeight: '800', marginBottom: '10px' },
  titleLine: { width: '40px', height: '4px', background: '#3b82f6', borderRadius: '10px' },

  portfolioGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' },
  card: { background: '#0f172a', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' },
  cardTop: { height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' },
  cardBody: { padding: '30px' },
  cardTagGroup: { display: 'flex', gap: '8px', marginBottom: '15px' },
  cardTag: { fontSize: '0.7rem', fontWeight: '700', color: '#3b82f6', background: 'rgba(59,130,246,0.1)', padding: '4px 10px', borderRadius: '6px' },
  cardTitle: { fontSize: '1.4rem', marginBottom: '12px' },
  cardDesc: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px' },
  cardLink: { display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' },
  cardLinkDisabled: { color: '#475569', fontSize: '0.85rem' },

  skillsWrapper: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  skillBox: { background: '#0f172a', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' },
  skillBoxTitle: { fontSize: '1.2rem', marginBottom: '25px', color: '#3b82f6' },
  skillTags: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
  skillTag: { padding: '10px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.05)' },

  philosophyCard: { background: 'linear-gradient(135deg, #1e1b4b, #0f172a)', padding: '50px', borderRadius: '32px', display: 'flex', gap: '30px', alignItems: 'center', border: '1px solid rgba(99,102,241,0.2)' },
  philoIcon: { fontSize: '2.5rem', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '20px' },

  footer: { padding: '100px 8% 50px 8%', textAlign: 'center' },
  contactBox: { background: '#0f172a', padding: '60px 20px', borderRadius: '40px', marginBottom: '60px', border: '1px solid rgba(255,255,255,0.05)' },
  socialLinks: { display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' },
  socialBtn: { display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 25px', background: '#1e293b', color: '#fff', textDecoration: 'none', borderRadius: '12px', fontWeight: '600', transition: '0.3s' },
  copyright: { color: '#475569', fontSize: '0.85rem' }
};

export default App;