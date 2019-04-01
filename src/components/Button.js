import React, { Component } from 'react';
import './button.css';
import {Link} from 'react-router-dom';
import posed from 'react-pose';

import { Container, Row, Col } from 'react-grid-system';

class Button extends Component {
    render() {

        const Sidebar = posed.div({
            exit: {
              x: '-100%'
            }, 
            enter: {
              x: '0%',
              beforeChildren: true,
              staggerChildren: 50
            }
          });
          
          const charPoses = {
            exit: { opacity: 0 },
            enter: { opacity: 1 }
          };

        return (
            <div className="container">
            <Sidebar class="sidebar" initialPose="exit" pose="enter">
              
        <Row>
          <Link to= 'exosphere'> <button className="Button">Exosphere</button> </Link>
        </Row>

        <Row>
        <Link to= 'thermosphere'> <button className="Button">Thermosphere</button> </Link>
        </Row>

         
        <Row>
        <Link to= 'mesosphere'> <button className="Button">Mesosphere</button> </Link> 
        </Row>

        <Row>
        <Link to= 'stratosphere'> <button className="Button">Stratosphere</button> </Link>  
        </Row>

        <Row>
        <Link to= 'troposphere'> <button className="Button">Troposphere</button> </Link>  
        </Row>              
            </Sidebar>
          </div>
        );
    }
}
export default Button;
