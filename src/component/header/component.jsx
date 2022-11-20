import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import chat from '../../assets/chat.png';
import { useSelector } from "react-redux";
import notification from '../../assets/notification.png';
import { AiOutlineClose as Close } from 'react-icons/ai';
import { LoginPortal as Login, RegisterPortal as Register } from '../form';
import { useMyDispatch } from "../../store";

export const User = () => {
    // hooks
    const { logout: $logout } = useMyDispatch();
    const { user } = useSelector(state => state.auth);

    // states
    const [show, setShow] = useState(false);

    // methods
    const toggleMenu = () => setShow(prev => !prev);
    const logout = (e) => { e.preventDefault(); $logout() };

    return <div className="h-full flex items-centr justify-center gap-8 ml-auto">
        <div className="flex gap-2 h-full relative items-center my-auto">
            <img src={chat} alt="" /><img src={notification} alt="" />
        </div>
        <div className="flex gap-2 h-full relative before:absolute before:h-full before:w-[1px] before:bg-white before:left-0 pl-4">
            <img src={user?.avatar} alt="" className="w-10 h-10 rounded-full object-contain bg-transparent cursor-pointer" onClick={toggleMenu} />
            <nav className="absolute top-[150%] right-0 text-black text-md capitalize rounded p-2 bg-white flex flex-col items-start justify-center gap-2 shadow-md" style={{ display: show ? 'flex' : 'none' }}>
                <Link to="/jobseeker/profile" className="w-40 font-bold px-2">profile</Link>
                <Link to='/employer/account' className="w-40 font-bold px-2">settings</Link>
                <Link to='/auth/logout' className="w-40 font-bold px-2" onClick={logout}>log out</Link>
            </nav>
        </div>
    </div>;
};

export const Nav = ({ main = [], aside = [], buttons = [], menu, close }) => {
    // states
    const [auth, setAuth] = useState(null);
    const nav = useNavigate();
    const { user } = useSelector(state => state.auth);

    // methods
    const setModal = ({ currentTarget: target }) => setAuth(p => target?.name);


    return <>
        {auth === 'login' ? <Login close={setModal} /> : auth === 'register' ? <Register close={setModal} /> : null}
        <nav className="z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-white lg:bg-transparent w-screen lg:w-full h-screen lg:h-full fixed lg:relative gap-4 top-0 left-0 text-blue lg:text-white" style={{ display: menu ? 'flex' : 'none' }}>
            <Close className="absolute top-8 right-8 text-2xl cursor-pointer flex lg:hidden font-black" onClick={close} />
            <ul className="flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-4 font-bold uppercase">
                {
                    main.map(({ name, to }, key) => (<li key={key} className="">
                        <Link to={to}>{name}</Link>
                    </li>))
                }
            </ul>
            <ul className="flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-4 font-bold lg:font-normal uppercase lg:capitalize relative before:absolute before:flex before:lg:hidden before:w-[60vw] before:h-1 before:bg-blue before:top-0 pt-2 lg:pt-0">
                {
                    aside.map(({ name, to }, key) => (<li key={key} className="">
                        <Link to={to}>{name}</Link>
                    </li>))
                }
                {
                    !user && buttons.map(({ name, event, navigate = null }, key) => (<li key={key} className="">
                        <button name={event} onClick={navigate ? () => nav(navigate) : setModal} className="px-10 py-1 bg-blue lg:bg-white text-white lg:text-blue uppercase font-black rounded">{name}</button>
                    </li>))
                }
            </ul>
        </nav>
    </>;
};
