import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ className }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className={`p-1   rounded-lg ${className}`}>
      <Link to="/" className="text-blue-600">
        Home
      </Link>
      {paths.map((path, index) => {
        const to = "/" + paths.slice(0, index + 1).join("/");
        return (
          <span key={to} className="mx-2 text-gray-700">
            {" > "}
            <Link to={to} className="text-blue-600 hover:text-red-600">
              {path}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
