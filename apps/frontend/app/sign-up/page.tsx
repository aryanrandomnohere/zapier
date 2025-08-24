import { CheckCircle2 } from "lucide-react";
import SingIn from "../components/Authentication/SingIn";

export default function Page() {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-10 lg:gap-20">
        {/* Left content */}
        <div className="flex flex-col max-w-md gap-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Join millions worldwide who automate their work using Zapier.
          </h1>

          <div className="flex gap-2 items-center text-sm sm:text-base font-medium">
            <CheckCircle2 className="text-green-700 w-5 h-5" />
            Easy setup, no coding required
          </div>

          <div className="flex gap-2 items-center text-sm sm:text-base font-medium">
            <CheckCircle2 className="text-green-700 w-5 h-5" />
            Free forever for core features
          </div>

          <div className="flex gap-2 items-center text-sm sm:text-base font-medium">
            <CheckCircle2 className="text-green-700 w-5 h-5" />
            14-day trial of premium features & apps
          </div>
        </div>

        {/* Right content */}
        <div className="w-full max-w-md">
          <SingIn />
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-base sm:text-lg text-center font-light mt-8">
        Trusted at companies large and small
      </div>
    </div>
  );
}
