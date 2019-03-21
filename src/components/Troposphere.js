import React, { Component } from 'react';
import { Router, Route, Link, Switch,browserHistory } from "react-router";
import Tro from './images/earth.png';
const NavBar = () => (
  <div className="navbar">
    <Link to="/">Troposphere</Link>
    <Link to="/stratosphere">Stratosphere</Link>
    <Link to="/mesosphere">Mesosphere</Link>
  
  </div>
);

class Troposphere extends Component {
    render() {
        return (
              <div className="Trop" style={{backgroundImage:'url(' + Tro + ')'}}>
                  <NavBar />
                 <h1> Content</h1>
              </div>
        );
    }
}
export default Troposphere;