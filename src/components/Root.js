import React from "react";
import Signin from "./Signin";
import LandingPage from "./LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Root = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/landing-page",
      element: <LandingPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Root;
