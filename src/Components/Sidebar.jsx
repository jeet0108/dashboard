import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home, Users, Settings, ChevronDown, ChevronUp, Menu, X, ChevronFirst, LayoutDashboard, Layers, ShoppingCart,
  BookOpenText, Warehouse, FileArchive, UsersRound, GlobeLock, BookOpenCheck, KeyRound, WandSparkles, Package,
  WalletCards, Webhook, ChevronsLeftRightEllipsis, Pi, BookCopy, TicketCheck, TableCellsMerge, Grid3x3,
  TrendingUp, MapPin, CircleHelp, FileDigit, ShoppingBasket,
  Calendar1
} from "lucide-react";
import logo from '../assets/img/logo.png';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
  const [isProducts, setIsProducts] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    if (window.innerWidth < 1100) { // lg breakpoint
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white ${
          isOpen
            ? "w-64 h-screen lg:h-screen"
            : "w-16 h-screen"
        } transition-all duration-300 fixed top-0 left-0 z-50 overflow-y-auto custom-scrollbar`}
      >
        {/* Logo & Toggle Button */}
        <div className="bg-gray-900 flex justify-between items-center rounded-b-md border-b-1 sticky top-0 p-2 z-10">
          <div className={`w-[35px] h-auto ${isOpen ? "block" : "hidden"}`}>
            <img src={logo} alt="logo" />
          </div>
          <h2 className={`text-3xl font-bold text-blue-200 font-[Montserrat] ${isOpen ? "block" : "hidden"}`}>
            Jeet
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-5 space-y-1 px-2 pb-4">
          {/* Dashboards - With Dropdown */}
          <div className="w-full">
            <button
              className={`flex justify-between items-center px-3 py-2 rounded-md transition w-full ${
                location.pathname === "/" ? "bg-blue-600 text-black" : "hover:bg-gray-800"
              }`} 
              onClick={() => {setIsDashboardOpen(!isDashboardOpen)
              }}
            >
              <div className="flex items-center gap-3">
                <Users size={20} />
                <span className={`${isOpen ? "block" : "hidden"}`}>Dashboards</span>
              </div>
              {isOpen && (isDashboardOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
            </button>

            {isDashboardOpen && isOpen && (
              <div className="ml-6 mt-1 space-y-1">
                <Link to="/analytics">
                  <button
                    className={`flex items-center px-4 py-2 rounded-md transition w-full text-sm ${
                      location.pathname === "/analytics" ? "bg-blue-500 text-black" : "hover:bg-gray-800"
                    }`}
                    onClick={() =>  { handleMenuClick();}}
                  >
                    Analytics
                  </button>
                </Link>
                <Link to="/CRM">
                  <button
                    className={`flex items-center px-4 py-2 rounded-md transition w-full text-sm ${
                      location.pathname === "/CRM" ? "bg-blue-500 text-black" : "hover:bg-gray-800"
                    }`}
                    onClick={() =>  { handleMenuClick();}}

                  >
                    CRM
                  </button>
                </Link>
                <button className="flex items-center gap-3 px-4 py-2 rounded-md transition hover:bg-gray-800 w-full text-sm">
                  eCommerce
                </button>
                <button className="flex items-center gap-3 px-4 py-2 rounded-md transition hover:bg-gray-800 w-full text-sm">
                  Logistics
                </button>
                <button className="flex items-center gap-3 px-4 py-2 rounded-md transition hover:bg-gray-800 w-full text-sm">
                  Academy
                </button>
              </div>
            )}
          </div>

          {/* Other Menu Items */}
          <Link to={"/Calendar"}>
            <button className={`flex items-center gap-3 px-3 py-2 rounded-md transition w-full ${location.pathname === "/Calendar" ?"bg-blue-500 text-black" : "hover:bg-gray-800"}`}>
              <Calendar1 size={20} />
              <span className={`${isOpen ? "block" : "hidden"}`}>Calendar</span>
            </button>
          </Link>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <Layers size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Front Pages</span>
          </button>

          {/* eCommerce - With Dropdown */}
          <div className="w-full">
            <button
              className="flex justify-between items-center px-3 py-2 rounded-md transition w-full hover:bg-gray-800"
              onClick={() => setIsEcommerceOpen(!isEcommerceOpen)}
            >
              <div className="flex items-center gap-3">
                <ShoppingCart size={20} />
                <span className={`${isOpen ? "block" : "hidden"}`}>eCommerce</span>
              </div>
              {isOpen && (isEcommerceOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
            </button>

            {isEcommerceOpen && isOpen && (
              <div className="ml-6 mt-1 space-y-1">
                <Link to="/CRM">
                  <button
                    className={`flex items-center px-4 py-2 rounded-md transition w-full text-sm ${
                      location.pathname === "/analytics" ? "bg-blue-500 text-black" : "hover:bg-gray-800"
                    }`}
                    onClick={() =>  { handleMenuClick();}}

                  >
                    Dashboard
                  </button>
                </Link>
                <button
                  className="flex justify-between items-center px-4 py-2 rounded-md transition w-full text-sm hover:bg-gray-800"
                  onClick={() => setIsProducts(!isProducts)}
                  
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBasket size={20} />
                    <span>Products</span>
                  </div>
                  {isProducts ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {isProducts && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link to="/ProductList">
                      <button
                        className={`flex items-center px-4 py-2 rounded-md transition w-full text-sm ${
                          location.pathname === "/ProductList" ? "bg-blue-500 text-black" : "hover:bg-gray-800"
                        }`}                   
                         onClick={() =>  { handleMenuClick();}}

                      >
                        Products List
                      </button>
                    </Link>
                    <Link to="/AddProduct">
                      <button
                        className={`flex items-center px-4 py-2 rounded-md transition w-full text-sm ${
                          location.pathname === "/AddProduct" ? "bg-blue-500 text-black" : "hover:bg-gray-800"
                        }`}
                        onClick={() =>  { handleMenuClick();}}

                      >
                        Add Product
                      </button>
                    </Link>
                    <Link to="/CategoryList">
                      <button
                        className={`flex items-center px-4 py-2 rounded-md transition w-full text-sm ${
                          location.pathname === "/CategoryList" ? "bg-blue-500 text-black" : "hover:bg-gray-800"
                        }`}
                        onClick={() =>  { handleMenuClick();}}

                      >
                        Category List
                      </button>
                    </Link>
                  </div>
                )}
                <button className="flex items-center gap-3 px-4 py-2 rounded-md transition hover:bg-gray-800 w-full text-sm">
                  Order
                </button>
                <button className="flex items-center gap-3 px-4 py-2 rounded-md transition hover:bg-gray-800 w-full text-sm">
                  Customer
                </button>
              </div>
            )}
          </div>

          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <BookOpenText size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Academy</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <Warehouse size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Logistics</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <FileArchive size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Invoice</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <UsersRound size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Users</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <GlobeLock size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Roles & Permissions</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <BookOpenCheck size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Pages</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <KeyRound size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Authentications</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <WandSparkles size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Wizard Examples</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <Package size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Modal Examples</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <WalletCards size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Cards</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <Webhook size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>User Interface</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <ChevronsLeftRightEllipsis size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Extended UI</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <Pi size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Icons</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <BookCopy size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Form Elements</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <BookCopy size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Form Layouts</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <BookCopy size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Form Wizard</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <TicketCheck size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Form Validation</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <TableCellsMerge size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Tables</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <Grid3x3 size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Datatables</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <TrendingUp size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Charts</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <MapPin size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Leaflet Maps</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <CircleHelp size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Support</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 w-full">
            <FileDigit size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Documentation</span>
          </button>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;