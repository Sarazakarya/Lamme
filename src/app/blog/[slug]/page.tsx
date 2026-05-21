import Image from "next/image";
import React from "react";
import img from "../../../../public/person.jpg";
import { itemsProps } from "../../../../lib/types/items";
import { PostItem } from "../../../../lib/types/BlogItem";
import { fetchServiceBySlug } from "../../../../lib/Api/ApiFunction";

const page = async ({ params }: itemsProps) => {
  const { slug } = await params;
  const data: PostItem = await fetchServiceBySlug("Posts", slug);

  return (
    <div>
      {" "}
      <div className="flex flex-wrap  gap-4">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold md:text-4xl text-(--text)">
            {data.title}
          </h1>
          <p>{data.desc}</p>

          <div className="flex items-center  gap-2">
            <Image
              src={img}
              alt="Example Image"
              className=" h-10 w-10 object-cover rounded-full"
            />
            <p>{data.username}</p>
          </div>
        </div>
        {/* Right */}
        <div>
          <Image
            src={data.img || img}
            alt="Example Image"
            width={1200}
            height={300} 
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkaGr6DwAEfAGH7ia9mQAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <p>{data.content}</p>

        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default page;
