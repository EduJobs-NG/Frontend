import { Home } from './components/Home';
import {Navbar} from './components/Navbar';
import {RegisterFormUI} from './components/Forms/RegisterFormUI';
import {LoginFormUI} from './components/Forms/LoginFormUI';
import {VerifyAccount} from './components/Forms/VerifyAccount';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { Dashboard } from './components/Dashboard';

// loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>

    <div className="w-full max-w-[1440px] mx-auto">
      <Navbar />
      <Routes>
      <Route path="/" exact  element={<Home />} />
      <Route element={<PrivateRoute />}>
      
        <Route path="/dashboard" exact element={<Dashboard />} />
    
      </Route>
      <Route path="/login" element={<LoginFormUI />}/>
      <Route path="/register" element={<RegisterFormUI />}/>
      <Route path="/activate/:uid/:token" element={<VerifyAccount />}/>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>

     
      
    </div>
    </Router>

  );
}

export default App;
