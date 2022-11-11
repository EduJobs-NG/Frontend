import { createPortal } from 'react-dom';

const Register = () => {
    return <form className='flex flex-col p-8 rounded items-center'>

    </form>;
};

export const RegisterPortal = ({ close }) => createPortal(<Register close={close} />, document.querySelector("#portal"));

export default Register;
