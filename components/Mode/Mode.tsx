import { useTheme } from "next-themes";
import React from "react";

const Mode = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 border cursor-pointer
          ${
            isDark
              ? "bg-gray-900 border-gray-600"
              : "bg-amber-200 border-amber-400"
          }`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div
        className={`absolute w-5 h-5flex justify-between items-center transition-all duration-300 ${isDark ? "left-1" : "left-8"}`}
      >
        {isDark ? "🌙" : "🔆"}
      </div>
    </div>
  );
};

export default Mode;
