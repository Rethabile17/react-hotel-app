import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Home from './components/Home';
import Nav from "./components/nav";
import Hero  from './components/hero';
import Siteroom from "./components/siteroom";
import Rooms from "./components/rooms";
import About from "./components/About";
import Service from "./components/Service";
import Sites from './components/Sites';
import RoomDetails from './components/RoomDetail';
import CheckoutDetails from './components/checkoutDetails';
import Admin from "./components/admin"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './App.css';


function App() {
  const initialOptions = {
    "client-id": "ATjq_6gq7yvLxEmhBmsY8U8o_6TAOlHdErnzWViqx1db9GPXEJcrnMYPM7mQ6vteIQdEulwqUOB_JH5J",
    currency: "USD",
    intent: "capture",
  };
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
      <BrowserRouter>
   
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Forgot" element={<Forgot/>}/>
        <Route path="/Nav" element={<Nav/>}/>
        <Route path="/Hero" element={<Hero/>}/>
        <Route path="/siteroom" element={<Siteroom/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>} />
        <Route path="/Sites" element={<Sites/>} />
        <Route path="/roomDetails" element={<RoomDetails />} />
        <Route path="/checkoutDetails" element={<CheckoutDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      </BrowserRouter>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
