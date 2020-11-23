import React from "react";
import client from "../../helpers/contentful";

class ProfilePic extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pic: "" };
  }

  componentDidMount() {
    client
      .getEntry("4aUkB4bzMjOI6BU04k2fSt")
      .then((res) => {
        this.setState({ pic: res.fields.profilePicture.fields.file.url });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="profile-pic">
        <img src={this.state.pic} alt="profile pic" />
      </div>
    );
  }
}

export default ProfilePic;
