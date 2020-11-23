import React from "react";
import client from "../../helpers/contentful";

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
    };
  }

  componentDidMount() {
    client
      .getEntry("5VaxQBNFwlnNIaYzfhpiyM")
      .then((res) => {
        console.log(res);
        this.setState({ bio: res.fields.biography });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <div className="bio">{this.state.bio}</div>;
  }
}

export default Bio;
