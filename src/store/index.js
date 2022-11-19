/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import auth, { $login, $register, $user } from './slice/auth';

export default configureStore({ reducer: { auth } });

export const dispatch = () => {
    const dispatch = useDispatch();

    return ({
        user: () => dispatch($user()),
        login: (data) => dispatch($login(data)),
        register: (data) => dispatch($register(data)),
    });
};

export const state = () => {
    return ({
        auth: useSelector(state => state.auth),
    });
};