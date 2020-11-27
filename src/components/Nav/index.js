import React from "react";
import logo from "../../images/logo.jpeg";
import { Link } from "react-router-dom";

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
            Stuff
          </Link>
          <Link className="nav-link" to="">
            Stuff
          </Link>
          <Link className="nav-link" to="">
            Stuff
          </Link>
        </div>
      </div>
      <Component {...props} />
      <div className="footer">Footer</div>
    </div>
  );
};

export default Nav;
