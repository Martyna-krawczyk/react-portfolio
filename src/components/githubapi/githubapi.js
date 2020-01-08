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
      <>
        <div className="card2">
          <div className="card-content2">
            <img className="avatar" src={repo.owner.avatar_url}/> 
              <h3 key={repo.id}>{repo.name}</h3>
                <ul>
                  <li key={repo.id}>{repo.language}</li>
                </ul>
                <h4 id="description" key={repo.id}>{repo.description} </h4>
                <Link key={repo.id} to={repo.url} target="_blank" className="green-button">More</Link>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
      axios.get(`https://api.github.com/users/Martyna-krawczyk/repos`)
      .then(res => {
        let lastFive = res.data.splice(0,5);
        this.setState({ repos: lastFive });
      })
      .catch( (error) => {
        console.log(`Here's an error: ${error}`);
      });
  }

  render() {
    return(
    <div className="container2">{this.renderCard()}</div>
    )
  }
}