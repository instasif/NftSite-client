import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Signup from "../../Pages/Signup/Signup";
import Login from "../../Pages/Login/Login";
import NftDetails from "../../Pages/NftDetails/NftDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'details/:id',
        element: <NftDetails />
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);

export default router;
