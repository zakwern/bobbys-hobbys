import React, { useState, useContext } from 'react';
import AuthContextProvider, { AuthContext } from '../../Contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const textStyle = {
    textAlign: 'center'
  };

  const buttonStyle = {
    float: 'right',
    margin: '2%'
  };

  const { user, login } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    login(username, password);
    setUsername('');
    setPassword('');
  };

  // const { auth } = props;
  // console.log(auth);

  if (user == true) return <Redirect to='/owner' />;

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
                    onChange={e => setUsername(e.target.value)}
                    required
                  />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    id='password'
                    type='password'
                    className='validate'
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor='password'>Password</label>
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
