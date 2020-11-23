import { ContentfulClient } from "react-contentful";

const client = new ContentfulClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default client;
