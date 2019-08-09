import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

// class Carousel extends Component {
//   componentDidMount() {
//     const options = {
//       fullWidth: true,
//       indicators: true,
//       noWrap: true
//     };
//     M.Carousel.init(this.Carousel, options);
//   }

//   render() {
//     return (
//       <div
//         ref={Carousel => {
//           this.Carousel = Carousel;
//         }}
//         className='carousel carousel-slider'
//       >
//         <a className='carousel-item' href='#one!'>
//           <img
//             src={
//               'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
//             }
//             alt=''
//             className='responsive-img'
//           />
//         </a>
//         <a className='carousel-item' href='#two!'>
//           <img
//             src={
//               'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
//             }
//             alt=''
//             className='responsive-img'
//           />
//         </a>
//         <a className='carousel-item' href='#three!'>
//           <img
//             src={
//               'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
//             }
//             alt=''
//             className='responsive-img'
//           />
//         </a>
//         <a className='carousel-item' href='#four!'>
//           <img
//             src={
//               'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
//             }
//             alt=''
//             className='responsive-img'
//           />
//         </a>
//         <a className='carousel-item' href='#five!'>
//           <img
//             src={
//               'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
//             }
//             alt=''
//             className='responsive-img'
//           />
//         </a>
//       </div>
//     );
//   }
// }

const Carousel = props => {

    const options = {
      fullWidth: true,
      indicators: true,
      noWrap: true
    };
    M.Carousel.init(Carousel, options);

    return (
      <div
        ref={Carousel => {
          Carousel = Carousel;
        }}
        className='carousel carousel-slider'
      >
        <a className='carousel-item' href='#one!'>
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
            }
            alt=''
            className='responsive-img'
          />
        </a>
        <a className='carousel-item' href='#two!'>
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
            }
            alt=''
            className='responsive-img'
          />
        </a>
        <a className='carousel-item' href='#three!'>
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
            }
            alt=''
            className='responsive-img'
          />
        </a>
        <a className='carousel-item' href='#four!'>
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
            }
            alt=''
            className='responsive-img'
          />
        </a>
        <a className='carousel-item' href='#five!'>
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/bobbys-hobbys.appspot.com/o/car1.jpg?alt=media&token=1a73af96-4e99-4362-9034-2481ddf31290'
            }
            alt=''
            className='responsive-img'
          />
        </a>
      </div>
    );
  }

export default Carousel;
