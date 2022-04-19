import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Units from './components/UnitsPage';
import UnitDetails from './components/UnitComponent';
import Tierlist from './components/TierlistComponent';
import News from './components/NewsComponent';
import Article from './components/news/ArticleComponent';
import GuidesMainPage from './components/GuidesComponent';
import OtherGuides from './components/guidecomponents/OtherGuides';
import DisplayGuides from './components/guidecomponents/otherguides/OtherGuidesComponent';
import FAQGuide from './components/guidecomponents/DisplayFAQ';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <Container style={{background: '#25274d', color: '#aaabb8'}}>
      <div >
        <Row>
          <Col>
            <div className="App">
              <Routes>
                <Route path="/" element={<Header />}>
                  <Route path="/" element={<Main />} />
                  <Route path="news" element={<News />} />
                  <Route path="news/:articleId" element={<Article />} />
                  <Route path="units" element={<Units />} >
                    <Route index />
                  </Route>
                  <Route path="units/:unitName/*" element={<UnitDetails />} />
                  <Route path="tierlist" element={<Tierlist />} />
                  <Route path="guides" element={<GuidesMainPage />} />
                  <Route path="guides/other-guides" element={<OtherGuides />} />
                  <Route path="guides/other-guides/:articleId" element={<DisplayGuides />} />
                  <Route exact path="guides/FAQ" element={<FAQGuide />} />
                  <Route path="*" element={<p><center><h1>Under construction</h1></center></p>} />
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
