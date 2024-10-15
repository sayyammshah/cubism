import Image from 'next/image'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import About from './Components/AboutSection'
import Services from './Components/ServicesSection'
import Portfolio from './Components/PortfolioSection'
import OwnedBy from './Components/OwnedBy'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <main className='min-h-screen baseWidth'>
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
