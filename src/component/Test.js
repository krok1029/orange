import { withRouter, Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import routes from "./routes";
function Test(props) {
  console.log(props);

  return (
    <div>
      <Breadcrumbs routes={routes} />

      <h1>Hello {props.match.params.id}!</h1>
      <div>test2</div>
    </div>
  );
}

export default withRouter(Test);
