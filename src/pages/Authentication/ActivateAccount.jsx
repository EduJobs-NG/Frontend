import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import welcome from '../../assets/welcome.png';



export const ActivateAccount = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState('');
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
            setError("Invalid token for given user")
            setTimeout(() => {
              setError("Invalid token for given user")
            }, 2000)
          }
          else if (err.response.status === 403) {
            setShow(true)
            setSuccess('Your account has been activated.')
            setTimeout(() => {
              setSuccess('Account activation successful. Proceeding to Login')
              navigate('/login')
            }, 2000)

          }
          else {
            setError(err.message + ' .Try again')
            console.log(err)
          }

        }
      });
    if (response) {
      console.log(response)
      setShow(true)
      setSuccess("Account activated successfully")
      setError('')
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
      <div className='flex flex-col h-screen  items-center gap-y-[2rem] text-center justify-center '>
        <div className='max-w-[600px]'>
          <h1 className='text-2xl font-[800]'>Account Activation</h1>
          {error && (

            <div className="p-3 ]  my-4 text-center">
              <p className="bg-red-600 text-white p-2 rounded-md">{error}</p>
            </div>
          )}

          {success && (

            <div className="p-3   my-3 text-center">
              <p className="bg-green-600 text-white p-2 rounded-md">{success}</p>
            </div>
          )}

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
