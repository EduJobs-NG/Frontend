// import React, {useState} from 'react';


export const FormInputBox = (props) => {
  const {label, placeholder, className, value, onChange, name,id, type} = props;
  // const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <label>{label}</label>
     
      <input type={type}
       placeholder={placeholder}
       className={className} value={value} name={name} id={id} onChange={onChange} />

    </div>
  )
}
