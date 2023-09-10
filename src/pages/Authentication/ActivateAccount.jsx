import api from '../../utils/api';
import welcome from '../../assets/welcome.png';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import React, { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

export const ActivateAccount = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();

  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.post('/jobseeker/user/email/activate/', { uid, token });
      setShow(true); toast.success("Account activated successfully");

      setTimeout(() => {
        navigate(response.data?.is_jobseeker ? '/jobseeker/login' : '/employer/login');
      }, 3000);

    } catch (error) {
      console.error(error);

      if (error?.response) {
        const { status } = error.response;

        setShow(status !== 400);

        if (status === 400) toast.error("Invalid token for given user");
        else if (status === 403) toast.info('Your account has been activated.') && setTimeout(() => { navigate('/login'); }, 3000);
        else toast.error(`${error.message}. Try again`);
      };
    }
    setIsLoading(false);
  }, [token, uid, navigate]);


  useEffect(() => { handleSubmit(); }, [handleSubmit]);

  return (
    <section className='overflow-x-hidden px-6'>
      <ToastContainer />

      <div className='flex flex-col h-screen  items-center gap-y-[2rem] text-center justify-center '>
        <div className='max-w-[600px]'>
          {/* <h1 className='text-2xl font-[800]'>Account Activation</h1> */}
          <div className='mt-[1.6rem]'>
            {isLoading && (
              <div className='flex justify-center'>
                <ThreeDots type="ThreeDots"
                  width={100} height={20} color="blue"
                />
              </div>
            )}
          </div>

          {show && (
            <div>
              <div>
                <img src={welcome} alt="" />
              </div>
              <h1 className='text-2xl text-center'>
                Welcome on board!
              </h1>

            </div>
          )}

        </div>


      </div>
    </section>

  )
}
