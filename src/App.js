import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Home from './components/Home';
import Nav from "./components/nav";
import Hero  from './components/hero';
import Siteroom from "./components/siteroom"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      
        <Route path="/register" element={<Register/>}/>
        <Route path="/Forgot" element={<Forgot/>}/>
        <Route path="/Nav" element={<Nav/>}/>
        <Route path="/Hero" element={<Hero/>}/>
        <Route path="/siteroom" element={<Siteroom/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
