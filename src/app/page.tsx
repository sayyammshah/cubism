'use client'
import Image from 'next/image'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import About from './Components/AboutSection'
import Services from './Components/ServicesSection'
import Portfolio from './Components/PortfolioSection'
import OwnedBy from './Components/OwnedBy'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'
import Loading from './Components/Loading'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('Cubism VersionV1')
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className='min-h-screen baseWidth'>
      <Analytics />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <OwnedBy />
      <Contact />
      <Footer />
    </main>
  )
}
