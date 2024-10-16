import type { Metadata } from 'next'
import { Inter, Afacad } from 'next/font/google'
import './globals.css'
import Footer from './Components/Footer'

const inter = Afacad({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Cubism',
  description: 'Interior Design Studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} text-[#282828]`}>{children}</body>
    </html>
  )
}
