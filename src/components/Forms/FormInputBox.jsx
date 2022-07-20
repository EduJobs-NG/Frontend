import React, {useState} from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa'

export const FormInputBox = (props) => {
  const {label, placeholder, icon, className, value, onBlur, onChange, name,id, type} = props;

  const [show, setShow] = useState(false);
  const handleClick = () =>{
    setShow(!show)
  }
  return (
    <div className='relative'>
      <label>{label}</label>
      
     {props.type!=='password' && (
      <>
      <input type={type}
      placeholder={placeholder}
      className={className} value={value} onBlur={onBlur} name={name} id={id} onChange={onChange} />
      <span className='i_absolute' >{icon}</span>
    </>
     )}

       {
        props.type === 'password' && (
          <>
          <input type={show?'text':'password'}
          placeholder={placeholder}
          className={className} value={value} name={name} id={id} onBlur={onBlur} onChange={onChange} />
          <span className='i_absolute' >{icon}</span>
          </>
        )
       }
    {props.type === 'password' && 
    <span onClick={handleClick} className="i_absolute cursor-pointer">
      {show ? <FaEye />:<FaEyeSlash /> }
    </span>
    }
      
    </div>
  )
}
