import styles from './Contact.module.css'

const links = [
  {
    label: 'Email',
    href: 'mailto:zarkasinuryahya@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yahyazn',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yahyazarkasinur27/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
{
  label: 'Whatsapp',
  href: 'https://wa.me/62859175761678',
  icon: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2a10 10 0 0 0-9 14l-1 4 4-1a10 10 0 1 0 6-17z" />
      <path d="M16 14c-.5-.2-1-.4-1.5-.7-.3-.2-.6-.4-.8-.6-.2-.2-.4-.4-.6-.7-.2-.3-.3-.6-.4-.9-.1-.3-.1-.6 0-.9.1-.3.2-.6.4-.8.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.3-.6-.4-.9-.1-.3-.2-.5-.4-.6-.2-.1-.4-.1-.6 0-.2.1-.4.3-.6.5-.2.2-.4.5-.5.8-.1.3-.2.6-.2.9 0 .6.2 1.2.5 1.7.3.5.7 1 1.2 1.4.5.4 1 .8 1.6 1.1.6.3 1.2.5 1.8.6.3.1.6.1.9 0 .3-.1.6-.2.8-.4.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.3-.3-.5-.4z" />
    </svg>

  ),
}
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