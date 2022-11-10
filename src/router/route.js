import { lazy } from 'react';

// layouts
import { employer, jobseeker } from '../layouts';

// views
const home = lazy(() => import('../views/home'));
const employer_home = lazy(() => import('../views/employer/home'));
const jobseeker_home = lazy(() => import('../views/jobseeker/home'));

// tmp views


const routes = [
    { protected: false, path: '/', element: home, name: 'employer_home' },
    { protected: false, path: '/employer', element: employer(employer_home), name: 'employer_home' },
    { protected: false, path: '/jobseeker', element: jobseeker(jobseeker_home), name: 'jobseeker_home' },
];

export default routes;
