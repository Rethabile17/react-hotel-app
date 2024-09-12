import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login/>
      <Register/>
      {/* <Forgot/>
      <Home/> */}
    </div>
  );
}

export default App;
