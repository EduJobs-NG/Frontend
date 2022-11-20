import { api } from '../../utils';
import { createSlice, createAsyncThunk as $ } from '@reduxjs/toolkit';

/* Creating a thunk that will be used to make an API call to the server. */
export const $profile = $('profile/$profile', async () => await api.get('/jobseeker/user-profile-update/').then(({ data, status }) => ({ data, status })));

const profileSlice = createSlice({
    name: 'profile',
    initialState: { load: null, error: null, data: null },
    extraReducers: ({ addCase }) => {
        addCase($profile.pending, (state) => {
            state.load = true;
        });
        addCase($profile.fulfilled, (state, { payload }) => {
            console.log(payload.data);
            state.data = payload.data;
            state.load = state.error = false;
        });
        addCase($profile.rejected, (state, { error }) => {
            state.load = false;
            state.error = error;
            console.error(error);
        });
    },
});

export default profileSlice.reducer;
