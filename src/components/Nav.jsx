import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
         <nav class="sticky top-0 w-full bg-slate-50">
        <div class="container">
            <div class="sm:flex justify-between items-center">
                <Link to="#" class="text-black text-2xl font-bold p-3 mr-4"> SmartPhone Corner</Link>
    
                <button class="text-white sm:hidden focus:outline-none">
                    <i class="fas fa-bars"></i>
                </button>
    
                <ul class="text-gray-300 sm:flex sm:self-center text-1xl border-t sm:border-none font-sans mt-4 sm:mt-0 hidden m-auto justify-center space-x-8 p-3">
                    <li class="sm:inline-block">
                        <Link to="/" class="p-3 text-black">HOME</Link>
                    </li>
                    <li class="sm:inline-block">
                        <Link to="/product" class="p-3 text-black">PRODUCTS</Link>
                    </li>
                    <li class="sm:inline-block">
                        <Link to="/about" class="p-3 text-black">ABOUT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      );
};

export default Nav;
