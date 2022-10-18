import React, {useState} from 'react';
import { BasicInfo1 } from './BasicInfo1';
import {BasicInfo2} from './BasicInfo2';

export const JobForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title:'',
        organization_name:'',
        summary:'',
        requirements:'',
        job_type:'',
        deadline:'',
        min_pay_range:'',
        max_pay_range:'',
        location:'',
        value:''
    })
    // const[title, setTitle] = useState('');
    // const[organization_name, setOrganizationName] = useState('');
    // const[summary, setSummary] = useState('');
    // const[requirements, setRequirements] = useState('');
    // const[job_type, setJobType] = useState('');
    // const[deadline, setDeadline] = useState('');
    // const[minPayRange, setMinPayRange] = useState('');
    // const[maxPayRange, setMaxPayRange] = useState('');
    // const[location, setLocation] = useState('');
    // const[value, setValue] = useState('');


    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)
    
    const handlePostJobs = () => {

    switch (step) {
      case 1:
        return <BasicInfo1 
        setStep={setStep} formData={formData} setFormData={setFormData}
         prevStep={prevStep} nextStep={nextStep} step={step} />
      case 2: 
      return <BasicInfo2
      //  value={value} setValue={setValue}
      setStep={setStep} formData={formData} setFormData={setFormData}
       prevStep={prevStep} nextStep={nextStep} step={step} />
    
      default:
        return <BasicInfo1 
        setStep={setStep} formData={formData} setFormData={setFormData}
         prevStep={prevStep} nextStep={nextStep} step={step}/>
    }
  }
  return (
    <section>
      {handlePostJobs()}
    </section>
  )
}
