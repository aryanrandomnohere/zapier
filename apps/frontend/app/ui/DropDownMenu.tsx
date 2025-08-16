"use client";

import { useState, useRef, useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  type: "normal" | "shiftedright";
  menuClassName?: string;
}

export default function DropDownMenu({
  trigger,
  children,
  type = "normal",
  menuClassName,
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
          onClick={() => {
            setOpen(false);
          }}
          className={`absolute ${type === "shiftedright" ? "-right-[14.5rem]" : "right-0.5"} mt-1 min-w-44 w-fit font-bold  border border-zinc-200 rounded shadow-xl z-50 ${menuClassName ? menuClassName : "bg-[#413736]"}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
