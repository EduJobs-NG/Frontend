import jwt from 'jwt-decode';
import { toast } from 'react-toastify';
import { api, token } from '../../utils';
import { createSlice, createAsyncThunk as $ } from '@reduxjs/toolkit';

/* Creating a thunk that will be used to make an API call. */
export const $user = $('auth/$user', async () => await api.post('').then(({ data, status }) => ({ data, status })));

/* Creating a thunk that will be used to make an API call. */
export const $logout = $('auth/$logout', async (data = {}) => await api.post('', data).then(({ data, status }) => ({ data, status })));

/* Creating a thunk that will be used to make an API call to the server. */
export const $register = $('auth/$register', async ({ url, data = {} }) => await api.post(url, data).then(({ data, status }) => ({ data, status })));

/* Creating a thunk that will be used to make an API call to the server. */
export const $login = $('auth/$login', async (data = {}) => await api.post('/employer/jwt/token/', data).then(({ data, status }) => ({ data, status })));

const authSlice = createSlice({
    name: 'auth',
    initialState: { load: null, error: null, user: JSON.parse(sessionStorage.getItem('edujobs:userdata')) || null },
    extraReducers: ({ addCase }) => {
        /* Adding a case to the reducer. */
        addCase($login.pending, (state) => { state.load = true; });
        addCase($login.rejected, (state, { error }) => {
            state.load = false;
            state.error = error;
            console.error(error);
            toast.error(error.message.toLowerCase());
        });
        addCase($login.fulfilled, (state, { payload }) => {
            state.load = false;
            token.key = payload.data;
            toast.success('logged in successfully');

            const user = jwt(payload.data.access);
            console.log(user);
            state.user = user;
            sessionStorage.setItem('edujobs:userdata',JSON.stringify(user));

            // eslint-disable-next-line no-restricted-globals
            location.replace('/');
        });

        // /* Adding a case to the reducer. */
        addCase($register.pending, (state) => { state.load = true; });
        addCase($register.rejected, (state, { error }) => {
            state.load = false;
            console.error(error);
            toast.error('there was an error');
        });
        addCase($register.fulfilled, (state, { payload }) => {
            state.load = false;
            console.log(payload.data);
            toast.success('registered successfully');
        });

        // /* Adding a case to the reducer. */
        addCase($user.pending, (state) => { state.load = true; });
        addCase($user.rejected, (state) => { state.load = false; });
        addCase($user.fulfilled, (state) => { state.load = false; });

        // /* Adding a case to the reducer. */
        addCase($logout.rejected, () => { toast.error('It seems there was an error'); });
        addCase($logout.fulfilled, (state) => { state.user = state.load = state.error = null; });
    },
});

export default authSlice.reducer;
