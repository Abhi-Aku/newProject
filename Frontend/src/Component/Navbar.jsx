import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" ">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex justify-between h-16">
            {/* Logo or Brand Name */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">MyApp</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 text-sm font-medium underline" 
                    : "text-gray-700 text-sm  font-bold"  
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 text-sm font-medium underline" 
                    : "text-gray-700 text-sm font-bold"  
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 text-sm font-medium underline" 
                    : "text-gray-700 text-sm font-bold"  
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/signUp"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 text-sm font-medium underline" 
                    : "text-gray-700 text-sm font-bold" 
                }
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
