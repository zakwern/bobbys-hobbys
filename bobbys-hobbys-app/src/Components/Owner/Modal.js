import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%'
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <a
          className='waves-effect waves-light btn modal-trigger'
          data-target='modal1'
        >
          Remove Car
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id='modal1'
          className='modal'
        >
          <div className='modal-content'>
            <h4>
              Are you sure you want to remove this car from your inventory?
            </h4>
          </div>
          <div className='modal-footer'>
            <a className='modal-close btn red'>Disagree</a>
            <a className='modal-close btn green'>Agree</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
