import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weights: ['400', '500'] })

export const metadata = {
  title: 'Yahya ZN — Web & Mobile Developer',
  description: 'Portofolio Yahya ZN, mahasiswa Teknik Komputer yang fokus di pengembangan web dan mobile menggunakan Python dan Flutter.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}