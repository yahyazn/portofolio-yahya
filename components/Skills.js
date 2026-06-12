import styles from './Skills.module.css'

const skills = [
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Dart', category: 'Mobile' },
  { name: 'Python', category: 'Backend' },
  { name: 'JavaScript', category: 'Web' },
  { name: 'HTML / CSS', category: 'Web' },
  { name: 'jQuery', category: 'Web' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Git', category: 'Tools' },
  { name: 'Jaringan Komputer', category: 'Networking' },
  { name: 'UI/UX Design', category: 'Design' },
  { name: 'Next.js', category: 'Web' },
  { name: 'Node.js', category: 'Backend' },
]

export default function Skills() {
  return (
    <section id="skill" className={styles.section}>
      <div className={styles.tag}>
        <span className={styles.line} aria-hidden="true" />
        02 — Keahlian
      </div>
      <h2 className={styles.title}>Teknologi yang saya gunakan</h2>

      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.item}>
            <span className={styles.dot} aria-hidden="true" />
            <div>
              <div className={styles.name}>{s.name}</div>
              <div className={styles.category}>{s.category}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}