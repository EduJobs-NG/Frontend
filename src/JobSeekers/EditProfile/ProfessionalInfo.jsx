import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { AddEducation } from './AddEducation';
import AddIcon from '../../assets/AddIcon.png';
import EditIcon2 from '../../assets/EditIcon2.png'
import DeleteIcon from '../../assets/DeleteIcon.png';
import { DeleteEducation } from '../DeleteProfile/DeleteEducation';
import { EditEducation } from './EditEducation';


export const ProfessionalInfo = () => {
  const [showEducation, setShowEducation] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const { user, getUserMeHandler, getUserEducation } = useContext(AuthContext);
  const education = user?.professional_info;
  const [selectedItem, setSelectedItem] = useState({});
  const deleteSelectedItem = (item) => {
    setSelectedItem(item);
    setShowDelete(true)
  }
  const editSelectedItem = (item) => {
    setSelectedItem(item)
    setShowEdit(true)
  }



  return (
    <section>
      {showEducation && <AddEducation getUserMeHandler={getUserMeHandler} showEducation={showEducation} setShowEducation={setShowEducation} />}
      {showDelete && <DeleteEducation setShowDelete={setShowDelete} getUserMeHandler={getUserMeHandler} item={selectedItem} />}
      {showEdit && <EditEducation setShowEdit={setShowEdit} getUserMeHandler={getUserMeHandler} item={selectedItem} />}


      <h1 className='text-xl font-[700]'>Your Education</h1>
      <p>All Education is valuable, ensure to list all schools attended below.</p>


      {education && education.map((item, index) => {
        const { id, degree, school_name, start_of_education, end_of_education, grade } = item
        return (
          <div key={index} className='relative border mt-[1rem] px-[0.5rem] md:px-[2rem] py-[1rem] rounded-lg border-[#808080]'>
            <div className='absolute right-5'>
              <div className='flex flex-row gap-6 '>
                <img className='cursor-pointer' onClick={() => editSelectedItem(item)} src={EditIcon2} alt="" />
                <img className='cursor-pointer ml-5 md:ml-0' onClick={() => deleteSelectedItem(item)}
                  src={DeleteIcon} alt="" />
              </div>
            </div>
            <h1 className='text-xl font-[700]'>{degree}</h1>
            <p className='text-[1rem] font-[500]'>{school_name}</p>
            <p className='text-[1rem] font-[500]'>{start_of_education} - {end_of_education}</p>
            <p className='text-[1rem] font-[500]'>{grade}</p>
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
        <div className='bg-[#f0f0f0] px-2 mt-[2rem] flex items-end justify-center text-center  rounded-md pb-[1rem] pt-[5rem]'>
          <p>Please click on “Add Education” to record your schools and degrees.</p>
        </div>
      )}
    </section>
  )
}