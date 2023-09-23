import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
        path: "/login",
        element: <Login />,
      },
  ]);
  export default router;