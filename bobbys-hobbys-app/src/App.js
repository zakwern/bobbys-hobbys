import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidenav from './Components/SideNav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Sidenav /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
