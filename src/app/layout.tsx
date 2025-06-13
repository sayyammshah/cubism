import type { Metadata } from 'next'
import {
  Tangerine,
  Cormorant,
  Cormorant_Unicase,
  Reenie_Beanie,
} from 'next/font/google'
import './globals.css'

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-tangerine',
})
const cormorant = Cormorant({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-cormorant',
})

const cormorantUnicase = Cormorant_Unicase({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-cormorant_unicase',
})

const raeeniebeanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-raeenie_beanie',
})

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
      <body
        className={`${tangerine.variable} ${cormorant.variable} ${cormorantUnicase.variable} ${raeeniebeanie.variable}`}>
        {children}
      </body>
    </html>
  )
}
