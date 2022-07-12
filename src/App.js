import { Home } from './components/Home';
import {Navbar} from './components/Navbar';
import {RegisterFormUI} from './components/Forms/RegisterFormUI';
import {LoginFormUI} from './components/Forms/LoginFormUI';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="w-full max-w-[1440px] mx-auto">
      <Navbar />
      <Routes>
      <Route path="/" exact  element={<Home />} />
      <Route path="/login" element={<LoginFormUI />}/>
      <Route path="/register" element={<RegisterFormUI />}/>
      

      </Routes>

     
      
    </div>
    </Router>

  );
}

export default App;
