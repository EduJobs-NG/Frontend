import React, { useContext, useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import AuthContext from '../../context/AuthContext';
import enoch from '../../assets/enoch.jpg';
import marker from '../../assets/Marker.png';
import EditIcon from '../../assets/EditIcon.png';
import { EditProfile } from './EditProfile/EditProfile';
import { EditBionPic } from './EditProfile/EditBionPic';


export const UserProfile = () => {
  const { user, getUserMeHandler, loading, setLoading } = useContext(AuthContext);
  const [show, setShow] = useState(false);
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
  const [refresh, setRefresh] = useState()

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
                <div className=' relative w-[130px] h-[130px]'>
                  <img className='  rounded-full ' src={user.avatar} alt="" />
                  {!loading &&
                  <div className=' absolute top-0 cursor-pointer ml-2' onClick={()=>setShow(true)}>
                  <img src={EditIcon} alt="" />
                </div>
                }
                </div>
                <div className=''>
                  {loading && (<p>Loading...</p>)}
                 {!loading && <h1 className='font-[700] text-[20px]'>{ user.user?.first_name} { user.user?.last_name}</h1>}
                 {/* {loading && <p>loading...</p>} */}
                  {!loading && <small className='flex justify-center md:justify-start '><img src={marker} alt="" className='mr-[0.5rem]' /> {user?.city}, {user.state} </small>}
                </div>


              </div>

              <div className='max-w-[600px] mt-[2rem] md:mt-0'>
                {!loading && 
                <div className='flex justify-center md:justify-start'>
                <span className='font-[700] text-[18px]'>Bio:</span> <div className='cursor-pointer ml-2' onClick={()=>setShow(true)}>
                  <img src={EditIcon} alt="" />
                </div>
                </div>
                }
               
                <div className='text-center md:text-left'>
                  {loading && <p>loading...</p>}
                 {!loading && ( <p> {user?.bio}</p>)}
                  
                </div>
              </div>
            </div>
            <div className='md:container mt-[3rem] pb-[4rem] rounded-[40px] md:mx-auto'>
            {renderBasedOnStatus()}

          </div>
          </div>

          
        </div>
        </section>


      <section className='container bg-white mx-auto'>
    
      </section>

    </>
  )
}
