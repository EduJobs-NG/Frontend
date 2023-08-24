import React from 'react'
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AboutHero } from '../../components/AboutHero';

export const AboutPage = () => {
  return (
    <section>
      <Navbar />
      <AboutHero />
      <Footer />
    </section>
  )
};
