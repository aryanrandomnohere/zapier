import hero from "./homepage-hero.png";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center w-full pt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left Section */}
          <div className="flex flex-col text-center lg:text-left">
            {/* Badge */}
            <div className="flex cursor-pointer items-center justify-between gap-1 text-sm bg-blue-100/50 px-3 py-2 w-fit rounded-full mb-5 mx-auto lg:mx-0">
              <div className="py-0.5 px-2.5 rounded-2xl border border-black">
                New
              </div>
              Zapier Enterpris is here
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-2xl mx-auto lg:mx-0">
              Ops run on Zapier—seamless workflows, no IT bottlenecks.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl font-medium leading-7 sm:leading-8 mt-5 max-w-2xl mx-auto lg:mx-0">
              Ops wants speed. IT wants oversight. Zapier’s AI automation gives
              everyone the best of both worlds with one place to build, manage,
              and govern workflows that power your business.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/sign-up">
                <PrimaryButton size="big">Start free with email</PrimaryButton>
              </Link>

              <div className="flex justify-center items-center text-base sm:text-lg px-6 sm:px-8 py-2.5 gap-3 font-semibold border text-black border-black/50 hover:cursor-pointer rounded-full hover:border-black hover:border-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                Start free with Google
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <img
            className="w-full max-w-sm sm:max-w-md lg:max-w-[540px] mx-auto"
            src={hero.src}
            alt="Hero Image"
          />
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-10 text-sm sm:text-base font-medium tracking-wide">
          WHAT WILL YOU AUTOMATE TODAY?
        </div>
      </div>
    </div>
  );
}
