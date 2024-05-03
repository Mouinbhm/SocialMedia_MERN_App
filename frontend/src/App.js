import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./config/route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
