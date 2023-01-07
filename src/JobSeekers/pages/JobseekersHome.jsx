import React, { useRef, useState } from 'react';
import { Hero } from '../../components/Hero';
import { Recent } from '../components/RecentJobs';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Features } from '../../components/Features';
import { Helmet } from 'react-helmet';

export const JobseekersHome = () => {
  // refs
  const ele = useRef(null);

  // states
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  // methods
  const scrollToJobsView = () => { ele.current?.scrollIntoView({ behavior: 'smooth' }) };

  return <>
  <Helmet>
    <meta name="title" content='Edujobs' />
    <meta name="description" content="EduJobs is an innovative EdTech start-up whose goal is to eradicate tedious job hunting process for prospective teachers by providing verified and sound teachers jobs and deploying them to schools and institutions as well as parents in need of private tutors where their services are most demanded. We do this by totally handling all the stress and cost of recruiting teachers for school owners and parents that matches their standards, in short, you don't need to look for teachers to teach in your schools or private tutors for your kids again, we bring teachers to you. This is done to help schools, parents and verified teachers connect with each other with the least effort using simplified technology tools." />
    <meta name='keywords' content='EdTech, jobs' />
    </Helmet>

    <Navbar />
    <Hero title={title} location={location} Title={setTitle} Location={setLocation} scrollJob={scrollToJobsView} />
    <Recent ref={ele} title={title} location={location} Title={setTitle} Location={setLocation} />
    <Features />
    <Footer />
  </>;
};
