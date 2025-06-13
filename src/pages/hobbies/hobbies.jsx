import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";

const Hobbies = () => {
  const { isDayMode } = useTheme();
  const [confetti, setConfetti] = useState([]);

  const hobbies = [
    {
      title: "Gaming",
      description:
        "Passionate about strategic games and sports. Love exploring new worlds and competing in multiplayer adventures.",
      icon: "🎮",
      bgColor: isDayMode ? "bg-emerald-100" : "bg-emerald-900/30",
      iconBg: "bg-emerald-200",
    },
    {
      title: "draw",
      description:
        "draw animated characters, landscapes and anything I feel I want to express in a drawing.",
      icon: "✍",
      bgColor: isDayMode ? "bg-blue-100" : "bg-blue-900/30",
      iconBg: "bg-blue-200",
    },
    {
      title: "Cooking",
      description:
        "Experimenting with flavors from around the world. Love creating new recipes and sharing meals with friends.",
      icon: "👨‍🍳",
      bgColor: isDayMode ? "bg-orange-100" : "bg-orange-900/30",
      iconBg: "bg-orange-200",
    },
    {
      title: "travel",
      description:
        "I like to know new places, that are historical, beautiful or simply that one can connect with the place.",
      icon: "🛫",
      bgColor: isDayMode ? "bg-purple-100" : "bg-purple-900/30",
      iconBg: "bg-purple-200",
    },
    {
      title: "Sports",
      description:
        "I especially like football but I also like to play basketball and tennis. I also like formula 1 and in general any sport that has to do with competition.",
      icon: "⚽",
      bgColor: isDayMode ? "bg-red-100" : "bg-red-900/30",
      iconBg: "bg-red-200",
    },
  ];

  const createConfetti = (icon, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const newConfetti = [];

    for (let i = 0; i < 15; i++) {
      const id = Math.random();
      const angle = (Math.PI * 2 * i) / 15;
      const velocity = 3 + Math.random() * 4;

      newConfetti.push({
        id,
        icon,
        x: centerX,
        y: centerY,
        initialX: centerX,
        initialY: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 20,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 1,
        life: 0,
      });
    }

    setConfetti((prev) => [...prev, ...newConfetti]);
  };

  useEffect(() => {
    if (confetti.length === 0) return;

    const interval = setInterval(() => {
      setConfetti((prev) => {
        return prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.3,
            vx: particle.vx * 0.99,
            rotation: particle.rotation + particle.rotationSpeed,
            life: particle.life + 1,
            opacity: Math.max(0, 1 - particle.life / 60),
            scale: particle.scale * 0.98,
          }))
          .filter((particle) => particle.life < 60 && particle.opacity > 0);
      });
    }, 16);

    return () => clearInterval(interval);
  }, [confetti]);

  const handleCardClick = (hobby, event) => {
    createConfetti(hobby.icon, event);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 relative overflow-hidden ${
        isDayMode
          ? "bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]"
          : "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]"
      }`}
    >
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-8 ${
              isDayMode ? "text-[#1E293B]" : "text-white"
            }`}
          >
            Those who know me know that...
          </h1>

          <div
            className={`w-24 h-1 mx-auto mb-8 rounded-full ${
              isDayMode ? "bg-[#3B82F6]" : "bg-[#60A5FA]"
            }`}
          ></div>

          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDayMode ? "text-[#475569]" : "text-[#94A3B8]"
            }`}
          >
            Beyond coding, I'm passionate about various activities that help me
            maintain balance, creativity and motivation in my daily life.
          </p>

          <p
            className={`text-sm mt-4 italic font-bold ${
              isDayMode ? "text-[#fcbf49]" : "text-[#fcbf49]"
            }`}
          >
            Click on any card to see the magic
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              onClick={(e) => handleCardClick(hobby, e)}
              className={`rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer select-none ${
                isDayMode
                  ? `${hobby.bgColor} shadow-lg border border-white/50 hover:shadow-xl`
                  : `${hobby.bgColor} shadow-2xl border border-white/10 backdrop-blur-sm hover:shadow-3xl`
              }`}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:rotate-12 ${
                  isDayMode ? hobby.iconBg : "bg-white/10"
                }`}
              >
                <span className="text-4xl">{hobby.icon}</span>
              </div>

              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDayMode ? "text-[#1E293B]" : "text-white"
                }`}
              >
                {hobby.title}
              </h3>

              <p
                className={`text-base leading-relaxed mb-6 ${
                  isDayMode ? "text-[#475569]" : "text-[#CBD5E1]"
                }`}
              >
                {hobby.description}
              </p>

              <div className="mb-6">
                <div
                  className={`text-xs font-medium mb-2 ${
                    isDayMode ? "text-[#64748B]" : "text-[#94A3B8]"
                  }`}
                >
                  Passion Level
                </div>
                <div
                  className={`w-full rounded-full h-2 ${
                    isDayMode ? "bg-gray-200" : "bg-gray-700"
                  }`}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-full animate-pulse"></div>
                </div>
              </div>

              <div
                className={`pt-4 border-t text-sm text-center ${
                  isDayMode
                    ? "border-gray-200 text-[#64748B]"
                    : "border-white/10 text-[#94A3B8]"
                }`}
              >
                Click to celebrate this passion
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div
            className={`inline-block px-8 py-4 rounded-2xl ${
              isDayMode
                ? "bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white"
                : "bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white"
            }`}
          >
            <p className="text-lg font-medium">
              Do you share any of these passions?
            </p>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-2xl pointer-events-none select-none"
            style={{
              left: particle.x - 16,
              top: particle.y - 16,
              transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
              opacity: particle.opacity,
              transition: "none",
            }}
          >
            {particle.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
