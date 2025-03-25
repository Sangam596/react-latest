import { Link } from "react-router-dom";
import Breadcrumbs from "../../../Breadcrumbs";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <span className="fixed top-0 w-fit shadow-md ">
        <Breadcrumbs className="text-sm hover:bg-gray-200" />
      </span>
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
