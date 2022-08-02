import { Home } from './pages/Home';
import {Navbar} from './components/Navbar';
import {RegisterFormUI} from './pages/RegisterFormUI';
import {LoginFormUI} from './pages/LoginFormUI';
import {VerifyAccount} from './pages/VerifyAccount';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { Dashboard } from './pages/JobSeekers/Dashboard';
import { PageNotFound } from './pages/PageNotFound';
import { AuthProvider } from './context/AuthContext';
import { VerifyAccountUI } from './pages/VerifyAccountUI';
import { UserProfile } from './pages/JobSeekers/UserProfile';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { ResetEmail } from './pages/ResetEmail';

// loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>

    <div className="w-full max-w-[1440px] mx-auto">
      <AuthProvider>
      <Routes>
      <Route path="/" exact  element={<Home />} />
      <Route element={<PrivateRoute />}>
      <Route path="/profile" exact element={<UserProfile />} />
      <Route path="/dashboard" exact  element={<Dashboard />} />
      </Route>

      <Route path="/login" element={<LoginFormUI />}/>
      <Route path="/register" element={<RegisterFormUI />}/>
      <Route path="/activate/:uid/:token" element={<VerifyAccount />}/>
      <Route path="/verify" element={<VerifyAccountUI />}/>
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/email/reset/confirm/:uid/:token" element={<ResetPassword />}/>
      <Route path="/reset-email" element={<ResetEmail />}/>
      <Route path="/password/reset/confirm/:uid/:token" element={<ResetEmail />}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      </AuthProvider>


     
      
    </div>
    </Router>

  );
}

export default App;
