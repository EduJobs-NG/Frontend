import Header from '../component/header';
import Footer from '../component/footer';

const headerElements = {
    main: [
        { to: '/analytics', name: 'about us' },
        { to: '/analytics', name: 'pricing' },
    ],
    aside: [],
    buttons: [
        { event: 'post', name: 'post job', navigate: '/' },
    ],
};

const Layout = (Component, setElements = true) => (() => (<>
    <Header {...headerElements} />
    <Component />
    <Footer />
</>));

export default Layout;
