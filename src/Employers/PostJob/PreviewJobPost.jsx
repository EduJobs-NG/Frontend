import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import { Markup } from 'interweave';
import Moment from 'moment';
import useAxios from '../../utils/useAxios'
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PreviewJobPost = ({formData, setShowPreview}) => {
  const {summary, title, organization_name, requirements, job_type, deadline, 
    min_pay_range, max_pay_range, location} = formData;
  const [isLoading, setIsLoading] = useState(false);
  const api = useAxios()


  const navigate = useNavigate();
  const handleSubmission = async () => {
      setIsLoading(true);
      const data = new FormData();
      data.append('title', title)
      data.append('summary', summary)
      data.append('requirements', requirements)
      data.append('job_type', job_type)
      data.append('deadline', deadline)
      data.append('min_pay_range', min_pay_range)
      data.append('max_pay_range', max_pay_range)
      data.append('location', location)
      // data.append('job', job)
    
        const response = await api.post(`/employer/jobs/{id}/application/`, data)
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
          setIsLoading(false);
        });
  
      if (response) {
        setIsLoading(false);
        console.log(response);
        setShowPreview(true)
        setTimeout(() => {
          navigate('/dashboard/find-jobs')
        }, 5000)
      }
    }
    
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
     
     <button onClick={handleSubmission}>Submit</button>

      </div>
    </section>
  )
}
