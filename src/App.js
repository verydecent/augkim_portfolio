import React from "react";
import "./App.css";
import Routes from "./components/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Link,
  withRouter,
} from "react-router-dom";
import client from "./helpers/contentful";

library.add(faInstagram, faBars);

class App extends React.Component {
  state = {
    isMenuOpen: false,
    navLinks: [],
    isLoading: true,
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: "gallery",
      })
      .then((data) => {
        this.setState((prevState) => ({
          ...prevState,
          navLinks: data.items,
          isLoading: false,
        }));
      })
      .catch((err) => console.log(err));
  }

  closeOnNav = () =>
    this.setState({ isMenuOpen: false });

  render() {
    const {
      isMenuOpen,
      navLinks,
      isLoading,
    } = this.state;
    const NavLinks =
      navLinks &&
      navLinks.map((link, i) => {
        return (
          <Link
            onClick={this.closeOnNav}
            className="nav-link"
            key={i}
            to={link.fields.title
              .replace(/\s+/g, "-")
              .toLowerCase()}
          >
            {link.fields.title}
          </Link>
        );
      });
    return (
      <div className="App">
        <FontAwesomeIcon
          id={isMenuOpen ? "colored" : ""}
          onClick={() =>
            this.setState({
              isMenuOpen: !isMenuOpen,
            })
          }
          icon={faBars}
          style={{
            fontSize: "28px",
            position: "absolute",
            right: 30,
            top: 30,
            zIndex: 3,
            cursor: "pointer",
            color: `${
              this.props.location.pathname !== "/"
                ? "#fff"
                : "#7063c0"
            }`,
          }}
        />
        {/* Sidebar Menu */}
        <div>
          <div
            className="shadow"
            onClick={() =>
              this.setState({ isMenuOpen: false })
            }
            style={{
              display: isMenuOpen
                ? "block"
                : "none",
              opacity: 0.25,
              backgroundColor: "#000",
              width: "100%",
              height: "100%",
              top: 0,
              position: "fixed",
              zIndex: 1,
            }}
          />
          <div
            style={{
              transition: "0.3s",
              width: isMenuOpen ? 260 : 0,
              zIndex: 2,
              background: "#f0f0f0",
              position: "fixed",
              height: "100%",
              right: 0,
            }}
          >
            <div
              style={{
                fontSize: "1.6rem",
                paddingTop: "72px",
                marginRight: "2%",
                marginLeft: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                onClick={this.closeOnNav}
                className="home-link"
                to="/"
              >
                Home
              </Link>
              {NavLinks}
            </div>
          </div>
        </div>
        <Routes
          data={navLinks}
          isLoading={isLoading}
        />
        <div className="footer">
          All work shown is copyright © 2020
          August Kimbrell
        </div>
      </div>
    );
  }
}

export default withRouter(App);
