import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Router, Route, Link, Switch,browserHistory,Redirect } from "react-router";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Rocket from './components/Rocket';
import Cloud from './components/Cloud';
import Aeroplane from './components/Aeroplane';
import Satellite from './components/Satellite';
import Balloon from './components/Balloon';
import Back from './components/images/back.png';
import Troposphere from './components/Troposphere.js';
import Home from './components/Home.js';
import './App.css'; 


const NavBar = () => (
  <div className="navbar">
    <Link to="/">Troposphere</Link>
    <Link to="/stratosphere">Stratosphere</Link>
    <Link to="/mesosphere">Mesosphere</Link>
  
  </div>
);
const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">
      This is the {title} page.
    </p>
  </div>
);
const Feed = (props) => (
  <Template title="Feed"/>
);
const Profile = (props) => (
  <Template title="Profile"/>
);
class App extends Component {
  render() {
    return (
       
                 <Row>
                    <Col xs={10}>
                      <Container>  
                        <Row>
                          <Col xs={5}></Col>
                          <Col xs={2}> <Rocket /> </Col>

                        </Row>
                     </Container>
                    </Col>
           
                 <Col xs={2}>

                  
              <Col sm={12} md={12}>
           {
            
              <Flippy    
                style={{ width: '290px', height: '238px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
             
            
            }
           </Col>


           <Col sm={12} md={12}>
           {
            
              <Flippy    
                style={{ width: '290px', height: '238px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
             
            
            }
           </Col>


           <Col sm={12} md={12}>
           {
            
              <Flippy    
                style={{ width: '290px', height: '238px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
             
            
            }
           </Col>


           <Col sm={12} md={12}>
           {
            
              <Flippy    
                style={{ width: '290px', height: '238px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
             
            
            }
           </Col>
           </Col>
            
           
                  </Row>
                
                
    );
  }
}
export default App;

