import { Circles } from 'react-loader-spinner';

const Loader = () => {
    return <div className='w-screen h-screen flexc items-center justify-center bg-white'>
        <Circles type="ThreeDots" width={200} color="blue" />
    </div>;
};

export default Loader;
