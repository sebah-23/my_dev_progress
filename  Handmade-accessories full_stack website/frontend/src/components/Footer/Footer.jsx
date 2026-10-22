import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer  className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
      <div>
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">Zemuni</h2>
          <p className="max-w-sm leading-7 text-gray-400">
            Handmade accessories, created with love
            and made just for you.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul>
            <li> <Link to="/"className="transition-colors duration-200 hover:text-white">Home</Link></li>
            <li><Link to="/" className="transition-colors duration-200 hover:text-white">Products</Link></li>
            <li><Link to="/" className="transition-colors duration-200 hover:text-white">Custom order</Link></li>
            <li><Link to="/"  className="transition-colors duration-200 hover:text-white">contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
          <p className="mb-3 text-gray-400">Email: zemuni@gmail.com</p>
          <p className="mb-3 text-gray-400">Ethiopia</p>
        </div>
      </div>

      <div className="border-t border-gray-700 px-6 py-5 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Zemuni.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;