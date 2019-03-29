import React, { Component } from 'react';
import './button.css';
import posed from 'react-pose';
import SplitText from 'react-pose-text';

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
              <h1>
                <SplitText charPoses={charPoses}>Layers</SplitText>
              </h1>
            </Sidebar>
          </div>
        );
    }
}
export default Button;
