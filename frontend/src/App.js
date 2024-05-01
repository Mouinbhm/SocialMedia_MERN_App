import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
      element: (
        <div>
          <h1>hello register page</h1>
        </div>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
