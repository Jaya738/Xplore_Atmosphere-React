import React, { Component } from 'react';
import satellite from './images/satellite.jpg';
class Satellite extends Component {
    render() {
        return (
        <img src={satellite} alt="Satellite " />
        );
    }
}
export default Satellite;