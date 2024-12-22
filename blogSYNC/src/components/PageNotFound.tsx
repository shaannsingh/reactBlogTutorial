import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h2>Sorry!</h2>
      <p>This page doesn't exist.</p>
      <Link to="/">Go back home...</Link>
    </div>
  );
};

export default PageNotFound;
