import React, { useContext, useState } from 'react'
import AuthContext from '../../../context/AuthContext';
import { AddEducation } from './AddEducation';
import AddIcon from '../../../assets/AddIcon.png'
import EditIcon2 from '../../../assets/EditIcon2.png'
import DeleteIcon from '../../../assets/DeleteIcon.png';
import { DeleteEducation } from '../DeleteProfile/DeleteEducation';
import { EditEducation } from './EditEducation';


export const ProfessionalInfo = () => {
  const [showEducation, setShowEducation] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const { user } = useContext(AuthContext);
  const education = user?.professional_info;

  return (
    <section>
      {showEducation && <AddEducation showEducation={showEducation} setShowEducation={setShowEducation} />}


      <h1 className='text-xl font-[700]'>Your Education</h1>
      <p>All Education is valuable, ensure to list all schools attended below.</p>


      {education && education.map((item, index) => {
        return (
          <div key={index} className='relative border mt-[1rem] px-[2rem] py-[1rem] rounded-lg border-[#808080]'>
            {showDelete && <DeleteEducation setShowDelete={setShowDelete} item={index} />}
            {showEdit && <EditEducation setShowEdit={setShowEdit} item={item} />}
            {/* {item.id === 29 ? 'hello' : item.id === 30 ? 'world':'nothing'} */}
            <div className='absolute right-5'>
              <div className='flex flex-row gap-6 '>
                <img className='cursor-pointer' onClick={() => setShowEdit(true)} src={EditIcon2} alt="" />
                <img className='cursor-pointer' onClick={() => setShowDelete(true)} src={DeleteIcon} alt="" />

              </div>
            </div>
            <h1 className='text-xl font-[700]'>{item.degree}</h1>
            <p className='text-[1rem] font-[500]'>{item.school_name}</p>
            <p className='text-[1rem] font-[500]'>{item.start_of_education} - {item.end_of_education}</p>
            <p className='text-[1rem] font-[500]'>{item.id}</p>
            <p className='text-[1rem] font-[500]'>{item.grade}</p>
            <p>{item.study_summary}</p>

          </div>
          // </> 
        )
      })}




      <div className='mt-[3rem] items-baseline gap-3 text-center flex flex-row justify-center'>
        <div>
          <img src={AddIcon} alt="" />
        </div>
        <span className='text-blue font-[700] text-2xl cursor-pointer' onClick={() => setShowEducation(true)}>Add Education</span>

      </div>

      {education.length === 0 && (
        <div className='bg-[#f0f0f0] mt-[2rem] flex items-end justify-center text-center  rounded-md pb-[1rem] pt-[5rem]'>
          <p>Please click on “Add Education” to record your Schools and degrees.</p>
        </div>
      )}
    </section>
  )
}
