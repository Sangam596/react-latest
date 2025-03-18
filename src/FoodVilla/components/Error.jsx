import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError()
  return (
    <div className="container">
      <h1>Oops! The page you are looking for doesn&apost exist.</h1>
      <p>{err?.status} { err?.statusText} {err?.data}</p>

      <Link to="/">Go Back Home</Link>

    </div>
  );
};

export default Error;