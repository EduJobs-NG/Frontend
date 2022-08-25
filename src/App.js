import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import {JobseekersHome} from './JobSeekers/pages/JobseekersHome';
import {JobseekerRegisterFormUI} from './JobSeekers/pages/JobseekerRegisterFormUI';
import {JobseekerLoginFormUI} from './JobSeekers/pages/JobseekerLoginFormUI';
import { ActivateAccount } from './pages/Authentication/ActivateAccount';
import { PageNotFound } from './pages/PageNotFound';
import { ForgotPassword } from './pages/Authentication/ForgotPassword';
import { ResetPassword } from './pages/Authentication/ResetPassword';
import { ResetEmail } from './pages/Authentication/ResetEmail';
import { NewEmail } from './pages/Authentication/NewEmail';
import { JobseekerProfile } from './JobSeekers/pages/JobseekerProfile';
import { AuthProvider } from './context/AuthContext';
import { JobseekerDashboard } from './JobSeekers/pages/JobseekerDashboard';
import { EmployersHome } from './Employers/pages/EmployersHome';
import { VerifyAccountUI } from './pages/Authentication/VerifyAccountUI';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { JobseekerSavedjobs } from './JobSeekers/pages/JobseekerSavedjobs';
import { Pricing } from './pages/Pricing';


function App() {
  return (
    <Router>

    <div className="w-full mx-auto">
      <AuthProvider>
      <Routes>
      <Route path="/" exact  element={<JobseekersHome />} />
      <Route element={<PrivateRoute />}>
      <Route path="/dashboard/profile" exact element={<JobseekerProfile />} />
      <Route path="/dashboard/find-jobs" exact  element={<JobseekerDashboard />} />
      <Route path="/dashboard/saved-jobs/" exact  element={<JobseekerSavedjobs />} />
      </Route>

      <Route path="/login" element={<JobseekerLoginFormUI />}/>
      <Route path="/register" element={<JobseekerRegisterFormUI />}/>
      <Route path="/activate/:uid/:token" element={<ActivateAccount />}/>
      <Route path="/verify" element={<VerifyAccountUI />}/>
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/password/reset/confirm/:uid/:token" element={<ResetPassword />}/>
      <Route path="/reset-email" element={<ResetEmail />}/>
      <Route path="/email/reset/confirm/:uid/:token" element={<NewEmail />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/employers" element={<EmployersHome />}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      </AuthProvider>
     
      
    </div>
    </Router>

  );
}

export default App;
