/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import Loader from '../component/loader';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protect = ({ children }) => {
    // hooks
    const nav = useNavigate();
    const { user, load } = useSelector(state => state.auth);

    // effects
    useEffect(() => {
        if (!load && !user) nav('/auth/login', { replace: true });
    }, [nav, load, user]);

    return load ? <Loader /> : children;
};

export default Protect;
