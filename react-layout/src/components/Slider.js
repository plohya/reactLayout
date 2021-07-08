import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export default class PreviousNextMethods extends Component {
  
    constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1} className='img-slidero'>
            <div className="slider">
                <div className="arrow_left" onClick={this.previous}></div>
                <div className="counter">1/3</div>
                <div className="arrow_right" onClick={this.next}></div>
            </div>
          </div>
          <div key={2}>
            <h3>2/3</h3>
          </div>
          <div key={3}>
            <h3>3/3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

// const [burger, setBurger] = useState('hidden');
// if (document.getElementById('checkbox')) {
//     serBurger(burget.style:'display: flex');
// }