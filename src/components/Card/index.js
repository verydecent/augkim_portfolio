import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log("=");
  }

  render() {
    return <div className="card">Card</div>;
  }
}

export default Card;
