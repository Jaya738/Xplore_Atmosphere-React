import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Rocket from './reusable_components/Rocket.js';
import stsphere from './reusable_components/images/strato1.jpg';
import "./stratosphere.css"
class Stratosphere extends Component {
    render() {
        return (
         <Row   className="st" style={{backgroundImage:'url(' + stsphere + ')'}}>
                
                <Col md={5} >
                     <Row align="center" style={{ height: '100px' }}>
                       <Col md={12} style={{backgroundColor: "red"}}><p>Stratosphere data</p></Col>
                       
                     </Row>
                </Col>

                <Col md={2}>
                      <Row  style={{height: '400px'}}>  
                      <Rocket />
                      </Row>

                      <Row>
                        
                      </Row>
                </Col>

                <Col md={5}>
                     <Row align="center" style={{ height: '100px' }}>
                      <Col md={12} style={{backgroundColor: "red"}}><p>Stratosphere data</p></Col>
                      
                    </Row>
                </Col>
             
              </Row> 
        );
    }
}
export default Stratosphere;