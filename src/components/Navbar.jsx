import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { isDayMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-6 md:p-8">
      {/* SERGHT */}
      <Link
        to="/"
        className={`text-2xl md:text-3xl font-bold transition-all duration-300 hover:scale-110 active:scale-95 transform-gpu ${
          isDayMode
            ? "text-[#2F3E46] hover:text-[#354F52] hover:drop-shadow-md"
            : "text-[#CAD2C5] hover:text-[#84A98C] hover:drop-shadow-lg hover:drop-shadow-green-400/20"
        } cursor-pointer select-none`}
      >
        SERGHT
      </Link>

      <div className="flex items-center space-x-6 md:space-x-8">
        {/* Navigation links */}
        <div className="flex space-x-4 md:space-x-6">
          {["projects", "skills", "hobbies", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className={`text-lg md:text-xl font-medium transition-all hover:scale-105 ${
                isDayMode
                  ? "text-[#354F52] hover:text-[#2F3E46]"
                  : "text-[#84A98C] hover:text-[#CAD2C5]"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Theme toggle button */}
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
      </div>
    </nav>
  );
}
