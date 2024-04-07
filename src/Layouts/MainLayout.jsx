import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

 import {Outlet} from 'react-router-dom'
const MainLayout = () => {
    return (
        <div className="font-rufina">
           <div className="max-w-7xl mx-auto">
           <div className="">
           <Navbar></Navbar>
           </div>
            <Outlet/>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;