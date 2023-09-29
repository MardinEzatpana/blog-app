import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import CatProducts from "../pages/catProducts/CatProducts";
import CatSingleProduct from "../pages/catSingleProduct/CatSingleProduct";

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
        {
          path: "/products/:type/:id",
          element: <CatSingleProduct />,
        },
      ],
    },
    {
        path: "/login",
        element: <Login />,
      },
  ]);
  export default router;