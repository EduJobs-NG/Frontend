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
    /* Checking if the user is logged in or not. If not, it will redirect to the login page. */
    useEffect(() => {
        if (!load && !user) nav('/auth/login', { replace: true });
    }, [nav, load, user]);

    /* Returning the Loader component if the load is true, otherwise it is returning the children. */
    return load ? <Loader /> : children;
};

export default Protect;
