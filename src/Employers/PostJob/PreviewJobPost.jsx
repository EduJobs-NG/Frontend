import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Markup } from 'interweave';
import Moment from 'moment';

export const PreviewJobPost = ({formData, setShowPreview}) => {
  const {summary, title, organization_name, requirements, job_type, deadline, 
    min_pay_range, max_pay_range, location} = formData;
    
    const deadlineDate = Moment(deadline).format('MMM DD YYYY')
  return (
    <section className='bg-white relative '>
      <FaTimes
              onClick={() => setShowPreview(false)}
              className="text-blue text-[1.3rem]  cursor-pointer absolute right-5 top-"
            />
      <h1 className='font-[700] text-2xl'>Job Preview</h1>
      <p className='pb-[1rem]'>Here’s a preview of how people might view your job</p>
      <hr  className='text-[#808080] '/>

      <div className='mt-[1rem]'>
        <h1 className='font-[700] text-xl'>{title}</h1>
        <p>{organization_name}</p>
        <p>{location}</p>
        <p>{summary}</p>


        <div className='mt-[1rem]'>
            <p className='font-[700]'>Requirements:</p>
            <Markup content={requirements} />  </div>

        <div className='mt-[1rem]'>
        <p>Job type: {job_type}</p>
        <p>Salary: #{min_pay_range} to #{max_pay_range} </p>
        <p>Application Deadline: {deadlineDate}</p>
        </div>
     

      </div>
    </section>
  )
}
