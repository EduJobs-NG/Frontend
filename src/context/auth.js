/* eslint-disable react-hooks/rules-of-hooks */
import { api, token } from '../utils';
import { createContext } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const auth = {
    user: null,
    load: null,
    error: null,
    async login(data = {}, jobseeker = true) {
        const nav = useNavigate();
        try {
            this.load = true;
            const res = await api.get(
                jobseeker ? '/jobseeker/user-profile-update/' : '/employer/users/me/',
                data,
            );
            this.user = res.data;
            const navigate = () => nav(jobseeker ? '/jobseeker' : '/employer');
            toast.success('Logged in successfully', { onclick: navigate, onclose: navigate });
            this.load = false;
        } catch (error) {
            this.load = false;
            toast.error('Invalid credentials');
        }
    },
    async register(data = {}) {
        this.load = true;
        const res = await api.post('/', data);
    },
    async logout() {
        try {
            this.load = true;
            this.load = this.error = false;
        } catch (error) {
            this.load = false;
            this.error = error;
        }
    },
    async profile() {
        this.load = true;
        console.log(this, 'this func');
        setTimeout(() => {
            this.load = false;
        }, 5000);
    }
};

export default createContext();