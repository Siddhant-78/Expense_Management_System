import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 p-4 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to={'/'} className="hover:text-white transition-colors">Privacy</Link>
          <Link to={'/'} className="hover:text-white transition-colors">Terms</Link>
          <Link to={'/'} className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;