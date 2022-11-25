import React, { useRef, useState } from 'react';
import { Hero } from '../../components/Hero';
import { Recent } from '../components/RecentJobs';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Features } from '../../components/Features';

export const JobseekersHome = () => {
  // refs
  const ele = useRef(null);

  // states
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  // methods
  const scrollToJobsView = () => { ele.current?.scrollIntoView({ behavior: 'smooth' }) };

  return <>
    <Navbar />
    <Hero title={title} location={location} Title={setTitle} Location={setLocation} scrollJob={scrollToJobsView} />
    <Recent ref={ele} title={title} location={location} Title={setTitle} Location={setLocation} />
    <Features />
    <Footer />
  </>;
};
