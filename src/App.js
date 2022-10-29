import Mynavbar from './Components/Mynavbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';
import ChargeUp from './Components/ChargeUp';
import Login from './Components/Login';
import FreeRide from './Components/FreeRide';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Router>

      <Mynavbar/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/chargeup' element={<ChargeUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/freeride' element={<FreeRide/>}/>

        </Routes>

      </Router>
      <Footer/>
    </div>
  );
}

export default App;
