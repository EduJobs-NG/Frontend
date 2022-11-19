import { Link } from 'react-router-dom';
import notfound from '../../assets/pageNotFound.png';

const NotFound = () => {
    return <div className="flex flex-col h-screen text-center justify-center items-center gap-4">
        <img src={notfound} alt="" />
        <p className="font-bold capitalize text-center">
            oops! we're sorry, the page you requested for could not be found
        </p>
        <Link to='/' className="flex items-center justify-center rounded uppercase text-white bg-blue text-center py-2 p-8">
            go to homepage
            </Link>
    </div>;
};

export default NotFound;
