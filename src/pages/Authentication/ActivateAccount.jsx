import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import welcome from '../../assets/welcome.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const ActivateAccount = () => {
  
  const [show, setShow] = useState(false)
  const { uid, token } = useParams();
  const values = { uid, token }
  const navigate = useNavigate()
  const handleSubmit = async () => {
    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}user/email/activate/`, values)
      .catch(err => {
        console.log(err)
        if (err && err.response) {
          if (err.response.status === 400) {
            setShow(false)
            toast.error("Invalid token for given user")
          }
          else if (err.response.status === 403) {
            setShow(true)
            toast.info('Your account has been activated.')
            setTimeout(() => {
              navigate('/login')
            }, 2000)

          }
          else {
            toast.error(err.message + ' .Try again')
            console.log(err)
          }

        }
      });
    if (response) {
      console.log(response)
      setShow(true)
      toast.success("Account activated successfully")
      setTimeout(() => {
        navigate('/login');
      }, 2000)

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
          <h1 className='text-2xl font-[800]'>Account Activation</h1>
  
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
