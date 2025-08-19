"use client";
import { ChevronDown, AppWindow, Home, CircleHelp } from "lucide-react";
import Link from "next/link";
import { lazy, Suspense } from "react";
const FolderPath = lazy(() => import("./FolderPath"));
const CanvasActions = lazy(() => import("./CanvasActions"));
const ServicesActions = lazy(() => import("./ServicesActions"));
const HelpActions = lazy(() => import("./HelpActions"));
// import HelpActions from "./HelpActions";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { SkeletonPulse } from "@/app/components/ui/Skeleton";

export default function TopBar() {
  return (
    <div className=" min-h-8   w-full bg-[#413736]">
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex items-center w-full h-full gap-3 mx-2 max-w-24">
          <Link
            href={"/home"}
            className=" p-1.5 border rounded-sm border-black hover:bg-blue-200/70 hover:border-blue-200/70 hover:cursor-pointer"
          >
            {" "}
            <Home size={16} color="white" />
          </Link>
          <ServicesActions
            trigger={
              <div className="px-1.5 py-3 hover:bg-white/20 hover:cursor-pointer ">
                <AppWindow size={16} color="white" />
              </div>
            }
          />
          <Link
            href={"/zap/dashboard"}
            className="flex gap-1 items-center py-2 px-2 hover:bg-white/20 hover:cursor-pointer"
          >
            <span className="" style={{ color: "#ff4f00" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="18"
                width="18"
              >
                <path
                  fill="currentColor"
                  d="M9 23.66 20.54 9.91H15V.16L3.46 13.91H9v9.75Z"
                />
              </svg>
            </span>

            <span className="font-extrabold text-white text-lg">Zaps</span>
          </Link>
        </div>

        <div>
          <RecoilContextProvider>
            <FolderPath />
          </RecoilContextProvider>
        </div>

        <div className="flex gap-3">
          <CanvasActions
            trigger={
              <div className="flex items-center justify-center text-sm text-white gap-1 px-2 py-3  hover:bg-white/20 hover:cursor-pointer">
                <span className="flex font-bold">100%</span>
                <div className="text-white/50">
                  <ChevronDown size={16} />
                </div>
              </div>
            }
          />
          <Suspense
            fallback={
              <div className="w-full h-full mt-3 flex items-center justify-center">
                {" "}
                <SkeletonPulse className="w-14 h-6" />{" "}
              </div>
            }
          >
            <HelpActions
              trigger={
                <div className="flex items-center justify-center text-sm text-white gap-1 py-3 px-2  hover:bg-white/20 hover:cursor-pointer">
                  <CircleHelp size={16} />
                  <span className="flex font-bold">Help</span>
                  <div className="text-white/50">
                    <ChevronDown size={16} />
                  </div>
                </div>
              }
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
