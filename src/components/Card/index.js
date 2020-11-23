import React from "react";
import ProfilePic from "../ProfilePic";
import Bio from "../Bio";
import LinksList from "../LinksList";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <ProfilePic />
        <Bio />
        <LinksList />
      </div>
    );
  }
}

export default Card;
