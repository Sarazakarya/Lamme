import React from "react";
import img from "../../../../public/illustration.png";
import Image from "next/image";
import { itemsProps } from "../../../../lib/types/items";
import { fetchServiceBySlug } from "../../../../lib/Api/ApiFunction";
import { PortfolioItem } from "../../../../lib/types/Portolio";
import Link from "next/link";

const page = async ({ params }: itemsProps) => {
  const { slug } = await params;
  const Category: PortfolioItem = await fetchServiceBySlug("Portfolio", slug);

  return (
    <div>
      <h1 className=" text-(--text) text-xl md:text-4xl sm:text-6xl pt-8 pb-3 font-bold">
        Our Work
      </h1>
      <div>
        <p className="text-2xl mb-3 font-bold text-green-500">
          {Category?.title || "Category Not Found"}
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center grid-rows-1  mt-5">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-(--text)">
              Who We Are ?
            </h1>
            <div className="space-y-4 text-(--text)">
              <p> {Category?.desc}</p>

              <Link href={"/portfolio"}>
                {" "}
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer "
                >
                  See Mores
                </button>
              </Link>
            </div>
          </div>

          {/* left */}
          <div>
            <Image
              src={Category?.image || img}
              alt={Category.title}
              width={600}
              height={200}
              className="object-cover rounded-md aspect-square"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkaGr6DwAEfAGH7ia9mQAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
