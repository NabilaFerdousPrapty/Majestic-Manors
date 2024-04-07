import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";

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
        }
      ]
    },
  ]);
  export default router;