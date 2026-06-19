import React from 'react';

function Hero() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
      <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0', color: '#1a365d' }}>Rahajeng Eka Wahyuningtiyas</h1>
      <p style={{ fontSize: '1.2rem', color: '#4a5568', fontWeight: 'bold' }}>Frontend Web & Mobile Developer | UI/UX Enthusiast</p>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', color: '#4a5568' }}>
        <span>📍 Malang, Indonesia</span>
        <span>📞 +62 882-3075-4665</span>
        <span>✉️ rahajengg29@gmail.com</span>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn</a>
        <a href="https://github.com/username" target="_blank" rel="noreferrer" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
      </div>
    </section>
  );
}

export default Hero;