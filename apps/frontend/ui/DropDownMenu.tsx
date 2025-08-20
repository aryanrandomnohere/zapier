"use client";

import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  type: "normal" | "shiftedright" | "bottom";
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
        onClick={(e) => {
          e.stopPropagation();
          console.log("Toggle");
          setOpen(!open);
        }}
      >
        {trigger}
      </div>
      {open && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className={`absolute ${type === "shiftedright" ? "-right-[14.5rem]" : type === "bottom" ? "top-7 left-2" : "right-0.5"} mt-1 min-w-44 w-fit  border border-zinc-200 rounded shadow-xl z-[9999] ${menuClassName ? menuClassName : "bg-[#413736]"}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
