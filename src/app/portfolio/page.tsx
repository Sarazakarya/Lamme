import React from "react";
import Image from "next/image";
import { fetchService } from "../../../lib/Api/ApiFunction";
import Link from "next/link";
import { PortfolioItem } from "../../../lib/types/Portolio";

const Page = async () => {
  const data: PortfolioItem[] = await fetchService("Portfolio");
  return (
    <div>
         <h1 className=" text-(--text) text-xl md:text-4xl sm:text-6xl pt-8 pb-3 font-bold">
          Our Work
        </h1>
      <div className="flex flex-wrap items-center justify-between p-6 rounded-2xl my-10 border border-zinc-200 dark:border-zinc-800">
     
        <div>
          <p className="text-2xl font-bold text-(--text)"> Portfolio</p>
          <p className="text-sm text-zinc-400 mt-1">
            A collection of my best photography work
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-(--text)">12</p>
            <p className="text-xs text-(--text-muted)">Galleries</p>
          </div>
          <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700" />
          <div className="text-center">
            <p className="text-2xl font-bold text-(--text)">340+</p>
            <p className="text-xs text-(--text-muted)">Photos</p>
          </div>
          <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700" />
          <div className="text-center">
            <p className="text-2xl font-bold text-(--text)">5+</p>
            <p className="text-xs text-(--text-muted)">Years</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl mb-3 font-bold">Choose a Gallery</p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {data.map((item) => (
            <Link
              href={`/portfolio/${item.slug}`}
              key={item._id}
              className="relative w-93 h-100 group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                priority
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className={` object-cover border border-white grayscale ${item ? "grayscale" : "grayscale-0"}`}
              />
              <div className="absolute bottom-3 left-3 group-opacity-100 group-hover:opacity-0">
                <h2 className="text-white text-xl font-bold">{item.title}</h2>
              </div>
              <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <h2 className="text-white text-xl font-bold">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
