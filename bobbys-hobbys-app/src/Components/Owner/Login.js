import React from 'react';

const Login = () => {
  const textStyle = {
    textAlign: 'center'
  };

  const buttonStyle = {
    float: 'right',
    margin: '2%'
  };

  const handleChange = e => {
    console.log(e);
  };

  const handleSubmit = e => {
    console.log(e);
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title' style={textStyle}>
            Owner Login
          </span>
          <div className='row'>
            <form onSubmit={handleSubmit} className='col s12'>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    id='email'
                    type='email'
                    className='validate'
                    onChange={handleChange}
                  />
                  <label for='email'>Email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    id='password'
                    type='password'
                    className='validate'
                    onChange={handleChange}
                  />
                  <label for='password'>Password</label>
                </div>
              </div>
              <div className='row'>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                  style={buttonStyle}
                >
                  Sign In
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

export default Login;
