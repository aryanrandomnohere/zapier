import React from "react";
import Link from "next/link";
import DropDownMenu from "@/app/ui/DropDownMenu";

interface ServicesActionsProps {
  trigger: React.ReactNode;
}

export default function ServicesActions({ trigger }: ServicesActionsProps) {
  return (
    <DropDownMenu type={"shiftedright"} trigger={trigger}>
      <div className="max-h-[80vh] overflow-y-auto w-64 bg-[#413736] text-white p-4 relative">
        {/* Header */}
        <div className="mb-3">
          <h1 className="text-base font-medium mb-3">
            Zapier Automation Platform
          </h1>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {/* Zaps - Active/Enabled */}
            <Link
              href="/zap/dashboard"
              className="flex items-center justify-between  p-0.5 hover:bg-zinc-700 rounded group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg height="16" width="16" viewBox="0 0 24 24" fill="none">
                    <path
                      fill="#FF4A00"
                      d="M9 23.66 20.54 9.91H15V.16L3.46 13.91H9v9.75Z"
                    />
                  </svg>
                </div>
                <span className=" text-white  text-xs font-extrabold">
                  Zaps
                </span>
              </div>
              <button className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6V18M6 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </Link>

            {/* Tables - Disabled */}
            <div className="flex items-center justify-between text-xs font-extrabold p-0.5 cursor-not-allowed">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg height="16" width="16" viewBox="0 0 24 24" fill="none">
                    <path
                      fill="#FF4A00"
                      d="M12 2.998h9.002v4.501H12V2.998ZM12 7.499H2.998V12H12V7.5ZM12 12h9.002v4.501H12v-4.5ZM2.998 16.501H12v4.501H2.998v-4.5Z"
                    />
                  </svg>
                </div>
                <span className="text-white">Tables</span>
              </div>
              <button className="text-zinc-600 cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6V18M6 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Interfaces - Disabled */}
            <div className="flex items-center justify-between text-xs font-extrabold p-0.5 cursor-not-allowed">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg height="16" width="16" viewBox="0 0 24 24" fill="none">
                    <path
                      fill="#FF4A00"
                      d="M7 2H2v5h5V2ZM22 12H2v5h20v-5ZM22 12H7V7h5V2h10v10ZM7 22v-5h5l-5 5Z"
                    />
                  </svg>
                </div>
                <span className="text-white">Interfaces</span>
              </div>
              <button className="text-zinc-600 cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6V18M6 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Chatbots - Disabled with BETA */}
            <div className="flex items-center justify-between text-xs font-extrabold p-0.5 cursor-not-allowed">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg height="16" width="16" viewBox="0 0 24 24" fill="none">
                    <path
                      fill="#FF4A00"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    />
                  </svg>
                </div>
                <span className="text-white">Chatbots</span>
                <span className="bg-zinc-600 text-zinc-300 text-xs px-1.5 py-0.5 rounded font-medium">
                  BETA
                </span>
              </div>
              <button className="text-zinc-600 cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6V18M6 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Canvas - Disabled with BETA */}
            <div className="flex items-center justify-between text-xs font-extrabold p-0.5 cursor-not-allowed">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg height="16" width="16" viewBox="0 0 24 24" fill="none">
                    <path fill="#FF4A00" d="M21 3H3v4.5h13.5V21H21V3Z" />
                    <path
                      fill="#FF4A00"
                      d="M14.25 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM9.75 16.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <span className="text-white">Canvas</span>
                <span className="bg-zinc-600 text-zinc-300 text-xs px-1.5 py-0.5 rounded font-medium">
                  BETA
                </span>
              </div>
              <button className="text-zinc-600 cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6V18M6 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Footer */}
        <div className="bg-[#574E4C] text-xs min-w-full py-2 px-2  text-zinc-400 ">
          <p>
            You are on the <span className="font-medium text-white">Free</span>{" "}
            plan.
          </p>
          <p>
            Automate at scale with our{" "}
            <span className="text-orange-400 underline cursor-pointer hover:text-orange-300">
              Professional
            </span>{" "}
            plan.
          </p>
        </div>
      </div>
    </DropDownMenu>
  );
}
