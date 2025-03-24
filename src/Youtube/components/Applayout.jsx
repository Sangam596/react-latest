import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from './../../../store';
import { Header } from "./Header";

const Applayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-auto font-serif">
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};

export { Applayout };
