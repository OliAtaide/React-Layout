import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaUser, FaEnvelope, FaBell, FaCog } from "react-icons/fa";
import Profile from './Profile.js';
import {
  BrowserRouter as MemoryRouter,
  Switch,
  MemoryRouter,
  Route,
  Link
} from "react-router-dom";
import Mail from './Mail.js';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <header className="App-header">
          <img id="left" src={logo}/>
        </header>
        <div id="content"></div>
      </div>
      <MemoryRouter>
        <div id="sidebar">
          <ul>
            <Link to="/">
              <li id="link">
                <FaUser id="sbicon"/>
              </li>
            </Link>
            <Link to="/Mail">
              <li id="link"i>
                <FaEnvelope id="sbicon"/>
              </li>
            </Link>
            <Link to="/Noti">
              <li id="link">
                <FaBell id="sbicon"/>
              </li>
            </Link>
            <Link to="/Setup">
              <li id="link">
                <FaCog id="sbicon"/>
              </li>
            </Link>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/Mail">
            <Mail/>
          </Route>
        </Switch>
      </MemoryRouter>
    </div>
  );
}

export default App;
