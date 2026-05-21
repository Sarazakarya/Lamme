import React from "react";

export default function Loading() {
  return (
    <div className="grow w-full flex flex-col items-center justify-center min-h-[70vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-700 rounded-full"></div>

        <div className="w-16 h-16 border-4 border-t-[#22c55e] border-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <h2 className="text-[#22c55e] text-2xl font-bold tracking-[0.2em] animate-pulse">
          LAMME
        </h2>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
}
