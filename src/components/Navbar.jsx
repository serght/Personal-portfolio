import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { isDayMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const changeLanguage = (e) => i18n.changeLanguage(e.target.value);

  return (
    <nav className="relative">
      <div className="flex justify-between items-center p-4 md:p-6 lg:p-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className={`text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 hover:scale-110 active:scale-95 transform-gpu ${
            isDayMode
              ? "text-[#2F3E46] hover:text-[#354F52] hover:drop-shadow-md"
              : "text-[#CAD2C5] hover:text-[#84A98C] hover:drop-shadow-lg hover:drop-shadow-green-400/20"
          }`}
        >
          SERGHT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <div className="flex space-x-4 lg:space-x-6">
            {["projects", "skills", "hobbies", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className={`text-lg lg:text-xl font-medium transition-all hover:scale-105 ${
                  isDayMode
                    ? "text-[#354F52] hover:text-[#2F3E46]"
                    : "text-[#84A98C] hover:text-[#CAD2C5]"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${
              isDayMode
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            aria-label="Toggle theme"
          >
            {isDayMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Language selector */}
          <select
            onChange={changeLanguage}
            value={i18n.language}
            className={`rounded-md text-sm px-3 py-1 border focus:outline-none ${
              isDayMode
                ? "bg-white border-gray-300 text-gray-800"
                : "bg-gray-800 border-gray-600 text-white"
            }`}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        {/* Mobile Theme + Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${
              isDayMode
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {isDayMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-full transition-all z-20 relative ${
              isDayMode
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-10" onClick={closeMenu}>
          <div
            className={`absolute top-0 right-0 w-64 h-full shadow-lg transform transition-transform duration-300 ${
              isDayMode
                ? "bg-white border-l border-gray-200"
                : "bg-gray-900 border-l border-gray-700"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-20 px-6 flex flex-col space-y-6">
              {["projects", "skills", "hobbies", "contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  onClick={closeMenu}
                  className={`text-lg font-medium transition-all hover:scale-105 ${
                    isDayMode
                      ? "text-[#354F52] hover:text-[#2F3E46]"
                      : "text-[#84A98C] hover:text-[#CAD2C5]"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}

              {/* Language selector for mobile */}
              <select
                onChange={changeLanguage}
                value={i18n.language}
                className={`mt-4 rounded-md text-sm px-3 py-2 border focus:outline-none ${
                  isDayMode
                    ? "bg-white border-gray-300 text-gray-800"
                    : "bg-gray-800 border-gray-600 text-white"
                }`}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
