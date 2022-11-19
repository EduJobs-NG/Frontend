import Header from '../component/header';
import Footer from '../component/footer';

const headerElements = {
    main: [
        { to: '/dashboard', name: 'dashboard' },
        { to: '/analytics', name: 'analytics' },
    ],
    aside: [
        { to: '/jobseeker', name: 'i\'m a jobseeker' },
        { to: '/employer', name: 'i\'m an  employer' },
    ],
    buttons: [
        { event: 'login', name: 'login' },
    ],
};

const Layout = (Component, setElements = true) => (() => (<>
    <Header {...headerElements} />
    <Component />
    <Footer />
</>));

export default Layout;
