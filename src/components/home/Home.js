import React, { Component } from 'react';

import './Home.css';




export default class Home extends Component {
  render() {
    return (
    <div>
      <main>
      <div className="info">
        <h1>Intro</h1>
        <p>I'm a full stack developer in training, learning Ruby, CSS, HTML, Javascript, Ruby on Rails and the JavaScript MERN stack
          (MongoDB, Express, React, Node.js)</p>
      </div>
    </main>
      <div className="container">
        <div className="card">
          <a href="./portfolio.html">
            <div className="card-content" id="card1">
              <h2>PORTFOLIO</h2>
          </div>
        </a>
      </div>
      <div className="card">
        <a href="./about.html">
          <div className="card-content" id="card2">
            <h2>RESUME</h2>
          </div>
        </a>
      </div>
      <div className="card">
        <a href="./about.html">
          <div className="card-content" id="card3">
            <h2>ABOUT</h2>
          </div>
        </a>
      </div>
      <div className="card-wide">
        <a href="./blog.html">
          <div className="card-content" id="card4">
            <h2>BLOG</h2>
          </div>
        </a>
      </div>
      <div className="card-wide">
        <a href="./contact.html">
          <div className="card-content" id="card5">
            <h2>CONTACT</h2>
          </div>
        </a>
      </div>
    </div>
  </div>
  
    )
  }
}