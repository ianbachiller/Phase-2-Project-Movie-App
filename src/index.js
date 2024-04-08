import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./Tests/reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./Routes.js";
import App from "./App.js";
import { MovieContext } from "./App.js";
import contextValue from "./App"

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </MovieContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
