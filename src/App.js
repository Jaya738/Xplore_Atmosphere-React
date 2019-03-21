import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Router, Route, Link, Switch,browserHistory } from "react-router";
import Rocket from './components/Rocket';
import Cloud from './components/Cloud';
import Aeroplane from './components/Aeroplane';
import Satellite from './components/Satellite';
import Balloon from './components/Balloon';
import Back from './components/images/back.png';
import Troposphere from './components/Troposphere.js';
import './App.css';    

const NavBar = () => (
  <div className="navbar">
    <Link to="/">Troposphere</Link>
    <Link to="/stratosphere">Stratosphere</Link>
    <Link to="/mesosphere">Mesosphere</Link>
  
  </div>
);
const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">
      This is the {title} page.
    </p>
  </div>
);
const Feed = (props) => (
  <Template title="Feed"/>
);
const Profile = (props) => (
  <Template title="Profile"/>
);
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Profile}/>
        <Route path="/stratosphere" component={Troposphere}/>
        <Route path="/mesosphere" component={Profile}/>

      </Router>
    );
  }
}
export default App;

