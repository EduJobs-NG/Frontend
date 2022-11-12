import { Login } from '../../form';

const LoginSection = () => {
    return <section className="w-screen h-screen flex items-center justify-center bg-blue">
        <Login hideBtn={true} />
    </section>;
};

export default LoginSection;
