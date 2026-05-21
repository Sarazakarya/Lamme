import React from "react";
import { chartData, recentSales, stats } from "../../../lib/constant/Dashboard";

export default function DashboardPage() {

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto animate-[fadeIn_0.5s_ease-out]">
      <div className="flex items-center justify-between space-y-2 flex-wrap">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-(--text)">
            Dashboard
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Welcome back! Here's an overview of your platform performance.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm"
          >
            <p className="text-sm font-medium text-zinc-400">{stat.name}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-bold tracking-tight text-(--text)">
                {stat.value}
              </span>
            </div>
            <p className="text-xs text-green-500 mt-1 font-medium">
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm lg:col-span-4">
          <h3 className="font-bold text-lg text-(--text) mb-2">Overview</h3>
          <p className="text-xs text-zinc-400 mb-6">
            Monthly sales volume representation
          </p>

          <div className="h-64 flex items-end justify-between gap-2 pt-4 px-2">
            {chartData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-1 h-full justify-end gap-2"
              >
                <div
                  style={{ height: `${item.value}%` }}
                  className="w-full bg-gradient-to-t from-green-500 to-green-400 dark:from-green-600 dark:to-emerald-400 rounded-t-md transition-all duration-1000 hover:opacity-80 cursor-pointer"
                />

                <span className="text-xs text-zinc-400 font-medium">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm lg:col-span-3">
          <div>
            <h3 className="font-bold text-lg text-(--text)">Recent Sales</h3>
            <p className="text-xs text-zinc-400 mt-1 mb-6">
              You made 265 sales this month.
            </p>
          </div>

          <div className="space-y-6">
            {recentSales.map((sale) => (
              <div
                key={sale.id}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center font-bold text-sm">
                    {sale.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-(--text) leading-none">
                      {sale.name}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">{sale.email}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-(--text)">
                  {sale.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
