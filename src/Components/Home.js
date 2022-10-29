import React from 'react'
import myvid from "../assets/Evee.mp4";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";

export default function Home() {
  const bold = {
    fontWeight:"800",
    fontSize:"30px",
    display:"inline",
    color: "black"
  }
  const grey = {
    color: "grey",
    borderRight: "2px solid #e0e0e0",
  }
  return (
    <div>
      <video autoPlay loop muted style={{width:"100%"}}>
        <source src={myvid} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <div className="container">
        <div className='row mt-4' style={{textAlign:"center"}}>
          <div className='col-md-3 my-3' style={{textAlign:"center", fontWeight:"900", fontSize:"40px"}}>Evee vG</div>
          <div className='col-md-2 col-sm-4' style={grey}>Range<br/><span style={bold}>150</span><span>KM *</span></div>
          <div className='col-md-2 col-sm-4' style={grey}>Top speed<br/><span style={bold}>100</span><span>KM/H</span></div>
          <div className='col-md-2 col-sm-4' style={{color:"grey"}}>0 to 40 km/h<br/><span style={bold}>4.3</span><span>sec</span></div>
          <div className='col-md-3 my-3' style={{textAlign:"right"}}><button className='btn btn-dark p-3'>Buy at 85,500/-</button></div>
        </div>
      </div>
      <div className='container my-4'>
        <div className='row'>
          <img src={car1} className="col-lg-6"/>
          <div className='col-lg-6' style={{padding:"45px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
        </div>
      </div>
      <div className='container my-4'>
        <div className='row'>
          <div className='col-lg-6' style={{padding:"45px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
          <img src={car2} className="col-lg-6"/>
        </div>
      </div>
      <div className='container my-4 py-4' style={{backgroundColor:"#e8e8e8", borderRadius:"20px"}}>
        <div className='h2 text-center'>The Finer Specification of the Product</div>
        <div className='row text-center'>
          <div className='col-md-3 col-6 py-4'>Range<br/><span style={bold}>150</span><span>KM</span></div>
          <div className='col-md-3 col-6 py-4'>Top Speed<br/><span style={bold}>250</span><span>KM/Hr</span></div>
          <div className='col-md-3 col-6 py-4'>0-40<br/><span style={bold}>2.3</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>0-100<br/><span style={bold}>5.2</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>Modes<br/><span style={bold}>Eco, Normal, Sports</span></div>
          <div className='col-md-3 col-6 py-4'>Charging Time<br/><span style={bold}>4.30</span><span>Hrs</span></div>
          <div className='col-md-3 col-6 py-4'>Motor Power<br/><span style={bold}>5.55</span><span>kW</span></div>
          <div className='col-md-3 col-6 py-4'>Weight<br/><span style={bold}>490</span><span>Kg</span></div>
        </div>
      </div>
    </div>
  )
}
