import "./App.css";
import Header from "./component/Header";

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Test from "./component/Test";
import RoutersMaster from "./component/RoutersMaster";
// import Test from "./component/A";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Header />
          <RoutersMaster />
          <Footer />{" "}
        </>
      </Router>
    </div>
  );
}

export default App;
