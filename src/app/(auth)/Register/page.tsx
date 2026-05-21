"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterT } from "../../../../lib/types/Auth";
import { RegisterSchmea } from "../../../../lib/sechma/Auth/AuthSechma";
import { zodResolver } from "@hookform/resolvers/zod";
import Resgister from "../../../../components/RegisterFunction/Resgister";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterT>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterSchmea),
  });

  const onSubmit = async (data: RegisterT) => {
    try {
      const result = await Resgister(data);
      toast.success(result.message || "Account Created Successfully!", {
        style: { backgroundColor: "#22c55e", color: "white" },
      });

      reset();
      router.push("/Login");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!", {
        style: { backgroundColor: "#ef4444", color: "white" },
      });
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md flex flex-col gap-6 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 rounded-2xl shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            Create an account
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Enter your details below to create your account
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-750 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
            />
            {errors.email && (
              <p className="text-xs text-red-500 font-medium px-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <input
              {...register("name")}
              type="text"
              placeholder="UserName"
              className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-750 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
            />
            {errors.name && (
              <p className="text-xs text-red-500 font-medium px-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-750 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
            />
            {errors.password && (
              <p className="text-xs text-red-500 font-medium px-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-2.5 px-4 bg-green-500 hover:bg-green-600 active:scale-[0.98] text-white font-medium rounded-lg shadow-lg shadow-green-500/20 cursor-pointer transition-all duration-150 text-sm"
        >
          {isSubmitting ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 mt-2">
          Already have an account?
          <Link
            href={"/Login"}
            className="text-green-500 hover:underline cursor-pointer font-medium"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
