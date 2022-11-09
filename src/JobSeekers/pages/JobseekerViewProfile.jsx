import marker from '../../assets/Marker.png'
import { Footer } from '../../components/Footer';
import AuthContext from '../../context/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import { JobseekerNavbar as Navbar } from '../components/JobseekerNavbar';

export const Profile = () => {
    // hooks
    const { user, getUserMeHandler, loading } = useContext(AuthContext);

    // states
    // const [showBio, setShowBio] = useState(0);
    // const [showProfile, setShowProfile] = useState(0);

    console.table(user);
    // effects

    // methods
    return <>
        <Navbar user={user} />
        <section className='flex felx-wrap w-screen items-start'>
            <div className="flex flex-col justify-start min-w-[60%] grow-[1] p-4">
                <div className="flex flex-col item-start gap-2">
                    <h3 className='capitalize font-bold text-xl'>welcome, {user?.user?.first_name}</h3>
                    <div className="flex items-center justify-start px-4 gap-4">
                        <img src={user?.avatar} alt='profile' className="w-14" />
                        <div className="flex grow-[1] flex-col gap-2 items-start">
                            <h4 className='font-bold text-md'>{user?.user?.first_name} {user?.user?.last_name}</h4>
                            <span className="flex gap-2">
                                <img src={marker} alt="" className='w-4' />
                                <h5 className="">{user?.city}, <span className="uppercase">ng</span></h5>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col justify-start w-[40%]"></div>
        </section>
        <Footer />
    </>;
};
