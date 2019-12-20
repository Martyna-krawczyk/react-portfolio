import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Socials.css";

function Twitter() {
const twitterElement = <FontAwesomeIcon icon={faTwitter} />
return (twitterElement);
}

function LinkedIn() {
  const linkedInElement = <FontAwesomeIcon icon={faLinkedin} />
  return (linkedInElement);
}

function GitHub() {
  const githubElement = <FontAwesomeIcon icon={faGithub} />
  return (githubElement);
  }


export default class Socials extends Component {
  render() {
    return (
    <div className="socials">
        <div className="socials-links">
          <div className="socials-link">
            <Link to="https://twitter.com/MartynaKrawcz" target="_blank"><Twitter/><i title="This link goes to my Twitter page"></i></Link>
          </div>
          <div className="socials-link">
            <Link to="https://www.linkedin.com/in/martyna-krawczyk-920448a2/" target="_blank"><i title="This link goes to my LinkedIn page"><LinkedIn/></i></Link>
          </div>
          <div className="socials-link">
            <Link to="https://github.com/Martyna-krawczyk" target="_blank"><i title="This link goes to my Github page" ><GitHub/></i></Link>
          </div>
        </div>
      </div>
    )
  }
}