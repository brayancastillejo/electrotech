import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/phones",
        element: <h1>Phones</h1>,
      },
      {
        path: "/computers",
        element: <h1>Computers</h1>,
      },
      {
        path: "/home",
        element: <h1>Home</h1>,
      },
      {
        path: "/videogames",
        element: <h1>Videogames</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
