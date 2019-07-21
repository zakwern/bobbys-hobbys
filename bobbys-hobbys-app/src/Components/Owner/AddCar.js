import React from 'react';

const AddCar = () => {
  let textStyle = {
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
            Add a Car
          </span>
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <div className='file-field input-field'>
                  <div className='btn'>
                    <span>File</span>
                    <input type='file' multiple />
                  </div>
                  <div className='file-path-wrapper'>
                    <input
                      className='file-path validate'
                      type='text'
                      placeholder='Upload one or more files'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l4'>
                  <input id='year' type='text' />
                  <label for='year'>Year</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input id='make' type='text' />
                  <label for='make'>Make</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input id='model' type='text' />
                  <label for='model'>Model</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l6'>
                  <input id='price' type='text' />
                  <label for='price'>Price</label>
                </div>
                <div className='input-field col s12 l6'>
                  <input id='mileage' type='text' />
                  <label for='mileage'>Mileage</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l6'>
                  <input id='hwy' type='text' />
                  <label for='hwy'>Highway MPG</label>
                </div>
                <div className='input-field col s12 l6'>
                  <input id='city' type='text' />
                  <label for='city'>City MPG</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l4'>
                  <input id='engineType' type='text' />
                  <label for='engineType'>Cylinder Arrangement</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input id='engineSize' type='text' />
                  <label for='engineSize'>Engine Size</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input id='transmission' type='text' />
                  <label for='transmission'>Transmission</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l4'>
                  <input id='interior' type='text' />
                  <label for='interior'>Interior</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input id='exterior' type='text' />
                  <label for='exterior'>Exterior</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input id='trim' type='text' />
                  <label for='trim'>Trim</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea id='notes' className='materialize-textarea' />
                  <label for='notes'>Dealer Notes</label>
                </div>
              </div>
              <div className='row'>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                  style={buttonStyle}
                >
                  Add Car
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

export default AddCar;
