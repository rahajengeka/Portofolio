import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Smart Oryza (Aplikasi Monitoring Padi)',
      role: 'Frontend Mobile Developer',
      tech: 'Flutter, Dart',
      desc: 'Melakukan slicing UI/UX antarmuka mobile dari desain Figma dan mengintegrasikan dasbor visualisasi data kondisi lahan padi secara real-time.'
    },
    {
      title: 'Pintar Ceria (Web Edukasi & Kuis Anak SD)',
      role: 'Frontend Developer & UI Designer',
      tech: 'PHP, Figma, HTML/CSS',
      desc: 'Merancang aset visual dan UI interaktif ramah anak menggunakan Figma, kemudian mengimplementasikannya ke dalam bentuk halaman web kuis digital.'
    },
    {
      title: 'Tatik Catering (Sistem Informasi Pemesanan)',
      role: 'Frontend Developer',
      tech: 'Laravel (Blade Template), Bootstrap',
      desc: 'Membangun seluruh komponen antarmuka pengguna halaman depan (landing page), katalog menu makanan, hingga sistem pembuatan invoice pemesanan.'
    }
  ];

  return (
    <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#2b6cb0', borderBottom: '2px solid #2b6cb0', paddingBottom: '5px' }}>Academic Projects</h2>
      <div style={{ marginTop: '20px' }}>
        {projects.map((proj, index) => (
          <div key={index} style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>{proj.title}</h3>
            <span style={{ backgroundColor: '#ecc94b', color: '#744210', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', display: 'inline-block', marginBottom: '10px' }}>{proj.role}</span>
            <p style={{ fontSize: '0.9rem', color: '#718096', margin: '0 0 8px 0' }}><strong>Tech Stack:</strong> {proj.tech}</p>
            <p style={{ color: '#4a5568', margin: '0', fontSize: '1rem', lineHeight: '1.5' }}>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;