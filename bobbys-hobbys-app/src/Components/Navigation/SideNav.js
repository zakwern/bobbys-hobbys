import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Sidenav extends Component {
  componentDidMount() {
    M.Sidenav.init(this.Sidenav);
  }

  render() {
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav;
          }}
          id='slide-out'
          className='sidenav'
        >
          <li>
            <NavLink className='sidenav-close' to='/'>
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink className='sidenav-close' to='/contact'>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <a href='#!' data-target='slide-out' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </a>
      </div>
    );
  }
}

export default Sidenav;
