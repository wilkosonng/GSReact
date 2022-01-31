import './App.css';
import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Units from './components/UnitsPage';
import UnitDetails from './components/UnitComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="units" element={<Units />} >
                <Route index />
              </Route>
              <Route path="units/:unitName/*" element={<UnitDetails />} />
              <Route path="*" element={<p>You shouldn't be here...</p>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
