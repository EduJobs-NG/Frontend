import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

export const IsLoading = () => {
  return (

<div className='flex justify-center'>
                                <ThreeDots type="ThreeDots"
                                    width={100} height={20} color="grey"
                                />
                            </div>
  )
}
