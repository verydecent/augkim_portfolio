import React from "react";
import client from "../../helpers/contentful";

class Home extends React.Component {
  state = {
    name: "",
    bio: "",
    images: []
  };
  componentDidMount() {
    client
      .getEntry("4JGO8utYkyDOkv2DnJBIB9")
      .then((entry) => {
        this.setState({
          name: entry.fields.name,
          bio: entry.fields.bio,
          images: entry.fields.images
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { name, bio, images } = this.state;

    return (
      <div className="home">
        <div id="top">
          <div className="top-content">
            <p className="type">{name}</p>
            <p className="type">{bio}</p>
          </div>
          <div className="links">
            EMAIL
          </div>
        </div>
        <div id="bottom">
          <div className="content-container">
            {images.map(image => {
                return (
                <div className="img-blocks">
                  <img
                    src={image.fields.file.url}
                    alt={image.fields.file.fileName}
                  />
                </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;