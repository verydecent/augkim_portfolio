import React from "react";
import ProfilePic from "../ProfilePic";
import Bio from "../Bio";
import Contact from "../Contact";
import LinksList from "../LinksList";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <ProfilePic />
        <Bio />
        <Contact />
        <LinksList />
      </div>
    );
  }
}

export default Card;
