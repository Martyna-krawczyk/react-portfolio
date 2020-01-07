import React, { Component } from 'react';

import './About.css';


const timelineStyle = {
  clear: 'both'
};

export default class About extends Component {
  render() {
    return (
      <div>
      <div className="info">
    <h1>What have I been up to?</h1>
    <p>I have been very fortunate to have been accepted into a program offered by MYOB called DevelopHer, which included
      a scholarship to Coder Academy's Fast Track Diploma of IT. The course will leave me with everything I need to
      become a full stack developer, including Ruby, CSS, HTML, Ruby on Rails and JavaScript MERN stack (MongoDB,
      Express, React, Node.js). </p>
    <a href="./assets/Resume.pdf" download className="resume-button">Download Resume</a>
  </div>
  <div className="timeline">
    <ul>
      <li>
        <div className="content-timeline">
          <h3>Protege Developer</h3>
          <p>I have been very fortunate to have been accepted into a program offered by MYOB called DevelopHer </p>
        </div>
        <div className="time">
          <h4>August 2019</h4>
        </div>
      </li>
      <li>
        <div className="content-timeline">
          <h3>Diploma of Information Technology</h3>
          <p>Ruby, CSS, HTML, Javascript, Ruby on Rails and the JavaScript MERN stack (MongoDB, Express, React, Node.js).</p>
        </div>
        <div className="time">
          <h4>August 2019</h4>
        </div>
      </li>
      <li>
        <div className="content-timeline">
          <h3>Diploma of Accounting</h3>
          <p>This course was completed over a span of three years on a part-time basis, supporting my interest in the
            accounting process and integration and business systems.</p>
        </div>
        <div className="time">
          <h4>February 2019</h4>
        </div>
      </li>
      <li>
        <div className="content-timeline">
          <h3>Director</h3>
          <p>Adminflow evolved from an operation support service, to efficiency and systemisation consulting for SMBs.
            Technology is such an important asset that many businesses haven't yet implemented and it was clear that
            they needed systems support first. After years of working in systems and CRM, my drive to become a developer
            continued to grow.</p>
        </div>
        <div className="time">
          <h4>January 2014</h4>
        </div>
      </li>

      <li>
        <div className="content-timeline">
          <h3>Mother</h3>
          <p>I have three beautiful children between 9 and 12 years old - all of which helped me to become more
            organised and turned me into a crazy multi-tasker. The early years were challenging and this experience
            built up my strength, resilience and perseverance to work hard and never stop learning. </p>
        </div>
        <div className="time">
          <h4>January 2007</h4>
        </div>
      </li>
      <li>
        <div className="content-timeline">
          <h3>Trust Accountant / Bookkeeper</h3>
          <p>During my time working in accounts roles, I was exposed to many different types of accounting software and
            developed an interest in add-ons and integrations to maximise business efficiency.
          </p>
        </div>
        <div className="time">
          <h4>January 2018</h4>
        </div>
      </li>
      <div style={timelineStyle}></div>
    </ul>
  </div>
  </div>
  
    )
  }
}