import React from 'react';

const ContactForm = () => {
  const textStyle = {
    textAlign: 'center'
  };

  const buttonStyle = {
    float: 'right',
    margin: '2%'
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
          <br />
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <div className='input-field col s6'>
                  <input id='first_name' type='text' className='validate' />
                  <label htmlFor='first_name'>First Name</label>
                </div>
                <div className='input-field col s6'>
                  <input id='last_name' type='text' className='validate' />
                  <label htmlFor='last_name'>Last Name</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input id='email' type='email' className='validate' />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea id='textarea1' className='materialize-textarea' />
                  <label htmlFor='textarea1'>Message</label>
                </div>
              </div>
              <div className='row'>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                  style={buttonStyle}
                >
                  Send
                  <i className='material-icons right'>send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
