import React, {useState} from 'react';
import { FormInputBox } from './FormInputBox';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {BsEyeFill, BsEyeSlash, BiUserCircle} from 'react-icons/bs';


const validationSchema = Yup.object({
    first_name: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
    last_name: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
    email: Yup.string().email("Invalid email address").required('Required'),
    password: Yup.string().min(8, "Choose a minimum of 8 characters(numbers, letters)").required('Required'),
    re_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export const RegisterForm = () => {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState('')
  
    
    const onSubmit = async (values) =>{
        const response = await axios
        .post("https://edujobsng.herokuapp.com/api/v1/auth/users/", values)
        .catch(err =>{
            if(err && err.response){
              if (err.message === 'Request failed with status code 400'){
                setError("User with this email already exists")
                setSuccess('')
                setTimeout(() =>{
                    setError('')
                }, 1500)
              }else{
                setError("An error occured. Try again")
                setTimeout(() =>{
                    setError('')
                }, 1500)
                console.log(err)
              }
            }
        });

        if(response && response.data){

                console.log(response)
                setSuccess("Account created successfully")
                setError('')
                formik.resetForm()

            }
        

    }

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            re_password: ''
        },
        validateOnBlur:true,
        onSubmit,
        validationSchema:validationSchema,
        
    })

 
   
    return (
        <div className='border bg-white p-2 py-[2rem] px-[42px]  rounded-[50px] max-w-[700px]'>
            <div className='flex'>
            <h2 className="title text-blue">SIGN UP</h2>
            <i class="fa-solid fa-user-plus"></i>

            </div>
           
            {error && (

<div className="p-3 my-4 text-center">
  <p className="text-red-600">{error}</p>
</div>
)}

{success && (

<div className="p-3 my-3 text-center">
  <p className="text-green-600">{success}</p>
</div>
)}
   
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-row w-full gap-x-[0.4rem]'>
                  
                        <FormInputBox type="text" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                            placeholder="First Name" icon="fa fa-thin fa-circle-user" id="first_name" name="first_name" onChange={formik.handleChange} value={formik.values.first_name} onBlur={formik.handleBlur} />
                           
                        {formik.touched.first_name && formik.errors.first_name ? <small className="text-red-600">{formik.errors.first_name}</small> : null}
                    
                  
                        <FormInputBox type="text" className="border p-2.5 block  w-full  border-solid border-[#808080] rounded-lg outline-none"
                            placeholder="Last  Name"  icon="fa fa-thin fa-circle-user" id="last_name" name="last_name" onChange={formik.handleChange} value={formik.values.last_name} onBlur={formik.handleBlur} />
                        {formik.touched.last_name && formik.errors.last_name ? <small className="text-red-600">{formik.errors.last_name}</small> : null}

                   
                </div>

           
                <FormInputBox type="email" className="border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
                    placeholder="Email"  id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                    <i icon='fa-solid fa-envelope i_absolute'></i>
                {formik.touched.email && formik.errors.email ? <small className="text-red-600">{formik.errors.email}</small> : null}
            

               
                <FormInputBox type="password" className=" border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
                    placeholder="Password" id="password"  name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} autoComplete="new-password" value={formik.values.password} 
                    icon="fa-solid fa-eye" />
                {formik.touched.password && formik.errors.password ? <small className="text-red-600">{formik.errors.password}</small> : null}
   

                
                <FormInputBox type="password" className=" border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
                    placeholder="Confirm Password" icon="fa-solid fa-eye" id="re_password" onBlur={formik.handleBlur} name="re_password" onChange={formik.handleChange} autoComplete="new-password" value={formik.values.re_password} />
                   
                {formik.touched.re_password && formik.errors.re_password ? <small className="text-red-600">{formik.errors.re_password}</small> : null}
                

                
                <button className='bg-blue block w-full text-white rounded-sm p-2' type="submit">SIGN UP</button>
            </form>
        </div>
    )
}
