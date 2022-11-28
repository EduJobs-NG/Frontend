import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import welcome from '../../assets/welcome.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';



export const ActivateAccount = () => {
  
  const [show, setShow] = useState(false);
  const { uid, token } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const values = { uid, token }
  const navigate = useNavigate()
  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}jobseeker/user/email/activate/`, values)
      .catch(err => {
        console.log(err)
        if (err && err.response) {
          if (err.response.status === 400) {
            setShow(false)
            setIsLoading(false)
            toast.error("Invalid token for given user")
          }
          else if (err.response.status === 403) {
            setShow(true)
            setIsLoading(false)
            toast.info('Your account has been activated.')
            setTimeout(() => {
              navigate('/login')
            }, 3000)

          }
          else {
            toast.error(err.message + ' .Try again')
            setIsLoading(false)
            console.log(err)
          }

        }
      });
    if (response) {
      console.log(response)
       


      setShow(true)
      setIsLoading(false)
      toast.success("Account activated successfully")
      const {is_jobseeker, is_employer} = response.data;
      if (is_jobseeker === true){
        setTimeout(() => {
          navigate('/jobseeker/login');
        }, 3000)
      }
      else if(is_employer === true){
        setTimeout(() => {
          navigate('/employer/login');
        }, 3000)
      }
    }

  }

  useEffect(() => {
    handleSubmit();
  }, [])
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
