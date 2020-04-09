import React from "react";
import "./style.css";

function Testimonials() {
  return (
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div id="carousel" className="carousel-inner">
    <div className="carousel-item active">
      <div className="d-block w-100" src="..." alt="First slide">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quis vel repudiandae. Animi delectus laborum cupiditate iste nihil doloribus doloremque aut nobis et ipsum, suscipit molestias? Eius ea adipisci quibusdam!</div>
    </div>
    <div className="carousel-item">
      <div className="d-block w-100" src="..." alt="Second slide">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quis vel repudiandae. Animi delectus laborum cupiditate iste nihil doloribus doloremque aut nobis et ipsum, suscipit molestias? Eius ea adipisci quibusdam!</div>
    </div>
    <div className="carousel-item">
      <div className="d-block w-100" src="..." alt="Third slide">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quis vel repudiandae. Animi delectus laborum cupiditate iste nihil doloribus doloremque aut nobis et ipsum, suscipit molestias? Eius ea adipisci quibusdam!</div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}

export default Testimonials;
