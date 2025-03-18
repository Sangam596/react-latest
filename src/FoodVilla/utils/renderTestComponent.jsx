import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

const renderTestComponent = (Component) => (
  <BrowserRouter>
    <Provider store={store}>
      <Component />;
    </Provider>
  </BrowserRouter>
);

export default renderTestComponent;
