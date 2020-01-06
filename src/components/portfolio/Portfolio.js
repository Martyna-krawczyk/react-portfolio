import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// import terminalApp from "./public/assets/terminal-application.png";
// import portfolioScreenshot from "/Users/martyna.krawczyk/Desktop/javascript/portfolio-react/portfoilo/public/assets/terminal-application.png";
// import natureCycle from "/Users/martyna.krawczyk/Desktop/javascript/portfolio-react/portfoilo/public/assets/terminal-application.png";
// import reactPort from "/Users/martyna.krawczyk/Desktop/javascript/portfolio-react/portfoilo/public/assets/terminal-application.png";

import './Portfolio.css';


export default class PortfolioContent extends Component {
  render() {
    return (
      <div>
        <div className="info">
          <p>The below portfolio items are examples of programming works, front-end web design, as well as straight HTML and CSS completed during my time at Coder Academy.</p>
        </div>
        <div className="container2">
          <div className="card2">
            <div className="card-content2">
            {/* <img src={terminalApp} alt="terminal" className="icon1"/> */}
              <h4>Ruby Application</h4>
              <ul>
                <li>Ruby</li>
                <li>Terminal</li>
              </ul>
              <Link to="https://github.com/Martyna-krawczyk?tab=repositories" target="_blank" className="green-button">More</Link>
            </div>
          </div>
          <div className="card2">
            <div className="card-content2">
            {/* <img src={portfolioScreenshot} alt="portfolio" className="icon2"/> */}
              <h4>Portfolio</h4>
              <ul>
                <li>HTML and CSS</li>
                <li>JavaScript</li>
              </ul>
              <Link to="https://github.com/Martyna-krawczyk?tab=repositories" target="_blank" className="green-button">More</Link>
            </div>
          </div>
          <div className="card2">
            <div className="card-content2">
            {/* <img src={natureCycle} alt="natureCycle logo" className="icon3"/> */}
              <h4>Marketplace Application</h4>
              <ul>
                <li>Ruby</li>
                <li>Rails</li>
              </ul>
              <Link to="https://www.adminflow.com.au/" target="_blank" className="green-button">More</Link>
            </div>
          </div>
          <div className="card2">
            <div className="card-content2">
            {/* <img src={reactPort} alt="React Portfolio Website" className="icon4"/> */}
              <h4>React Website</h4>
              <ul>
                <li>MERN stack</li>
                <li>Rails</li>
              </ul>
              <Link to="https://www.adminflow.com.au/" target="_blank" className="green-button">More</Link>
            </div>
          </div>
        </div>
        </div>
        
    )
  }
}