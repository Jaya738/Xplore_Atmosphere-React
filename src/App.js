import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Tutorial from './components/Tutorial';
import Troposphere from './components/Troposphere.js';
import Stratosphere from './components/Stratosphere.js';
import Mesosphere from './components/Mesosphere.js';
import Thermosphere from './components/Thermosphere.js';
import Exosphere from './components/Exosphere.js';
import Home from './components/Home.js';
import StarfieldAnimation from 'react-starfield-animation'
import Button from './components/Button'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Row>
      <Col md={11}>

          <Switch>
                
                  <Route path="/home" component={Home} />
                  <Route path="/exosphere" component={Exosphere} />
                  <Route path="/thermosphere" component={Thermosphere} />
                  <Route path="/mesosphere" component={Mesosphere} />
                  <Route path="/stratosphere" component={Stratosphere} />
                  <Route path="/troposphere" component={Troposphere} />
                  <Redirect to="/home" />
                
     </Switch> 
     </Col>
     
     <Col  md={1}>
        <Button />
     </Col>
     </Row>
      </BrowserRouter>
        
    );
  }
}
export default App;

