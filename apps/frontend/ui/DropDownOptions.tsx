"use client";

import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  type?: "normal" | "shiftedright";
}

export default function DropDownOptions({
  trigger,
  children,
  type = "normal",
}: DropdownMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { open, setOpen } = useOutsideClick(ref);

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Trigger */}
      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        {trigger}
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute ${
            type === "shiftedright" ? "-right-[14.5rem]" : "right-0"
          } mt-0.5 min-w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50`}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
}
