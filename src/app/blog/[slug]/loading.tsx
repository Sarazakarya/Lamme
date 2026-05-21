export default function Loading() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto p-4 animate-pulse">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
          <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-3/4"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-5/6"></div>

          <div className="flex items-center gap-2 mt-4">
            <div className="h-10 w-10 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-24"></div>
          </div>
        </div>

        <div className="flex-1 min-w-[300px]">
          <div className="h-[300px] w-full bg-zinc-200 dark:bg-zinc-800 rounded-xl"></div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-2/3"></div>
      </div>
    </div>
  );
}
