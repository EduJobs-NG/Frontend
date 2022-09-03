import React, {useState} from 'react';
import { Link } from 'react-router-dom';
export const RecentJobs = () => {
  const [viewMore, setViewMore] = useState(false)
  const handleView = () =>{
    setViewMore(!viewMore)
  }
  const jd = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem odit suscipit quae consectetur. Provident, commodi sint nobis repellendus iure doloremque reiciendis ut hic ratione beatae perferendis veritatis ipsam soluta excepturi sed. Delectus, consectetur recusandae praesentium eligendi molestias quaerat ea, blanditiis ullam obcaecati provident a porro. Sunt numquam architecto inventore!'
  return (
    <>
    <section className='bg-[#f5f5f5]'>
        <div className='container py-[4rem] mx-auto'>
            <hr className='text-[#d9d9d9]' />
            <h2 className='text-blue my-[1rem] font-[700] text-[1.5rem]'>Recent Jobs</h2>
            <div className='relative md:mx-[1rem] my-[rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]'>

              <h2 className='font-[700] text-[1.2rem]'>Chemistry Teacher</h2>
              <p className='font-[500]'>Stars College</p>
              <p className='font-[500]'>Ikorodu, Lagos.</p>
              <p className='mt-[0.5rem] mb-[1.2rem]'>
               {viewMore ? `${jd}` : `${jd.substring(0, 250)}...` } 
                  </p>
                  <p className='absolute  left-5 bottom-[0.5rem]'>5 hours ago</p>
                  <p onClick={handleView} className='cursor-pointer font-[600] absolute text-blue right-5 bottom-[0.5rem]'>{viewMore ? 'View Less':'View More'}</p>

                  {viewMore && (
                    <div className='my-[1rem]'>
                      <h1 className='font-[700]'>Requirements</h1>
                      <ol className='list-style'>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                      </ol>
                      <div className='grid w-full  my-[2rem] md:mt-[3rem] place-items-center'>
                       <Link to="#">
                      <button className='bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2' type="submit">
                        APPLY
                        </button>
                        </Link> 


                      </div>

                    </div>
                  )}
            </div>
        </div>

    </section>
    </>
  )
}
