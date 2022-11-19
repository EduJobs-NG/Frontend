import Header from '../component/header';
import Footer from '../component/footer';

const headerElements = {
    main: [
        { to: '/dashboard', name: 'dashboard' },
        { to: '/analytics', name: 'analytics' },
    ],
    aside: [
        { to: '/jobseeker', name: 'i"m a jobseeker' },
        { to: '/employer', name: 'i"m an  employer' },
    ],
    buttons: [
        { event: 'login', name: 'login' },
    ],
};

const Layout = (Component, setElements = true) => (() => {
    const elements = setElements ? headerElements : { buttons: [{ event: '', name: 'post jobs' }] };
    return <>
        <Header {...elements} />
        <Component />
        <Footer />
    </>
});

export default Layout;
