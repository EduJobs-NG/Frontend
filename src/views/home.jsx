/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import Job from '../component/job';
import Hero from '../component/hero';
import Header from '../component/header';
import Footer from '../component/footer';
import { SearchJob } from '../component/form';


const headerElements = {
    main: [
        { to: '/dashboard', name: 'dashboard' },
        { to: '/analytics', name: 'analytics' },
    ],
    aside: [
        { to: '/jobseeker', name: 'i"m a jobseeker' },
        { to: '/employer', name: 'i"m an  employer' },
    ],
    buttons: [
        { event: 'login', name: 'login' },
    ],
};

const Home = () => {
    // states
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    console.log(title, location, " outer update");

    return <>
        <Header {...headerElements} />
        <Hero>
            <div className="flex flex-col gap-2 z-10">
                <h2 className='text-center font-bold text-[clamp(2em,5vw,6em)] leading-[1em]'>
                    Have Great Jobs Find You!
                </h2>
                <p className='text-center text-[clamp(1em,2vw,6em)] leading-[1.2em]'>
                    Find Jobs that match Your interests on EduJobs NG
                </p>
                <SearchJob Title={setTitle} Location={setLocation} t={title} l={location} />
            </div>
        </Hero>
        <Job title={title} location={location} Title={setTitle} Location={setLocation} />
        <Footer />
    </>
};

export default Home;
