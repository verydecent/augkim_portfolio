import "./App.css";
import Routes from "./components/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faInstagram, faBars);

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon
        icon={faBars}
        style={{
          position: "absolute",
          left: "2%",
          top: "12px"
        }}
      />
      <Routes />
    </div>
  );
}

export default App
