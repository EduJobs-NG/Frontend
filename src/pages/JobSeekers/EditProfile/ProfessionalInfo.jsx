import React, {useContext, useState} from 'react'
import AuthContext from '../../../context/AuthContext';
import { AddEducation } from './AddEducation';
import AddIcon from '../../../assets/AddIcon.png'
import EditIcon2 from '../../../assets/EditIcon2.png'
import DeleteIcon from '../../../assets/DeleteIcon.png';
import { DeleteEducation } from '../DeleteProfile/DeleteEducation';


export const ProfessionalInfo = () => {
  const [show, setShow] = useState(false)
  const [showDelete, setShowDelete] = useState(false)


  
  const {user} = useContext(AuthContext);
  const education = user?.professional_info;

  return (
    <section>
      {show && <AddEducation show={show} setShow={setShow} />}
      {/* {showDelete && <DeleteEducation setShowDelete={setShowDelete} />} */}

      <h1 className='text-xl font-[700]'>Your Education</h1>
      <p>All Education is valuable, ensure to list all schools attended below.</p>

      {education && education.map((item) =>{
        return (
         <>
          {showDelete && <DeleteEducation setShowDelete={setShowDelete} id={item.id} />}
         
          <div key={item.id} className='relative border mt-[1rem] px-[2rem] py-[1rem] rounded-lg border-[#808080]'>
            
            <div className='absolute right-5'>
              <div className='flex flex-row gap-6 '>
                <img className='cursor-pointer'  src={EditIcon2} alt="" />
                <img className='cursor-pointer' onClick={() => setShowDelete(true)} src={DeleteIcon} alt="" />

              </div>
            </div>
          <h1 className='text-xl font-[700]'>{item.degree}</h1>
          <p className='text-[1rem] font-[600]'>{item.school_name}</p>
          <p className='text-[1rem] font-[600]'>{item.start_of_education} - {item.end_of_education}</p>
          <p className='text-[1rem] font-[600]'>{item.id}</p>
          <p>{item.study_summary}</p>
    
          </div>
          </> 
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
