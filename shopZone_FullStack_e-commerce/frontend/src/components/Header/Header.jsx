import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900"
        >
          ShopZone
        </Link>

        {/* Search */}
        <div className="hidden flex-1 md:flex">
          <div className="flex w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-l-md border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-gray-900"
            />

            <button
              type="button"
              className="rounded-r-md bg-gray-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Search
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-5">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hidden text-sm font-medium text-gray-700 hover:text-gray-900 sm:block"
          >
            Register
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-1 text-sm font-semibold text-gray-900"
          >
            🛒 Cart
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;