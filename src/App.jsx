import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Header from "./Components/Header.jsx";
import Analytics from "./Pages/Analytics.jsx";
import CRM from "./Pages/CRM.jsx";
import ProductList from "./Pages/ProductList.jsx";
import AddProduct from "./Pages/AddProduct.jsx";
import CategoryList from "./Pages/CategoryList.jsx";
import Calendar from "./Pages/Calendar.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex-1 flex flex-col w-full">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />

          <main
            className={`flex-1 overflow-auto p-3 transition-all duration-300 ${
              isOpen && window.innerWidth > 1100
                ? "lg:ml-64 mt-16" // Sidebar width (16rem) + header height
                : "mt-16 ml-16" // Only header height on mobile or when sidebar is closed
            }`}
          >
            <Routes>
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/CRM" element={<CRM />} />
              <Route path="/ProductList" element={<ProductList />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="/CategoryList" element={<CategoryList />} />
              <Route path="/Calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;