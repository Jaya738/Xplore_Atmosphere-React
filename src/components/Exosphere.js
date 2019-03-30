import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import xosphere from './reusable_components/images/exosphere.jpg';
import rocket from './reusable_components/images/rocket.jpg';
import "./exo.css"
class Exosphere extends Component {
    render() {
        return (
            
               <Row className="exosphere" style={{backgroundImage:'url(' + xosphere + ')'}}>
                <Col md={5}>
                <img src={rocket} className="rocket"/>
                </Col>
       </Row>  
   
        );
    }
}
export default Exosphere;
