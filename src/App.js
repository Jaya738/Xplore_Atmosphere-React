import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Button} from 'semantic-ui-react';
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
            
             <Router>
               <div>
                 <Row>
                <Col style={{backgroundColor:'yellow'}} xs={10.36}>  
                  <Route path="/troposphere" component={Troposphere} />
                </Col> 
           
          <Col style={{backgroundColor:'green'}}>
            <Col sm={12} md={12}>       
              <Link to="/troposphere">  
              <div>
              <Flippy    
                style={{ width: '200px', height: '186px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
             </div>
             </Link>
            
            
           </Col>


           <Col sm={12} md={12}>
           
          <Link to="/troposphere">
              <div>
              <Flippy    
                style={{ width: '200px', height: '186px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
            </div>
             </Link>
            
            
           </Col>


           <Col sm={12} md={12}>
           
            <Link to="/troposphere">
             <div>
              <Flippy    
                style={{ width: '200px', height: '186px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
             </div>
           </Link> 
            
           </Col>


           <Col sm={12} md={12}>
           
            <Link to="/troposphere">
              <div>
              <Flippy    
                style={{ width: '200px', height: '186px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
            </div>
            </Link> 
            
           
           </Col>


           <Col sm={12} md={12}>
           
            <Link to="/troposphere">
              <div>
              <Flippy    
                style={{ width: '200px', height: '186px' }}          
                flipOnHover={false} 
                flipOnClick={true} 
                flipDirection="horizontal"                  
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                </FrontSide>
         
                <BackSide style={{ backgroundColor: "orange"}}>  EVAPORATION </BackSide>
             
              </Flippy> 
             </div>
            </Link>
           
           </Col>
           </Col>
            
           
                  </Row>

    </div>
     </Router>           
    
    );
  }
}
export default App;

