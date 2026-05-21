import React from "react";

export default function Loading() {
  const skeletons = [1, 2, 3];

  return (
    <div className="animate-pulse">
      <div className="flex flex-wrap items-center justify-between p-6 rounded-2xl my-10 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="pt-8 pb-3 mb-4 ">
          <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-48 md:w-64" />
        </div>
        <div className="flex flex-col gap-3 w-full sm:w-auto mb-4 sm:mb-0">
          <div className="h-7 bg-zinc-200 dark:bg-zinc-800 rounded-md w-32"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-64"></div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md w-8"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-md w-12"></div>
          </div>
          <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700" />
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md w-12"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-md w-12"></div>
          </div>
          <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700" />
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md w-6"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-md w-10"></div>
          </div>
        </div>
      </div>

      <div className="h-7 bg-zinc-200 dark:bg-zinc-800 rounded-md w-44 mb-5" />

      <div className="flex flex-wrap items-center justify-center gap-8">
        {skeletons.map((id) => (
          <div
            key={id}
            className="relative w-93 h-100 rounded-xl bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 overflow-hidden"
          >
            <div className="absolute bottom-4 left-4 h-5 bg-zinc-300 dark:bg-zinc-700 rounded-md w-36" />
          </div>
        ))}
      </div>
    </div>
  );
}
