import React, {useState} from 'react';


export const FormInputBox = (props) => {
  const {label, placeholder, className, type} = props;
  const [value, setValue] = useState("");
  const changeHandler = (e) =>{
    setValue(e.target.value)
  }
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className={className} value={value} onChange={changeHandler} />

    </div>
  )
}
