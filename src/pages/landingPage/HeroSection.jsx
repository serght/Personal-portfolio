import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import Navbar from "../../components/Navbar";
import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const { isDayMode, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDayMode ? "bg-white" : "bg-gray-900"
      }`}
    >
      <Navbar />

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-120px)]">
        <div
          className={`lg:w-1/2 flex items-center justify-center p-8 transition-colors duration-500 ${
            isDayMode ? "bg-gray-900" : "bg-gray-800"
          }`}
        >
          <div className="relative w-full h-full max-w-lg">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="40"
                y="280"
                width="320"
                height="50"
                rx="8"
                fill={isDayMode ? "#D2691E" : "#A0522D"}
              />
              <rect
                x="40"
                y="285"
                width="320"
                height="40"
                rx="6"
                fill={isDayMode ? "#CD853F" : "#8B4513"}
              />
              {/* Table - Legs */}
              <rect
                x="60"
                y="330"
                width="8"
                height="40"
                fill={isDayMode ? "#8B4513" : "#654321"}
              />
              <rect
                x="332"
                y="330"
                width="8"
                height="40"
                fill={isDayMode ? "#8B4513" : "#654321"}
              />
              {/*Shadow of the table*/}
              <ellipse
                cx="200"
                cy="375"
                rx="160"
                ry="15"
                fill={isDayMode ? "#8B4513" : "#4A2C1A"}
                opacity="0.3"
              />
              {/* Main Window - Day/Night View */}
              <rect
                x="30"
                y="80"
                width="140"
                height="120"
                rx="8"
                fill={isDayMode ? "#8B4513" : "#654321"}
              />
              <rect
                x="35"
                y="85"
                width="130"
                height="110"
                rx="4"
                fill={isDayMode ? "#87CEEB" : "#1a1a2e"}
              />
              {/* Window Frame */}
              <rect
                x="100"
                y="85"
                width="3"
                height="110"
                fill={isDayMode ? "#8B4513" : "#654321"}
              />
              <rect
                x="35"
                y="140"
                width="130"
                height="3"
                fill={isDayMode ? "#8B4513" : "#654321"}
              />
              {/* Day Mode - Sun and Clouds */}
              {isDayMode ? (
                <>
                  {/* Sun */}
                  <circle cx="120" cy="115" r="15" fill="#FFD700" />
                  <g stroke="#FFD700" strokeWidth="2">
                    <line x1="120" y1="85" x2="120" y2="90" />
                    <line x1="120" y1="140" x2="120" y2="145" />
                    <line x1="90" y1="115" x2="95" y2="115" />
                    <line x1="145" y1="115" x2="150" y2="115" />
                    <line x1="97" y1="92" x2="101" y2="96" />
                    <line x1="139" y1="134" x2="143" y2="138" />
                    <line x1="143" y1="92" x2="139" y2="96" />
                    <line x1="101" y1="134" x2="97" y2="138" />
                  </g>

                  {/* Clouds */}
                  <g fill="#FFFFFF">
                    <circle cx="60" cy="105" r="8" />
                    <circle cx="70" cy="105" r="10" />
                    <circle cx="80" cy="105" r="8" />
                    <circle cx="75" cy="98" r="6" />

                    <circle cx="135" cy="165" r="6" />
                    <circle cx="143" cy="165" r="8" />
                    <circle cx="151" cy="165" r="6" />
                    <circle cx="147" cy="159" r="4" />
                  </g>

                  {/* Grass/Ground */}
                  <rect x="35" y="175" width="130" height="20" fill="#90EE90" />
                  <rect x="35" y="185" width="130" height="10" fill="#228B22" />
                </>
              ) : (
                <>
                  {/* Night Mode - Moon and Stars */}
                  <circle cx="120" cy="115" r="12" fill="#F5F5DC" />
                  <circle
                    cx="125"
                    cy="110"
                    r="2"
                    fill={isDayMode ? "#87CEEB" : "#16213e"}
                  />
                  <circle
                    cx="122"
                    cy="118"
                    r="1.5"
                    fill={isDayMode ? "#87CEEB" : "#16213e"}
                  />
                  <circle
                    cx="117"
                    cy="112"
                    r="1"
                    fill={isDayMode ? "#87CEEB" : "#16213e"}
                  />

                  {/* Stars */}
                  <g fill="#FFFFFF">
                    <circle cx="60" cy="100" r="1" />
                    <circle cx="80" cy="95" r="1.5" />
                    <circle cx="145" cy="105" r="1" />
                    <circle cx="50" cy="125" r="1" />
                    <circle cx="150" cy="130" r="1.5" />
                    <circle cx="65" cy="140" r="1" />
                  </g>

                  {/* Ground/Night landscape */}
                  <rect x="35" y="175" width="130" height="20" fill="#2F4F2F" />
                  <rect x="35" y="185" width="130" height="10" fill="#1C3A1C" />
                </>
              )}
              {/* Coffee Cup */}
              <rect
                x="70"
                y="270"
                width="35"
                height="5"
                rx="2"
                fill={isDayMode ? "#8B4513" : "#654321"}
              />{" "}
              {/* Cup holder*/}
              <rect
                x="70"
                y="260"
                width="35"
                height="25"
                rx="17"
                fill={isDayMode ? "#8B4513" : "#654321"}
              />
              <rect
                x="75"
                y="265"
                width="25"
                height="15"
                rx="12"
                fill={isDayMode ? "#D2691E" : "#A0522D"}
              />
              {/* Coffee Handle */}
              <path
                d="M105 272 Q115 272 115 277 Q115 282 105 282"
                stroke={isDayMode ? "#8B4513" : "#654321"}
                strokeWidth="2"
                fill="none"
              />
              {/* Coffee Steam */}
              <path
                d="M82 255 Q77 245 82 235"
                stroke={isDayMode ? "#E2E8F0" : "#CBD5E0"}
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M88 250 Q83 240 88 230"
                stroke={isDayMode ? "#E2E8F0" : "#CBD5E0"}
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M94 255 Q89 245 94 235"
                stroke={isDayMode ? "#E2E8F0" : "#CBD5E0"}
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              {/* Laptop*/}
              <rect
                x="180"
                y="240"
                width="140"
                height="60"
                rx="6"
                fill={isDayMode ? "#2D3748" : "#1A202C"}
              />{" "}
              {/* Base */}
              <rect
                x="185"
                y="245"
                width="130"
                height="50"
                rx="3"
                fill={isDayMode ? "#4A5568" : "#2D3748"}
              />{" "}
              {/* inner base */}
              {/* Screen */}
              <rect
                x="185"
                y="180"
                width="130"
                height="65"
                rx="3"
                fill={isDayMode ? "#1A202C" : "#000000"}
              />
              <rect
                x="190"
                y="185"
                width="120"
                height="55"
                rx="2"
                fill={isDayMode ? "#4299E1" : "#2B6CB0"}
              />
              {/* Screen Content */}
              <rect
                x="195"
                y="190"
                width="110"
                height="45"
                rx="2"
                fill={isDayMode ? "#1A202C" : "#000000"}
              />
              <rect x="200" y="195" width="60" height="1.5" fill="#4299E1" />
              <rect x="200" y="200" width="45" height="1.5" fill="#48BB78" />
              <rect x="200" y="205" width="70" height="1.5" fill="#ED8936" />
              <rect x="200" y="210" width="35" height="1.5" fill="#9F7AEA" />
              <rect x="200" y="215" width="55" height="1.5" fill="#4299E1" />
              <rect x="200" y="220" width="40" height="1.5" fill="#48BB78" />
              <rect x="200" y="225" width="65" height="1.5" fill="#ED8936" />
              {/* Trackpad */}
              <rect
                x="225"
                y="260"
                width="40"
                height="25"
                rx="6"
                fill={isDayMode ? "#2D3748" : "#1A202C"}
              />
              {/* trash */}
              <rect
                x="20"
                y="350"
                width="25"
                height="40"
                rx="2"
                fill={isDayMode ? "#2D3748" : "#1A202C"}
              />
              <rect
                x="22"
                y="355"
                width="21"
                height="30"
                rx="1"
                fill={isDayMode ? "#4A5568" : "#2D3748"}
              />
              <rect
                x="25"
                y="360"
                width="15"
                height="5"
                rx="2"
                fill={isDayMode ? "#E2E8F0" : "#CBD5E0"}
              />
              {/* Plant Pot*/}
              <rect
                x="330"
                y="250"
                width="30"
                height="35"
                rx="3"
                fill={isDayMode ? "#8B4513" : "#A0522D"}
              />
              <rect
                x="333"
                y="253"
                width="24"
                height="30"
                rx="2"
                fill={isDayMode ? "#654321" : "#4A2C1A"}
              />
              <path
                d="M345 250 Q337 235 333 220 Q340 223 348 235 Q352 242 345 250"
                fill={isDayMode ? "#48BB78" : "#38A169"}
              />
              <path
                d="M345 250 Q353 238 360 225 Q358 228 353 238 Q350 245 345 250"
                fill={isDayMode ? "#68D391" : "#4FD1C7"}
              />
              <path
                d="M345 250 Q342 238 338 222 Q345 225 350 238 Q348 245 345 250"
                fill={isDayMode ? "#38A169" : "#2F855A"}
              />
              {/* Smartphone */}
              <rect
                x="150"
                y="255"
                width="20"
                height="35"
                rx="4"
                fill={isDayMode ? "#2D3748" : "#1A202C"}
              />
              <rect
                x="152"
                y="258"
                width="16"
                height="25"
                rx="2"
                fill={isDayMode ? "#4299E1" : "#2B6CB0"}
              />
              <circle
                cx="160"
                cy="287"
                r="2"
                fill={isDayMode ? "#E2E8F0" : "#CBD5E0"}
              />
            </svg>
          </div>
        </div>

        <div
          className={`lg:w-1/2 flex items-center justify-center p-8 lg:p-16 transition-all duration-500 ${
            isDayMode
              ? "bg-gradient-to-br from-purple-500 to-pink-500"
              : "bg-gradient-to-br from-purple-800 to-indigo-800"
          }`}
        >
          <div className="max-w-lg">
            <div className="space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                I enjoy building challenging projects that help me grow as a
                developer and a person.
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Behind every project: a story of growth. Dive in!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/projects"
                  className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
