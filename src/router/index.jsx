import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import CatProducts from "../pages/catProducts/CatProducts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/products/:type",
          element: <CatProducts />,
        },
      ],
    },
    {
        path: "/login",
        element: <Login />,
      },
  ]);
  export default router;