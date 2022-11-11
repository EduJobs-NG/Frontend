/* eslint-disable no-unused-vars */
import Aos from 'aos';
import { navigation } from '../../data';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { LoginPortal, RegisterPortal } from '../form';

const Header = ({ main = [], aside = [], buttons = [] }) => {
    // object variables
    const { logo } = navigation;

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

    // methods
    const toggleMenu = () => void setMenu(_ => !menu);
    const link = (obj, key) => (<li key={key} className="uppercase hover:underline cursor-pointer"><Link to={obj.to}>{obj.name}</Link></li>);
    const btn = (obj, key) => (<li key={key} className=""><button onClick={events[obj.event]} className="py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-white text-blue hover:text-white hover:bg-blue text-[1.1rem] font-[800] border-white rounded-[4px] uppercase">{obj.name}</button></li>);

    return <header className="flex justify-between text-white bg-blue w-screen top-0 sticky z-50 p-16 py-4 gap-4 items-center">
        {
            login ? <LoginPortal close={() => setLogin(_ => false)} /> : register ? <RegisterPortal close={() => setRegister(_ => false)} /> : null
        }
        <Link to='/'><img src={logo} alt="" className='' /></Link>
        <nav className="lg:flex justify-between items-center grow hidden">
            <ul className=" flex-col md:flex-row flex items-center gap-2 md:gap-4 font-bold uppercase">
                {main.map(link)}
            </ul>
            <ul className=" flex-col md:flex-row flex items-center gap-2 md:gap-4 capitalize">
                {aside.map(link)} {buttons.map(btn)}
            </ul>
        </nav>
        <AiOutlineMenu className="text-xl font-bold cursor-pointer flex lg:hidden" onClick={toggleMenu} />
    </header>;
};

export default Header;
