import React, { useState, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DeleteCredential = ({ setShowDelete, setActive, item }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { authTokens, getUserMeHandler } = useContext(AuthContext);

    const handleDelete = async () => {
        setIsLoading(true)
        const response = await axios.
            delete(`${process.env.REACT_APP_BASE_URL}jobseeker/user-profile/me/credentials/${item.id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${authTokens.auth_token}`
                    }
                })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
                setIsLoading(false)
            });

        if (response) {
            setIsLoading(false)
            setShowDelete(false)
            getUserMeHandler()
            setActive(2)
            console.log(response)
        }
    }

    return (
        <>
            <ToastContainer />
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-3 max-w-3xl">


                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-1 ">


                            {/*body*/}
                            <div className="relative p-8 flex-auto">

                                <div className='w-full max-w-xl grid  mt-[1rem]'>
                                    <h3 className="text-2xl font-semibold">
                                        Are you sure you want to delete?
                                    </h3>


                                    <div className="flex items-center justify-end   rounded-b">

                                        <div className='mt-[1.6rem] flex flex-row justify-between gap-6'>
                                            <div>
                                                <button onClick={() => setShowDelete(false)} className='bg-blue  opacity-100 block w-full px-6 text-white rounded-md p-2' type="submit">Cancel</button>

                                            </div>
                                            {!isLoading && <button onClick={handleDelete} className=' bg-red-600  opacity-100 block w-full px-6 text-white rounded-md p-2' type="submit">Delete</button>}
                                            {isLoading && (
                                                <div className='flex justify-center'>
                                                    <ThreeDots type="ThreeDots"
                                                        width={100} height={20} color="blue"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                    </div>

                                </div>

                            </div>      {/*footer*/}

                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40  bg-black"></div>
        </>
    )
}
