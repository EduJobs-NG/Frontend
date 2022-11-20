/* eslint-disable react-hooks/exhaustive-deps */
import * as tabs from './tabs';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMyDispatch } from '../../../store';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    // location hook
    const nav = useNavigate();
    const {search} = useLocation();
    const { profile: $profile } = useMyDispatch();
    const { data } = useSelector(state => state.profile);

    // effects
    useEffect(() => { if (!data) $profile() }, []);

    // memo
    const Tab = useMemo(() => {
        const tab = search.substring(search?.indexOf("=") + 1);
        return tabs[tab] || tabs.personal;
    }, [search]);

    // methods
    const setBorder = (name) => ({ borderBottom: search.includes(name) ? '2px solid blue' : '' });
    const setLocation = ({currentTarget}) => void nav(`/jobseeker/profile/edit?tab=${currentTarget.name || 'personal'}`);

    return <section className="w-screen flex flex-col">
        <div className="w-full flex flex-col relative p-8 pb-2">
            <h2 className="capitalize font-bold absolute top-4 left-4">profile</h2>
            <div className="flex flex-wrap py-8">
                <div className="flex items-center justify-center grow basis-80">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <img src={data?.avatar} alt="" className="w-24 cursor-pointer" />
                        <div className="flex flex-col items-start justify-center">
                            <h2 className="font-bold capitalize">{data?.user?.first_name} {data?.user?.last_name}</h2>
                            <h3 className="capitalize">{data?.city}</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2 justify-start grow basis-80">
                    <h2 className="capitalize text-xl font-thinbold">bio</h2>
                    <p>{data?.bio}</p>
                </div>
            </div>
            <div className="flex items-center justify-evenly flex-wrap gap-4 w-full">
                <button name="personal" onClick={setLocation} className="font-bold capitalize" style={setBorder('personal')}>
                    personal information
                </button>
                <button name="professional" onClick={setLocation} className="font-bold capitalize" style={setBorder('professional')}>
                    professional information
                </button>
                <button name="credential" onClick={setLocation} className="font-bold capitalize" style={setBorder('credential')}>
                    credentials
                </button>
                <button name="contact" onClick={setLocation} className="font-bold capitalize" style={setBorder('contact')}>
                    contact information
                </button>
            </div>
        </div>
        <div className="w-full flex"><Tab /></div>
    </section>;
};

export default Edit;
