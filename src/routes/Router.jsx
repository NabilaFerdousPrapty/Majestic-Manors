import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
         path:'/',
         element:<Home/>
        },{
          path:'/gallery',
          element:<Gallery/>
        },{
          path:'/aboutUs',
          element:<AboutUs/>
        },{
          path:'/services',
          element:<Services/>
        },{
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>
        }
      ]
    },
  ]);
  export default router;