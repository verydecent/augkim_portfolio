import React from "react";
import client from "../../helpers/contentful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, Link } from "react-router-dom";
import artstation from "./artstation.webp";

class Home extends React.Component {
  state = {
    name: "",
    aboutMe: "",
    left: [],
    middle: [],
    right: [],
  };
  componentDidMount() {
    client
      .getEntry("4JGO8utYkyDOkv2DnJBIB9")
      .then((entry) => {
        this.setState({
          name: entry.fields.name,
          aboutMe: entry.fields.aboutMe,
          left: entry.fields.left,
          middle: entry.fields.middle,
          right: entry.fields.right,
        });
        console.log(entry)
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.props);
    const {
      name,
      aboutMe,
      left,
      middle,
      right,
    } = this.state;

    return (
      <div className="home">
        <div id="top">
          <div className="top-content">
            <p className="title">{name}</p>
            <p className="type">{aboutMe}</p>
          </div>
          <div className="top-content">
            <div
              className="links"
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-between",
              }}
            >
              <a href="https://instagram.com/augkim">
                <FontAwesomeIcon
                  style={{
                    color: "#999",
                    fontSize: 28,
                  }}
                  icon={["fab", "instagram"]}
                />
              </a>
                    <a
                      style={{
                        textDecoration: "none",
                        marginLeft: 28,
                      }}
                      href="https://www.artstation.com/augustkimbrell7"
                    >
                      <img
                        src={artstation}
                        alt="artstation"
                        style={{
                          color: 'red',
                          width: 30,
                          marginBottom: 0
                        }}
                      />
                    </a>
              <a
                style={{
                  textDecoration: "none"
                }}
                href="fineartamerica.com/profiles/aug-kim?tab=artwork"
              >
                <span
                  style={{
                    color: "#999",
                    fontSize: 20,
                    marginLeft: 28,
                    paddingBottom: 8,
                    marginRight: 50,
                    textDecoration: "none"
                  }}
                >
                  Posters 
                </span>
              </a>
              <span
                style={{
                  color: "#999",
                  fontSize: 20,
                  marginLeft: 28,
                  paddingBottom: 8,
                  marginLeft: "auto",
                  marginRight: 50,
                }}
              >
                augallkim@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div id="bottom">
          <div className="content-container">
            <div className="home-img-container">
              <div className="left">
                {left &&
                  left.map((image, i) => {
                    console.log('left',image)
                    return (
                      <Link to={`${image.fields.title}`}>
                        <img
                          key={i}
                          style={{
                            height: "auto",
                            width: "100%",
                          }}
                          src={
                            image.fields.file.url
                          }
                          alt={
                            image.fields.file
                            .fileName
                          }
                        />
                      </Link>
                    );
                  })}
              </div>
              <div className="middle">
                {middle &&
                  middle.map((image, i) => {
                    console.log('middle',image)

                    return (
                      <Link to={`${image.fields.title}`}>
                        <img
                          key={i}
                          style={{
                            height: "auto",
                            width: "100%",
                          }}
                          src={
                            image.fields.file.url
                          }
                          alt={
                            image.fields.file
                              .fileName
                          }
                        />
                      </Link>
                    );
                  })}
              </div>
              {/* <div className="right">
                {right &&
                  right.map((image, i) => {
                    return (
                      <Link to={`${image.fields.title}`}>
                        <img
                          key={i}
                          style={{
                            height: "auto",
                            width: "100%",
                          }}
                          src={
                            image.fields.file.url
                          }
                          alt={
                            image.fields.file
                              .fileName
                          }
                        />
                      </Link>
                    );
                  })}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
