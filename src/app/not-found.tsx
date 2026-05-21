import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-[fadeIn_0.6s_ease-out]">
      <h1 className="text-8xl md:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-emerald-400">
        404
      </h1>

      <div className="w-16 h-1 bg-green-500 my-6 rounded-full" />
      <h2 className="text-2xl md:text-3xl font-bold text-(--text) mb-3">
        Page Not Found
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/20 cursor-pointer w-full sm:w-auto"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}