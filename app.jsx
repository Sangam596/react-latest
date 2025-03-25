import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./src/Loading";


const AppLayout = lazy(() => import("./src/FoodVilla/components/AppLayout"));
const Body = lazy(() => import("./src/FoodVilla/components/Body"));
const About = lazy(() => import("./src/FoodVilla/components/About"));
const Contact = lazy(() => import("./src/FoodVilla/components/Contact"));
const RestroMenu = lazy(() => import("./src/FoodVilla/components/RestroMenu"));
const Cart = lazy(() => import("./src/FoodVilla/components/Cart"));

// Lazy Loading for named exports
const NetflixLayout = lazy(async () => {
  const module = await import("./src/Netflix/components/AppLayout");
  return { default: module.AppLayout };
});

const NetflixBody = lazy(async () => {
  const module = await import("./src/Netflix/components/Body");
  return { default: module.Body };
});

const YoutubeLayout = lazy(async () => {
  const module = await import("./src/Youtube");
  return { default: module.Applayout };
});

const YoutubeBody = lazy(async () => {
  const module = await import("./src/Youtube");
  return { default: module.Body };
});

const Watch = lazy(() => import("./src/Youtube/components/WatchPage"));

const PageNotFound = lazy( () => import("./src/Youtube/components/PageNotFound"));


const Index = lazy(async () => {
  const module = await import("./src/Index");
  return { default: module.default };
});

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Index />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/food",
    element: (
      <Suspense fallback={<Loading />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/food",
        element: (
          <Suspense fallback={<Loading />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/food/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/food/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/food/restroMenu/:restid",
        element: (
          <Suspense fallback={<Loading />}>
            <RestroMenu />
          </Suspense>
        ),
      },
      {
        path: "/food/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Loading />}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/netflix",
    element: (
      <Suspense fallback={<Loading />}>
        <NetflixLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/netflix/browse",
        element: (
          <Suspense fallback={<Loading />}>
            <NetflixBody />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Loading />}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/youtube",
    element: (
      <Suspense fallback={<Loading />}>
        <YoutubeLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/youtube",
        element: (
          <Suspense fallback={<Loading />}>
            <YoutubeBody />
          </Suspense>
        ),
      },
      {
        path: "/youtube/watch",
        element: (
          <Suspense fallback={<Loading />}>
            <Watch />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Loading />}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <PageNotFound />
      </Suspense>
    ),
  },
]);

// Render App
document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
