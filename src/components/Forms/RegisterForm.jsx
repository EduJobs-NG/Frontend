import React from 'react';
import { FormInputBox } from './FormInputBox';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
            lastName: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
            email: Yup.string().email("Invalid email address").required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),

        onSubmit: (values) => {
            const REST_API_URL = "http://www.edujobsng.herokuapp.com/api/v1/auth/users";
            fetch(REST_API_URL, {
                method: 'post',
                body: JSON.stringify(values)
            }).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    // HANDLE ERROR
                    throw new Error('Something went wrong');
                }
            }).then(data => {
                // HANDLE RESPONSE DATA
                console.log(data)
            }).catch((error) => {
                // HANDLE ERROR
                console.log(error)
            });
        }
    })
    return (
        <div className='border bg-white p-2 py-[2rem] px-[42px]  rounded max-w-[700px]'>
            <h2 className="title text-blue">Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-row w-full gap-x-[1rem]'>
                    <div>
                        <FormInputBox type="text" className="border p-2.5 w-full block border-solid border-[#808080] rounded outline-none"
                            placeholder="First Name" id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur} />
                        {formik.touched.firstName && formik.errors.firstName ? <small className="text-red-600">{formik.errors.firstName}</small> : null}
                    </div>

                    <div>
                        <FormInputBox type="text" className="border p-2.5  w-full block  border-solid border-[#808080] rounded outline-none"
                            placeholder="Last  Name" id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur} />
                        {formik.touched.lastName && formik.errors.lastName ? <small className="text-red-600">{formik.errors.lastName}</small> : null}

                    </div>
                </div>
                <FormInputBox type="email" className="border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded outline-none"
                    placeholder="Email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <small className="text-red-600">{formik.errors.email}</small> : null}

                <FormInputBox type="password" className="border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded outline-none"
                    placeholder="Password" id="password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} autoComplete="new-password" value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? <small className="text-red-600">{formik.errors.password}</small> : null}

                <FormInputBox type="password" className="border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded outline-none"
                    placeholder="Confirm Password" id="confirmPassword" onBlur={formik.handleBlur} name="confirmPassword" onChange={formik.handleChange} autoComplete="new-password" value={formik.values.confirmPassword} />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <small className="text-red-600">{formik.errors.confirmPassword}</small> : null}
                <br />
                <button className='bg-blue p-2' type="submit">Submit</button>
            </form>
        </div>
    )
}
