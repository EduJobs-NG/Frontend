import { Home } from './pages/Home';
import {Navbar} from './components/Navbar';
import {RegisterFormUI} from './pages/RegisterFormUI';
import {LoginFormUI} from './pages/LoginFormUI';
import {VerifyAccount} from './pages/VerifyAccount';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { Dashboard } from './pages/Dashboard';
import { PageNotFound } from './pages/PageNotFound';
import { AuthProvider } from './context/AuthContext';
import { VerifyAccountUI } from './pages/VerifyAccountUI';

// loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>

    <div className="w-full max-w-[1440px] mx-auto">
      <Navbar />
      <AuthProvider>
      <Routes>
      <Route path="/" exact  element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Route>

      <Route path="/login" element={<LoginFormUI />}/>
      <Route path="/register" element={<RegisterFormUI />}/>
      <Route path="/activate/:uid/:token" element={<VerifyAccount />}/>
      <Route path="/verify" element={<VerifyAccountUI />}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      </AuthProvider>


     
      
    </div>
    </Router>

  );
}

export default App;
