import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Rocket from './reusable_components/Rocket.js';
<<<<<<< HEAD
import thrsphere from './reusable_components/images/thermosphere.jpeg';
import "./thermo.css";
=======
<<<<<<< HEAD

class Thermosphere extends Component {
    render() {
        return (
        <div> <Row>
             <Col md={5}><Container><p>c1</p></Container></Col>
             <Col md={2}><Container><Row><Col md={15}><Rocket /></Col></Row></Container></Col>
             <Col md={5}><Container><p>c2</p></Container></Col>
            </Row>
         </div>
=======
import thrsphere from './reusable_components/images/mesosphere.jpg';
import "./exo.css"
>>>>>>> 749cbe9a0c1293940bfaa7f32ee38971a46f726e
class Thermosphere extends Component {
    render() {
        return (
         <Row  className="th" style={{backgroundImage:'url(' + thrsphere + ')'}}>
                 
        <Col md={5} >
                     <Row align="center" style={{ height: '100px' }}>
                       <Col md={12} style={{backgroundColor: "red"}}><p>Thermosphere data</p></Col>
                       
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
                     <Row align="center" style={{ height: '100px' }}>
                      <Col md={12} style={{backgroundColor: "red"}}><p>Thermosphere data</p></Col>
                      
                    </Row>
                </Col>
             
              </Row> 
>>>>>>> 4faadd710baf9ff93f85b3f0893d0ffc90da2558
        );
    }
}
export default Thermosphere;