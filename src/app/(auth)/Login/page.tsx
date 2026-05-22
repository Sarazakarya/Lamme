"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginT } from "../../../../lib/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../../lib/sechma/Auth/AuthSechma";
import Login from "../../../../components/LoginFunction/Login";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc"; 

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginT>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginT) => {
    try {
      const res = await Login(data);
      if (res?.error) {
        setError("password", {
          type: "manual",
          message: "Invalid Email OR Password",
        });
        return;
      }
      toast.success("Welcome To Lamme!", {
        style: { backgroundColor: "#22c55e", color: "white" },
      });
      router.push("/");
    } catch (error) {
      toast.error("Invalid email or password!", {
        style: { backgroundColor: "#ef4444", color: "white" },
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      toast.info("Connecting to Google...", {
        style: { backgroundColor: "#3b82f6", color: "white" },
      });
    } catch (error) {
      toast.error("Google sign in failed!");
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
            Sign In
          </h1>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
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
              type="password"
              placeholder="Password"
              {...register("password")}
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
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>

    
        <div className="relative flex items-center justify-center my-1">
          <div className="absolute w-full border-t border-zinc-200 dark:border-zinc-800"></div>
          <span className="relative bg-white dark:bg-zinc-900 px-3 text-xs text-zinc-400 uppercase">
            Or continue with
          </span>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-750 hover:text-black dark:text-zinc-200 font-medium rounded-lg text-sm transition-all duration-150 cursor-pointer active:scale-[0.98]"
        >
          <FcGoogle className="w-5 h-5" />
          Google
        </button>

        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 mt-2">
          Do not have an account?{" "}
          <Link
            href={"/Register"}
            className="text-green-500 hover:underline cursor-pointer font-medium"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
