import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import {Navbar} from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
