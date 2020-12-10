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
        <div className="inner-nav">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* <h1>Aug Kim</h1> */}
          <div className="nav-list">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/works">
              Works
            </Link>
          </div>
        </div>
      </div>
      <Component {...props} />
      <div className="footer">
        <div className="inner-footer">
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
          <div className="">
            <div className="email">augallkim@gmail.com</div>
            <div className="rights">© All rights reserved</div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Nav;
