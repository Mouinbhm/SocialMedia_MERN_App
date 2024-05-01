import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/register.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div> Home page </div>,
    },
    {
      path: "/login",
      element: (
        <div>
          <h1>hello login</h1>
        </div>
      ),
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
