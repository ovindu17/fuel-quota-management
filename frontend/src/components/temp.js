//current design of navbar

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ brand, links }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#1d0c2e] text-white  fixed top-0 left-0 w-full z-50">
      {/* Desktop Navigation */}
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="text-2xl font-bold">
            {brand}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Links */}
          <div className="hidden space-x-4 md:flex">
            {links?.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md ${
                  location.pathname === link.path ? "bg-blue-600" : ""
                }`}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {" "}
            {/* Added pb-4 for bottom padding */}
            {links?.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 hover:bg-gray-700 rounded-lg
                  ${
                    location.pathname === link.path
                      ? "bg-blue-600 rounded-lg  hover:bg-blue-600"
                      : ""
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
