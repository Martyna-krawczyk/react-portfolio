import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Heart() {
  const heartElement = <FontAwesomeIcon icon={faHeart} />
  return (heartElement);
  }


export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <footer>
        <div className="footer-links">
          <div className="footer-link">
            <a href="./index.html"><img src="./assets/MKdark.png" alt="logo"/></a>
          </div>
        </div>
        <div className="footer-tagline">
          <p>Made with <Heart/> &copy; Martyna Krawczyk 2019</p>
        </div>
      </footer>
      </div>
    )
  }
}