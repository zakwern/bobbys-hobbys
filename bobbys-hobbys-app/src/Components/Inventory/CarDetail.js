import React from 'react';
import Carousel from './Carousel';

const CarDetails = props => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 l6'>
          <div className='card'>
            <div className='card-image'>
              <Carousel />
            </div>
          </div>
        </div>
        <div className='col s12 l6'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>2005 Volkswagen Jetta</span>
              <div className='divider' />
              <table className='striped'>
                <tbody>
                  <tr>
                    <td>Price</td>
                    {/* <td>${car.price}</td> */}
                  </tr>
                  <tr>
                    <td>Mileage</td>
                    <td>160,000 Miles</td>
                  </tr>
                  <tr>
                    <td>Exterior</td>
                    <td>Grey</td>
                  </tr>
                  <tr>
                    <td>Interior</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td>Trim</td>
                    <td>Limited</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>3.0L V6</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>5-Speed Automatic</td>
                  </tr>
                  <tr>
                    <td>MPG</td>
                    <td>20 city / 26 hwy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>Dealer Notes</span>
              <div className='divider' />
              <br />
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
