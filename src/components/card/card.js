import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Githubapi from '../githubapi/githubapi';

import './card.css';

export default class Card extends React.Component {
  render() {
    return(
      <div> 
        <div className="container2">
          <div className="card2">
            <div className="card-content2">
              {/* <h4>{this.props.name}</h4> */}
              <ul>
                <li>{this.props.language}</li>
              </ul>
              <Link to="{this.props.url}" target="_blank" className="green-button">More</Link>
            </div>
          </div>
        </div>
          <Githubapi/>
      </div>
    )
  }
}