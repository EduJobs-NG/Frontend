import { Link } from 'react-router-dom';
import error from '../../assets/error.svg';

const Error = () => {
    return <div className="flex flex-col h-screen text-center justify-center items-center gap-8">
        <img src={error} alt="" />
        <p className="font-bold capitalize text-center">
            an error has occured. refresh or go back to the homepage
        </p>
        <Link to='/' className="flex items-center justify-center rounded uppercase text-white bg-blue text-center py-2 p-8">go to homepage</Link>
    </div>;
};

export default Error;
