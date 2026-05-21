import React from "react";

export default function LoadingCategoryDetail() {
  return (
    <div className="animate-pulse">
      <div className="pt-8 pb-3 mb-4">
        <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-48 md:w-64" />
      </div>

      <div>
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-md w-40 mb-3 mt-1" />

        <div className="grid md:grid-cols-2 gap-10 items-center grid-rows-1 mt-5">
          <div className="space-y-4">
            <div className="h-7 bg-zinc-200 dark:bg-zinc-800 rounded-md w-44 mb-4" />

            <div className="space-y-2">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-11/12" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/5" />
            </div>

            <div className="pt-2">
              <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-md w-28" />
            </div>
          </div>

          <div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-md aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
}
