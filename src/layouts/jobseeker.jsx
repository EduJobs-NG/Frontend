import Hero from '../component/hero';
import Header from '../component/header';
import Footer from '../component/footer';

const headerElements = {
    main: [
        { name: 'find jobs', to: '/' },
        { name: 'saved jobs', to: '/' },
        { name: 'pricing', to: '/' },
    ],
    aside: [
        { name: '', to: '/' },
    ],
    buttons: [
        { name: 'login', event: 'login' },
        { name: 'register', event: 'register' },
    ],
};

const Layout = (Component, showhero = true) => (() => (
    <>
        <Header {...headerElements} />
        {showhero ?<Hero>
            <div className="flex flex-col items-start justify-center p-8 z-10 w-full">
                <h2 className='text-left capitalize font-bold text-[clamp(2em,5vw,6em)] leading-[1em] w-[50%] min-w-[12em] whitespace-pre-line'>
                    find job that best suits you
                </h2>
            </div>
        </Hero>:null}
        <Component />
        <Footer />
    </>
));

export default Layout;
