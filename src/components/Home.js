import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Home.css';
import Logo from './reusable_components/images/logo.png';
import Sky from 'react-sky';
import i1 from './reusable_components/images/button_logos/aero.png';
import i2 from './reusable_components/images/button_logos/ast.png';
import i3 from './reusable_components/images/button_logos/cloud.png';



class Home extends Component {
    render() {
        return (
     <div >      
     <Row className="th"  >
       <Sky 
            images={{
              0:i1,
              1:i2,
              2:i3
            }}

            how={200}
            time={100}
            size={'100px'}
            background={"grey"}
        />
       <Col md={5}>
        
       </Col>

       <Col md={3.5}>
         <Row style={{height:'300px'}}></Row>
         <Row ><img src={Logo} className="logo" /></Row>
       </Col>
       
     </Row>
   </div>
     
             
        );
    }
}
export default Home;