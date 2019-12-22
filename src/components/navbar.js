import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import "./navbar.css";

function Hamburger() {
  const hamburgerElement = <FontAwesomeIcon icon={faBars} />
  return (hamburgerElement);
  }

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <nav>
          <div className="navbar-links">
            <div className="navbar-link"><Link to="/about">ABOUT</Link></div>
            <div className="navbar-link"><Link to="/portfolio">PORTFOLIO</Link></div>
            <div className="navbar-link"><Link to="/contact">CONTACT</Link></div>
          </div>
        </nav>
        <div className="navbar">
          <div className="navbar-logo">
            < Link to="/"><img src="./assets/MK.png" alt="logo"/>
            </Link>
          </div>
        </div> 
        <div id="button">
          <label>
            <input type="checkbox" value="1"/><Hamburger/>
            <div className="menu"> 
              <ul>
                <Link to="./about" className="navbar-link" >
                  <li>ABOUT</li>
                </Link>
                <Link to="./portfolio" className="navbar-link" >
                  <li>PORTFOLIO</li>
                </Link>
                <Link to="./contact" className="navbar-link" >
                  <li>CONTACT</li>
                </Link>
              </ul>
            </div>
          </label>
        </div>
      </div> 
    );
  }
}