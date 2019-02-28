import React, { Component } from 'react';
import birds from './images/birds.gif';
class Bird extends Component {
    render() {
        return (
              <img src={birds} alt="birds" />
        );
    }
}
export default Bird;