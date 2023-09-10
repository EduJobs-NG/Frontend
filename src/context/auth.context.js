import api from '../utils/api';
import decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { token, getItem, setItem, removeItem } from '../utils/storage';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) return console.warn('useAuth could only be used inside the AuthContext');

    return context;
};

export default function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) getUser((user) => navigate(user?.org_name !== undefined ? '/employer' : '/dashboard/find-jobs', { replace: true }));
    }, []);

    const getUser = async (callback, fallback) => {
        const url = getItem('user-url');
        if (!url) return setLoading(false);;

        setLoading(true); setError(false);
        try {
            const res = await api.get(url);
            setUser(res.data);
            await callback?.(res.data); setItem('user', res.data);
        } catch (error) {
            setError(error); fallback?.();
        }; setLoading(false);
    };


    const login = async (url, data, callback, fallback) => {
        setLoading(true); setError(false);
        try {
            const res = await api.post(url, data);
            const decoded = decode(res.data.access);
            callback?.(decoded, async () => {
                token.key = res.data;
                setItem('user-url', decoded?.is_jobseeker ? '/jobseeker/user-profile-update/' : '/employer/users/me/');
                await getUser();
            });
        }
        catch (error) {
            setError('Failed to login user', error.message);
            console.error(error.message, error);
            fallback?.(error);
        };
        setLoading(false);
    };

    const logout = async (callback) => {
        removeItem('user-url');
        removeItem('user');
        token.key = null;
        callback?.();
    };

    const register = async (url, data, callback, fallback) => {
        setLoading(true); setError(false);
        try {
            await api.post(url, data); callback?.();
        }
        catch (error) {
            setError('Failed to register user', error.message);
            fallback?.();
        };
        setLoading(false);
    };

    return <AuthContext.Provider children={children} value={{ user, error, loading, login, logout, register, getUser }} />;
};
