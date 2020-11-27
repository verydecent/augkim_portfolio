import React from "react";
import logo from "../../images/logo.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Nav = (Component) => (props) => {
  return (
    <div className="nav-hoc">
      <div className="nav">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h1>Aug Kim</h1>
        <div className="nav-list">
          <Link className="nav-link" to="">
            Link 1
          </Link>
          <Link className="nav-link" to="">
            Link 2
          </Link>
          <Link className="nav-link" to="">
            Link 3
          </Link>
        </div>
      </div>
      <Component {...props} />
      <div className="footer">
        <div className="social-media">
          <div className="social-media-link">
            <FontAwesomeIcon className="social-media-link" icon={faInstagram} />
          </div>
          <div className="social-media-link">
            <FontAwesomeIcon className="social-media-link" icon={faTwitter} />
          </div>
          <div className="social-media-link">
            <FontAwesomeIcon className="social-media-link" icon={faFacebook} />
          </div>
        </div>
        <div className="email">Contact: augallkim@gmail.com</div>
        <div className="rights">© All rights reserved</div>
      </div>
    </div>
  );
};

export default Nav;
