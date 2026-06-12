import styles from './About.module.css'

const badges = [
  'Ketua HMTK',
  'Ikatan Pelajar Muhammadiyah',
  'HMI · LK 1',
  'Freelance Data Entry',
  'Open to Collaborate',
]

export default function About() {
  return (
    <section id="tentang" className={styles.section}>
      <div className={styles.tag}>
        <span className={styles.line} aria-hidden="true" />
        01 — Tentang
      </div>
      <h2 className={styles.title}>Sedikit tentang saya</h2>

      <div className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.text}>
            Saya Yahya, mahasiswa S1 Teknik Komputer semester 4. Saya tertarik
            membangun hal-hal dari nol — dari aplikasi mobile dengan Flutter,
            web dengan Python, hingga dashboard data berbasis jQuery.
          </p>
          <p className={styles.text}>
            Di luar kuliah, saya aktif sebagai Ketua Himpunan Mahasiswa Teknik
            Komputer dan anggota Ikatan Pelajar Muhammadiyah. Passion jangka
            panjang saya adalah membangun aplikasi edukasi yang bermakna untuk
            anak-anak.
          </p>
          <div className={styles.badges}>
            {badges.map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoPlaceholder}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>foto.jpg</span>
          </div>
        </div>
      </div>
    </section>
  )
}