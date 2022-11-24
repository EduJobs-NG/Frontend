import Header from '../component/header';
import Footer from '../component/footer';

const headerElements = {
    main: [], aside: [],
    buttons: [
        { event: 'post', name: 'post job', navigate: '#' },
    ],
};

const Layout = (Component, setElements = true) => (() => (<>
    <Header {...headerElements} />
    <Component />
    <Footer />
</>));

export default Layout;
