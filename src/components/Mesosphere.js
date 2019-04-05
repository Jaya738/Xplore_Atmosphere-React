import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import mesosphere from './reusable_components/images/mesosphere.jpg';
import "./meso.css"
class Mesosphere extends Component {
    render() {
        return (
         <Row  className="mesosphere" style={{backgroundImage:'url(' + mesosphere + ')'}}>
                 
        <Col md={5} >
                     <Row align="center" style={{ height: '100px' }}>
                       <Col md={12} style={{backgroundColor: "red"}}><p>Mesosphere data</p></Col>
                       
                     </Row>
                </Col>

               
                <Col md={5}>
                     <Row align="center" style={{ height: '100px' }}>
                      <Col md={12} style={{backgroundColor: "red"}}><p>Mesosphere data</p></Col>
                      
                    </Row>
                </Col>
             
              </Row> 
        );
    }
}
export default Mesosphere;