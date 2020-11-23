import React from "react";
import client from "../../helpers/contentful";

class ProfilePic extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pic: "", name: "" };
  }

  componentDidMount() {
    client
      .getEntry("4aUkB4bzMjOI6BU04k2fSt")
      .then((res) => {
        this.setState({
          pic: res.fields.profilePicture.fields.file.url,
          name: res.fields.name,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="profile-pic">
        <img src={this.state.pic} alt="profile pic" />
        <h1 className="profile-name">{this.state.name}</h1>
      </div>
    );
  }
}

export default ProfilePic;
