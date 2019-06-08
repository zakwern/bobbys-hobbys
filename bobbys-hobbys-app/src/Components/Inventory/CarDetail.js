import React from 'react'
import Car1 from '../../Images/car1.jpg'
import Car2 from '../../Images/car2.jpg'
import Car3 from '../../Images/car3.jpg'
import Car4 from '../../Images/car4.jpg'

const CarDetails = (props) => {
    return (
      <div className="container">
        <div className="row">
            <div className="col s12 l6">
                <img src={Car1} alt="" className="responsive-img" />
                {/* <div class="carousel carousel-slider">
                    <a class="carousel-item" href="#one!"><img src={Car1}></a>
                    <a class="carousel-item" href="#two!"><img src={Car2}></a>
                    <a class="carousel-item" href="#three!"><img src={Car3}></a>
                    <a class="carousel-item" href="#four!"><img src={Car4}></a>
                </div> */}
            </div>
            <div className="col s12 l6">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">2005 Volkswagen Jetta</span>
                        <div className="divider"></div>
                        <table className="striped">
                            <tbody>
                            <tr>
                                <td>Price</td>
                                <td>$2,600</td>
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
            </div>
        </div>
      </div>
    )
  }

export default CarDetails