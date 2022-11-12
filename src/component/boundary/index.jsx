import Error from '../error';
import { Circles } from 'react-loader-spinner';

const Boundary = (props) => {
    return props?.load ?
        <Circles type="ThreeDots" width={200} height={40} color="blue" /> :
        props?.error ? <Error /> : props?.children;
};

export default Boundary;
