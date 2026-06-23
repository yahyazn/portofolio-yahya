import styles from './Contact.module.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

const links = [
  {
    label: 'Email',
    href: 'mailto:zarkasinuryahya@gmail.com',
    icon: <FaEnvelope size={16} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yahyazn',
    icon: <FaGithub size={16} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yahyazarkasinur27/',
    icon: <FaLinkedin size={16} />,
  },
  {
    label: 'Whatsapp',
    href: 'https://wa.me/62859175761678',
    icon: <FaWhatsapp size={16} />,
  },
]


export default function Contact() {
  return (
    <section id="kontak" className={styles.section}>
      <div className={styles.tag}>
        <span className={styles.line} aria-hidden="true" />
        04 — Kontak
      </div>
      <h2 className={styles.title}>Hubungi saya</h2>

      <div className={styles.box}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.content}>
          <h3 className={styles.boxTitle}>Mari berkolaborasi</h3>
          <p className={styles.boxDesc}>
            Terbuka untuk proyek, freelance, atau sekadar ngobrol soal
            teknologi dan ide-ide baru.
          </p>
          <div className={styles.linkList}>
            {links.map((l) => (
              <a key={l.label} href={l.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}