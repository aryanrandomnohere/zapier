import { CheckCircle2 } from "lucide-react";
import SingIn from "../components/Authentication/SingIn";

export default function page() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mt-[50px] gap-20 ">
        <div className="flex flex-col  max-w-[400px] gap-5">
          {" "}
          <div className="text-3xl font-bold leading-10">
            Join millions worldwide who automate their work using Zapier.
          </div>
          <div>
            {" "}
            <div className="flex gap-2 items-center text-sm font-medium">
              <CheckCircle2 className="text-green-700 text-xl " /> Easy setup,
              no coding required
            </div>
          </div>
          <div>
            {" "}
            <div className="flex gap-2 items-center text-sm font-medium">
              <CheckCircle2 className="text-green-700 text-xl " /> Free forever
              for core features
            </div>
          </div>
          <div>
            {" "}
            <div className="flex gap-2 items-center text-sm font-medium">
              <CheckCircle2 className="text-green-700 text-xl " />
              14-day trial of premium features & apps
            </div>
          </div>
        </div>
        <div>
          <SingIn />
        </div>
      </div>
      <div className="text-lg text-center font-light mt-5">
        Trusted at companies large and small
      </div>
    </div>
  );
}
