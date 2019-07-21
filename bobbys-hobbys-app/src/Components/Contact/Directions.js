import React from 'react';
import HobbyMap from './HobbyMap';

const Directions = () => {
  const textStyle = {
    textAlign: 'center'
  };
  const imageStyle = {
    margin: 'auto'
  };
  return (
    <div className='container'>
      <div className='card horizontal'>
        <div className='row'>
          <div className='col s12 l6'>
            <div className='card-content' style={textStyle}>
              <span className='card-title'>Where to find us</span>
              <br />
              <p>
                <b>Address: </b>
              </p>
              <p>2935 NY-32, Kingston, NY 12401</p>
              <p>
                <b>Phone: </b>
              </p>
              <p>(845) 475-5275</p>
            </div>
          </div>
          <div className='col s12 l6'>
            <br />
            <div className='card-image' style={imageStyle}>
              <HobbyMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
