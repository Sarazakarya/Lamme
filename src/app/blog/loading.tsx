export default function BlogLoading() {
  return (
    <div className="flex flex-col gap-0 divide-y divide-zinc-200 dark:divide-zinc-800 animate-pulse px-4">
      <div className="flex flex-col gap-8 py-8 items-start -mx-4">
        <div className="w-full h-[400px] bg-zinc-200 dark:bg-zinc-800 rounded-xl"></div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-16"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-24"></div>
          </div>
          <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-3/4 md:w-1/2"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded md:w-2/3"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded md:w-1/2"></div>
        </div>
      </div>

      {[1, 2].map((index) => (
        <div key={index} className="flex gap-8 py-8 items-start -mx-4">
          <div className="w-40 h-28 bg-zinc-200 dark:bg-zinc-800 rounded-xl flex-shrink-0"></div>

          <div className="flex flex-col gap-3 flex-1">
            <div className="flex items-center gap-2">
              <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-12"></div>
              <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-20"></div>
            </div>
            <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded-md w-11/12"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/5"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
