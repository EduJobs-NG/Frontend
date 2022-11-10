import { createPortal } from 'react-dom';

const Register = () => {
    return createPortal(<form className='flex flex-col p-8 rounded items-center'>

    </form>, document.querySelector("#portal"));
};

export default Register;
