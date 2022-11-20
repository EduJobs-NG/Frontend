import jobs from './slice/job';
import auth from './slice/auth';
import profile from './slice/profile';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: { auth, jobs, profile } });

export default store;
export { default as useMyDispatch } from './dispatch';
