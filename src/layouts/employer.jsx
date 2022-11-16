import Hero from '../component/hero';
import { Link } from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer';
import image from '../assets/employers-hero.png';

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

const Layout = (Component) => (() => (<>
    <Header {...headerElements} />
    <Hero backgroundImage={image}>
        <div className="flex text-white flex-col items-start justify-center gap-4">
            <h2 className='mx-[5%] z-10 w-[60%] font-bold text-[clamp(2em,5vw,6em)] leading-[1em]'>
                Hire Top Talents faster than ever!
            </h2>
            <p className='mx-[5%] z-10 text-[clamp(1em,2.2vw,6em)] w-[max(60%,20em)] leading-[1.2em] mb-20 sm:mb-0'>
                Save time and money on recruitment with EduJobs matchmaking
                technology and Candidates' assessement.
            </p>
            <Link
                children="start hiring"
                to='/employer/register'
                className='uppercase mx-[5%] my-4 z-10 bg-white self-start text-blue p-2 
                    px-12 rounded font-bold hidden sm:block hover:brightness-150 transition-all ease'
            />
        </div>
    </Hero>
    <Component />
    <Footer />
</>));

export default Layout;
