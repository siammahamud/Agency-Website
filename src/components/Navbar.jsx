import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="max-w-full bg-white shadow-sm">
      <div className="navbar max-w-screen-2xl mx-auto container ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>

              <details>
                <summary>Categories</summary>
                <ul className="p-2 text-sm divide-y diveide-gray-700">
                  <li>
                    <Link to="/">Web-Design</Link>
                  </li>
                  <li>
                    <Link to="/">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/">UI-UX Design</Link>
                  </li>
                  <li>
                    <Link to="/">Digital Marketing</Link>
                  </li>
                </ul>
              </details>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <span class="text-3xl font-extrabold tracking-tight text-primary">
              Web<span class="text-gray-800">Loom</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 text-sm divide-y diveide-gray-700">
                  <li>
                    <Link to="/">Web-Design</Link>
                  </li>
                  <li>
                    <Link to="/">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/">UI-UX Design</Link>
                  </li>
                  <li>
                    <Link to="/">Digital Marketing</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link
            to="/login"
            className=" btn btn-outline btn-secondary hidden sm:flex mr-2 ouline-1-[#E63946]"
          >
            Log In
          </Link>
          <Link
            to="/pricing"
            className=" btn btn-active btn-secondary hidden sm:flex bg-primary"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
