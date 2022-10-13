import React from 'react'
import { FaTimes } from 'react-icons/fa'
export const JobDetail = ({setShowJobDetail}) => {
  return (
    <section className='bg-white relative '>
      <FaTimes
              onClick={() => setShowJobDetail(false)}
              className="text-blue text-[1.3rem]  cursor-pointer absolute right-5 top-"
            />
      <h1 className='font-[700] text-2xl'>Job Preview</h1>
      <p className='pb-[1rem]'>Here’s a preview of how people might view your job</p>
      <hr  className='text-[#808080] '/>

      <div className='mt-[1rem]'>
        <h1 className='font-[700] text-xl'>Chemistry Teacher</h1>
        <p>Stars College</p>
        <p>Ikorodu, Lagos.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada neque, dolor in nibh aliquet donec lectus sapien. Ultricies gravida egestas diam risus phasellus. Ipsum sit tortor ultrices quam. Ipsum nunc sed lorem nunc, in odio amet.</p>


        <div className='mt-[1rem]'>
            <p className='font-[700]'>Requirements:</p>
            {/* <Markup content={requirements} />  */}
            <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ratione, ipsum eligendi nisi aut inventore. Perferendis inventore veritatis fuga reiciendis.

                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, officiis.
                </li>
            </ol>

             </div>

        <div className='mt-[1rem]'>
        <p>Job type:Full Time </p>
        <p>Salary: 500,000 </p>
        <p>Application Deadline: Oct 20 2002</p>
        </div>
     

      </div>
    </section>
  )
}
