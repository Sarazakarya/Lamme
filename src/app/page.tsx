"use client";
import Image from "next/image";
import hero from "../../public/hero.png";
import { plans } from "../../lib/constant/plans";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8 px-4 overflow-x-hidden pt-28 md:pt-12">
      {/* Hero Section */}
      <div className="flex flex-col gap-5 w-full md:flex-1 min-w-[300px]">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-2xl leading-tight md:leading-none">
          <span className="bg-gradient-to-b from-green-400 to-green-600 text-transparent bg-clip-text block">
            BETTER DESIGN
          </span>
          <span className="bg-gradient-to-b from-zinc-400 to-zinc-500 dark:from-gray-300 dark:to-gray-400 text-transparent bg-clip-text block my-2">
            FOR YOUR DIGITAL
          </span>
          <span className="bg-gradient-to-b from-zinc-500 to-zinc-600 dark:from-gray-200 dark:to-gray-300 text-transparent bg-clip-text block">
            PRODUCTS
          </span>
        </h1>

        <p className="text-(--text-muted) text-xs md:text-sm w-full max-w-[90%] md:max-w-xl text-balance leading-relaxed">
          Turning Your Idea into Reality, We Bring Together The Team From The
          Global Tech Industry.
        </p>

        <Link href={"/portfolio"}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-40 cursor-pointer duration-300 shadow-md shadow-green-500/10 active:scale-95">
            See Our Work
          </button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full md:flex-1 flex justify-center items-center">
        <Image
          src={hero}
          alt="Hero Graphics"
          width={500}
          height={300}
          className="animate-img w-full max-w-[450px] h-auto object-contain"
          placeholder="blur"
          priority
        />
      </div>

      {/* Plans Section */}
      <div className="py-20 flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-green-500">Pricing Plans</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border flex flex-col gap-6 transition-all duration-300 w-full ${
                plan.pro
                  ? "border-green-500 bg-(--card-bg) scale-100 md:scale-105 shadow-xl shadow-green-500/5"
                  : "border-gray-700 dark:border-zinc-800 bg-(--card-bg) hover:border-green-500"
              }`}
            >
              <div>
                <h3
                  className={`text-xl font-bold uppercase tracking-wider ${plan.pro ? "text-green-500" : "text-gray-300"}`}
                >
                  {plan.name}
                </h3>
                <p className="text-4xl font-extrabold mt-2 text-(--text)">
                  ${plan.price}
                  <span className="text-sm font-normal text-(--text-muted) ml-1">
                    /mo
                  </span>
                </p>
              </div>

              <ul className="flex flex-col gap-3 text-(--text-muted) text-sm">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto py-3 rounded-lg font-bold transition-all active:scale-95 cursor-pointer ${
                  plan.pro
                    ? "bg-green-500 text-white hover:bg-green-600 shadow-md shadow-green-500/20"
                    : "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full flex justify-center px-2 mt-10 mb-20">
        <div className="max-w-5xl w-full p-8 md:p-20 rounded-3xl bg-zinc-900/50 dark:bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-zinc-200/10 dark:border-white/5 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
            <h2 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight text-(--text)">
              Ready to bring your <br />
              <span className="text-green-500">Digital Product</span> to life?
            </h2>

            <p className="text-(--text-muted) text-sm md:text-xl max-w-2xl mx-auto leading-relaxed">
              Join the global tech leaders and turn your vision into a
              high-performing reality. Our team is standing by to help you
              scale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full sm:w-auto">
              <button className="bg-green-500 text-black font-bold py-4 px-10 rounded-full hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 active:scale-95 text-base md:text-lg cursor-pointer">
                Get Started Now
              </button>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="border border-zinc-300 dark:border-white/20 text-(--text) font-bold py-4 px-10 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 transition-all active:scale-95 text-base md:text-lg w-full cursor-pointer">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
