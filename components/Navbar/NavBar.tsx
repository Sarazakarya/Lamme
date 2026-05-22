"use client";
import React, { useState } from "react";
import { links } from "../../lib/constant/Links/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiAlignJustify } from "react-icons/fi";
import DropDown from "../DropDown/DropDown";
import Mode from "../Mode/Mode";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div className="mx-auto container flex justify-between items-center  py-8 ">
      <h1 className="text-2xl text-(--text) font-semibold">LAMME</h1>

      <div className=" gap-3 items-center hidden md:flex">
        <Mode />

        {links.map((ele, ind) => {
          const isActive =
            ele.link === path ||
            (path.startsWith(ele.link) && ele.link !== "/");

          return (
            <Link
              href={ele.link}
              key={ind}
              className={`font-semibold ${isActive ? "text-green-500" : "text-(--text)"}`}
            >
              {ele.name}
            </Link>
          );
        })}

        {status === "loading" ? (
          <span className="text-sm text-zinc-400">Loading...</span>
        ) : status === "authenticated" ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-green-500">
              {session?.user?.name}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/Login" })}
              className="p-1 px-3 bg-red-600 text-white text-sm rounded-md duration-300 hover:bg-red-700 cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href={"/Login"}>
            <button className="p-1 bg-green-600 rounded-md duration-300 hover:bg-green-700 cursor-pointer">
              LogIn
            </button>
          </Link>
        )}
      </div>

      <div className=" md:hidden flex justify-center items-center gap-3">
        <span className="text-sm font-medium text-green-500">
         {session?.user?.name}
        </span>
        <Mode />

        <FiAlignJustify
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <DropDown open={open} close={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default NavBar;
