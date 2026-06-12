import styles from './Projects.module.css'

const projects = [
  {
    title: 'Totpedia',
    desc: 'Aplikasi edukasi anak usia 3–7 tahun. Fitur materi, progres belajar, dan penilaian yang dikelola admin.',
    tags: ['Flutter', 'Dart'],
    icon: '📱',
    status: 'Selesai',
    link: null,
  },
  {
    title: 'Wagos',
    desc: 'Website pesanan yang sedang dalam pengembangan. Dibangun dengan Next.js dan Node.js.',
    tags: ['Next.js', 'Node.js'],
    icon: '🌐',
    status: 'In Progress',
    link: null,
  },
  {
    title: 'Lambe Streaming',
    desc: 'Desain UI/UX aplikasi streaming film, anime, dan TV dengan tema hijau-hitam. Terinspirasi dari aplikasi populer.',
    tags: ['UI/UX', 'Figma'],
    icon: '🎬',
    status: 'Selesai',
    link: null,
  },
  {
    title: 'Dashboard Sensor Suhu',
    desc: 'Dashboard grafis real-time yang menampilkan data sensor suhu dari database MySQL menggunakan jQuery.',
    tags: ['jQuery', 'MySQL', 'PHP'],
    icon: '📊',
    status: 'Selesai',
    link: null,
  },
  {
    title: 'Dokumenter Moola',
    desc: 'Video dokumenter tentang Moola, mall oleh-oleh di Lamongan, dengan narasi puitis bergaya Fiersa Besari.',
    tags: ['Video', 'Narasi'],
    icon: '🎥',
    status: 'Selesai',
    link: null,
  },
]

export default function Projects() {
  return (
    <section id="proyek" className={styles.section}>
      <div className={styles.tag}>
        <span className={styles.line} aria-hidden="true" />
        03 — Proyek
      </div>
      <h2 className={styles.title}>Yang pernah saya buat</h2>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon} aria-hidden="true">{p.icon}</span>
              <span className={`${styles.status} ${p.status === 'In Progress' ? styles.inProgress : ''}`}>
                {p.status}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tagItem}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}