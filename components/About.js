import styles from './About.module.css'
import image from 'next/image'

const badges = [
  'Ketua HIMAKOM 2025-2026',
  'Ikatan Pelajar Muhammadiyah',
  'Ketua Bidang Pengembangan Profesi dan Kewirausahaan',
  'Internship at RS. Citra Medika Lamongan as Web Developer',
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
            Saya Yahya, mahasiswa S1 Teknik Komputer semester 6. Saya tertarik
            membangun hal-hal dari nol mulai dari aplikasi mobile dengan Flutter,
            web dengan Python.
          </p>
          <p className={styles.text}>
            Di luar kuliah, saya aktif sebagai Ketua Himpunan Mahasiswa Teknik
            Komputer dan Ketua Ikatan Pelajar Muhammadiyah Mantup.
          </p>
          <div className={styles.badges}>
            {badges.map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photo}>
            <image src="/images/ft1.jpeg" alt="Yahya Zarkasih" width={300} height={300} className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  )
}