import React from 'react'
import { AboutHero } from '../../components/AboutHero';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export const AboutPage = () => {
  return (
    <section>
      <Navbar />
      <AboutHero />
      <Footer />
      
    </section>
  )
}
