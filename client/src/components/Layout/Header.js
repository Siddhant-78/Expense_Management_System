import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  
  return (
    <>
      <nav className="bg-gray-800 text-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link className="text-xl font-bold text-green-400" to="/">
                Expense Tracker
              </Link>
            </div>
            
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-4 gap-2">
                {loginUser && (
                  <p className="text-gray-300">{loginUser.name}</p>
                )}
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
            
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-inner">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {loginUser && (
                <p className="text-gray-300 block px-3 py-2">{loginUser.name}</p>
              )}
              <button 
                className="w-full text-left bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded transition-colors"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;