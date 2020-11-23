import React from "react";
import ProfilePic from "../ProfilePic";
import client from "../../helpers/contentful";
import Bio from "../Bio";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pic: "",
      name: "",
      bio: "asdadasd",
    };
  }

  componentDidMount() {
    client
      .getEntries(
        "4aUkB4bzMjOI6BU04k2fSt",
        "5VaxQBNFwlnNIaYzfhpiyM",
        "5bNDKtltCEPzT7gzS6PwZF"
      )
      .then((res) => {
        console.log("=========>", res);
        this.setState({
          pic: res.fields.profilePicture.fields.file.url,
          name: res.fields.name,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { pic, name, bio } = this.state;

    return (
      <div className="card">
        <ProfilePic />
        <Bio bio={bio} />
      </div>
    );
  }
}

export default Card;
