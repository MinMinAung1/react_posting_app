import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 py-3 bg-white shadow-md">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
            <img
              className="h-10 w-10 mr-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6983Bl6tjEq6YT8fkuaRXL9JoV2stfdJPg&s"
              alt="logo"
            ></img>
            </Link>
          </div>
          <ul className="hidden md:flex lg:flex ml-10 space-x-12 text-gray-600 cursor-pointer font-bold">
            <Link to="/">
              <li>Post</li>
            </Link>
            <Link to="/createpost">
              <li>Create Post</li>
            </Link>
            <Link to="/history">
              <li>History</li>
            </Link>
          </ul>
          <div className="hidden md:flex lg:flex justify-center items-center space-x-12">
            <button className="bg-black text-white cursor-pointer py-2 px-3 border rounded-md">
              Sign In
            </button>
          </div>
          <div className="lg:hidden md:hidden flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <FaXmark className="size-4" />
              ) : (
                <MdMenu className="size-4" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-400 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-white font-bold cursor-pointer">
              <Link to="/">
                <li className="hover:text-green-200">Posts</li>
              </Link>
              <Link to="/createpost">
                <li className="py-4 hover:text-green-200">Create Post</li>
              </Link>
              <Link to="/history">
                <li className="hover:text-green-200">History</li>
              </Link>
            </ul>
            <div className="flex space-x-6 pt-6 mr-3">
              <button className="bg-gray-700 text-white cursor-pointer py-2 px-3 border rounded-md hover:bg-gray-800">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
