import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <span>© 2026 Yahya ZN</span>
        <span className={styles.footerRight}>Dibuat dengan Next.js · Vercel</span>
      </footer>
    </>
  )
}