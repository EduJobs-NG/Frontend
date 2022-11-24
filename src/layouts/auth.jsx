import Header from '../component/header';
import Footer from '../component/footer';

const headerElements = {
    main: [
        { to: '/dashboard', name: 'jobs' },
        { to: '/analytics', name: 'trending' },
        { to: '/analytics', name: 'about us' },
        { to: '/pricing', name: 'pricing' },
    ],
    aside: [
        { to: '/jobseeker', name: 'i\'m a jobseeker' },
        { to: '/employer', name: 'i\'m an  employer' },
    ],
    buttons: [
        { event: 'login', name: 'login' },
    ],
};

const Layout = (Component, setFooter = false) => (() => (<>
    <Header {...headerElements} />
    <Component />
    {setFooter && <Footer />}
</>));

export default Layout;
