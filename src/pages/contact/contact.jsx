import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Navbar from "../../components/Navbar";

const Contact = () => {
  const { isDayMode } = useTheme();

  const contactMethods = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      description: "Follow my journey",
      link: "https://www.instagram.com/serght41?igsh=dmx3NG9yeThxeXo1",
      bgColor: isDayMode ? "bg-pink-50" : "bg-pink-900/20",
      hoverColor: "hover:bg-pink-100 dark:hover:bg-pink-900/30",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200 dark:border-pink-800",
      lineColor: "bg-pink-600",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      description: "Check out my code",
      link: "https://github.com/serght",
      bgColor: isDayMode ? "bg-gray-50" : "bg-gray-900/20",
      hoverColor: "hover:bg-gray-100 dark:hover:bg-gray-900/30",
      iconColor: "text-gray-700 dark:text-gray-300",
      borderColor: "border-gray-200 dark:border-gray-700",
      lineColor: "bg-gray-700 dark:bg-gray-300",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      description: "Connect professionally",
      link: "https://www.linkedin.com/in/sergio-herrera-aa9730212/",
      bgColor: isDayMode ? "bg-blue-50" : "bg-blue-900/20",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200 dark:border-blue-800",
      lineColor: "bg-blue-600",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDayMode
          ? "bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]"
          : "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]"
      }`}
    >
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div
              className={`w-16 h-1 rounded-full ${
                isDayMode ? "bg-[#3B82F6]" : "bg-[#60A5FA]"
              }`}
            ></div>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-8 ${
              isDayMode ? "text-[#1E293B]" : "text-white"
            }`}
          >
            Let's get in touch
          </h1>

          <p
            className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed ${
              isDayMode ? "text-[#64748B]" : "text-[#94A3B8]"
            }`}
          >
            Sergio Herrera Tellez.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                isDayMode
                  ? `${method.bgColor} ${method.borderColor} shadow-lg hover:shadow-xl`
                  : `${method.bgColor} ${method.borderColor} shadow-2xl hover:shadow-3xl backdrop-blur-sm`
              } ${method.hoverColor}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  method.iconColor
                } ${
                  isDayMode
                    ? "bg-white shadow-md"
                    : "bg-white/10 backdrop-blur-sm"
                } group-hover:scale-110 transition-transform duration-300`}
              >
                {method.icon}
              </div>
              <div className="text-center">
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDayMode ? "text-[#1E293B]" : "text-white"
                  } group-hover:${
                    method.iconColor
                  } transition-colors duration-300`}
                >
                  {method.name}
                </h3>

                <p
                  className={`text-lg ${
                    isDayMode ? "text-[#64748B]" : "text-[#CBD5E1]"
                  } group-hover:opacity-80 transition-opacity duration-300`}
                >
                  {method.description}
                </p>

                <div
                  className={`mt-6 text-sm font-medium ${method.iconColor} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                >
                  Click to connect →
                </div>
              </div>

              <div
                className={`w-0 h-1 ${method.lineColor} rounded-full mx-auto mt-6 group-hover:w-full transition-all duration-500 ease-out`}
              ></div>
            </a>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="mailto:xsergys@gmail.com"
            className={`group inline-block px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
              isDayMode
                ? "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white"
                : "bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/20"
            }`}
          >
            <p
              className={`text-lg transition-colors duration-300 ${
                isDayMode
                  ? "text-[#475569] group-hover:text-[#3B82F6]"
                  : "text-[#E2E8F0] group-hover:text-[#60A5FA]"
              }`}
            >
              <span className="font-semibold">Email:</span> xsergys@gmail.com
              <svg
                className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </p>

            <div
              className={`w-0 h-0.5 ${
                isDayMode ? "bg-[#3B82F6]" : "bg-[#60A5FA]"
              } rounded-full mx-auto mt-2 group-hover:w-full transition-all duration-500 ease-out`}
            ></div>
          </a>
        </div>

        <div className="flex justify-center mt-16">
          <div
            className={`w-32 h-1 rounded-full ${
              isDayMode
                ? "bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent"
                : "bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
