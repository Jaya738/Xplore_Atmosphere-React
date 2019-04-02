import React, { Component } from 'react';
import balloon from './images/balloon1.png';
class Balloon extends Component {
    render() {
        return (
              <img src={balloon} alt="balloon" />
        );
    }
}
export default Balloon;