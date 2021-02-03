import "./App.css";
import Header from "./component/Header";

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Test from "./component/Test";
// import Test from "./component/A";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Header />
          <Switch>
            {/* 注意：要加上網址參數 */}

            <Route exact path="/">
              {/* <com1 /> */}
            </Route>
            <Route path="/test">
              {/*要連線的網頁*/}
              <Test />
            </Route>
            <Route path="/a/b/c1">
              <Test />
            </Route>
            <Route path="/a">
              <Test />
            </Route>
            <Route path="/">
              {/*要連線的網頁*/}
              <div>404</div>
            </Route>
          </Switch>
          <Footer />{" "}
        </>
      </Router>
    </div>
  );
}

export default App;
