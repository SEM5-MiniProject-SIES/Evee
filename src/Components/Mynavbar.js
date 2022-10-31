import React, { useState } from 'react'
import {Link} from 'react-router-dom'


export default function Mynavbar(props) {
  const [active, setactive] = useState("/");
  const clickHandle = (curroute)=>{
    setactive(curroute);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" onClick={()=>clickHandle("/")} to="/">Evee</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-auto" id="navbarNavDropdown">
            <div className='ms-5 me-auto'>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`nav-link ${active==="/"? "active":""}`} onClick={()=>clickHandle("/")} to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${active==="/products"? "active":""}`} onClick={()=>clickHandle("/products")} to="/products">Products</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className={`nav-link ${active==="/chargeup"? "active":""}`} onClick={()=>clickHandle("/chargeup")} to="/chargeup">Charge Up</Link>
                </li> */}
                <li className="nav-item dropdown">
                  <Link className={`nav-link ${active==="/aboutus"? "active":""}`} onClick={()=>clickHandle("/aboutus")} to="/aboutus">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`btn btn-success ${active==="/freeride"? "active":""}`} onClick={()=>clickHandle("/freeride")} to="/freeride">Free Ride</Link>
                </li>
                {!props.isLoggedIn? <li className="nav-item">
                  <Link className={`btn btn-outline-primary mx-3 ${active==="/login"? "active":""}`} onClick={()=>clickHandle("/login")} to="/login">Login</Link>
                </li>: <button className={`btn btn-outline-danger mx-3`} onClick={()=>props.logout()} to="/login">Log Out</button>}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
