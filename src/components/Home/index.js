import React from "react";
import client from "../../helpers/contentful";

class Home extends React.Component {
  state = {
    name: "",
    aboutMe: "",
    images: []
  };
  componentDidMount() {
    client
      .getEntry("4JGO8utYkyDOkv2DnJBIB9")
      .then((entry) => {
        this.setState({
          name: entry.fields.name,
          aboutMe: entry.fields.aboutMe,
          images: entry.fields.images
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { name, aboutMe, images } = this.state;

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
            {images.map(image => {
                return (
                  <img
                    style={{
                      height: "auto",
                      width: "100%",
                  }}
                    src={image.fields.file.url}
                    alt={image.fields.file.fileName}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Home;