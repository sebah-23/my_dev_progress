import React, { useState } from "react";
import {Link} from "react-router-dom";


function Header () {
  const [menuOpen,setMenuOpen] = useState(false);

    return (
      <header className=" bg-pink-100 ">

        <div className=" max-w-7xl mx-auto px-6 py-4 flex item-center justify-between">
            <h1 className="text-2xl font-bold">𝓩𝓔𝓜𝓤𝓝𝓘’𝓢</h1>

            <nav className="hidden md:flex item-center gap-6 ">
            <Link to="/" className="text-gray-700 hover:text-black"> Home </Link>
            <Link to="/products" className="text-gray-700 hover:text-black"> Products</Link>
            <Link to="/custom-order" className="text-gray-700 hover:text-black"> Custom-order</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black" > Contact</Link>

            </nav>

           <button onClick={()=> setMenuOpen(!menuOpen)} className="md:hidden text-4xl"> ☰ </button>

           {menuOpen && (
               <nav className="md:hidden flex flex-col items-start gap-4 ">
            <Link to="/" onClick={()=> setMenuOpen(false)}  className="text-gray-700 hover:text-black"> Home </Link>
            <Link to="/products" onClick={()=> setMenuOpen(false)} className="text-gray-700 hover:text-black"> Products</Link>
            <Link to="/custom-order" onClick={()=> setMenuOpen(false)} className="text-gray-700 hover:text-black"> Custom-order</Link>
            <Link to="/contact" onClick={()=> setMenuOpen(false)} className="text-gray-700 hover:text-black" > Contact</Link>

            </nav>

           )

           }
         
        </div>
        
      </header>

    )



}








export default Header;