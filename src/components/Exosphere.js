import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import xosphere from './reusable_components/images/exo.jpeg';
import "./exo.css"
class Exosphere extends Component {
    render() {
        return (
            
               <Row className="exosphere" style={{backgroundImage:'url(' + xosphere + ')'}}>

       </Row>  
   
        );
    }
}
export default Exosphere;
