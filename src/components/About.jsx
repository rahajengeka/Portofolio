import React from 'react';

function About() {
  return (
    <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#2b6cb0', borderBottom: '2px solid #2b6cb0', paddingBottom: '5px' }}>About Me</h2>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#4a5568' }}>
        Hai! Saya mahasiswi aktif <strong>D3 Teknologi Informasi di Universitas Brawijaya</strong>. 
        Fokus utama dan minat terbesar saya ada di dunia <strong>Frontend Development</strong> dan <strong>UI/UX Design</strong>. 
      </p>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#4a5568' }}>
        Saya memiliki latar belakang unik yang memadukan logika pemecahan masalah dari dunia IT dengan kepekaan estetika, harmoni warna, dan ketelitian yang saya asah melalui pengalaman sebagai <strong>Freelance Make-Up Artist (MUA)</strong> serta staf divisi kreatif di organisasi kampus. Saya sangat bersemangat untuk mengubah ide visual menjadi kode antarmuka yang responsif dan interaktif.
      </p>
    </section>
  );
}

export default About;