import React from 'react';

function Experience() {
  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#2b6cb0', borderBottom: '2px solid #2b6cb0', paddingBottom: '5px' }}>Experiences</h2>
        
        {/* Organisasi */}
        <div style={{ marginBottom: '25px', paddingLeft: '10px', borderLeft: '3px solid #cbd5e0' }}>
          <h3 style={{ margin: '0', color: '#2d3748', fontSize: '1.2rem' }}>Staff Departemen Ekonomi Kreatif</h3>
          <p style={{ margin: '2px 0 8px 0', color: '#718096', fontSize: '0.9rem', fontWeight: 'bold' }}>HMPSTI Universitas Brawijaya</p>
          <ul style={{ color: '#4a5568', margin: '0', paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>Mengelola program kerja kewirausahaan kreatif guna mendukung pendanaan mandiri internal himpunan.</li>
            <li>Merancang aset desain merchandise resmi organisasi termasuk pembuatan desain <strong>lanyard dan wristband</strong> menggunakan Canva.</li>
          </ul>
        </div>

        {/* Kepanitiaan Singkat */}
        <div style={{ marginBottom: '25px', paddingLeft: '10px', borderLeft: '3px solid #cbd5e0' }}>
          <h3 style={{ margin: '0', color: '#2d3748', fontSize: '1.2rem' }}>Kepanitiaan Kampus (Kreatif & Operasional)</h3>
          <p style={{ margin: '2px 0 8px 0', color: '#718096', fontSize: '0.9rem', fontWeight: 'bold' }}>Universitas Brawijaya</p>
          <ul style={{ color: '#4a5568', margin: '0', paddingLeft: '20px', lineHeight: '1.6' }}>
            <li><strong>Supervisor (SPV) SAMBA TI:</strong> Mengoordinasikan jalannya rangkaian orientasi prodi dan membimbing mahasiswa baru.</li>
            <li><strong>Wakil Ketua Divisi Konsumsi VITION:</strong> Mengatur pengadaan logistik konsumsi dan mengoptimalkan efisiensi anggaran dengan vendor.</li>
            <li><strong>Staf Divisi Dekorasi TECHFAIR:</strong> Menyusun konsep tata letak estetika visual panggung pameran teknologi.</li>
          </ul>
        </div>

        {/* Pekerjaan MUA */}
        <div style={{ paddingLeft: '10px', borderLeft: '3px solid #cbd5e0' }}>
          <h3 style={{ margin: '0', color: '#2d3748', fontSize: '1.2rem' }}>Freelance Make-Up Artist (MUA)</h3>
          <p style={{ margin: '2px 0 8px 0', color: '#718096', fontSize: '0.9rem', fontWeight: 'bold' }}>Malang & Probolinggo | 2022 - Sekarang</p>
          <ul style={{ color: '#4a5568', margin: '0', paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>Mengelola operasional jasa kecantikan secara mandiri untuk berbagai macam klien (Wisuda, Formal, Event).</li>
            <li>Menerapkan ketajaman komposisi visual dan teori warna dasar langsung pada kebutuhan estetika dunia nyata.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;