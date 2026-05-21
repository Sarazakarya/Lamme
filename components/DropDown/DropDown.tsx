"use client";
import React from "react";
import { links } from "../../lib/constant/Links/Links";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
type DropDownProps = {
  open: boolean;
  close: () => void;
};
const DropDown = ({ open, close }: DropDownProps) => {
  const { data: session, status } = useSession();
  return (
    <div
      className={`fixed inset-0 z-10 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-full z-20 bg-(--card-bg)  rounded-md shadow-lg w-80   fixed top-0 left-0 flex flex-col gap-5 ease-in-out duration-300 transition-transform transform ${open ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div className="flex justify-end">
          {" "}
          <button
            onClick={close}
            className={` text-(--text-break) hover:text-black text-2xl px-4 pt-3`}
          >
            <IoClose />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {links.map((ele, id) => (
            <Link
              key={id}
              href={ele.link}
              onClick={close}
              className="bg-(--card-bg) text-(--text) font-medium transition-all duration-400 px-4 py-3 border-b border-gray-300 hover:bg-green-400 hover:text-white block w-full"
            >
              {ele.name}
            </Link>
          ))}
        </div>

        <div className="p-2">
          {status === "loading" ? (
            <span className="text-sm text-zinc-400">Loading...</span>
          ) : status === "authenticated" ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => signOut({ callbackUrl: "/Login" })}
                className="p-2 px-3 w-full bg-red-600 text-white text-sm rounded-md duration-300 hover:bg-red-700 cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href={"/Login"}>
              <button className="p-2 px-3 w-full bg-green-600 rounded-md duration-300 hover:bg-green-700 cursor-pointer">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
