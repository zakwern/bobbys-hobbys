import React, { useState, useContext } from 'react';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext';
import AuthContextProvider, {
  AuthContext
} from '../../Contexts/AuthContext.js';
import { Redirect } from 'react-router-dom';

const AddCar = props => {
  const textStyle = {
    textAlign: 'center'
  };

  const buttonStyle = {
    float: 'right',
    margin: '2%'
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [cylinder, setCylinder] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [exterior, setExterior] = useState('');
  const [interior, setInterior] = useState('');
  const [make, setMake] = useState('');
  const [mileage, setMileage] = useState('');
  const [model, setModel] = useState('');
  const [notes, setNotes] = useState('');
  const [price, setPrice] = useState('');
  const [transmission, setTransmission] = useState('');
  const [trim, setTrim] = useState('');
  const [year, setYear] = useState('');

  const { addCar } = useContext(CarContext);
  const { user } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    addCar(
      selectedImage,
      cylinder,
      engineSize,
      exterior,
      interior,
      make,
      mileage,
      model,
      notes,
      price,
      transmission,
      trim,
      year
    );
    props.history.push('/owner');
  };

  if (user === false) return <Redirect to='/login' />;

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title' style={textStyle}>
            Add a Car
          </span>
          <div className='row'>
            <form className='col s12' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col s12 xl6'>
                  <div className='file-field input-field'>
                    <div className='btn'>
                      <span>File</span>
                      <input
                        type='file'
                        onChange={e => setSelectedImage(e.target.files[0])}
                        required
                      />
                    </div>
                    <div className='file-path-wrapper'>
                      <input
                        className='file-path validate'
                        type='text'
                        placeholder='Upload Thumbnail'
                      />
                    </div>
                  </div>
                </div>
                <div className='col s12 xl6'>
                  <div className='file-field input-field'>
                    <div className='btn disabled'>
                      <span>File</span>
                      <input type='file' multiple />
                    </div>
                    <div className='file-path-wrapper'>
                      <input
                        className='file-path validate'
                        type='text'
                        placeholder='Upload Other Photos (Coming Soon!)'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l4'>
                  <input
                    id='year'
                    type='text'
                    onChange={e => setYear(e.target.value)}
                    required
                  />
                  <label htmlFor='year'>Year</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input
                    id='make'
                    type='text'
                    onChange={e => setMake(e.target.value)}
                    required
                  />
                  <label htmlFor='make'>Make</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input
                    id='model'
                    type='text'
                    onChange={e => setModel(e.target.value)}
                    required
                  />
                  <label htmlFor='model'>Model</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l6'>
                  <input
                    id='price'
                    type='text'
                    onChange={e => setPrice(e.target.value)}
                    required
                  />
                  <label htmlFor='price'>Price</label>
                </div>
                <div className='input-field col s12 l6'>
                  <input
                    id='mileage'
                    type='text'
                    onChange={e => setMileage(e.target.value)}
                    required
                  />
                  <label htmlFor='mileage'>Mileage</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l4'>
                  <input
                    id='engineType'
                    type='text'
                    onChange={e => setCylinder(e.target.value)}
                    required
                  />
                  <label htmlFor='engineType'>Cylinder Arrangement</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input
                    id='engineSize'
                    type='text'
                    onChange={e => setEngineSize(e.target.value)}
                    required
                  />
                  <label htmlFor='engineSize'>Engine Size</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input
                    id='transmission'
                    type='text'
                    onChange={e => setTransmission(e.target.value)}
                    required
                  />
                  <label htmlFor='transmission'>Transmission</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 l4'>
                  <input
                    id='interior'
                    type='text'
                    onChange={e => setInterior(e.target.value)}
                    required
                  />
                  <label htmlFor='interior'>Interior</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input
                    id='exterior'
                    type='text'
                    onChange={e => setExterior(e.target.value)}
                    required
                  />
                  <label htmlFor='exterior'>Exterior</label>
                </div>
                <div className='input-field col s12 l4'>
                  <input
                    id='trim'
                    type='text'
                    onChange={e => setTrim(e.target.value)}
                    required
                  />
                  <label htmlFor='trim'>Trim</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea
                    id='notes'
                    className='materialize-textarea'
                    onChange={e => setNotes(e.target.value)}
                    required
                  />
                  <label htmlFor='notes'>Dealer Notes</label>
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
