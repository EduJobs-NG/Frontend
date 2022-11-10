import { createPortal } from 'react-dom';

const Login = ({ close }) => {
    return createPortal(<form className="bg-white p-8 rounded-lg" onClick={close}>
        <div className="flex items-center justify-center">
            <h2 className="uppercase font-black text-blue text-2xl">login</h2>
        </div>
    </form>, document.querySelector("#portal"));
};

export default Login;
