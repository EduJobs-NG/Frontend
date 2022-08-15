import React, { useContext, useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import AuthContext from '../../context/AuthContext';
import enoch from '../../assets/enoch.jpg';
import marker from '../../assets/Marker.png';
import { EditProfile } from './EditProfile/EditProfile';
import { FaEdit, FaMapMarker } from 'react-icons/fa';
import { EditBionPic } from './EditProfile/EditBionPic';


export const UserProfile = () => {
  const { user, getUserMeHandler, loading, setLoading } = useContext(AuthContext);
  const [show, setShow] = useState(false)
  

  useEffect(() => {
    getUserMeHandler();
    

  }, [])

  return (
    <>
      <Navbar />
      {show && <EditBionPic show={show} setShow={setShow} />}

      <section className='bg-[#f5f5f5] overflow-x-hidden'>
        <div className='container mx-auto rounded-[40px] bg-white'>
          <h1 className='font-[700] pt-[2rem] text-2xl'>Profile</h1>
          <div className='md:container md:mx-auto '>
          {/* flex  flex-col md:flex-row gap-x-[200px] */}
            <div className='grid mt-[2rem] md:grid-cols-2 md:gap-6'>
              <div className='flex flex-col md:flex-row gap-x-[1rem]  items-center'>
                <div className='w-[130px] h-[130px]'>
                  <img className='rounded-full ' src={enoch} alt="" />
                </div>
                <div className=''>
                  {loading && (<p>Loading...</p>)}
                 {!loading && <h1 className='font-[700] text-[20px]'>{user.user && user.user.first_name} {user.user && user.user.last_name}</h1>}
                  <small><img src={marker} alt="" /> {user?.city} {user.state} </small>
                </div>


              </div>

              <div className='max-w-[600px] mt-[2rem] md:mt-0'>
                <div className='flex justify-start'>
                <span className='font-[700] text-[18px]'>Bio:</span> <FaEdit className='cursor-pointer ml-2' onClick={()=>setShow(true)} />
                </div>
               
                <div className='text-left'>
                  {loading && <p>loading...</p>}
                 {!loading && ( <p> {user?.bio}</p>)}
                  
                </div>
              </div>
            </div>
            <div className='md:container mt-[3rem] pb-[4rem] rounded-[40px] md:mx-auto'>
            <EditProfile />

          </div>
          </div>

          
        </div>
        </section>


      <section className='container bg-white mx-auto'>
    
      </section>

    </>
  )
}
