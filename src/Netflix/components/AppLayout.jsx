import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Breadcrumbs from './../../../Breadcrumbs';

const AppLayout = () => {
  return (
    <div>
      <span className="fixed top-0 w-fit shadow-md z-50 ">
        <Breadcrumbs className="text-sm bg-gray-200" />
      </span>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { AppLayout };
