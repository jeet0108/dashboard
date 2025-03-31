import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Header from "./Components/Header.jsx";
import Analytics from "./Pages/Analytics.jsx";
import CRM from "./Pages/CRM.jsx";
import ProductList from "./Pages/ProductList.jsx";
import AddProduct from "./Pages/AddProduct.jsx";
import CategoryList from "./Pages/CategoryList.jsx";
import Calendar from "./Pages/Calendar.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"; 
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function Layout() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1100);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Normalize paths to lowercase for consistency
  const isLoginPage = location.pathname.toLowerCase() === "/login";
  const isSignupPage = location.pathname.toLowerCase() === "/signup";

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {!isLoginPage && !isSignupPage && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="flex-1 flex flex-col w-full">
        {!isLoginPage && !isSignupPage && <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
        <main
          className={`flex-1 overflow-auto ${
            isLoginPage || isSignupPage
              ? "flex items-center justify-center h-screen"
              : "p-3 transition-all duration-300"
          } ${
            isOpen && window.innerWidth > 1100 && !isLoginPage && !isSignupPage
              ? "lg:ml-64 mt-16"
              : isLoginPage || isSignupPage
              ? ""
              : "mt-16 ml-16"
          }`}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Changed to lowercase */}
            <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/crm" element={<ProtectedRoute><CRM /></ProtectedRoute>} /> {/* Lowercase for consistency */}
            <Route path="/productlist" element={<ProtectedRoute><ProductList /></ProtectedRoute>} /> {/* Lowercase */}
            <Route path="/addproduct" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} /> {/* Lowercase */}
            <Route path="/categorylist" element={<ProtectedRoute><CategoryList /></ProtectedRoute>} /> {/* Lowercase */}
            <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;