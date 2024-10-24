import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Home from './components/Home';
import Nav from "./components/nav";
import Siteroom from "./components/siteroom";
import Rooms from "./components/rooms";
import About from "./components/About";
import Sites from './components/gallery';
import RoomDetails from './components/RoomDetail';
import CheckoutDetails from './components/checkoutDetails';
import Admin from "./components/admin"
import UseProfile from "./components/userprofile";
import ServicerDetails from "./components/servicerDetails";
import Rate from "./components/rate";
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
      <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Forgot" element={<Forgot/>}/>
        <Route path="/Nav" element={<Nav/>}/>
        <Route path="/siteroom" element={<Siteroom/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Sites" element={<Sites/>} />
        <Route path="/roomDetails" element={<RoomDetails />} />
        <Route path="/checkoutDetails" element={<CheckoutDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userprofile" element={<UseProfile/>} />
        <Route path="/servicerDetails" element={<ServicerDetails/>} />
        <Route path="/rate" element={<Rate/>} />
        
      </Routes>
      </BrowserRouter>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
