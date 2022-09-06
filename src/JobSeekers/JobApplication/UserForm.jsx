import React, {useState, useContext} from 'react';
import { SubmitResume } from './SubmitResume';
import { ScreenerQuestions } from './ScreenerQuestions';
import { ContactInfo } from './ContactInfo';
import { ReviewApplication } from './ReviewApplication';
import AuthContext from '../../context/AuthContext';


export const UserForm = ({job}) => {
  const { user } = useContext(AuthContext);
  const {phone_number, user:{email}} = user;

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        resume: '',
        questions:[{qname, qid, answer}, {}],
        cover_letter:'',
        email_address:email,
        phone_number:phone_number,
    })
    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);
    const handleJobApplication = () => {
      switch (step) {
        case 1:
            return <SubmitResume 
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
            job={job}
             />
        case 2:
          return <ScreenerQuestions
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
          />
        case 3:
          return <ContactInfo 
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
          />
        case 4:
          return <ReviewApplication 
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
          />
            
        default:
          return <SubmitResume 
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
          />
          
    }
  }

  
  return (
    <section>
      {handleJobApplication()}
    </section>
  )
}
