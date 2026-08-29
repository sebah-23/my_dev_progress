function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-12">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-red-600 text-2xl font-bold mb-6">
          NETFLIX
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <p className="mb-2 hover:text-white cursor-pointer">
              About
            </p>

            <p className="mb-2 hover:text-white cursor-pointer">
              Careers
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Help
            </h3>

            <p className="mb-2 hover:text-white cursor-pointer">
              FAQ
            </p>

            <p className="mb-2 hover:text-white cursor-pointer">
              Contact Us
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Legal
            </h3>

            <p className="mb-2 hover:text-white cursor-pointer">
              Privacy
            </p>

            <p className="mb-2 hover:text-white cursor-pointer">
              Terms
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Follow Us
            </h3>

            <p className="mb-2 hover:text-white cursor-pointer">
              Facebook
            </p>

            <p className="mb-2 hover:text-white cursor-pointer">
              Instagram
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          © 2026 Netflix Clone. Built for learning.
        </div>

      </div>

    </footer>
  );
}

export default Footer;