import React from "react";
import "./App.css";
import Routes from "./components/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Link } from "react-router-dom";

library.add(faInstagram, faBars);

class App extends React.Component {
  state = {
    isMenuOpen: false
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <FontAwesomeIcon
          onClick={() => this.setState({ isMenuOpen: !this.state.isMenuOpen})}
          icon={faBars}
          style={{
            fontSize: "24px",
            position: "absolute",
            right: "2%",
            top: "12px",
            zIndex: 3,
            cursor: "pointer"
          }}
        />
        {/* Sidebar Menu */}
        <div>
          <div
            className="shadow"
            onClick={() => this.setState({ isMenuOpen: false })}
            style={{
              display: this.state.isMenuOpen ? "block" : "none",
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
              display: this.state.isMenuOpen ? "block" : "none",
              width: 260,
              zIndex: 2,
              background: "#f0f0f0",
              position: "fixed",
              height: "100%",
              right: 0
            }}>
            <div
            style={{
              paddingTop: "72px",
              marginRight: "2%",
              marginLeft: "30px"
            }}
            >
              <Link to="/">Home</Link> 
            </div>
          </div>
        </div>
        <Routes />
      </BrowserRouter>
    </div>
    )}
}

export default App
