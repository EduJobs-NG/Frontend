import React, { useContext, useState, useEffect } from 'react';
import { JobseekerNavbar } from '../components/JobseekerNavbar';
import AuthContext from '../../context/AuthContext';
import marker from '../../assets/Marker.png';
import EditIcon from '../../assets/EditIcon.png';
import { EditProfile } from '../EditProfile/EditProfile';
import { EditBio } from '../EditProfile/EditBio';
import { EditPic } from '../EditProfile/EditPic';
import { FaEdit, FaMapMarker } from 'react-icons/fa';


export const JobseekerProfile = () => {
  const { user, getUserMeHandler, loading } = useContext(AuthContext);
  const [showBio, setShowBio] = useState(false);
  const [showPic, setShowPic] = useState(false)
  const renderBasedOnStatus = () =>{
    switch (loading) {
      case true:
        return <p>loading...</p>
      case false:
        return (<EditProfile />)
      default:
       return <p>loading...</p>;
    }
  }
  
  useEffect(() =>{
      getUserMeHandler();
     
    }, [])

  return (
    <>
      <JobseekerNavbar user={user} />
      {showBio && <EditBio showBio={showBio} setShowBio={setShowBio} />}
      {showPic && <EditPic showPic={showPic} setShowPic={setShowPic} />}
      
      <section className='bg-[#f5f5f5] overflow-x-hidden'>
        <div className='container mx-auto rounded-[40px] bg-white'>
          <h1 className='font-[700] pt-[2rem] text-2xl'>Profile</h1>
          <div className='md:container md:mx-auto '>
            <div className='grid mt-[2rem] md:grid-cols-2 md:gap-6'>
              <div className='flex flex-col md:flex-row gap-x-[1rem]  items-center'>
                <div className=' relative w-[130px] h-[130px]'>
                  
                  
                  {!loading &&
                  <div className=' absolute top-0 cursor-pointer ml-2' onClick={()=>setShowPic(true)}>
                  <img className='rounded-full ' src={user?.avatar} alt="" />
                </div>
                }
                </div>
                <div className=''>
                  {/* {loading && (<p>Loading...</p>)} */}
                  <h1 className='font-[700] text-[20px]'>{ user.user?.first_name} { user.user?.last_name}</h1>
                  <small className='flex justify-center md:justify-start '><img src={marker} alt="" className='mr-[0.5rem]' />
                   {user?.city || "..."}, {user.state || "..."} </small>
                </div>


              </div>

              <div className='max-w-[600px] mt-[2rem] md:mt-0'>
                {/* {!loading &&  */}
                <div className='flex justify-center md:justify-start'>
                <span className='font-[700] text-[18px]'>Bio:</span> <div className='cursor-pointer ml-2' onClick={()=>setShowBio(true)}>
                  <img src={EditIcon} alt="" />
                  {/* <FaEdit /> */}
                </div>
                </div>
                {/* } */}
               
                <div className='text-center md:text-left'>
                  <p> {user?.bio || '...'}</p>
                  
                </div>
              </div>
            </div>
            <div className='md:container mt-[3rem] pb-[4rem] rounded-[40px] md:mx-auto'>
            {renderBasedOnStatus()}

          </div>
          </div>

          
        </div>
        </section>


    

    </>
  )
}
