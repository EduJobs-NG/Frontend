import { Home } from './components/Home';
import {Navbar} from './components/Navbar';
import {RegisterForm} from './components/Forms/RegisterForm';
import {LoginForm} from './components/Forms/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="w-full max-w-[1440px] mx-auto">
      <Navbar />
      <Routes>
      <Route path="/" exact  element={<Home />} />
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/register" element={<RegisterForm />}/>
      

      </Routes>

     
      
    </div>
    </Router>

  );
}

export default App;
