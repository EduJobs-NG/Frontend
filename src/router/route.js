import { lazy } from 'react';

// layouts
import { employer, jobseeker, main } from '../layouts';

// views
const home = lazy(() => import('../views/home'));
const faq = lazy(() => import('../component/faq'));
const notfound = lazy(() => import('../component/notfound'));
const employer_home = lazy(() => import('../views/employer/home'));
const jobseeker_home = lazy(() => import('../views/jobseeker/home'));

// tmp views


const routes = [
    { protected: false, path: '/', element: main(home), name: 'employer_home' },
    { protected: false, path: '/employer', element: employer(employer_home), name: 'employer_home' },
    { protected: false, path: '/jobseeker', element: jobseeker(jobseeker_home), name: 'jobseeker_home' },
    { protected: false, path: '/faqs', element: jobseeker(faq, false), name: 'not_found' },
    { protected: false, path: '*', element: main(notfound), name: 'not_found' },
];

export default routes;
