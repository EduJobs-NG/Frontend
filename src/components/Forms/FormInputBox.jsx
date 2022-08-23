import React, {useState} from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa'

export const FormInputBox = (props) => {
  const {label, placeholder, icon, className, maxLength, disabled, value, onBlur, onChange, name, id, type} = props;

  const [show, setShow] = useState(false);
  const handleClick = () =>{
    setShow(!show)
  }
  return (
    <div className='relative'>
      <label>{label}</label>
      
     {props.type!=='password' && props.type!=='tel' && (
      <>
      <input type={type}
      placeholder={placeholder}
      className={className}  disabled={disabled} 
      value={value} onBlur={onBlur} name={name} id={id} onChange={onChange} />
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

    {props.type === 'tel' && (
      <div className='flex'>
      <p className='flex items-center bg-[#d9d9d9] rounded-sm p-1'>+234</p>
      <input type={type}
      placeholder={placeholder}
      className={className} value={value} maxLength={maxLength} name={name} id={id} onBlur={onBlur} onChange={onChange}
      />
      </div>
      
    )}
      
    </div>
  )
}
