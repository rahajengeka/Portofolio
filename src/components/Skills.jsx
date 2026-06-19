import React from 'react';

function Skills() {
  const frontendSkills = ['PHP', 'Framework Laravel', 'Flutter (Mobile Frontend)', 'HTML5 & CSS3', 'React.js'];
  const designSkills = ['Figma (UI/UX Design)', 'Canva (Graphic & Merchandise)', 'CapCut & VN (Video Editing)'];
  const softSkills = ['Kerjasama Kelompok', 'Manajemen Administrasi', 'Komunikasi Publik'];

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    margin: '4px',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#2b6cb0', borderBottom: '2px solid #2b6cb0', paddingBottom: '5px' }}>Skills & Tools</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          
          <div style={{ padding: '15px', backgroundColor: '#f7fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#2d3748', marginTop: '0' }}>💻 Frontend Tech</h3>
            {frontendSkills.map((s, i) => <span key={i} style={{ ...badgeStyle, backgroundColor: '#e2e8f0', color: '#2d3748' }}>{s}</span>)}
          </div>

          <div style={{ padding: '15px', backgroundColor: '#f7fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#2d3748', marginTop: '0' }}>🎨 Creative & UI/UX</h3>
            {designSkills.map((s, i) => <span key={i} style={{ ...badgeStyle, backgroundColor: '#feebc8', color: '#7b341e' }}>{s}</span>)}
          </div>

          <div style={{ padding: '15px', backgroundColor: '#f7fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#2d3748', marginTop: '0' }}>🧠 Soft Skills</h3>
            {softSkills.map((s, i) => <span key={i} style={{ ...badgeStyle, backgroundColor: '#e2f5ea', color: '#1a532b' }}>{s}</span>)}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;