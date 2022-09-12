import React, {useState} from 'react';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {FaUserPlus, FaUserCircle, FaEnvelope, FaUser} from 'react-icons/fa';
import {ThreeDots} from 'react-loader-spinner';
import { Formik, Form } from 'formik';
import {  Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import linkedin from '../../assets/linkedin.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomCheckbox from '../../components/Forms/CustomCheckbox';
const validationSchema = Yup.object({
    organization_name:Yup.string().required('Required'),
    email: Yup.string().email("Invalid email address").required('Required'),
    password: Yup.string().min(8).required('Required').matches(
        /^(?=.*[a-z])(?=.*[0-9])/,
        "Must Contain 8 Characters of letters & numbers"
      ),
    re_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    acceptedTos: Yup.boolean().oneOf([true], "Please accept the terms and conditions")

        
})

export const CorporateRegistration = () => {
  
    const [isLoading, setIsLoading] = useState(false);
 
  
    const navigate = useNavigate();
    
    const onSubmit = async (values) =>{
        setIsLoading(true)
        const response = await axios
        .post(`${process.env.REACT_APP_BASE_URL}employer/account/cooperate-employer/`, values)
        .catch(err =>{
            if(err && err.response){
              if (err.message === 'Request failed with status code 400'){
                setIsLoading(false)
                toast.error("User with this email already exists")
               
              }else{
                setIsLoading(false)
                toast.error("An error occured. Try again")
                console.log(err)
              
              }
            }
        });

        if(response && response.data){
                toast.success("Account created successfully.")
                setTimeout(() =>{
                    navigate('/verify');
                }, 1000)

            }
        

    }

    const formik = useFormik({
        initialValues: {
            organization_name:'',
            email: '',
            password: '',
            re_password: '',
            acceptedTos:false
        },
        validateOnBlur:true,
        onSubmit,
        validationSchema:validationSchema,
        
    })

    return (
        <div className=' bg-white  '>
            <ToastContainer />
           
<Formik>
    
    {({}) =>(
    
     <Form onSubmit={formik.handleSubmit}>
    

     <FormInputBox type="text" className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none"
      icon={<FaUserCircle />}   placeholder="Organization Name"  id="organization_name" name="organization_name" onChange={formik.handleChange} value={formik.values.organization_name} onBlur={formik.handleBlur}  />
         
     {formik.touched.organization_name && formik.errors.organization_name ? (<small className="text-red-600">{formik.errors.organization_name}</small>) : null}
 
     <FormInputBox type="email" className="border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
      icon={<FaEnvelope />}   placeholder="Email"  id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}  />
         
     {formik.touched.email && formik.errors.email ? (<small className="text-red-600">{formik.errors.email}</small>) : null}
 

    
     <FormInputBox type="password" className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
         placeholder="Password" id="password"  name="password"  onChange={formik.handleChange} autoComplete="new-password" value={formik.values.password}  onBlur={formik.handleBlur} />
     {formik.touched.password && formik.errors.password ? (<small className="text-red-600">{formik.errors.password}</small>) : null}


     
     <FormInputBox type="password" className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
         placeholder="Confirm Password"  id="re_password" onBlur={formik.handleBlur} name="re_password" onChange={formik.handleChange} autoComplete="new-password" value={formik.values.re_password} />
        
     {formik.touched.re_password && formik.errors.re_password ? (<small className="text-red-600">{formik.errors.re_password}</small>) : null}
     <div className='my-3'>
                        <CustomCheckbox type="checkbox" id="acceptedTos"  name="acceptedTos" value={formik.values.acceptedTos} onChange={formik.handleChange} />
                       <label for="acceptedTos"> By signing up on this platform,
                         you agree to EduJobs NG’s</label> <Link className='text-blue underline' to="terms-and-condition"> Terms & Conditions.</Link>
                         <div>
                         {formik.touched.acceptedTos && formik.errors.acceptedTos ? (<small className="text-red-600">{formik.errors.acceptedTos}</small>) : null}

                         </div>
                      
                        </div>
     
      {!isLoading && <button disabled={!formik.isValid } className={!formik.isValid  ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2':'bg-blue opacity-100 block w-full text-white rounded-sm p-2' } type="submit">SIGN UP</button>}
     {isLoading && (
        <div className='flex justify-center'>
        <ThreeDots type="ThreeDots"
        width={100} height={20} color="blue"
        />
        </div>
        
     )}
 </Form>

    )}
       
</Formik>
<div className="flex justify-center my-3">
        <p>
          {" "}
          Already have an account?
          <Link className="underline text-blue" to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>


<div className='flex justify-between gap-x-5 items-baseline'>
    <hr className='bg-blue border-[0.1px] w-[35%] ' />
    <span>OR</span>
    <hr className='bg-blue border-[0.1px]  w-[35%]' />
</div>

<div className='mt-4 flex justify-center flex-row gap-x-[1rem]'>
<img className='border rounded-full p-[0.3rem]  border-[#808080]' src={google} alt="" />
<img  className='border p-[0.4rem] rounded-full border-[#808080]' src={linkedin} alt="" />
</div>

        
        </div>
    )
}
