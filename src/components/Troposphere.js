import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Rocket from './reusable_components/Rocket.js';

class Troposphere extends Component {
    render() {
        return (
              <Row>
                
                <Col md={5} >
                     <Row align="center" style={{ height: '100px' }}>
                       <Col md={12} style={{backgroundColor: "red"}}><p>Troposphere data</p></Col>
                       
                     </Row>
                </Col>

                <Col md={2}>
                      <Row  style={{height: '400px'}}>  
                        
                      </Row>

                      <Row>
                        <Col> <Rocket /> </Col>
                      </Row>
                </Col>

                <Col md={5}>
                     <Row align="center" style={{ height:'100px'}}>
                     <Col md={12} style={{backgroundColor: "red"}}><p>Troposphere data</p></Col>
                      
                     </Row>
                </Col>
             
              </Row> 
              
            
        );
    }
}
export default Troposphere;