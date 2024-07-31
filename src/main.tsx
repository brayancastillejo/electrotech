import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Admin from "./routes/Admin.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import "./index.css";
import { ProtectedRoute } from "./components/auth/ProtectedRoute.tsx";
import FormBackground from "./components/FormBackground.tsx";
import Index from "./routes/Index.tsx";
import Cart from "./routes/Cart.tsx";
import CartItemsContextProvider from "./context/CartItemsContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
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
      {
        path: "/admin",
        element: <ProtectedRoute component={Admin} requiredRole="admin" />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <FormBackground>
        <Login />
      </FormBackground>
    ),
  },
  {
    path: "/register",
    element: (
      <FormBackground>
        <Register />
      </FormBackground>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartItemsContextProvider>
      <RouterProvider router={router} />
    </CartItemsContextProvider>
  </React.StrictMode>,
);
