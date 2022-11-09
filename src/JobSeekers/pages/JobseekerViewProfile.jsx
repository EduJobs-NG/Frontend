import { Footer } from '../../components/Footer';
import AuthContext from '../../context/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import { JobseekerNavbar as Navbar } from '../components/JobseekerNavbar';

export const Profile = () => {
    // hooks
    const { user, getUserMeHandler, loading } = useContext(AuthContext);

    // states
    const [showBio, setShowBio] = useState(0);
    const [showProfile, setShowProfile] = useState(0);

    // effects

    // methods
    return <>
        <Navbar user={user} />
        <section className='w-full flex flex-wrap items-start h-96'>
            <div className="flex flex-col h-full w-[70%] bg-red-400 basis-[20em]"></div>
            <div className="flex flex-col grow-0 w-[30%] min-w-[14em] bg-black h-full"></div>
        </section>
        <Footer />
    </>;
};
