"use client";
import { ChevronDown, AppWindow, Home, CircleHelp, Menu } from "lucide-react";
import Link from "next/link";
import { lazy, Suspense, useRef, useState } from "react";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { SkeletonPulse } from "@/app/components/ui/Skeleton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { zoomLevelAtom } from "../../../RecoilState/store/zapCreate";
import CanvasActions from "./CanvasActions";
import useOutsideClick from "@/app/hooks/useOutsideClick";

const FolderPath = lazy(() => import("./FolderPath"));
const ServicesActions = lazy(() => import("./ServicesActions"));
const HelpActions = lazy(() => import("./HelpActions"));

export default function TopBar() {
  const zoomLevel = useRecoilValue(zoomLevelAtom);
  const setZoomLevel = useSetRecoilState(zoomLevelAtom);
  const ref = useRef<HTMLDivElement | null>(null);
  const { open: mobileOptionsOpen, setOpen: setMobileOptionsOpen } =
    useOutsideClick(ref);

  return (
    <div className="w-full bg-[#413736]">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-2 py-1 sm:py-2 gap-1 sm:gap-3 h-10 sm:h-14">
        {/* Left */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={"/home"}
            className="p-1 border rounded-sm border-black hover:bg-blue-200/70 hover:border-blue-200/70"
          >
            <Home size={16} color="white" />
          </Link>

          {/* Desktop Zaps */}
          <Link
            href={"/zap/dashboard"}
            className="hidden sm:flex items-center gap-1 py-1 px-2 hover:bg-white/20"
          >
            <span className="text-white" style={{ color: "#ff4f00" }}>
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
            <span className="font-extrabold text-white text-sm sm:text-lg">
              Zaps
            </span>
          </Link>
        </div>

        {/* Center - FolderPath */}
        <div className="flex-1 sm:flex justify-center">
          <RecoilContextProvider>
            <Suspense fallback={<SkeletonPulse className="w-full h-6" />}>
              <FolderPath />
            </Suspense>
          </RecoilContextProvider>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop Canvas & Help */}
          <div className="hidden sm:flex items-center gap-2">
            <RecoilContextProvider>
              <CanvasActions
                trigger={
                  <div className="flex items-center gap-1 px-2 py-2 hover:bg-white/20 text-white text-sm">
                    <span className="font-bold">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <ChevronDown size={16} />
                  </div>
                }
                setZoomLevel={setZoomLevel}
              />
            </RecoilContextProvider>

            <Suspense fallback={<SkeletonPulse className="w-14 h-6" />}>
              <HelpActions
                trigger={
                  <div className="flex items-center gap-1 px-2 py-2 hover:bg-white/20 text-white text-sm">
                    <CircleHelp size={16} />
                    <span className="font-bold">Help</span>
                    <ChevronDown size={16} className="text-white/50" />
                  </div>
                }
              />
            </Suspense>
          </div>

          {/* Mobile Options Button */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setMobileOptionsOpen(!mobileOptionsOpen)}
              className="p-2 border border-white/50 rounded hover:bg-white/20"
            >
              <Menu size={18} color="white" />
            </button>

            {/* Mobile Horizontal Options */}
            {mobileOptionsOpen && (
              <div
                ref={ref}
                className="absolute top-full mt-1 right-0 w-max bg-[#413736] rounded shadow-lg z-50 flex flex-row gap-1 p-1"
              >
                <RecoilContextProvider>
                  <CanvasActions
                    trigger={
                      <div className="flex items-center justify-center text-white text-sm px-2 py-1 hover:bg-white/20 cursor-pointer">
                        Canvas
                        <ChevronDown size={14} className="text-white/50" />
                      </div>
                    }
                    setZoomLevel={setZoomLevel}
                  />
                </RecoilContextProvider>

                <Suspense fallback={<SkeletonPulse className="w-16 h-4" />}>
                  <HelpActions
                    trigger={
                      <div className="flex items-center justify-center text-white text-sm px-2 py-1 hover:bg-white/20 cursor-pointer">
                        Help
                        <ChevronDown size={14} className="text-white/50" />
                      </div>
                    }
                  />
                </Suspense>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
