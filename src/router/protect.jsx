/* eslint-disable no-unused-vars */
import { useApi } from '../hooks';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protect = ({ children }) => {
    // hooks
    const nav = useNavigate();
    const [data, error] = useApi('/login');

    // effects
    // useEffect(() => {
    //     nav('/login');
    // }, [nav]);

    return children;
};

export default Protect;
