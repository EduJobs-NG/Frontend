/* eslint-disable no-unused-vars */
import Aos from 'aos';
import { navigation } from '../../data';
import { Link } from 'react-router-dom';
import { Login, Register } from '../form';
import { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';

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
        login: () => { setLogin(val => true); console.log('login') },
        register: () => { setRegister(val => true); console.log('register') },
    });

    // methods
    const toggleMenu = () => void setMenu(_ => !menu);
    const link = (obj, key) => (<li key={key} className="uppercase hover:underline cursor-pointer"><Link to={obj.to}>{obj.name}</Link></li>);
    const btn = (obj, key) => (<li key={key} className=""><button onClick={events[obj.event]} className="py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-white text-blue hover:text-white hover:bg-blue text-[1.1rem] font-[800] border-white rounded-[4px] uppercase">{obj.name}</button></li>);

    return <header className="flex text-white bg-blue w-screen top-0 sticky z-50 p-16 py-4 gap-4 items-center">
        {login ? <Login close={() => setLogin(_ => false)} /> : register ? <Register close={() => setRegister(_ => false)} /> : null}
        <Link to='/'><img src={logo} alt="" className='' /></Link>
        <nav className="flex justify-center gap-12 md:justify-between item-center md:flex-row flex-col grow w-[80vw] absolute md:top-0 top-5 
        md:left-0 left-1/2 md:relative md:bg-transparent bg-white md:h-auto h-96 text-black md:text-white md:translate-x-0 -translate-x-1/2">
            <ul className=" flex-col md:flex-row flex items-center gap-2 md:gap-4 font-bold uppercase">
                {main.map(link)}
            </ul>
            <ul className=" flex-col md:flex-row flex items-center gap-2 md:gap-4 capitalize">
                {aside.map(link)} {buttons.map(btn)}
            </ul>
        </nav>
        <AiOutlineMenu className="text-xl font-bold cursor-pointer md:hidden" onClick={toggleMenu} />
    </header>;
};

export default Header;
