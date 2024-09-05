import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";

const Newbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 py-3 dark:bg-gray-900 shadow-xl">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-1 mx-auto">
        {/* Logo section */}
        <a href="#" className="flex items-center">
          {/* remove border */}
          <img src="logo.jpg" className="h-7 ml-5 mr-3 sm:h-9  border" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white">Expense Tracker</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 mr-2 text-grey-500 text-2xl lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <RiCloseLargeLine /> 
          ) : (
            <GiHamburgerMenu />
          )}
        </button>

        {/* desktop and mobile menu */}
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium">
            <li>
              <a href="#" className="text-purple-700 text-lg lg:text-purple-700 dark:text-white py-2 px-.5 block">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-lg dark:text-gray-400 dark:hover:text-white py-2 px-.5 block"
              >
                Transactions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-lg dark:text-gray-400 dark:hover:text-white py-2 px-.5 block"
              >
                Create New
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-lg dark:text-gray-400 dark:hover:text-white py-2 px-.5 block"
              >
                Compare
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-lg dark:text-gray-400 dark:hover:text-white py-2 px-.5 block"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-lg dark:text-gray-400 dark:hover:text-white py-2 px-.5 block"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Sign Up button */}
        <a
          href="#"
          className="hidden lg:inline-block text-white font-medium bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-md px-5 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Newbar;
