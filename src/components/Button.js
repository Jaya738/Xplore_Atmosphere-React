import React, { Component } from 'react';
import './button.css';
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
          <button className="B1"></button>
        </Row>

        <Row>
          <button className="B1"></button>
        </Row>

        <Row>
          <button className="B1"></button>
        </Row>

        <Row>
          <button className="B1"></button>
        </Row>

        <Row>
          <button className="B1"></button>
        </Row>              
            </Sidebar>
          </div>
        );
    }
}
export default Button;
