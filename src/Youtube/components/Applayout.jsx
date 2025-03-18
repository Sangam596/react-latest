import { Outlet } from "react-router-dom";
import PageLayout from "./PageLayout";
import { Provider } from "react-redux";
import store from './../../../store';

const Applayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-auto font-serif">
      <Provider store={store}>
        <PageLayout />
        <Outlet />
      </Provider>
    </div>
  );
};

export { Applayout };
