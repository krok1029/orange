import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import Test from "./Test";

function RoutersMaster() {
  return (
    <Switch>
      {/* 注意：要加上網址參數 */}

      <Route exact path="/">
        {/* <com1 /> */}
      </Route>
      <Route path="/test">
        {/*要連線的網頁*/}
        <Test />
      </Route>
      <Route exact path="/a/:id">
        <Test />
      </Route>

      <Route path="/">
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default RoutersMaster;
