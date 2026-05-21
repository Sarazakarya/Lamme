"use client";
import React from "react";
import img from "../../../public/contact.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactT,
} from "../../../lib/sechma/contact/CotactSechma";
import { toast } from "react-toastify";

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactT>({
    defaultValues: { name: "", email: "", message: "" },
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactT) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message Sent Successfully!", {
      style: { backgroundColor: "#22c55e", color: "white" },
    });

    reset();
  };
  return (
    <div>
      <h1 className="text-center text-xl md:text-4xl sm:text-6xl py-8 font-bold">
        {" "}
        Lets Keep In Touch
      </h1>
      <form
        className="grid grid-row-1 md:grid-cols-2 gap-6 md:gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Image
            src={img}
            alt="Contact"
            width={500}
            height={100}
            placeholder="blur"
            priority
          />
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className={`border p-3 rounded-md w-full bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 focus:outline-none transition-all ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-300 dark:border-zinc-700 focus:border-green-500"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 px-1 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={`border p-3 rounded-md w-full bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 focus:outline-none transition-all ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-300 dark:border-zinc-700 focus:border-green-500"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 px-1 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              placeholder="Message"
              rows={9}
              className="border border-gray-400 focus focus-ring-info p-2 rounded-md w-full"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-red-500 px-1 font-medium">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer w-25"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
