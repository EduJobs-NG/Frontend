import { api } from '../../utils';
import { createSlice, createAsyncThunk as $ } from '@reduxjs/toolkit';

/* Creating a thunk that will be used to make an API call to the server. */
export const $account = $('account/$account', async () => await api.get('/jobseeker/user-account-update').then(({ data, status }) => ({ data, status })));

const accountSlice = createSlice({
    name: 'account',
    initialState: { load: null, error: null, data: {} },
    extraReducers: ({ addCase }) => {
        addCase($account.pending, (state) => {
            state.load = true;
        });
        addCase($account.fulfilled, (state, { payload }) => {
            state.data = payload.data;
            state.load = state.error = false;
        });
        addCase($account.rejected, (state, { error }) => {
            state.load = false;
            state.error = error;
        });
    },
});

export default accountSlice.reducer;
