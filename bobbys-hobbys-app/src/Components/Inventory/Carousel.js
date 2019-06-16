import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Car1 from '../../Images/car1.jpg';
import Car2 from '../../Images/car2.jpg';

class Carousel extends Component {
  componentDidMount() {
    const options = {
      fullWidth: true,
      indicators: true,
      noWrap: true
    };
    M.Carousel.init(this.Carousel, options);
  }

  render() {
    return (
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className='carousel carousel-slider'
      >
        <a className='carousel-item' href='#one!'>
          <img src={Car1} alt='' className='responsive-img' />
        </a>
        <a className='carousel-item' href='#two!'>
          <img src={Car2} alt='' className='responsive-img' />
        </a>
        <a className='carousel-item' href='#three!'>
          <img src={Car1} alt='' className='responsive-img' />
        </a>
        <a className='carousel-item' href='#four!'>
          <img src={Car2} alt='' className='responsive-img' />
        </a>
        <a className='carousel-item' href='#five!'>
          <img src={Car1} alt='' className='responsive-img' />
        </a>
      </div>
    );
  }
}
export default Carousel;
