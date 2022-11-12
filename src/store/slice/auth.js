import { api } from '../../utils';
import { createSlice, createAsyncThunk as $ } from '@reduxjs/toolkit';

/* Creating a thunk that will be used to make an API call. */
export const $login = $('auth/$login', async (data = {}) => await api.post('', data).then(({ data, status }) => ({ data, status })));

/* Creating a thunk that will be used to make an API call to the server. */
export const $register = $('auth/$register', async (data = {}) => await api.post('', data).then(({ data, status }) => ({ data, status })));

/* Creating a thunk that will be used to make an API call to the server. */
export const $user = $('auth/$user', async () => await api.post('').then(({ data, status }) => ({ data, status })));

const authSlice = createSlice({
    name: 'auth',
    initialState: { load: null, error: null, user: null },
    extraReducers: ({ addCase }) => {
        /* Adding a case to the reducer. */
        addCase($login.pending, (state) => { state.load = true; });
        addCase($login.rejected, (state) => { state.load = false; });
        addCase($login.fulfilled, (state) => { state.load = false; });

        /* Adding a case to the reducer. */
        addCase($register.pending, (state) => { state.load = true; });
        addCase($register.rejected, (state) => { state.load = false; });
        addCase($register.fulfilled, (state) => { state.load = false; });

        /* Adding a case to the reducer. */
        addCase($user.pending, (state) => { state.load = true; });
        addCase($user.rejected, (state) => { state.load = false; });
        addCase($user.fulfilled, (state) => { state.load = false; });
    },
});

export default authSlice.actions;
