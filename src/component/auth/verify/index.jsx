import { Link } from 'react-router-dom';
import message from '../../../assets/messageIcon.png';

export const Verify = () => {
    return (
        <section className='flex items-center justify-center'>
            <div className='container  mx-auto  h-screen flex flex-col justify-center items-center text-center'>
                <div className='w-full'>
                    <div className='flex justify-center' >
                        <img src={message} className=' ' alt="" />
                    </div>

                    <h1 className='text-black font-[700] text-2xl'>Verify Account</h1>
                    <p className='mt-4'>
                        A link has been sent to your email. <br />
                        Kindly click on it to verify your account.
                    </p>

                    <p className='mt-[2rem]'>Wrong email address?
                        <Link className='text-blue' to="/auth/reset-email">Change email</Link>
                    </p>

                    <p className='mt-[2rem]'>
                        <Link className='text-blue ' to="/auth/resend">Resend Link</Link>
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Verify;
