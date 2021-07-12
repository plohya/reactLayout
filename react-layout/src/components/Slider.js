import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import keyboard from '../img/keyboard.jpg';
import example from '../img/example.png';
import exampletwo from '../img/exampleTwo.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true,
      className: 'img-slidero',
    };
    return (
      <div className='img-slider'>
        <Slider {...settings}>
            <img src={keyboard} alt='keyb' className='img-slidero'/>
            <img src={example} alt='example' className='img-slidero'/>
            <img src={exampletwo} alt='exampletwo' className='img-slidero'/>
        </Slider>
      </div>
    );
  }
}