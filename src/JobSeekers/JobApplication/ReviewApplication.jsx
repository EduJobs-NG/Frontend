import React from 'react'
import { FormInputBox } from '../../components/Forms/FormInputBox';


export const ReviewApplication = ({formData, setStep}) => {
  const {resume, why_work_with_us, email, cover_letter, phone_number} = formData;
  return (
    <section>
      <div className='container mx-auto'>
        <h1 className='font-[700] text-[1.3rem]'>Review your application</h1>

        <div className='md:mx-[1rem] my-[2rem] relative  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]'>
        <p onClick={() => setStep(1)} className='absolute right-5 top-5 text-blue cursor-pointer font-[700]'>Edit</p>
        <a className='text-blue underline' href={resume.name}>
                  {resume.name}</a>
        </div>

        <div className='md:mx-[1rem] my-[2rem] relative  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]'>
          <h1 className='font-[700] text-[1rem]'>Screening questions</h1>
          <p onClick={() => setStep(2)} className='absolute right-5 top-5 text-blue cursor-pointer font-[700]'>Edit</p>
        <div className="my-[1rem]">
              <label htmlFor="">Why do you want work with us?</label>
              <textarea
                name="why_work_with_us"
                value={why_work_with_us}
                className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
                cols="100"
                rows="7"
              ></textarea>
            </div>

            <div className="mb-[1rem]">
              <label htmlFor="">Write a cover letter</label>
              <textarea
                value={cover_letter}
                name="cover_letter"
                
                className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
                cols="100"
                rows="7"
              ></textarea>
            </div>
            </div>

            <div className='md:mx-[1rem] relative my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]'>
            <p onClick={() => setStep(3)} className='absolute right-5 top-5 text-blue cursor-pointer font-[700]'>Edit</p>
          
          <h1 className='font-[700] text-[1rem]'>Contact Info</h1>

            <div className="mt-[1rem]">
            <FormInputBox
              type="email"
              label="Email"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Email"
              name="email"
              value={email}
              
           
            />
          </div>

          <div className="mt-[1rem]">

            <FormInputBox
              type="tel"
              label="Phone Number"
              maxLength="12"
              className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Phone Number"
              id="phone_number"
              name="phone_number"
              value={phone_number}
            />
        </div>
        </div>

        <div className='md:mx-[1rem]'>
          By pressing Submit:
          <p>1) You agree to our Terms and Privacy Policies;</p> 
          <p>
              2) You consent to your application being transmitted to the Employer (EduJobs does not guarantee receipt), & processed & analyzed in accordance with its & Edujobs' terms & privacy policies;
          </p>
        </div>


      </div>
     

    </section>
  )
}
