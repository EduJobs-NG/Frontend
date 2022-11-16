import { api } from '../../utils';
import { createSlice, createAsyncThunk as $ } from '@reduxjs/toolkit';

/* Creating a thunk that will be used to make an API call to the server. */
export const $jobs = $('job/$jobs', async () => await api.get('/jobseeker/job-list').then(({ data, status }) => ({ data, status })));

const jobSlice = createSlice({
    name: 'jobs',
    initialState: { load: null, error: null, data: [] },
    extraReducers: ({ addCase }) => {
        addCase($jobs.pending, (state) => {
            state.load = true;
        });
        addCase($jobs.fulfilled, (state, { payload }) => {
            state.data = payload.data;
            state.load = state.error = false;
        });
        addCase($jobs.rejected, (state, { error }) => {
            state.load = false;
            state.error = error;
        });
    },
});

export default jobSlice.reducer;
