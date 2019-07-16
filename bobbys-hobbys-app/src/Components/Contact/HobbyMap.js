import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import HMap from '../../Images/location.JPG';

class Materialbox extends Component {
  componentDidMount() {
    M.Materialbox.init(this.Materialbox);
  }

  render() {
    return (
      <div
        ref={Materialbox => {
          this.Materialbox = Materialbox;
        }}
        className='materialboxed'
      >
        <img src={HMap} alt='' />
      </div>
    );
  }
}
export default Materialbox;
