/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import Job from '../component/job';
import Hero from '../component/hero';
import image from '../assets/homeImage.png';
import { SearchJob } from '../component/form';


const Home = () => {
  // states
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  return <>
    <Hero backgroundImage={image}>
      <div className="flex flex-col gap-2 z-10">
        <h2 className='text-center font-bold text-[clamp(2em,5vw,6em)] leading-[1em]'>
          Have Great Jobs Find You!
        </h2>
        <p className='text-center text-[clamp(1em,2vw,6em)] leading-[1.2em]'>
          Find Jobs that match Your interests on EduJobs
        </p>
        <SearchJob Title={setTitle} Location={setLocation} t={title} l={location} />
      </div>
    </Hero>
    <Job title={title} location={location} Title={setTitle} Location={setLocation} />
  </>
};

export default Home;
