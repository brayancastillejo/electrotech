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
import Products from "./components/Products.tsx";
import Search from "./routes/Search.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/phones",
        element: <Products category="phones" />,
      },
      {
        path: "/computers",
        element: <Products category="computers" />,
      },
      {
        path: "/home",
        element: <Products category="home" />,
      },
      {
        path: "/videogames",
        element: <Products category="videogames" />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute component={Admin} requiredRole={["admin"]} />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute component={Cart} requiredRole={["user", "admin"]} />
        ),
      },
      {
        path: "/search",
        element: <Search />,
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
