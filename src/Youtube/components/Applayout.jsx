import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from './../../../store';
import { Header } from "./Header";
import Breadcrumbs from "../../../Breadcrumbs";

const Applayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-auto font-serif">
      <span className="fixed top-0 w-fit shadow-md z-50 ">
        <Breadcrumbs className="text-sm hover:bg-gray-200" />
      </span>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};

export { Applayout };
