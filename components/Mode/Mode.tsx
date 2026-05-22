import { useTheme } from "next-themes";
import React from "react";

const Mode = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 border cursor-pointer
        ${isDark ? "bg-gray-900 border-gray-600" : "bg-amber-200 border-amber-400"}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div
        className={`absolute top-1 w-5 h-5 flex justify-center items-center transition-all duration-300
          ${isDark ? "left-1" : "left-8"}`}
      >
        {isDark ? "🌙" : "🔆"}
      </div>
    </button>
  );
};

export default Mode;