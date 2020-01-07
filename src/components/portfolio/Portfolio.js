import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Card from '../card/card';

import './Portfolio.css';


export default class PortfolioContent extends Component {
  render() {
    return (
      <div>
        <div className="info">
          <p>The below portfolio items are examples of programming works, front-end web design, as well as straight HTML and CSS completed during my time at Coder Academy.</p>
        </div>
        <Card/>
        </div>
    )
  }
}