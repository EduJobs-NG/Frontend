import React from 'react'

export const RecentJobs = () => {
  return (
    <>
    <section className='bg-[#f5f5f5]'>
        <div className='container mx-auto'>
            <hr className='text-[#d9d9d9]' />
            <h2 className='text-blue my-[1rem] font-[700] text-[1.5rem]'>Recent Jobs</h2>
            <div className='relative ml-[1rem] py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]'>
              <h2 className='font-[700] text-[1.2rem] '>Chemistry Teacher</h2>
              <p className='font-[500]'>Stars College</p>
              <p className='font-[500]'>Ikorodu, Lagos.</p>
              <p className='mt-[0.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur placeat, non dicta ratione, 
                et voluptatem eaque ducimus nemo optio expedita corporis, rerum ab magni sunt consectetur. 
                Quis exercitationem similique temporibus ratione dolorem modi iusto, voluptatibus quae sunt
                 odio sequi, neque, rem autem aliquam laudantium mollitia vero consequatur ducimus vel asperiores!
                  </p>
                  <p className='mt-[1rem]'>5 hours ago</p>
                  <p className='cursor-pointer font-[600] absolute text-blue right-5 bottom-[1rem]'>View more</p>
            </div>
        </div>

    </section>
    </>
  )
}
