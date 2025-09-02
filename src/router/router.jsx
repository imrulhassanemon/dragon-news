import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layOut/HomeLayout";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <div>Page not found. ভাই কাউরে খুইজা পাইতাসি না</div>,
  },
  {
    path: "/news",
    element: <HomeLayout></HomeLayout>
  },
  {
    path: "/auth",
    element: <h1>Login</h1>,
  },
]);

export default Routers;
