import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar';
import CarList from './Components/Inventory/CarList';
import CarDetail from './Components/Inventory/CarDetail';
import Login from './Components/Auth/Login';
import AddCar from './Components/Auth/AddCar';
import RemoveCar from './Components/Auth/RemoveCar';
import Contact from './Components/Contact/Contact';
import CarContextProvider from './Contexts/CarContext';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <CarContextProvider>
            <Route exact path='/' component={CarList} />
          </CarContextProvider>
          {/* <Route path='/car/1NMZJ7FW8mQHdqwOSSMd' component={CarDetail} /> */}

          {/* <Route path='/signin' component={Login} />
            <Route path='/addcar' component={AddCar} />
            <Route path='/removecar' component={RemoveCar} /> */}
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
