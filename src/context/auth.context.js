import api from '../utils/api';
import decode from "jwt-decode";
import { token } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';

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
    const [loading, setLoading] = useState(false);

    const getUser = async (callback, fallback) => {
        setLoading(true);

        try {
            const responses = await Promise.race([api.get('/employer/users/me/'), api.get('/jobseeker/user-profile-update/')]);
            setUser(responses.data); callback?.();
        } catch (error) {
            // Handle errors if needed
            console.error(error);
            fallback?.();
        }

        setLoading(false);
    };


    const login = async (func, callback, fallback) => {
        setLoading(true); setError(false);
        try {
            const res = await func(api);
            token.key = res.data.access;
            
            const userObject = decode(res.data.access);
            setUser(userObject); callback?.(res.data);
        }
        catch (error) {
            setError('Failed to login user', error.message);
            fallback?.(error);
        };
        setLoading(false);
    };

    const logout = async (url, callback) => {
        token.key = null;
        callback?.();
    };

    const register = async (func, callback, fallback) => {
        setLoading(true); setError(false);
        try {
            const res = await func(api);
            callback?.();
        }
        catch (error) {
            setError('Failed to register user', error.message);
            fallback?.();
        };
        setLoading(false);
    };

    return <AuthContext.Provider children={children} value={{ user, error, loading, login, logout, register }} />;
};
