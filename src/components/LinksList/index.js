import React from "react";
import client from "../../helpers/contentful";
import { Link } from "react-router-dom";

class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: [] };
  }

  componentDidMount() {
    client
      .getEntries()
      .then((res) => {
        const newArr = [];
        res.items.forEach((link) => {
          if (link.sys.contentType.sys.id === "gallery") {
            newArr.push(link.fields.title);
          }
        });
        this.setState({ links: newArr });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const links = this.state.links.map((link, index) => (
      <Link className="links-list-link" key={index} to={link.toLowerCase()}>
        {link}
      </Link>
    ));
    return (
      <div className="links-list">
        <p className="links-list-title">Portfolio</p>
        {links}
      </div>
    );
  }
}

export default LinksList;
