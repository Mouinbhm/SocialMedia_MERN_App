import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/register.js";
import Login from "./pages/login.js";
import Home from "./pages/home.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div> Home page </div>,
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
      element: <Home/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
