import React from "react";
import client from "../../helpers/contentful";
import ImageSet from "../ImageSet";

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
      })
      .catch((err) => console.log(err));
  }

  render() {
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
          <div className="links">
            Email and Social Media will go here
          </div>
        </div>
        <div id="bottom">
          <div className="content-container">
            <div className="home-img-container">
              <div className="left">
                {left &&
                  left.map((image, i) => {
                    return (
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
                    );
                  })}
              </div>
              <div className="middle">
                {middle &&
                  middle.map((image, i) => {
                    return (
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
                    );
                  })}
              </div>
              <div className="right">
                {right &&
                  right.map((image, i) => {
                    return (
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
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
