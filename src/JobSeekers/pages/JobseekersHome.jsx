import { Hero } from '../../components/Hero';
import { Recent } from '../components/RecentJobs';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import React, { useState, useEffect } from 'react';
import { Features } from '../../components/Features';

export const JobseekersHome = () => {
  // states
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  return <>
    <Navbar />
    <Hero title={title} location={location} Title={setTitle} Location={setLocation} />
    <Recent title={title} location={location} Title={setTitle} Location={setLocation} />
    <Features />
    <Footer />
  </>;
};
