import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-slate-50">
      <div className="container">
        <div className="sm:flex justify-between items-center">
          <Link to="#" className="text-black text-2xl font-bold p-3 mr-4">
            SmartPhone Corner
          </Link>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-black sm:hidden focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>

          <ul
            className={`${
              showMenu ? "block" : "hidden"
            } sm:flex sm:self-center text-1xl border-t sm:border-none font-sans mt-4 sm:mt-0 m-auto justify-center space-x-8 p-3`}
          >
            <li className="sm:inline-block">
              <Link to="/" className="m-11 text-black">
                HOME
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link to="/product" className="p-3 text-black">
                PRODUCTS
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link to="/about" className="p-3 text-black">
                ABOUT
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link to="/signin" className="p-3 text-black border bg-gray-200 hover:bg-gray-300 rounded-full ">
                SIGN IN
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link to="/signup" className="p-3 text-black  bg-gray-200 hover:bg-gray-300 rounded-full ">
                SIGN UP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;