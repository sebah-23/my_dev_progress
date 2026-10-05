import React from "react";
import {Link} from "react-router-dom";

function Header (){
    return (
      <header className=" bg-pink-100 ">

        <div className=" max-w-7xl mx-auto px-6 py-4 flex item-center justify-between">
            <h1 className="text-2xl font-bold">𝓩𝓔𝓜𝓤𝓝𝓘’𝓢</h1>

            <nav className=" flex item-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-black"> Home </Link>
            <Link to="/products" className="text-gray-700 hover:text-black"> Products</Link>
            <Link to="/custom-order" className="text-gray-700 hover:text-black"> Custom-order</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black" > Contact</Link>

            </nav>

        </div>
             




      </header>

    )



}








export default Header;