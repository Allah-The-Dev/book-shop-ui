import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./components/errorPage";
import Books from "./components/books";
import store from "./app/store";
import HomePage from "./components/homePage";
import OrderDetails from "./components/orderDetails/OrderDetails";
import ReviewOrderDetails from "./components/reviewOrderDetails/ReviewOrderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books",
    element: <Books />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/order/details",
    element: <OrderDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/order/review",
    element: <ReviewOrderDetails />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
