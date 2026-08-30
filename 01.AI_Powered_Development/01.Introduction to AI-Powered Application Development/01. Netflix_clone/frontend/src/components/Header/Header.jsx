import { useState } from "react";
import { FaSearch, FaBell, FaUser,FaChevronDown,} from "react-icons/fa";

function Header() {
  const [showAccount, setShowAccount] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="bg-black text-white h-[70px] flex items-center px-6 md:px-10 relative z-50">
      <div className="text-red-600 text-2xl font-bold mr-12">
        NETFLIX
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#" className="hover:text-gray-300">  Home </a>
        <a href="#" className="hover:text-gray-300">TV Shows </a>
        <a href="#" className="hover:text-gray-300"> Movies  </a>
        <a href="#" className="hover:text-gray-300">New & Popular </a>
        <a href="#" className="hover:text-gray-300"> My List  </a>
        <a href="#" className="hover:text-gray-300"> Browse by Language </a>
      </nav>
      <div className="ml-auto flex items-center gap-6">
        <div className="flex items-center">
          {showSearch && (
            <input type="text" placeholder="Search" autoFocus
              className="w-48 bg-black border border-gray-500 text-white px-3 py-2 outline-none mr-2" /> )}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-white hover:text-gray-300"
          >
            <FaSearch />
          </button>
        </div>
        <button className="relative text-white hover:text-gray-300">
          <FaBell />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <div className="relative">
          <button
            onClick={() => setShowAccount(!showAccount)}
            className="flex items-center gap-4"
          >
            <div className="bg-gray-700 w-9 h-9 rounded flex items-center justify-center">
              <FaUser /> 
            </div>
            <FaChevronDown />
          </button>
          {showAccount && (
            <div className="absolute right-0 top-12 w-48 bg-black/95 border border-gray-700 shadow-lg">
              <button className="w-full text-left px-4 py-4 hover:bg-gray-800"> Account </button>
              <button className="w-full text-left px-4 py-4 hover:bg-gray-800">Help Center </button>
              <button className="w-full text-left px-4 py-4 border-t border-gray-700 hover:bg-gray-800">
                Sign out </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;