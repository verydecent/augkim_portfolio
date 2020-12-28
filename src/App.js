import React from "react";
import "./App.css";
import Routes from "./components/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter } from "react-router-dom";
import client from "./helpers/contentful";

library.add(faInstagram, faBars);

class App extends React.Component {
  state = {
    isMenuOpen: false,
    navLinks: []
  }

  componentDidMount() {
    client.getEntries({
      'content_type': "gallery"
    })
    .then(data => {
      this.setState(prevState => ({ ...prevState, navLinks: data.items }));
    })
    .catch(err => console.log(err));
  }
  render() {
    const { isMenuOpen, navLinks } = this.state;
    const NavLinks = navLinks && navLinks.map((link, i) => {
      return (
        <Link
          className="nav-link"
          key={i}
          to={link.fields.title.replace(/\s+/g, '-').toLowerCase()}
        >
            {link.fields.title}
        </Link>
      )}
    );

    return (
      <div className="App">
        <FontAwesomeIcon
          onClick={() => this.setState({ isMenuOpen: !isMenuOpen})}
          icon={faBars}
          style={{
            fontSize: "28px",
            position: "absolute",
            right: "2%",
            top: "12px",
            zIndex: 3,
            cursor: "pointer",
            color: `${this.props.match.params.id === "" ? "#000" : "#7063c0"}`
          }}
        />
        {/* Sidebar Menu */}
        <div>
          <div
            className="shadow"
            onClick={() => this.setState({ isMenuOpen: false })}
            style={{
              display: isMenuOpen ? "block" : "none",
              opacity: 0.65,
              backgroundColor: "#000",
              width: "100%",
              height: "100%",
              top: 0,
              position: "fixed",
              zIndex: 1
            }}
          />
          <div
            style={{
              display: isMenuOpen ? "block" : "none",
              width: 260,
              zIndex: 2,
              background: "#f0f0f0",
              position: "fixed",
              height: "100%",
              right: 0
            }}>
            <div
            style={{
              fontSize: "1.6rem",
              paddingTop: "72px",
              marginRight: "2%",
              marginLeft: "30px",
              display: "flex",
              flexDirection: "column"
            }}
            >
              <Link
                className="home-link"
                to="/"
              >
                Home
              </Link>
              {NavLinks}
            </div>
          </div>
        </div>
        <Routes data={navLinks} />
        <div className="footer">All work shown is copyright © 2020 August Kimbrell</div>
    </div>
    )
  }
}

export default withRouter(App);
