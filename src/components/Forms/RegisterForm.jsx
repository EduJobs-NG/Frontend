import React, {useState} from 'react';
import { FormInputBox } from './FormInputBox';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
        .post("http://edujobsng.herokuapp.com/api/v1/auth/users/", values)
        .catch(err =>{
            if(err && err.response){
                console.log(err.response.data.email)
                setError("There was an error")
                setSuccess('')
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
        <div className='border bg-white p-2 py-[2rem] px-[42px]  rounded max-w-[700px]'>
            <h2 className="title text-blue">Sign Up</h2>
           
            {error && (

<div className="p-3 text-center">
  <p className="text-red-600">{error}</p>
</div>
)}

{success && (

<div className="p-3 text-center">
  <p className="text-green-600">{success}</p>
</div>
)}
   
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-row w-full gap-x-[1rem]'>
                    <div>
                        <FormInputBox type="text" className="border p-2.5 w-full block border-solid border-[#808080] rounded outline-none"
                            placeholder="First Name" id="first_name" name="first_name" onChange={formik.handleChange} value={formik.values.first_name} onBlur={formik.handleBlur} />
                        {formik.touched.first_name && formik.errors.first_name ? <small className="text-red-600">{formik.errors.first_name}</small> : null}
                    </div>

                    <div>
                        <FormInputBox type="text" className="border p-2.5  w-full block  border-solid border-[#808080] rounded outline-none"
                            placeholder="Last  Name" id="last_name" name="last_name" onChange={formik.handleChange} value={formik.values.last_name} onBlur={formik.handleBlur} />
                        {formik.touched.last_name && formik.errors.last_name ? <small className="text-red-600">{formik.errors.last_name}</small> : null}

                    </div>
                </div>
                <FormInputBox type="email" className="border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded outline-none"
                    placeholder="Email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <small className="text-red-600">{formik.errors.email}</small> : null}

                <FormInputBox type="password" className="border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded outline-none"
                    placeholder="Password" id="password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} autoComplete="new-password" value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? <small className="text-red-600">{formik.errors.password}</small> : null}

                <FormInputBox type="password" className="border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded outline-none"
                    placeholder="Confirm Password" id="re_password" onBlur={formik.handleBlur} name="re_password" onChange={formik.handleChange} autoComplete="new-password" value={formik.values.re_password} />
                {formik.touched.re_password && formik.errors.re_password ? <small className="text-red-600">{formik.errors.re_password}</small> : null}
                <br />
                <button className='bg-blue p-2' type="submit">Submit</button>
            </form>
        </div>
    )
}
