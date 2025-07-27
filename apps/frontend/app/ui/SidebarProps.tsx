"use client";

import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

interface SidebarProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: "left" | "right";
  width?: string; // e.g., "w-80"
}

export default function Sidebar({
  trigger,
  children,
  position = "left",
  width = "w-80",
}: SidebarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { open, setOpen } = useOutsideClick(ref);

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <div onClick={() => setOpen(!open)}>{trigger}</div>

      {/* Sidebar */}
      <div
        className={`fixed  top-0 h-full bg-white shadow-lg border border-gray-300 transition-transform duration-300 z-50 ${
          width
        } ${position === "left" ? "left-0" : "right-0"} ${
          open
            ? "translate-x-0"
            : position === "left"
              ? "-translate-x-full"
              : "translate-x-full"
        }`}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
}
