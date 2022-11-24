import { lazy } from 'react';

// layouts
/* Importing the layouts from the layouts folder. */
import { employer, jobseeker, main, auth, jobpost, dashboard } from '../layouts';

// views
/* Importing the components from the respective folders. */
const home = lazy(() => import('../views/home'));
const pricing = lazy(() => import('../views/pricing'));
const faq = lazy(() => import('../component/faq'));
const terms = lazy(() => import('../component/terms'));
const account = lazy(() => import('../component/account'));
const login = lazy(() => import('../component/auth/login'));
const reset = lazy(() => import('../component/auth/reset'));
const postjob = lazy(() => import('../component/job/post'));
const notfound = lazy(() => import('../component/notfound'));
const forgot = lazy(() => import('../component/auth/forgot'));
const verify = lazy(() => import('../component/auth/verify'));
const activate = lazy(() => import('../component/auth/activate'));
const register = lazy(() => import('../component/auth/register'));
const employer_home = lazy(() => import('../views/employer/home'));
const jobseeker_home = lazy(() => import('../views/jobseeker/home'));
const employer_dash = lazy(() => import('../views/employer/dashboard'));
const jobseeker_profile = lazy(() => import('../component/profile/jobseeker'));
const jobseeker_profile_edit = lazy(() => import('../component/profile/jobseeker/edit'));

/* Defining the routes for the application. */
const routes = [
    { protected: false, path: '/', element: main(home) },
    { protected: false, path: '/auth/login', element: login },
    { protected: false, path: '/pricing', element: main(pricing) },
    { protected: false, path: '/terms', element: auth(terms, true) },
    { protected: false, path: '/auth/register', element: register },
    { protected: false, path: '/auth/verify', element: auth(verify) },
    { protected: false, path: '/auth/forgot', element: auth(forgot) },
    { protected: false, path: '/faqs', element: jobseeker(faq, false) },
    { protected: false, path: '/employer', element: employer(employer_home) },
    { protected: false, path: '/employer/post-job', element: jobpost(postjob) },
    { protected: false, path: '/activate/:uid/:token', element: auth(activate) },
    { protected: false, path: '/jobseeker', element: jobseeker(jobseeker_home) },
    { protected: true, path: '/employer/account', element: main(account, false) },
    { protected: true, path: '/employer/dashboard', element: dashboard(employer_dash) },
    { protected: false, path: '/password/reset/confirm/:uid/:token', element: auth(reset) },
    { protected: true, path: '/jobseeker/profile', element: jobseeker(jobseeker_profile, false) },
    { protected: true, path: '/jobseeker/profile/edit', element: jobseeker(jobseeker_profile_edit, false) },

    /* This is the last route in the array. It is a catch-all route. If the user tries to access a
    route that is not defined, it will redirect to the notfound component. */
    { protected: false, path: '*', element: main(notfound) },
];

export default routes;
