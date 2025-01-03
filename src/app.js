import React from "react";
import { createRoot } from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import RestroMenu from "../components/RestroMenu";


document.body.innerHTML = '<div id="root"></div>';
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restroMenu/:restid",
        element: <RestroMenu  />,
      }
        ],
    errorElement : < Error/>
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
