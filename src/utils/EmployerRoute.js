import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Outlet, Navigate } from 'react-router-dom';

const EmployerRoute = () => {
    const { authTokens } = useContext(AuthContext);
    return authTokens ? <Outlet /> : <Navigate to="/employer/login" />
};

export default EmployerRoute;