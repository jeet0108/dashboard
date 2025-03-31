import {
  Menu,
  Search,
  Bell,
  User,
  ChevronDown,
  Languages,
  SunMoon,
  ShoppingCart,
  Cog,
} from "lucide-react";
import { useState } from "react";
import { Link} from "react-router-dom";


const Header = ({ isOpen, setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header
      className={`bg-gray-900 text-white p-3 z-50 flex items-center h-15 right-0 top-0 fixed justify-between shadow-md mx-2 rounded-b-xl transition-all duration-300 ${
        isOpen ? "left-64" : "left-16"
      }`}
    >
      {/* Middle Section: Search Bar */}

      <div className="flex items-center justify-center">
        {/* <Menu className="me-3 custom-hide1" size={26} /> */}

        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md pl-10 focus:outline-none "
          />
          <Search
            className="absolute left-3 top-3.5 text-gray-400 "
            size={18}
          />
        </div>
      </div>

      {/* Right Section: Notifications & Profile */}
      <div className="flex items-center gap-4 group">
        <div className="gap-3 lg:block hidden">
          <button
            className="relative p-2 rounded-md hover:bg-gray-700"
            title="Languages"
          >
            <Languages size={20} />
          </button>
          <button
            className="relative p-2 rounded-md hover:bg-gray-700"
            title="Dark Mode"
          >
            <SunMoon size={20} />
          </button>
          <button
            className="relative p-2 rounded-md hover:bg-gray-700"
            title="Cart"
          >
            <ShoppingCart size={20} />
          </button>
          <button
            className="relative p-2 rounded-md hover:bg-gray-700"
            title="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 bg-red-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
              7
            </span>
          </button>
          <button
            className="relative p-2 rounded-md hover:bg-gray-700"
            title="Settings"
          >
            <Cog size={20} />
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="relative z-50">
          <button
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <User size={20} />

            <span className="hidden lg:block">Admin</span>
            <ChevronDown size={16} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg py-2 z-50">
              <button className="block px-4 py-2 w-full text-left rounded-lg hover:bg-gray-700">
                Profile
              </button>
              <button className="block px-4 py-2 w-full text-left rounded-lg hover:bg-gray-700">
                Settings
              </button>
              <Link to={"/login"}>
                <button className="block px-4 py-2 w-full text-left rounded-lg hover:bg-red-600">
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
