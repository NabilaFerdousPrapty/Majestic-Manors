import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../components/Private/PrivateRoute";

import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ViewProperties from "../components/ViewProperties/ViewProperties";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <ViewProperties></ViewProperties>
          </PrivateRoute>
        ),
        loader: () => fetch("/realEstateProperty.json"),
      },
    ],
  },
]);
export default router;
