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
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-full fixed top-0 left-0 flex flex-col gap-5 ease-in-out duration-300 transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 shadow-2xl w-80 z-50`}
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

        <div className="flex flex-col gap-1 px-2">
          {links.map((ele, id) => (
            <Link
              key={id}
              href={ele.link}
              onClick={close}
              className="text-zinc-800 dark:text-zinc-200 font-medium transition-all duration-300 px-4 py-3 border-b dark:border-zinc-100  hover:bg-green-500 hover:text-white dark:hover:bg-green-600 rounded-md block w-full"
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
