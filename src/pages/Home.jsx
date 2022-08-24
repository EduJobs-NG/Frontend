import React, {useState} from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import {RegisterForm} from '../components/Forms/RegisterForm'

export const Home = () => {
  
  return (
    <>
    <Navbar  />
    <Hero />
    <Features />
    <Footer />
    
    </>
  )
}
