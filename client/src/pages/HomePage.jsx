import Header from '../components/Header'
import Hero from '../components/Hero'
import TestimonialsStrip from '../components/TestimonialsStrip'
import RecentProjects from '../components/RecentProjects'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Blogs from '../components/Blogs'
import ClientLogos from '../components/ClientLogos'
import Services from '../components/Services'
import Technologies from '../components/Technologies'
import FeaturedWork from '../components/FeaturedWork'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo'

const HOME_DESCRIPTION = 'Karan Pal – Full Stack Developer specializing in MERN stack, React, Node.js, distributed systems, and cloud. Portfolio, projects, and technical blogs.';

export default function HomePage() {
  const { hash } = useLocation()
  useSeo({
    title: 'Full Stack Developer – MERN, React, Node.js',
    description: HOME_DESCRIPTION,
  })

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TestimonialsStrip />
        <RecentProjects />
        <Experience />
        <AboutMe />
        <FeaturedWork />
        {/* <Education /> */}
        <Services />
        <Technologies />
        {/* <ClientLogos /> */}
        <Testimonials />
        <Blogs />
        {/* <FAQ /> */}
        <ContactSection />
        <FooterCta />
        <Footer />
      </main>
    </>
  )
}
