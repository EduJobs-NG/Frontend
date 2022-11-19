import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const FormInputBox = (props) => {
  const { label, icon, type, ...rest } = props;

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className='relative'>
      <label>{label}</label>

      {props.type !== 'password' && (
        <>
          <input type={type}
            {...rest}
          />
          <span className='i_absolute' >{icon}</span>
        </>
      )}

      {
        props.type === 'password' && (
          <>
            <input {...rest} type={show ? 'text' : 'password'}
            />
            <span className='i_absolute' >{icon}</span>
          </>
        )
      }
      {props.type === 'password' &&
        <span onClick={handleClick} className="i_absolute cursor-pointer">
          {show ? <FaEye /> : <FaEyeSlash />}
        </span>
      }
    </div>
  )
}
