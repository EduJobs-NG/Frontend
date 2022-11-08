import React from 'react';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import {Footer} from '../../components/Footer';
import { Feature } from '../components/Feature';

export const EmployersHome = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Feature />
    <Footer />
    </>
  )
}
