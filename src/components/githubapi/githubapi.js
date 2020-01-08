import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './githubapi.css';



export default class Githubapi extends React.Component {
  state = {
    repos: []
  }

  renderCard () {
    return this.state.repos.map((repo, key) => 
    <div className="container2">
        <div className="card2">
          <div className="card-content2">
            <h4 key={repo.id}>{repo.name}</h4>
            <ul>
            <li key={repo.id}>{repo.language}</li>
            </ul>
            <Link key={repo.id} to={repo.url} target="_blank" className="green-button">More</Link>
          </div>
        </div>
      </div>
    );
  }


  componentDidMount() {
      axios.get(`https://api.github.com/users/Martyna-krawczyk/repos`)
      .then(res => {
        this.setState({ repos: res.data });
      })
      .catch( (error) => {
        console.log(`Here's an error: ${error}`);
      });
  }

  render() {
    return(
    <div>{this.renderCard()}</div>
    )
  }
}