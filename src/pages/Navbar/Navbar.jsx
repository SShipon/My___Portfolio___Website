
import { useState } from "react";
import './navbar.css'
import { NavHashLink } from "react-router-hash-link";
const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 50) {
          setColorChange(true);
      }
      else {
          setColorChange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);

    const navItems = <>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: '#ffff'}} to="/home#home">Home</NavHashLink></li>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: '#ffff'}} to="/home#portfolio">Portfolio</NavHashLink></li>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color:" #ffff"}} to="/home#contact">Contact</NavHashLink></li>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: "#ffff"}} to="/home#about">About</NavHashLink></li>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: "#ffff"}} to="/home#blogs">Blog</NavHashLink></li>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: "#ffff"}} to="/home#coming">coming</NavHashLink></li>
    </>
    return (
        <div className="">
     <div  className={colorChange ? 'navbar colorChange' : 'navbar  fixed top-0 z-10 bg-slate-200'}>
  <div className="navbar-start container mx-12">
    <div className="dropdown">
      <label tabIndex={0} className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 mx-16 font-semibold">
       {navItems}
      </ul>
    </div>
    <a className=" normal-case text-xl text-white">Shipon</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
       {navItems}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;