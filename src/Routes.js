import Home from "./Home";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Winner from "./Winner";
import Ratings from "./Ratings";
import About from "./About";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movies",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/winner",
    element: <Winner />,
    errorElement: <ErrorPage />
  },
  {
    path: "/ratings",
    element: <Ratings />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  }
];
export default routes;
