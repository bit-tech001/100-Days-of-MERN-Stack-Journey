import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          DevBrand
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/About" className="hover:text-black transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/Product" className="hover:text-black transition">
              Product
            </Link>
          </li>

          <li>
            <Link to="/ContactUs" className="hover:text-black transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link
          to="/Product"
          className="hidden md:block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Get Started
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
