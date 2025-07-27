"use client";

import { useState, useRef, useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  type: "normal" | "shiftedright";
}

export default function DropDownMenu({
  trigger,
  children,
  type = "normal",
}: DropdownMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { open, setOpen } = useOutsideClick(ref);

  return (
    <div className="relative inline-block" ref={ref}>
      <div
        onClick={() => {
          console.log("Toggle");
          setOpen(!open);
        }}
      >
        {trigger}
      </div>
      {open && (
        <div
          className={`absolute ${type === "shiftedright" ? "-right-[14.5rem]" : "right-3"} mt-1 min-w-44 w-fit font-bold bg-[#413736] border border-zinc-700 rounded shadow-xl z-50`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
