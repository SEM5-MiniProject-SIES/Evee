import React from 'react'
import s1 from "../assets/scene1.jpg";
import s2 from "../assets/scene2.jpg";
import s3 from "../assets/scene3.jpg";
import "../Css/BuyPro.css"

export default function BuyPro() 
{
  return (
    <>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= {s1} class="d-block w-100" alt="scene1" />
    </div>
    <div class="carousel-item">
      <img src= {s2} class="d-block w-100" alt="scene2" />
    </div>
    <div class="carousel-item">
      <img src= {s3} class="d-block w-100" alt="scene3" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
    
  )
}


