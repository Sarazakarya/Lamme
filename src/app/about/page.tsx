import Image from "next/image";
import React from "react";
import img from "../../../public/pexels-photo-3194521(1)(1).jpg";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full ">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={img}
          alt="Example Image"
          fill
          className="object-cover grayscale"
          placeholder="blur"
          priority
        />

        <div className="absolute bottom-7 left-3 bg-green-300 opacity-90 p-3 text-white  rounded-md">
          <p className="font-bold text-lg md:text-2xl ">Digital Storytellers</p>
          <p className="text-sm md:text-base">
            Handcrafting award winning digital experiences
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-3 grid-rows-1 gap-10 mt-5 text-(--text)">
        <div>
          <h1 className="text-2xl font-bold mb-4">Who We Are ?</h1>
          <div className="space-y-4">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              laborum eligendi dolores molestias explicabo recusandae earum
              dolore commodi!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              accusantium blanditiis pariatur ea ullam dolore sunt ad, iste
              magni, fuga ut nam itaque, distinctio quia. Esse rerum possimus
              error dolor.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
              temporibus excepturi, veniam repellat odit, esse officiis fuga
              omnis delectus saepe deserunt unde doloribus natus. Ducimus
              placeat ratione et quisquam repellendus?
            </p>
          </div>
        </div>

        {/* left */}
        <div>
          <h1 className="text-2xl font-bold mb-4">What We Do ?</h1>
          <div className="space-y-4">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              laborum eligendi dolores molestias explicabo recusandae earum
              dolore commodi!
            </p>

            <p>- Creative</p>

            <p>- Dynamic Website</p>
            <p>- Fast And Handle Mobile Apps</p>
            <Link href="/contact">
              <button className="px-3 py-1 bg-green-300 text-white rounded-md hover:bg-green-400 transition duration-300 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
