import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PostItem } from "../../../lib/types/BlogItem";
import { fetchService } from "../../../lib/Api/ApiFunction";

const Page = async () => {
  const data = await fetchService("Posts");

  return (
    <div className="flex flex-col gap-0  divide-y divide-zinc-300 dark:divide-zinc-700">
      {data.map((item: PostItem, index: number) => (
        <Link
          href={`/blog/${item.slug}`}
          key={item._id}
          className={`group flex gap-8 py-8 items-start cursor-pointer dark:hover:bg-white/90 dark:hover:bg-zinc-900/50 transition-colors px-4 -mx-4 ${
            index === 0 ? "flex-col" : "flex-row"
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-xl  ${
              index === 0 ? "w-full h-[400px]" : "w-40 h-28"
            }`}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkaGr6DwAEfAGH7ia9mQAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
            {index === 0 && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            )}
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-green-500">
                {index === 0 ? "Featured" : `#${index}`}
              </span>
              <span className="text-zinc-300 dark:text-zinc-600 text-xs">
                ·
              </span>
              <span className="text-[11px] text-zinc-400">5 min read</span>
            </div>

            <h1
              className={`font-bold  text-(--text) leading-snug group-hover:text-green-500 transition-colors ${
                index === 0 ? "text-3xl md:text-4xl" : "text-base md:text-lg"
              }`}
            >
              {item.title}
            </h1>

            <p
              className={`text-(--text) group-hover:text-zinc-300 leading-relaxed ${
                index === 0 ? "text-base max-w-2xl" : "text-sm line-clamp-2"
              }`}
            >
              {item.desc}
            </p>

            <button className="mt-2 w-fit text-sm font-semibold text-green-500 flex items-center gap-1 hover:gap-3 transition-all cursor-pointer">
              Read more →
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
