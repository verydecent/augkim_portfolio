import React from "react";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import "./styles.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      images: [],
      isLoading: true,
    };
  }

  render() {
    const { data, isLoading } = this.props;

    if (isLoading) {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    } else {
      // console.log(
      //   `====>  from data ${this.props.data[0].fields.title
      //     .replace(/\s+/g, "-")
      //     .toLowerCase()}  ====> from location ${this.props.location.pathname.substring(
      //     1
      //   )}`
      // );
      const gallery =
        data &&
        data.filter(
          (gallery) =>
            gallery.fields.title
              .replace(/\s+/g, "-")
              .toLowerCase() ===
            this.props.location.pathname.substring(
              1
            )
        );

      const { title, text, images } =
        gallery[0].fields && gallery[0].fields;

      const imageSet =
        images &&
        images.map((src, i) => {
          return (
            <img
              key={i}
              style={{
                height: "auto",
                width: "100%",
              }}
              src={src.fields.file.url}
              alt={src.fields.title}
            />
          );
        });

      return (
        <div className="gallery">
          <div
            id="top"
            style={{
              backgroundColor: "#7063c0",
              color: "#fff",
            }}
          >
            <div className="top-content">
              <p className="title">
                {title && title}
              </p>
              <p className="type">
                {text && text}
              </p>
            </div>
            <div className="links">details</div>
          </div>
          <div id="bottom">
            <div className="content-container">
              <div className="portfolio-content">
                {imageSet}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Gallery);
