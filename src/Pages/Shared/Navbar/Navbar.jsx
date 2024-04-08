import { Link, NavLink } from "react-router-dom";

import "../../../assets/style.css";
const Navbar = () => {
  return (
    <div className="navbar rounded-badge px-7 py-1 justify-center ">
      <div className="navbar-start w-full">
        <div className="dropdown mx-0 ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-0 mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 m-4"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">About us</NavLink>
            </li>
            <Link to="/login" className="btn bg-[#d19945] lg:px-7">
              Login
            </Link>

            
          </ul>
        </div>
        <Link to="/">
          <h2 className="text-3xl font-body text-[#d19945] ">
            Majestic Manors
          </h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About us</NavLink>
          </li>
          
        </ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <Link to="/login" className="btn bg-[#d19945] lg:px-7">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
