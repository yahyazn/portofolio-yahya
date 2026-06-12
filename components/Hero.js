import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.tag}>
        <span className={styles.line} aria-hidden="true" />
        Mahasiswa Teknik Komputer
      </div>

      <h1 className={styles.heading}>
        Web & Mobile<br />
        <span className={styles.accent}>Developer.</span>
      </h1>

      <p className={styles.sub}>Flutter · Python · Social Media Specialist</p>

      <p className={styles.desc}>
        Membangun aplikasi yang fungsional dan bermakna — dari mobile, web,
        hingga solusi edukasi untuk anak-anak.
      </p>

      <div className={styles.actions}>
        <a href="#proyek" className={styles.btnPrimary}>Lihat Proyek ↓</a>
        <a href="#kontak" className={styles.btnGhost}>Hubungi Saya</a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>5+</span>
          <span className={styles.statLabel}>Proyek</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.stat}>
          <span className={styles.statNum}>Sem. 6</span>
          <span className={styles.statLabel}>Teknik Komputer</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.stat}>
          <span className={styles.statNum}>2+ Thn</span>
          <span className={styles.statLabel}>Pengalaman</span>
        </div>
      </div>
    </section>
  )
}