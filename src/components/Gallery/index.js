import React from "react";
import client from "../../helpers/contentful";
import { withRouter } from "react-router-dom";
import "./styles.css";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            images: [],
            isLoading: true
        }
    }

    componentDidMount() {
        client
            .getEntries("gallery")
            .then((entry) => {
                entry.items.forEach(entry => {
                    const removeSlash = this.props.location.pathname.substring(1);
                    if (entry.fields.title.replace(/\s+/g, '-').toLowerCase() === removeSlash) {
                        this.setState({
                            title: entry.fields.title,
                            text: entry.fields.text,
                            images: entry.fields.images,
                            isLoading: false
                        });
                    }
                })
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            console.log('upda')
            client
            .getEntries("gallery")
                .then((entry) => {
                    const updatedEntry = entry.items.filter(entry => {
                        const removeSlash = this.props.location.pathname.substring(1);
                        if (entry.fields.title.replace(/\s+/g, '-').toLowerCase() === removeSlash) {
                            return entry;
                        }
                    });
                    console.log(updatedEntry)
                    this.setState({
                        title: updatedEntry.fields.title,
                        text: updatedEntry.fields.text,
                        images: updatedEntry.fields.images,
                        isLoading: false
                    });
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        const { title, text, images, isLoading } = this.state;
        const imageSet = images && images.map((src, i) => {
            return (
                <img
                    key={i}
                    style={{
                        height: "auto",
                        width: "100%",
                    }}
                    src={src.fields.file.url} alt={src.fields.title}
                />
            );
        });

        return (
            <div className="gallery">
                <div
                    id="top"
                    style={{
                        backgroundColor: "#7063c0",
                        color: "#fff"
                    }}
                >
                    <div className="top-content">
                        <p className="title">{title}</p>
                        <p className="type">{text}</p>
                    </div>
                    <div className="links">
                        details
                    </div>
                </div>
                <div id="bottom">
                    <div className="content-container">
                        <div className="portfolio-content">{imageSet}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Gallery);