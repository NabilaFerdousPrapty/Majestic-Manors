import { Link, NavLink } from "react-router-dom";

import "../../../assets/style.css";
import UseAuth from "../../../hooks/UseAuth";
const Navbar = () => {
  const { logOut, user } = UseAuth();
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
          
          </ul>
          
        </div>
        <Link to="/">
          <h2 className="md:text-3xl font-body text-[#d19945] text-base">
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
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown md:dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 ">
              <img src={user.photoURL} alt="" className="w-8 rounded-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box xl:w-36 md:w-[90px] w-24"
            >
              <li className="md:py-3 py-1 text-center">{user.displayName}</li>
              <li className="md:py-3 py-1 ">
                <button
                  onClick={() => logOut()}
                  className=" bg-[#d19945] px-2 py-1 rounded-md  text-white justify-center"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn bg-[#d19945] lg:px-7">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
