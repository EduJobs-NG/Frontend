import { useEffect } from 'react';
import { useAuth } from '../context/auth.context';
import { Outlet, useNavigate } from 'react-router-dom';

export default function EmployerRoute() {
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && !user) navigate('/employer/login', { replace: true });
    }, [user, loading]);

    if (loading) return null;
    return user ? <Outlet /> : null;
}