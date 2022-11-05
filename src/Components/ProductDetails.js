import React from 'react'
import car2 from "../assets/car2.jpg";
import car1 from "../assets/car1.jpg";
import { useLocation } from 'react-router-dom';



export default function ProductDetails(props) {
    //add state property while routing
    const data = useLocation().state    
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
        //Razor pay integration
  const loadScript = (src) => {
    return new Promise( (resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const displayRazorpay = async (amount) => {
    if(props.userid){

      const res = await loadScript ('http://checkout.razorpay.com/v1/checkout.js')
      if (!res){
        alert('Check your connection...Loading Razorpay Failed...')
        return
      }
  
      const options ={
        key:'rzp_test_5gzhcdXn6n5plT',
        currency:'INR',
        amount: parseInt(amount.replace(/,/g, ''))*100,
        name: 'Evee',
        description:'Thanks for shopping',
        image:'idhar logo daal website ka warna yeh hata de ur wish',
        handler: function (response){
          alert(response.razorpay_payment_id)
          alert("Payment Successful")
        },
        prefill :{
          name:"Evee"
        }
      };
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }else{
      alert("Please sign in to continue")
    }
  }
    return (
        <div>
            <div className='container'>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={car2} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={car1} alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={car2} alt="Third slide"/>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>  
          </div>
          <div className="container">
            <div className='row mt-4' style={{textAlign:"center"}}>
              <div className='col-md-3 my-3' style={{textAlign:"center", fontWeight:"900", fontSize:"40px"}}>{data.name}</div>
              <div className='col-md-2 col-sm-4' style={grey}>Range<br/><span style={bold}>{data.range}</span><span>KM *</span></div>
              <div className='col-md-2 col-sm-4' style={grey}>Top speed<br/><span style={bold}>{data.topSpeed}</span><span>KM/H</span></div>
              <div className='col-md-2 col-sm-4' style={{color:"grey"}}>{data.speedrange}<br/><span style={bold}>{data.timerange}</span><span>sec</span></div>
              <div className='col-md-3 my-3' style={{textAlign:"right"}}><button onClick={()=>displayRazorpay(data.price)} className='btn btn-dark p-3'>Buy at Rs {data.price}/-</button></div>
            </div>
          </div>
          <div className='container my-4'>
            <div className='row'>
              <img src={car1} className="col-lg-6"/>
              <div className='col-lg-6' style={{padding:"45px"}}>{data.aboutcar}</div>
            </div>
          </div>
          <div className='container my-4'>
            <div className='row'>
              <div className='col-lg-6' style={{padding:"45px"}}>{data.aboutcar2}</div>
              <img src={car2} className="col-lg-6"/>
            </div>
          </div>
          <div className='container my-4 py-4' style={{backgroundColor:"#e8e8e8", borderRadius:"20px"}}>
            <div className='h2 text-center'>The Finer Specification of the Product</div>
            <div className='row text-center'>
              <div className='col-md-3 col-6 py-4'>Range<br/><span style={bold}>{data.range}</span><span>KM</span></div>
              <div className='col-md-3 col-6 py-4'>Top Speed<br/><span style={bold}>{data.topSpeed}</span><span>KM/Hr</span></div>
              <div className='col-md-3 col-6 py-4'>{data.speedrange}<br/><span style={bold}>{data.timerange}</span><span>sec</span></div>
              <div className='col-md-3 col-6 py-4'>{data.speedrange2}<br/><span style={bold}>{data.timerange2}</span><span>sec</span></div>
              <div className='col-md-3 col-6 py-4'>Modes<br/><span style={bold}>{data.modes}</span></div>
              <div className='col-md-3 col-6 py-4'>Charging Time<br/><span style={bold}>{data.chargetime}</span><span>Hrs</span></div>
              <div className='col-md-3 col-6 py-4'>Motor Power<br/><span style={bold}>{data.power}</span><span>kW</span></div>
              <div className='col-md-3 col-6 py-4'>Weight<br/><span style={bold}>{data.weight}</span><span>Kg</span></div>
            </div>
          </div>
        </div>
      )
}
