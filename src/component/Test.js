import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import routes from "./routes";
function Test(props) {
  console.log(props);
  const [orange, setOrange] = useState(props.match.params.id);

  return (
    <div>
      <section className="sectionContainer">
        <div className="pageSubject">
          <div className="pageTitle">
            {orange === "b1" ? "特甜橘子" : "特田雞蛋丁"}
          </div>
          <Breadcrumbs routes={routes} />
        </div>

        <main>
          <h1>Hello {orange}!</h1>
          <div>test2</div>
        </main>
      </section>
    </div>
  );
}

export default withRouter(Test);
