import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import rocket from './images/rocket.png';
class Rocket extends Component {
    render() {
        return (
        <img src={rocket} alt="Rocket" />
        );
    }
}
export default Rocket;