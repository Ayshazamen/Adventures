import React from "react";
import Slider from 'react-slick'
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/HeroSlider.css'

const HeroSlider = () => {
    
    const settings= {
        fade:true,
        speed:2000,
        infinite:true,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow:1,
        slideToScroll:1,
        pauseOnHover:false,
    }
  return(
    <Slider{...settings} className="hero_slider">
  <div className="slider_item slider_item-01 mt0">
      <Container>
          <div className="slider_content">
              <h1 className="text-light mb-3">Adventure is WorthWhile</h1>
              <h6 className="text-light mb-4">Discover New Adventures with Us,Adventure Awaits</h6>
              <button className="discover_btn mt-4">
                  <Link to='/home'>Discover More</Link>
              </button>
          </div>
      </Container>
  </div>

<div className="slider_item slider_item-02 mt0">
<Container>
    <div className="slider_content">
        <h1 className="text-light mb-3">Adventure is WorthWhile</h1>
        <h6 className="text-light mb-4">Discover New Adventures with Us,Adventure Awaits</h6>
        <button className="discover_btn mt-4">
            <Link to='/home'>Discover More</Link>
        </button>
    </div>
</Container>
</div>

<div className="slider_item slider_item-03 mt0">
<Container>
    <div className="slider_content">
        <h1 className="text-light mb-3">Adventure is WorthWhile</h1>
        <h6 className="text-light mb-4">Discover New Adventures with Us,Adventure Awaits</h6>
        <button className="discover_btn mt-4">
            <Link to='/home'>Discover More</Link>
        </button>
    </div>
</Container>
</div>

<div className="slider_item slider_item-04 mt0">
<Container>
    <div className="slider_content">
        <h1 className="text-light mb-3">Adventure is WorthWhile</h1>
        <h6 className="text-light mb-4">Discover New Adventures with Us,Adventure Awaits</h6>
        <button className="discover_btn mt-4">
            <Link to='/home'>Discover More</Link>
        </button>
    </div>
</Container>
</div>
</Slider>
); 
    
};

export default HeroSlider;