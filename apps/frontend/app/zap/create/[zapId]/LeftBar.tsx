"use client";
import {
  Grid,
  Share,
  MessageSquare,
  Calendar,
  Clock,
  Activity,
  Settings,
  FileText,
  Zap,
} from "lucide-react";
import { useState } from "react";
import ZapOperations from "./ZapOperations";

export default function LeftBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {" "}
      <div className="min-w-11 bg-[#413736] min-h-full flex flex-col justify-between items-center py-2 text-zinc-300">
        {/* Top Icons */}
        <div className="flex flex-col space-y-5">
          <Grid
            onClick={handleClick}
            className="w-4.5 h-4.5 hover:cursor-pointer hover:text-blue-300"
          />
          <Share
            onClick={handleClick}
            className="w-4.5 h-4.5 hover:cursor-pointer hover:text-blue-300"
          />
          <MessageSquare
            onClick={handleClick}
            className="w-4.5 h-4.5 hover:cursor-pointer hover:text-blue-300"
          />
          <Calendar
            onClick={handleClick}
            className="w-4.5 h-4.5 hover:cursor-pointer hover:text-blue-300"
          />
          <Clock
            onClick={handleClick}
            className="w-4.5 h-4.5 hover:cursor-pointer hover:text-blue-300"
          />
          <Activity
            onClick={handleClick}
            className="w-4.5 h-4.5 hover:cursor-pointer hover:text-blue-300"
          />
          <Settings
            onClick={handleClick}
            className="w-4.5 h-4.5 hover:cursor-pointer hover:text-blue-300"
          />
          <FileText
            onClick={handleClick}
            className="w-4.5 h-4.5 hover:cursor-pointer hover:text-blue-300"
          />
        </div>
        {/* Bottom Glow Button */}
        <div className="css-1v3iq9f">
          <div className="css-1lzh02s">
            <button
              type="button"
              aria-label="Copilot"
              aria-pressed="false"
              className="w-8 h-8 bg-zinc-800 border border-orange-500 rounded-sm flex items-center justify-center hover:bg-zinc-700 transition-colors"
              data-rac=""
              style={{ marginBottom: "5px" }}
            >
              <span
                data-scale="true"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                >
                  <path
                    fill="url(#MyGradient)"
                    d="M6.159 7.143 9.15 1.997h1.729l2.992 5.146 5.146 2.993v1.729l-5.146 2.992-2.992 5.146H9.15L6.16 14.857l-5.146-2.992v-1.73l5.146-2.992ZM20.797 18.194l-1.28-2.203-1.282 2.203-2.202 1.28 2.202 1.282 1.281 2.203 1.281-2.203L23 19.475l-2.203-1.281Z"
                  />
                  <defs>
                    <linearGradient
                      id="MyGradient"
                      gradientTransform="rotate(45)"
                      gradientUnits="userSpaceOnUse"
                      x1="-100%"
                      y1="-100%"
                      x2="200%"
                      y2="200%"
                    >
                      <stop offset="0%" stopColor="#ffc170" />
                      <stop offset="26%" stopColor="#fea048" />
                      <stop offset="39%" stopColor="#ff7f24" />
                      <stop offset="50%" stopColor="#ff5100" />
                      <stop offset="61%" stopColor="#ff5789" />
                      <stop offset="74%" stopColor="#f589dc" />
                      <stop offset="100%" stopColor="#c1b8ff" />
                      <animateTransform
                        attributeName="gradientTransform"
                        type="rotate"
                        values="45;405"
                        dur="8s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </button>
          </div>
        </div>{" "}
      </div>
      {isOpen && <ZapOperations />}
    </>
  );
}
