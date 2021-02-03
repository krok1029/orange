import { withRouter, Link } from "react-router-dom";

function Breadcrumbs(props) {
  const flattenRoutes = (arr, road = [], breadcrumb = []) =>
    arr.reduce((prev, item) => {
      item.road = [...road, item.path];
      item.roadName = [...breadcrumb, item.breadcrumb];
      prev.push(item);

      return prev.concat(
        Array.isArray(item.items)
          ? flattenRoutes(item.items, item.road, item.roadName)
          : []
      );
    }, []);

  const path = flattenRoutes(props.routes, "");
  const [loc] = path.filter((e) => e.road.join("") === props.location.pathname);

  const BreadcrumbsComponent = (breadcrumbs) => (
    <div className="breadcrumb">
      {breadcrumbs.road.map((breadcrumb, index) => {
        console.log(breadcrumbs);
        const link = breadcrumbs.road.slice(0, index + 1).join("");
        return (
          <span key={breadcrumb}>
            <Link to={link}>{breadcrumbs.roadName[index]}</Link>
            {index < breadcrumbs.road.length - 1 && <i></i>}
          </span>
        );
      })}
    </div>
  );
  let x = typeof loc != "undefined" ? BreadcrumbsComponent(loc) : <></>;
  return <>{x}</>;
}

export default withRouter(Breadcrumbs);
