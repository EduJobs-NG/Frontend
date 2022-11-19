import { Circles } from 'react-loader-spinner';

const Loader = () => {
    return <div id='loader'>
        <Circles type="ThreeDots" width={200} color="blue" />
    </div>;
};

export default Loader;
