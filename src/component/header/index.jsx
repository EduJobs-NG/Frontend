/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Aos from 'aos';
import { token } from '../../utils';
import { useUser } from '../../hooks';
import { Nav, User } from './component';
import { navigation } from '../../data';
import { useMyState } from '../../store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { LoginPortal, RegisterPortal } from '../form';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = (props) => {
    // object variables
    const { logo } = navigation;
    const { load, user, error } = useSelector(state => state.auth);

    // hooks

    // states
    const [menu, setMenu] = useState(true);

    // effects
    useEffect(() => {
        console.log(token.key);
        Aos.init(); Aos.refresh();
        window.addEventListener('load', changeMenu);
        window.addEventListener('resize', changeMenu);
        return () => {
            window.removeEventListener('load', changeMenu);
            window.removeEventListener('resize', changeMenu);
        };
    }, []);

    // methods
    const changeMenu = () => setMenu(() => window.innerWidth > 1024);
    const toggleMenu = () => void setMenu(_ => !menu);

    return <header className="flex justify-between text-white bg-blue w-screen top-0 sticky z-50 p-16 py-2 gap-4 items-center">
        <Link to='/'><img src={logo} alt="" className='' /></Link>
        <Nav {...props} menu={menu} close={toggleMenu} />
        {user && <User />}
        <AiOutlineMenu className="text-xl font-bold cursor-pointer flex lg:hidden" onClick={toggleMenu} />
    </header >;
};

export default Header;
