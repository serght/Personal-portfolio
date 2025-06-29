import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Navbar from "../../components/Navbar";
import { useTranslation } from "react-i18next";

import ReactIcon from "../../assets/images/skills/React.png";
import JavaScriptIcon from "../../assets/images/skills/JavaScript.webp";
import PythonIcon from "../../assets/images/skills/Python.png";
import CppIcon from "../../assets/images/skills/Clogo.png";
import DatabaseIcon from "../../assets/images/skills/sql.png";
import JavaIcon from "../../assets/images/skills/Java.png";
import KotlinIcon from "../../assets/images/skills/kotlin.png";
import GitHubIcon from "../../assets/images/skills/github.png";
import DockerIcon from "../../assets/images/skills/docker.webp";
import AWSIcon from "../../assets/images/skills/aws.webp";

const Skills = () => {
  const { isDayMode } = useTheme();
  const { t } = useTranslation();

  const skills = [
    { name: t("skills.webDevelopment"), level: 90, icon: "🌐" },
    { name: t("skills.database"), level: 85, icon: "💾" },
    { name: t("skills.ai"), level: 75, icon: "🤖" },
    { name: t("skills.teamwork"), level: 95, icon: "👥" },
    { name: t("skills.scrum"), level: 90, icon: "⚡" },
    { name: t("skills.mobile"), level: 80, icon: "📱" },
    { name: t("skills.uiux"), level: 85, icon: "🎨" },
  ];

  const technologies = [
    { name: "React", icon: ReactIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Python", icon: PythonIcon },
    { name: "c++", icon: CppIcon },
    { name: "Database", icon: DatabaseIcon },
    { name: "java", icon: JavaIcon },
    { name: "Kotlin", icon: KotlinIcon },
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDayMode ? "bg-gradient-to-br from-[#F7F9FC] to-[#E8F4F8]" : "bg-gradient-to-br from-[#0F1419] via-[#1A1F2E] to-[#2D1B69]"}`}>
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDayMode ? "text-[#2F3E46]" : "text-white"}`}>{t("skills.title")}</h1>
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${isDayMode ? "text-[#354F52]" : "text-[#CAD2C5]"}`}>{t("skills.subtitle1")}</h2>
          <h2 className={`text-3xl md:text-5xl font-bold ${isDayMode ? "text-[#354F52]" : "text-[#CAD2C5]"}`}>{t("skills.subtitle2")}</h2>

          <p className={`mt-8 text-lg max-w-md mx-auto ${isDayMode ? "text-[#52796F]" : "text-[#84A98C]"}`}>{t("skills.description")}</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-7 gap-6 mb-12 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index} className={`aspect-square rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg p-4 ${isDayMode ? "bg-white/70 backdrop-blur-sm border border-[#CAD2C5]/30 shadow-lg" : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl"}`}>
              <img src={tech.icon} alt={tech.name} className={`w-full h-full object-contain max-w-12 max-h-12 transition-all duration-300 ${isDayMode ? "filter brightness-100" : "filter brightness-90 contrast-110"}`} onError={(e) => { console.error(`Error loading image: ${tech.icon}`); e.target.style.display = "none"; }} />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className={`text-lg font-semibold ${isDayMode ? "text-[#2F3E46]" : "text-white"}`}>{skill.name}</h3>
                </div>
                <span className={`text-lg font-bold ${isDayMode ? "text-[#354F52]" : "text-[#CAD2C5]"}`}>{skill.level}%</span>
              </div>

              <div className={`w-full h-3 rounded-full overflow-hidden ${isDayMode ? "bg-[#E9EDC9]/40" : "bg-white/10"}`}>
                <div className={`h-full rounded-full transition-all duration-1000 ease-out ${isDayMode ? "bg-gradient-to-r from-[#84A98C] to-[#52796F]" : "bg-gradient-to-r from-[#84A98C] to-[#CAD2C5]"}`} style={{ width: `${skill.level}%` }}>
                  <div className={`w-4 h-4 rounded-full -mt-0.5 ml-auto mr-1 ${isDayMode ? "bg-white shadow-md" : "bg-white/90 shadow-lg"}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img src={GitHubIcon} alt="GitHub" className="w-6 h-6 object-contain" />
              <span className={`font-medium ${isDayMode ? "text-[#354F52]" : "text-[#84A98C]"}`}>GitHub</span>
            </div>

            <div className="flex items-center space-x-2">
              <img src={DockerIcon} alt="Docker" className="w-6 h-6 object-contain" />
              <span className={`font-medium ${isDayMode ? "text-[#354F52]" : "text-[#84A98C]"}`}>Docker</span>
            </div>

            <div className="flex items-center space-x-2">
              <img src={AWSIcon} alt="AWS" className="w-6 h-6 object-contain" />
              <span className={`font-medium ${isDayMode ? "text-[#354F52]" : "text-[#84A98C]"}`}>AWS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
