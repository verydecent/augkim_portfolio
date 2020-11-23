import "./App.css";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import Routes from "./components/Routes";

const client = new ContentfulClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
});

function App() {
  return (
    <div className="App">
      <ContentfulProvider client={client}>
        <Routes />
      </ContentfulProvider>
    </div>
  );
}

export default App;
