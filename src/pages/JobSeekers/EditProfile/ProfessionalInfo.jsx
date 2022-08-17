import React, {useContext, useState} from 'react'
import AuthContext from '../../../context/AuthContext';
import { AddEducation } from './AddEducation';
import AddIcon from '../../../assets/AddIcon.png'
export const ProfessionalInfo = () => {
  const [show, setShow] = useState(false)
  
  const {user} = useContext(AuthContext);
  const education = user?.professional_info;
  // console.log(education)
  return (
    <section>
      {show && <AddEducation show={show} setShow={setShow} />}

      <h1 className='text-xl font-[700]'>Your Education</h1>
      <p>All Education is valuable, ensure to list all schools attended below.</p>

      {education && education.map((item) =>{
        return (
          <div key={item.id} className='border mt-[1rem] px-[2rem] py-[1rem] rounded-lg border-[#808080]'>
          <h1 className='text-xl font-[700]'>{item.degree}</h1>
          <p className='text-[1rem] font-[600]'>{item.school_name}</p>
          <p className='text-[1rem] font-[600]'>{item.start_of_education} - {item.end_of_education}</p>
          <p className='text-[1rem] font-[600]'>{item.grade}</p>
          <p>{item.study_summary}</p>
    
          </div>
        )
      })}




      <div className='mt-[3rem] items-baseline gap-3 text-center flex flex-row justify-center'>
      <div>
      <img src={AddIcon} alt="" /> 
      </div>
      <span className='text-blue font-[700] text-2xl cursor-pointer' onClick={()=> setShow(true)}>Add Education</span> 

      </div>
    </section>
  )
}
