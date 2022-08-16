import React, {useContext, useState} from 'react'
import AuthContext from '../../../context/AuthContext';
import { AddEducation } from './AddEducation';
import AddIcon from '../../../assets/AddIcon.png'
export const ProfessionalInfo = () => {
  const [show, setShow] = useState(false)
  
  const {user} = useContext(AuthContext);
  return (
    <section>
      {show && <AddEducation show={show} setShow={setShow} />}

      <h1 className='text-xl font-[700]'>Your Education</h1>
      <p>All Education is valuable, ensure to list all schools attended below.</p>
      <div className='mt-[3rem] items-baseline gap-3 text-center flex flex-row justify-center'>
      <div>
      <img src={AddIcon} alt="" /> 
      </div>
      <span className='text-blue font-[700] text-2xl cursor-pointer' onClick={()=> setShow(true)}>Add Education</span> 

      </div>
    </section>
  )
}
