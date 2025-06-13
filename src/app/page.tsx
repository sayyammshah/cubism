'use client'
import { Analytics } from '@vercel/analytics/react'
import Header from './Sections/Header'
import HeroSection from './Sections/Hero'
import ServicesSection from './Sections/Services'
import ProjectsSection from './Sections/Projects'
import Footer from './Sections/Footer'
import OngoingSitesSection from './Sections/OngoingSites'
import VisualisationSection from './Sections/Visualisations'

export default function Home() {
  return (
    <main>
      <Analytics />
      <div className='container mx-auto md:p-9 p-5'>
        <Header />
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <OngoingSitesSection />
        <VisualisationSection />
      </div>
      <div className='mx-auto bg-white'>
        <Footer />
      </div>
    </main>
  )
}
