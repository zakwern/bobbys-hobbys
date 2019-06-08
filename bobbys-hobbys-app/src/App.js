import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CarList from './Components/Inventory/CarList';
import CarDetail from './Components/Inventory/CarDetail';
import Login from './Components/Auth/Login'
import AddCar from './Components/Auth/AddCar'
import RemoveCar from './Components/Auth/RemoveCar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'component={CarList} />
          {/* <Route path='/car/:id' component={CarDetail} /> */}
          <Route path='/car/1' component={CarDetail} />
          <Route path='/signin' component={Login} />
          <Route path='/addcar' component={AddCar} />
          <Route path='/removecar' component={RemoveCar} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
