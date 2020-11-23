import React from "react";
import client from "../../helpers/contentful";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", images: [] };
  }

  componentDidMount() {
    client
      .getEntry(this.props.entryId)
      .then((res) => {
        this.setState({ title: res.fields.title, images: res.fields.images });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const imageArr = this.state.images.map((image) => (
      <img className="gallery-image" src={image.fields.file.url} alt="" />
    ));
    return (
      <div className="gallery">
        <p className="gallery-title">{this.state.title}</p>
        <div className="gallery-image-container">{imageArr}</div>
        <Link to="/" className="gallery-home-button">
          Home
        </Link>
      </div>
    );
  }
}

export default Gallery;
