import React, { Component } from 'react';
import { Router, Route, Link, Switch,browserHistory } from "react-router";
import { Container, Row, Col } from 'react-grid-system';

import Tro from './images/earth.png';
import rocket from './images/rocket.png';
import Rocket from './Rocket.js';



class Troposphere extends Component {
    render() {
        return (
              <div className="Trop" style={{backgroundImage:'url(' + Tro + ')'}}>
                
                 <Row>
                    <Col xs={12} style={{backgroundColor:'yellow'}}>
                        
                        <Row>
                          <Col xs={5} ></Col>
                          <Col xs={2} style={{backgroundColor:'green'}}> <Rocket /> </Col>

                        </Row>
                     
                    </Col>
                </Row>
                 
                
              </div>
        );
    }
}
export default Troposphere;