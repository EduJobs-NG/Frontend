import React, {useState} from 'react';

export const FormInputBox = (props) => {
  const {label, placeholder, icon, className, value, onChange, name,id, type} = props;

  const [show, setShow] = useState(false);
  const handleClick = () =>{
    setShow(!show)
  }
  return (
    <div className='relative'>
      <label>{label}</label>
      
     
      <input type={type}
       placeholder={placeholder}
       className={className} value={value} name={name} id={id} onChange={onChange} />
       {/* {show ? `${icon='fa-solid fa-eye-slash'}`:`${icon='fa-solid fa-eye'}`} */}
       <i onClick={handleClick} className={` ${icon} i_absolute`}></i>
       {/* <StyledIcon className="i_absolute">{icon}</StyledIcon> */}
    </div>
  )
}
