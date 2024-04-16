import { Link, NavLink } from "react-router-dom";
import img from "../../../assets/user.png";
import "../../../assets/style.css";
import UseAuth from "../../../hooks/UseAuth";
import { LuLogOut } from "react-icons/lu";
import { GrUpdate } from "react-icons/gr";
import { CiLogin } from "react-icons/ci";
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
            {user && (
              <li className=" ">
                <NavLink to="/updateProfile">
                  <GrUpdate /> Update Profile
                </NavLink>
              </li>
            )}
            {
              user && (
                <button 
                onClick={() => logOut()}
                className="px-3 flex justify-start items-center"
              >
               <LuLogOut /> Log Out
              </button>
              )
            }
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
          {user && (
            <li className=" ">
              <NavLink to="/updateProfile">
                <GrUpdate />
                Update Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown md:dropdown-hover lg:mx-3">
              <div tabIndex={0} role="button" className="btn m-1 ">
                <img
                  src={user?.photoURL || img}
                  alt=""
                  className="w-8 rounded-2xl"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box xl:w-36 md:w-[93px] lg:w-[90px] w-[86px]"
              >
                <li className="md:pt-3 py-1 text-center">
                  {user?.displayName || "UserName"}
                </li>
              </ul>
            </div>
            <button
              onClick={() => logOut()}
              className="hidden  bg-[#d19945] xl:px-4 lg:px-2 py-2 rounded-md lg:text-xs xl:text-base  lg:flex text-white justify-center items-center"
            >
              <LuLogOut /> Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn bg-[#d19945] lg:px-8">
            <CiLogin /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
