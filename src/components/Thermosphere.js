import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Rocket from './reusable_components/Rocket.js';

class Thermosphere extends Component {
    render() {
        return (
        <div> <Row>
             <Col md={5}><Container><p>c1</p></Container></Col>
             <Col md={2}><Container><Row><Col md={15}><Rocket /></Col></Row></Container></Col>
             <Col md={5}><Container><p>c2</p></Container></Col>
            </Row>
         </div>
        );
    }
}
export default Thermosphere;