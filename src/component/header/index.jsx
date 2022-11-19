/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Aos from 'aos';
import auth from '../../context/auth';
import { useUser } from '../../hooks';
import { navigation } from '../../data';
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { LoginPortal, RegisterPortal } from '../form';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({ main = [], aside = [], buttons = [] }) => {
    // object variables
    const { logo } = navigation;

    // hooks
    const location = useLocation();

    // user hooks
    const [user, error, load] = useUser(location.pathname.includes('employer') ? 'employer' : 'jobseeker');

    // states
    const [menu, setMenu] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    // effects
    useEffect(() => { Aos.init(); Aos.refresh(); }, []);

    // events
    const events = ({
        login: () => { setLogin(val => true); },
        register: () => { setRegister(val => true); },
    });

    // effects
    useEffect(() => {
        console.log(user);
    }, [user]);

    // methods
    const toggleMenu = () => void setMenu(_ => !menu);
    const link = (obj, key) => (<li key={key} className="uppercase hover:underline cursor-pointer"><Link to={obj.to}>{obj.name}</Link></li>);
    const btn = (obj, key) => (<li key={key} className=""><button onClick={events[obj.event]} className="py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-white text-blue hover:text-white hover:bg-blue text-[1.1rem] font-[800] border-blue rounded-[4px] uppercase">{obj.name}</button></li>);

    return <header className="flex justify-between text-white bg-blue w-screen top-0 sticky z-50 p-16 py-4 gap-4 items-center">
        {
            login ? <LoginPortal close={() => setLogin(_ => false)} /> : register ? <RegisterPortal close={() => setRegister(_ => false)} /> : null
        }
        <Link to='/'><img src={logo} alt="" className='' /></Link>
        {
            user ? <>
                loading
            </> : <>
                <nav className="lg:flex justify-between items-center grow hidden">
                    <ul className=" flex-col md:flex-row flex items-center gap-2 md:gap-4 font-bold uppercase">
                        {main.map(link)}
                    </ul>
                    <ul className=" flex-col md:flex-row flex items-center gap-2 md:gap-4 capitalize">
                        {aside.map(link)} {buttons.map(btn)}
                    </ul>
                </nav>
                <AiOutlineMenu className="text-xl font-bold cursor-pointer flex lg:hidden" onClick={toggleMenu} />

                {
                    menu ?
                        <nav className="bg-white text-black top-0 left-0 fixed w-screen h-screen flex flex-col items-center justify-center gap-4 p-8">
                            <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' onClick={toggleMenu} />
                            <ul>
                                {main.map(link)}
                            </ul>
                            <ul className="relative w-full flex flex-col items-center justify-center gap-2 capitalize py-4
                            before:absolute before:w-full before:top-0 before:h-[2px] before:bg-grey
                            ">
                                {aside.map(link)} {buttons.map(btn)}
                            </ul>
                        </nav> : null
                }
            </>
        }
    </header >;
};

export default Header;
