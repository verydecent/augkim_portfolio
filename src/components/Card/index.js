import React from "react";
import ProfilePic from "../ProfilePic";

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
        <ProfilePic />
        <div className="">Bio section</div>
        <div className="">Links</div>
        <div className="">Social Links</div>
      </div>
    );
  }
}

export default Card;
