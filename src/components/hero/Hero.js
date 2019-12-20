import React, { Component } from 'react';
import Navbar from '../navbar';

import './Hero.css';




export default class Hero extends Component {
  render() {
    return (
      <header>
          <div className="container1">
            <Navbar/>
            <div className="hero-container">
              <h1>Martyna Krawczyk</h1>
              <p>DEVELOPER IN TRAINING</p>
            </div>
          </div>
      </header>
    )
  }
}
  