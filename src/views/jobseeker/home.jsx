/* eslint-disable react-hooks/rules-of-hooks */
import Job from '../../component/job';
import React, { useState } from 'react';
import { SearchJob } from '../../component/form';

const home = () => {
    // states
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    return <>
        <SearchJob Title={setTitle} Location={setLocation} t={title} l={location} />
        <i className="my-4 bg-grey w-[80vw] left-1/2 -translate-x-1/2 h-[2px] flex relative opacity-40"></i>
        <Job title={title} location={location} Title={setTitle} Location={setLocation} />
    </>
};

export default home;
