import React from "react";
import contentful from "contentful";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log("=");
  }

  render() {
    return (
      <div className="card">
        <div className="">Image Container</div>
        <div className="">Bio section</div>
        <div className="">Links</div>
        <div className="">Social Links</div>
      </div>
    );
  }
}

export default Card;
