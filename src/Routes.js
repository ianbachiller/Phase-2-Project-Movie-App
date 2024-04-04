import Home from "./Home";
import App from "./App";
import MovieList from "./MovieList";
import Form from "./Form";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movies",
    element: (
      <MovieList />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/form",
    element: (
      <Form />
    ),
    errorElement: <ErrorPage />,
  }
];

export default routes;
