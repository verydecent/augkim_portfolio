import "./App.css";
import Routes from "./components/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram);

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
