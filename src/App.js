import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import Tutorial from './components/Tutorial';
import Troposphere from './components/Troposphere.js';
import Stratosphere from './components/Stratosphere.js';
import Mesosphere from './components/Mesosphere.js';
import Thermosphere from './components/Thermosphere.js';
import Exosphere from './components/Exosphere.js';
import Home from './components/Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
               <div>
                 <Row>
                <Col>  
                  <Route path="/home" component={Home} />
                  <Route path="/exosphere" component={Exosphere} />
                  <Route path="/thermosphere" component={Thermosphere} />
                  <Route path="/mesosphere" component={Mesosphere} />
                  <Route path="/stratosphere" component={Stratosphere} />
                  <Route path="/troposphere" component={Troposphere} />
                  <Route path="/tutorial" component={Tutorial} />
                  <Redirect to="/tutorial" />
                </Col>   
                <Col>
                <p>
                  Hello
                  </p></Col>         
                  </Row>

               </div>
     </Switch>  
      </div>
        
    );
  }
}
export default App;

