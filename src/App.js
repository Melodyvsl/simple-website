import React, { Component } from 'react';
import './App.css';
import Form from './components/form/Form';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Melody's app</h1>
          <ul className="ul">
            <li>
              <Link to="/Home" style={{ textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/About-us" style={{ textDecoration: 'none' }}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/Contact-us" style={{ textDecoration: 'none' }}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <Route path="/Home" exact component={Home} />
        <Route path="/About-us" exact component={AboutUs} />
        <Route path="/Contact-us" exact component={Form} />
      </Router>
    );
  }
}

export default App;
