import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#141414] text-gray-400 px-6 md:px-16 py-12">
      
      <div className="max-w-4xl mx-auto">

        <div className="flex gap-8 mb-6">
          <FaFacebookF className="text-white text-xl cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-white text-xl cursor-pointer hover:text-gray-400" />
          <FaTwitter className="text-white text-xl cursor-pointer hover:text-gray-400" />
          <FaYoutube className="text-white text-xl cursor-pointer hover:text-gray-400" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-sm">

          <div className="flex flex-col gap-4">
            <a href="#" className="hover:underline">
              Audio Description
            </a>

            <a href="#" className="hover:underline">
              Investor Relations
            </a>

            <a href="#" className="hover:underline">
              Legal Notices
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="hover:underline">
              Help Centre
            </a>

            <a href="#" className="hover:underline">
              Jobs
            </a>

            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:underline">
              Gift Cards
            </a>

            <a href="#" className="hover:underline">
              Terms of Use
            </a>

            <a href="#" className="hover:underline">
              Corporate Information
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="hover:underline">
              Media Centre
            </a>

            <a href="#" className="hover:underline">
              Privacy
            </a>

            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>

        </div>
        <p className="text-sm mt-8">
          © 1997-2026 Netflix, Inc.
        </p>

      </div>
    </footer>
  );
}

export default Footer;