import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './githubapi.css';



export default class Githubapi extends React.Component {
  state = {
    repos: []
  }

  renderNames () {
    return this.state.repos.map((repo, key) => <h3 key={repo.id}>{repo.name}</h3>);
  }

  renderLanguage () {
    return this.state.repos.map((repo, key) => <li key={repo.id}>{repo.language}</li>);
  }

  renderUpdated () {
    return this.state.repos.map((repo, key) => <p key={repo.id}>Updated: {repo.updated_at} </p>);
  }

  renderUrl () {
    return this.state.repos.map((repo, key) => <p key={repo.id}>url: {repo.url} </p>);
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
      <div> 
        <p>GitHub Repositories:{this.renderNames()}, {this.renderLanguage()}, {this.renderUpdated()}, {this.renderUrl()}</p>
      </div>
    )
  }
  
}