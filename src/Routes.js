import Home from "./Home";
import App from "./App";
import MovieList from "./MovieList";
import Form from "./Form";
import ErrorPage from "./ErrorPage";
import { MovieContext } from "./App";
import contextValue from "./App";
import Winner from "./Winner";
import Ratings from "./Ratings";

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
  }
];
export default routes;
