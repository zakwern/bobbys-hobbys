import React from 'react';

const ContactForm = () => {
  let textStyle = {
    textAlign: 'center'
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title' style={textStyle}>
            Contact Bobby's Hobbys
          </span>
          <p style={textStyle}>
            Please fill out this form and we will get back to you as soon as
            possible
          </p>
          <div className='row'>
            <form className='col s12'>
              <div className='input-field col s6'>
                <input id='first_name' type='text' className='validate' />
                <label for='first_name'>First Name</label>
              </div>
              <div className='input-field col s6'>
                <input id='last_name' type='text' className='validate' />
                <label for='last_name'>First Name</label>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input id='email' type='email' className='validate' />
                  <label for='email'>Email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea id='textarea1' className='materialize-textarea' />
                  <label for='textarea1'>Message</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
