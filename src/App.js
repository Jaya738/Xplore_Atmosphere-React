import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Rocket from './components/Rocket';
import Cloud from './components/Cloud';
import Aeroplane from './components/Aeroplane';
import Satellite from './components/Satellite';
import Balloon from './components/Balloon';

class App extends Component {
  render() {
    return (
      <div>
        <button>click</button>

        
  <Container>
  <Row> 
   <Col sm={2} xs={12} md={3}> 
        <Rocket />
    </Col>
   
   <Col sm={6} xs={12} md={3}>
      <Cloud />
    </Col>
   
   
    <Col sm={12} xs={12} md={3} >
        <Aeroplane />
    </Col>
    <Col sm={12} xs={4} md={4}>
       <Satellite/>
    </Col>
    <Col sm={4} xs={12} md={4} >
        <Balloon />
    </Col>
    
    
  </Row>
  </Container>
      </div>
    );
  }
}
export default App;
