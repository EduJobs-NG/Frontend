import React from 'react';
import { FormInputBox } from './FormInputBox';

export const LoginFormUI = () => {
  return (
    <FormInputBox label="First Name" />
  )
}


// onSubmit: (values) => {
//   // const {} = values;
//   const REST_API_URL = "http://edujobsng.herokuapp.com/api/v1/auth/users/";
//   fetch(REST_API_URL, {
//       method: 'post',
      
//       headers: {
//           'Content-Type': 'application/json',
//           // 'Access-Control-Allow-Origin': 'http://127.0.0.1:3000/'
//         },
//       body: JSON.stringify(values)
//   }).then(response => {
//       if (response.ok) {
//           return response.json();
//       } else {
//           // HANDLE ERROR
//           throw new Error('Something went wrong');
          
//       }
//   }).then(data => {
//       // HANDLE RESPONSE DATA
//       console.log(data)
//   }).catch((error) => {
//       // HANDLE ERROR
//       console.log(error)
//   });
// }