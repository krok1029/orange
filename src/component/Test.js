import { withRouter, Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import routes from "./routes";
function Test(props) {
  console.log(props);

  return (
    <div>
      <Breadcrumbs routes={routes} />
      <div>test2</div>
    </div>
  );
}

export default withRouter(Test);
