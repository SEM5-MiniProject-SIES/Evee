import React from 'react'
import map from "../assets/map.jpeg"
import '../Css/Freeride.css'

export default function FreeRide() 
{
  return (
    <>
    <div>FreeRide</div>
    <div className='boxfornum'>
      <form>

        <label>Name</label>
        <br></br>
        <input type="text" />
        <br></br>
        <br></br>

        <label>Phonenumber</label>
        <br></br>
        <input type="number" />
        <br></br>
        <br></br>

        <button onClick={() => alert("You Are Now Registered")}>MAP</button>

      </form>

    </div>

    <div className="placeinfo">

      <div className="mapimg">
        <a href="https://www.google.com/maps/place/SIES+parking/@19.0424385,73.0219043,17.25z/data=!4m5!3m4!1s0x3be7c32c3126c233:0x8b9750bd172bf90!8m2!3d19.0426804!4d73.0226144"> <img id = "map" src= {map} alt="Map" /></a>
      </div>

      <div className="showrooms">
        <h2>Mumbai showroom</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue tellus hendrerit convallis pharetra. Quisque eu lectus risus. 
          Mauris convallis, metus vitae consectetur finibus, ex sapien interdum quam, non sodales metus sem in diam. 
          Morbi vulputate commodo est eu lobortis. Vivamus ultrices ullamcorper nulla, id blandit sapien semper id. 
          Quisque aliquet, massa finibus pharetra condimentum, nisi quam ullamcorper ante, volutpat ultrices justo diam non quam. 
          Vestibulum pharetra nec ipsum eget imperdiet. Fusce elementum mauris non ex mattis consequat.</p>
      </div>

     </div>
    </>
    
  )
}

