import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Hobbies = () => {
  const { isDayMode } = useTheme();
  const { t } = useTranslation();
  const [confetti, setConfetti] = useState([]);

  const hobbies = [
    {
      title: t("hobbies.gaming.title"),
      description: t("hobbies.gaming.desc"),
      icon: "🎮",
      bgColor: isDayMode ? "bg-emerald-100" : "bg-emerald-900/30",
      iconBg: "bg-emerald-200",
    },
    {
      title: t("hobbies.draw.title"),
      description: t("hobbies.draw.desc"),
      icon: "✍",
      bgColor: isDayMode ? "bg-blue-100" : "bg-blue-900/30",
      iconBg: "bg-blue-200",
    },
    {
      title: t("hobbies.cooking.title"),
      description: t("hobbies.cooking.desc"),
      icon: "👨‍🍳",
      bgColor: isDayMode ? "bg-orange-100" : "bg-orange-900/30",
      iconBg: "bg-orange-200",
    },
    {
      title: t("hobbies.travel.title"),
      description: t("hobbies.travel.desc"),
      icon: "🛫",
      bgColor: isDayMode ? "bg-purple-100" : "bg-purple-900/30",
      iconBg: "bg-purple-200",
    },
    {
      title: t("hobbies.sports.title"),
      description: t("hobbies.sports.desc"),
      icon: "⚽",
      bgColor: isDayMode ? "bg-red-100" : "bg-red-900/30",
      iconBg: "bg-red-200",
    },
  ];

  const createConfetti = (icon, event) => {};
  useEffect(() => {}, [confetti]);
  const handleCardClick = (hobby, event) => { createConfetti(hobby.icon, event); };

  return (
    <div className={`min-h-screen transition-all duration-300 relative overflow-hidden ${isDayMode ? "bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]" : "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]"}`}>
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-8 ${isDayMode ? "text-[#1E293B]" : "text-white"}`}>{t("hobbies.header")}</h1>
          <div className={`w-24 h-1 mx-auto mb-8 rounded-full ${isDayMode ? "bg-[#3B82F6]" : "bg-[#60A5FA]"}`}></div>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDayMode ? "text-[#475569]" : "text-[#94A3B8]"}`}>{t("hobbies.subheader")}</p>
          <p className={`text-sm mt-4 italic font-bold ${isDayMode ? "text-[#fcbf49]" : "text-[#fcbf49]"}`}>{t("hobbies.tip")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div key={index} onClick={(e) => handleCardClick(hobby, e)} className={`rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer select-none ${isDayMode ? `${hobby.bgColor} shadow-lg border border-white/50 hover:shadow-xl` : `${hobby.bgColor} shadow-2xl border border-white/10 backdrop-blur-sm hover:shadow-3xl`}`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:rotate-12 ${isDayMode ? hobby.iconBg : "bg-white/10"}`}>
                <span className="text-4xl">{hobby.icon}</span>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDayMode ? "text-[#1E293B]" : "text-white"}`}>{hobby.title}</h3>
              <p className={`text-base leading-relaxed mb-6 ${isDayMode ? "text-[#475569]" : "text-[#CBD5E1]"}`}>{hobby.description}</p>
              <div className="mb-6">
                <div className={`text-xs font-medium mb-2 ${isDayMode ? "text-[#64748B]" : "text-[#94A3B8]"}`}>{t("hobbies.passion")}</div>
                <div className={`${isDayMode ? "bg-gray-200" : "bg-gray-700"} w-full rounded-full h-2`}>
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
              <div className={`pt-4 border-t text-sm text-center ${isDayMode ? "border-gray-200 text-[#64748B]" : "border-white/10 text-[#94A3B8]"}`}>{t("hobbies.celebrate")}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className={`inline-block px-8 py-4 rounded-2xl ${isDayMode ? "bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white" : "bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white"}`}>
            <p className="text-lg font-medium">{t("hobbies.share")}</p>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map((particle) => (
          <div key={particle.id} className="absolute text-2xl pointer-events-none select-none" style={{ left: particle.x - 16, top: particle.y - 16, transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`, opacity: particle.opacity, transition: "none" }}>{particle.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
