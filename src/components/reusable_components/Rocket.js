import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import rocket from './images/rocket.png';
import './Rocket.css';
class Rocket extends Component {
    render() {
        return (
        <img className="rocket" src={rocket} alt="Rocket" />
        );
    }
}
export default Rocket;