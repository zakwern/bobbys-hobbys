import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar';
import CarList from './Components/Inventory/CarList';
import CarDetail from './Components/Inventory/CarDetail';
import Login from './Components/Owner/Login';
import AddCar from './Components/Owner/AddCar';
import Owner from './Components/Owner/Owner';
import Contact from './Components/Contact/Contact';
import CarContextProvider from './Contexts/CarContext';
import AuthContextProvider from './Contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <AuthContextProvider>
            <Route path='/login' component={Login} />
            <Route path='/contact' component={Contact} />
            <CarContextProvider>
              <Route exact path='/' component={CarList} />
              <Route path={'/car/:id'} component={CarDetail} />
              <Route path='/addcar' component={AddCar} />
              <Route path='/owner' component={Owner} />
            </CarContextProvider>
          </AuthContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
