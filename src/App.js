import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Units from './components/UnitsPage';
import UnitDetails from './components/UnitComponent';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <Container>
      <div style={{background: 'rgb(40, 40, 40)', color: 'white'}}>
        <Row>
          <Col>
            <div className="App">
              <Routes>
                <Route path="/" element={<Header />}>
                  <Route path="/" element={<Main />} />
                  <Route path="units" element={<Units />} >
                    <Route index />
                  </Route>
                  <Route path="units/:unitName/*" element={<UnitDetails />} />
                  <Route path="*" element={<p>Under construction</p>} />
                </Route>
              </Routes>
            </div>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
        </div>
      </Container>
      
      </BrowserRouter>
    );
  }
}

export default App;
