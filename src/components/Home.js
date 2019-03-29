import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import StarfieldAnimation from 'react-starfield-animation'
import Star from './reusable_components/images/stars.jpg';
import './Home.css';
import BackgroundSlideshow from 'react-background-slideshow';
import Logo from './reusable_components/images/logo.png';
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
      <Col md={10}></Col>
      <Col md={5}></Col>
      
             <img src={Logo} className="logo"/>

       </Row>  
     
             
        );
    }
}
export default Home;