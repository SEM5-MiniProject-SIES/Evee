import React,{useState} from 'react';
import Mynavbar from './Components/Mynavbar';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';
import ChargeUp from './Components/ChargeUp';
import Login from './Components/Login';
import FreeRide from './Components/FreeRide';
import Footer from './Components/Footer';
require('dotenv').config()



function App() {

  const [isLoggedin, setIsLoggedin] = useState(false)
  const navigator = useNavigate()

  const signUpAuth = (email, password)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email,password }),
    };
    fetch('http://localhost:5000/login', requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data.token){
            console.log("Signed in");
            setIsLoggedin(true);
            navigator('/')
            alert("Successfully signed in")
            return true;
          }else{
            alert(data.error)
            return false;
          }
      });
  }
  const logout = ()=>{
    setIsLoggedin(false)
  }

  return (
    <div className="App">
      {/* <Router> */}

    <Mynavbar isLoggedIn={isLoggedin} logout={logout}/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/chargeup' element={<ChargeUp/>}/>
          <Route path='/login' element={<Login onSignIn={signUpAuth}  navigator={navigator} />}/>
          <Route path='/freeride' element={<FreeRide/>}/>

        </Routes>

      {/* </Router> */}
      <Footer/>
    </div>
  );
}

export default App;
