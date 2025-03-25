import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Body, Contact,
  Error,
  RestroMenu,
  AppLayout,
  Cart,
} from "./src/FoodVilla/components";
import { AppLayout as NetflixLayout, Body as NetflixBody } from "./src/Netflix/components";
import { lazy, Suspense } from "react";

import { Applayout as YoutubeLayout, Body as YoutubeBody } from "./src/Youtube";
import Watch from "./src/Youtube/components/WatchPage";
import Index from "./src/Index";
import PageNotFound from "./src/Youtube/components/PageNotFound";

const About = lazy(() => import("./src/FoodVilla/components/About"))


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/food",
    element: <AppLayout />,
    children: [
      {
        path: "/food",
        element: <Body />,
      },
      {
        path: "/food/about",
        element: (
          <Suspense fallback={<h1>LOADING.....!</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/food/contact",
        element: <Contact />,
      },
      {
        path: "/food/restroMenu/:restid",
        element: <RestroMenu />,
      },
      {
        path: "/food/cart",
        element: <Cart />,
      },
    ],
    errorElement: <PageNotFound />,
  },
  {
    path: "/netflix",
    element: <NetflixLayout />,
    children: [
      {
        path: "/netflix/browse",
        element: <NetflixBody />,
      },
    ],
    errorElement: <PageNotFound />,
  },
  {
    path: "/youtube/",
    element: <YoutubeLayout />,
    children: [
      {
        path: "/youtube/",
        element: <YoutubeBody />,
      },
      {
        path: "/youtube/watch",
        element: <Watch />,
      },
    ],
    errorElement: <PageNotFound  />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
