/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import jobs, { $jobs } from './slice/job';
import { configureStore } from '@reduxjs/toolkit';
import profile, { $profile } from './slice/profile';
import { useDispatch, useSelector } from 'react-redux';
import auth, { $login, $register, $user, $logout } from './slice/auth';

const store = configureStore({ reducer: { auth, jobs, profile } });

export const useMyDispatch = () => {
    const dispatch = useDispatch();

    return ({
        jobs: () => dispatch($jobs()),
        user: () => dispatch($user()),
        logout: () => dispatch($logout()),
        profile: () => dispatch($profile()),
        login: (data) => dispatch($login(data)),
        register: (data) => dispatch($register(data)),
    });
};

export default store;
