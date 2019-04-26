import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import StarfieldAnimation from 'react-starfield-animation'
import Star from './reusable_components/images/stars.jpg';
import './Home.css';
import BackgroundSlideshow from 'react-background-slideshow';
class Home extends Component {
    render() {
        return (
             
    
    <Row className="Stars" style={{backgroundImage:'url(' + Star + ')'}}>
      
              <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />

      <Col md={5}>
      
      </Col>

      



    </Row>  
     
             
        );
    }
}
export default Home;