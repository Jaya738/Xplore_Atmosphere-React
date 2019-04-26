import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Rocket from './reusable_components/Rocket.js';
<<<<<<< HEAD
=======
import thermosphere from './reusable_components/images/thermosphere.jpg';
import "./thermo.css";

>>>>>>> 6959c6f691c49032a948d5cb7e114991cab0f21c

class Thermosphere extends Component {
    render() {
        return (
<<<<<<< HEAD
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
                     <Row align="center" style={{ height: '100px' }}>
                      <Col md={12} style={{backgroundColor: "red"}}><p>Troposphere data</p></Col>
                      
                    </Row>
                </Col>
             
              </Row> 
              
            
=======
        <div> 
                     <Row  className="thermosphere" style={{backgroundImage:'url(' + thermosphere + ')'}}>

             <Col md={5}><Container><p>c1</p></Container></Col>
             <Col md={2}><Container><Row><Col md={15}><Rocket /></Col></Row></Container></Col>
             <Col md={5}><Container><p>c2</p></Container></Col>
            </Row>
         </div>
>>>>>>> 6959c6f691c49032a948d5cb7e114991cab0f21c
        );
    }
}
export default Thermosphere;