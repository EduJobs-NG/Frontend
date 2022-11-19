import { lazy } from 'react';

// layouts
import { employer, jobseeker, main, auth } from '../layouts';

// views
const home = lazy(() => import('../views/home'));
const faq = lazy(() => import('../component/faq'));
const account = lazy(() => import('../component/account'));
const login = lazy(() => import('../component/auth/login'));
const notfound = lazy(() => import('../component/notfound'));
const verify = lazy(() => import('../component/auth/verify'));
const activate = lazy(() => import('../component/auth/activate'));
const register = lazy(() => import('../component/auth/register'));
const employer_home = lazy(() => import('../views/employer/home'));
const jobseeker_home = lazy(() => import('../views/jobseeker/home'));
const jobseeker_profile = lazy(() => import('../component/profile/jobseeker'));
const jobseeker_profile_edit = lazy(() => import('../component/profile/jobseeker/edit'));

const routes = [
    { protected: false, path: '/', element: main(home) },
    { protected: false, path: '/auth/login', element: login },
    { protected: false, path: '/auth/register', element: register },
    { protected: false, path: '/auth/verify', element: auth(verify) },
    { protected: false, path: '/faqs', element: jobseeker(faq, false) },
    { protected: false, path: '/employer', element: employer(employer_home) },
    { protected: false, path: '/activate/:uid/:token', element: auth(activate) },
    { protected: false, path: '/jobseeker', element: jobseeker(jobseeker_home) },
    { protected: false, path: '/employer/account', element: main(account, false) },
    { protected: true, path: '/jobseeker/profile', element: jobseeker(jobseeker_profile, false) },
    { protected: false, path: '/jobseeker/profile/edit', element: jobseeker(jobseeker_profile_edit, false) },

    { protected: false, path: '*', element: main(notfound) },
];

export default routes;
