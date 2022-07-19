import React, {useState} from 'react';
import { FormInputBox } from './FormInputBox';


export const LoginFormUI = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState('');
  return (
    <div>
      Login here
    <FormInputBox label="First Name" />

    </div>
  )
}


