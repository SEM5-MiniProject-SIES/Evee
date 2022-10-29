import React from 'react'
import img1 from "../assets/img1.jpg";
import newton from "../assets/newton.jpg"
import map from "../assets/map.jpeg"
import "../Css/AboutUs.css"

export default function AboutUs() {
  return (
    <div className="about">
      <div className = "aboutushead">
        <h1>About US</h1>
      </div>

     <div className="proimage">
        <a href="www.google.com"> <img src = {img1} alt = "Bike" /> </a>
     </div>

     <div className="companydetails">
       <h2>Blah blah info about company and other stuff</h2>
       <h2>Aur 1-2 lines add karde aman yr mai karta hoon</h2>
       <h2>Like description likh sakte idhar</h2>
     </div>

     <div className="founderinfo">
      <div className="founderimg">
        <a href="https://en.wikipedia.org/wiki/Isaac_Newton"> <img id = "newton" src= {newton} alt="Founder" /></a>
      </div>
      <div className="foundertext">
        <h2>Some info about the founder and why he has opened this company</h2>
      </div>
     </div>

     <div className="placeinfo">
      <div className="mapimg">
        <a href="https://www.google.com/maps/place/SIES+parking/@19.0424385,73.0219043,17.25z/data=!4m5!3m4!1s0x3be7c32c3126c233:0x8b9750bd172bf90!8m2!3d19.0426804!4d73.0226144"> <img id = "map" src= {map} alt="Map" /></a>
      </div>
      <div className="showrooms">
        <h2>Mumbai showroom</h2>
        <h3>Click on the map for precise directions to our nearest dealership</h3>
    
        
      </div>
     </div>
    </div>
  );
}
