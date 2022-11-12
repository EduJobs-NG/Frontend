import { lazy } from 'react';

// layouts
import { employer, jobseeker, main } from '../layouts';

// views
const home = lazy(() => import('../views/home'));
const faq = lazy(() => import('../component/faq'));
const account = lazy(() => import('../component/account'));
const login = lazy(() => import('../component/auth/login'));
const notfound = lazy(() => import('../component/notfound'));
const register = lazy(() => import('../component/auth/register'));
const employer_home = lazy(() => import('../views/employer/home'));
const jobseeker_home = lazy(() => import('../views/jobseeker/home'));
const jobseeker_profile = lazy(() => import('../component/profile/jobseeker'));
const jobseeker_profile_edit = lazy(() => import('../component/profile/jobseeker/edit'));

const routes = [
    { path: '/', element: main(home) },
    { path: '/auth/login', element: login },
    { path: '/auth/register', element: register },
    { path: '/faqs', element: jobseeker(faq, false) },
    { path: '/employer', element: employer(employer_home) },
    { path: '/jobseeker', element: jobseeker(jobseeker_home) },
    { path: '/employer/account', element: main(account, false) },
    { path: '/jobseeker/profile', element: jobseeker(jobseeker_profile, false) },
    { path: '/jobseeker/profile/edit', element: jobseeker(jobseeker_profile_edit, false) },
    { path: '*', element: main(notfound) },
];

export default routes;
