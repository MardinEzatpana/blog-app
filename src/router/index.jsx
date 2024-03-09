import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import CatProducts from "../pages/catProducts/CatProducts";
import CatSingleProduct from "../pages/catSingleProduct/CatSingleProduct";
import { useSelector } from "react-redux";



const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  if (authUser) {
    return children;
  }
  return <Navigate to="/login" />;
};

const ProtectedRoute1 = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  if (!authUser) {
    return children;
  }
  return <Navigate to="/" />;
};

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
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
        element:(
          <ProtectedRoute1>
            <Login />
          </ProtectedRoute1>
        ),
      },
  ]);
  export default router;