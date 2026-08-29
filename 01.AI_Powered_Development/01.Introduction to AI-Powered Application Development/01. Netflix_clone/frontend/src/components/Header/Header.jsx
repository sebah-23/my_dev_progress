import { FaSearch, FaBell, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-red-600 text-3xl font-bold">
          NETFLIX
        </h1>

        <nav className="hidden md:flex gap-6 text-white text-sm">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>

          <a href="#" className="hover:text-gray-400">
            Movies
          </a>

          <a href="#" className="hover:text-gray-400">
            TV Shows
          </a>

          <a href="#" className="hover:text-gray-400">
            My List
          </a>
        </nav>

        <div className="flex items-center gap-5 text-white">
          <FaSearch className="cursor-pointer" />
          <FaBell className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
        </div>

      </div>
    </header>
  );
}

export default Header;