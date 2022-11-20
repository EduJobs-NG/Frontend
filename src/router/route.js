import { lazy } from 'react';

// layouts
/* Importing the layouts from the layouts folder. */
import { employer, jobseeker, main, auth, jobpost } from '../layouts';

// views
/* Importing the components from the respective folders. */
const home = lazy(() => import('../views/home'));
const faq = lazy(() => import('../component/faq'));
const account = lazy(() => import('../component/account'));
const login = lazy(() => import('../component/auth/login'));
const postjob = lazy(() => import('../component/job/post'));
const notfound = lazy(() => import('../component/notfound'));
const verify = lazy(() => import('../component/auth/verify'));
const activate = lazy(() => import('../component/auth/activate'));
const register = lazy(() => import('../component/auth/register'));
const employer_home = lazy(() => import('../views/employer/home'));
const jobseeker_home = lazy(() => import('../views/jobseeker/home'));
const jobseeker_profile = lazy(() => import('../component/profile/jobseeker'));
const jobseeker_profile_edit = lazy(() => import('../component/profile/jobseeker/edit'));

/* Defining the routes for the application. */
const routes = [
    { protected: false, path: '/', element: main(home) },
    { protected: false, path: '/auth/login', element: login },
    { protected: false, path: '/auth/register', element: register },
    { protected: false, path: '/auth/verify', element: auth(verify) },
    { protected: false, path: '/faqs', element: jobseeker(faq, false) },
    { protected: false, path: '/employer', element: employer(employer_home) },
    { protected: false, path: '/employer/post-job', element: jobpost(postjob) },
    { protected: false, path: '/activate/:uid/:token', element: auth(activate) },
    { protected: false, path: '/jobseeker', element: jobseeker(jobseeker_home) },
    { protected: false, path: '/employer/account', element: main(account, false) },
    { protected: true, path: '/jobseeker/profile', element: jobseeker(jobseeker_profile, false) },
    { protected: false, path: '/jobseeker/profile/edit', element: jobseeker(jobseeker_profile_edit, false) },

    /* This is the last route in the array. It is a catch-all route. If the user tries to access a
    route that is not defined, it will redirect to the notfound component. */
    { protected: false, path: '*', element: main(notfound) },
];

export default routes;
