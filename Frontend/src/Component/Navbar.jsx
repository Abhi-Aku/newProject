import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo or Brand Name */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">MyApp</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink
                to="/"
                className="text-gray-700 hover:text-indigo-600 text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-indigo-600 text-sm font-medium"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-indigo-600 text-sm font-medium"
              >
                Contact
              </NavLink>
              <NavLink
                to="/signUp"
                className="text-gray-700 hover:text-indigo-600 text-sm font-medium"
              >
                Sign Up
              </NavLink>
            </div>

            {/* Mobile Menu Button (Hamburger Icon) */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Hidden by Default) */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="block text-gray-700 hover:text-indigo-600 text-sm font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-gray-700 hover:text-indigo-600 text-sm font-medium "
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block text-gray-700 hover:text-indigo-600 text-sm font-medium"
            >
              Contact
            </NavLink>
            <NavLink
              to="/signUp"

              className="block text-gray-700 hover:text-indigo-600 text-sm font-medium"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Outlet for rendering nested routes */}
      <Outlet />
    </>
  );
};

export default Navbar;
