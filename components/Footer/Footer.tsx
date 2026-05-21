import Image from "next/image";
import React from "react";
import { images } from "../../lib/constant/Images/image";

const Footer = () => {
  return (
    <div className="text-(--text) py-2 md:py-3 flex justify-end  ">
      <div className="container  flex  flex-col md:flex-row justify-between items-center py-8  gap-4">
        <h1 className="text-center md:text-left text-sm md:text-base">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </h1>

        <div className="flex items-center justify-center">
          {images.map((ele) => (
            <Image
              key={ele.id}
              alt={ele.alt}
              src={ele.src}
              width={20}
              height={20}
              className="mx-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
