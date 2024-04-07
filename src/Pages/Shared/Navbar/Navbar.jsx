import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../../assets/logo.png'
import '../../../assets/style.css'
const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 m-4">
      <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='gallery'>Gallery</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/aboutUs'>About us</NavLink></li>
      
        <li><input type="text" placeholder="Type here" className="input input-bordered border-[#d19945]  w-full max-w-xs" /></li>
      </ul>
    </div>
    <Link to='/'><img src={logoImg} alt="" className='w-1/3' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='gallery'>Gallery</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/aboutUs'>About us</NavLink></li>
      
        <li><input type="text" placeholder="Type here" className="input input-bordered border-[#d19945]  w-full max-w-xs" /></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#d19945] lg:px-7">Login</a>
  </div>
</div> 
        </div>
    );
};

export default Navbar;