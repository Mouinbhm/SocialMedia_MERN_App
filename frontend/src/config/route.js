import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Home page </div>,
    errorElement: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
