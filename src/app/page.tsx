import Image from "next/image";
import hero from "../../public/hero.png";
import { plans } from "../../lib/constant/plans";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-4xl  md:text-6xl w-150 font-bold md:space-y-3">
          <span className="bg-gradient-to-b from-green-400 to-green-900 text-transparent bg-clip-text block opacity-70">
            {" "}
            BETTER DESIGN
          </span>
          <span className="bg-gradient-to-b from-gray-300 to-gray-400 text-transparent bg-clip-text block opacity-70">
            {" "}
            FOR YOUR DIGITAL{" "}
          </span>{" "}
          <span className="bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text  opacity-80">
            PRODUCTS
          </span>
        </h1>
        <p className="text-(--text-muted) text-2Xl max-w-md md:max-w-xl">
          Turning Your Idel into Reality ,We Bring Togeher The Term From The
          Global Tech Industry
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-40 cursor-pointer duration-300">
          See Out Work
        </button>
      </div>

      <Image
        src={hero}
        alt="Example Image"
        width={500}
        height={300}
        className="animate-img"
        placeholder="blur"
        priority
      />

      {/* Plans */}
      <div className="py-10 flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-green-500">Pricing Plans</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`min-w-[280px] md:min-w-0 p-8 rounded-2xl border flex flex-col gap-6 transition-all duration-300 ${
                plan.pro
                  ? "border-green-500 bg-[card-bg] scale-105 shadow-xl"
                  : "border-gray-700 bg-[card-bg] hover:border-green-500"
              }`}
            >
              <div>
                <h3
                  className={`text-xl font-bold uppercase ${plan.pro ? "text-green-500" : "text-gray-300"}`}
                >
                  {plan.name}
                </h3>
                <p className="text-4xl font-extrabold mt-2">
                  ${plan.price}{" "}
                  <span className="text-sm font-normal text-(--text-muted)">
                    /mo
                  </span>
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-(--text-muted)">
                {plan.features.map((feat, i) => (
                  <li key={i}>✓ {feat}</li>
                ))}
              </ul>
              <button
                className={`mt-auto py-3 rounded-lg font-bold transition-all ${
                  plan.pro
                    ? "bg-green-500 text-white"
                    : "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact  */}
      <div className="w-full flex justify-center px-4 mt-20 mb-20">
        <div className="max-w-5xl w-full p-10 md:p-20 rounded-3xl dark:bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-white/5 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-2xl md:text-6xl font-extrabold leading-tight tracking-tight text-(--text)">
              Ready to bring your <br />
              <span className="text-green-500">Digital Product</span> to life?
            </h2>

            <p className="text-[text-muted] text-xs md:text-xl max-w-2xl mx-auto leading-relaxed text-(--text)">
              Join the global tech leaders and turn your vision into a
              high-performing reality. Our team is standing by to help you
              scale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-4 w-full sm:w-auto">
              <button className="bg-green-500 text-black font-bold py-4 px-10 rounded-full hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 active:scale-95 text-lg">
                Get Started Now
              </button>
              <Link href="/contact">
                <button className="border dark:border-white/20 text-(--text) font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all active:scale-95 text-lg">
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
