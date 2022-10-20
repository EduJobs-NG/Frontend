import React, {useState} from 'react';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import {RecentJobs} from '../components/RecentJobs'

export const JobseekersHome = () => {
  
  return (
    <>
    <Navbar  />
    <Hero />
    <RecentJobs />
    <Features />
    <Footer />
    
    </>
  )
}
