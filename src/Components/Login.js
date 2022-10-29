import '../Css/Login.css'
import React, { useState } from "react"

export default function Login(props) {
  let [authMode, setAuthMode] = useState("signin");
  const [emailIn, setEmailIn] = useState("");
  const [emailUp, setEmailUp] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const [passwordUp, setPasswordUp] = useState("");
  const [nameUp, setNameUp] = useState("");

  const signin = (event)=>{
    event.preventDefault()
    console.log("email"+emailIn);
    console.log("password"+passwordIn);
  }
  const signup = (event)=>{
    event.preventDefault()
    console.log("name"+nameUp);
    console.log("email"+emailUp);
    console.log("password"+passwordUp);
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={(event)=>setEmailIn(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(event)=>setPasswordIn(event.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type='submit' className="btn btn-primary" onClick={signin}>
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a>password?</a>
              </p>
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Eveee"
                onChange={(event)=>setNameUp(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={(event)=>setEmailUp(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(event)=>setPasswordUp(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={signup}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
}