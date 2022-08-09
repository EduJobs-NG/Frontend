import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { Home } from './pages/Home';
import {RegisterFormUI} from './pages/RegisterFormUI';
import {LoginFormUI} from './pages/LoginFormUI';
import {ActivateAccount} from './pages/Authentication/ActivateAccount';
import { PageNotFound } from './pages/PageNotFound';
import { VerifyAccountUI } from './pages/Authentication/VerifyAccountUI';
import { ForgotPassword } from './pages/Authentication/ForgotPassword';
import { ResetPassword } from './pages/Authentication/ResetPassword';
import { ResetEmail } from './pages/Authentication/ResetEmail';
import { NewEmail } from './pages/Authentication/NewEmail';
import { UserProfile } from './pages/JobSeekers/UserProfile';
import { AuthProvider } from './context/AuthContext';
import { Dashboard } from './pages/JobSeekers/Dashboard';
import { InitialProfileCreate } from './pages/JobSeekers/InitialProfileCreate';
// loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>

    <div className="w-full mx-auto">
      <AuthProvider>
      <Routes>
      <Route path="/" exact  element={<Home />} />
      <Route element={<PrivateRoute />}>
      <Route path="/dashboard/profile" exact element={<UserProfile />} />
      <Route path="/dashboard/find-jobs" exact  element={<Dashboard />} />
      </Route>

      <Route path="/login" element={<LoginFormUI />}/>
      <Route path="/register" element={<RegisterFormUI />}/>
      <Route path="/activate/:uid/:token" element={<ActivateAccount />}/>
      <Route path="/verify" element={<VerifyAccountUI />}/>
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/password/reset/confirm/:uid/:token" element={<ResetPassword />}/>
      <Route path="/reset-email" element={<ResetEmail />}/>
      <Route path="/email/reset/confirm/:uid/:token" element={<NewEmail />}/>
      <Route path="/initial-profile" exact  element={<InitialProfileCreate />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      </AuthProvider>


     
      
    </div>
    </Router>

  );
}

export default App;
