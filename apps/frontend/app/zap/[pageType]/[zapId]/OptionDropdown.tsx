"use client";
import useOutsideClick from "@/app/hooks/useOutsideClick";
import React, { useRef } from "react";
export default function OptionDropdown({
  children,
  trigger,
  showDropdown,
  setShowDropdown,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
  showDropdown: boolean;
  setShowDropdown: (param: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { open, setOpen } = useOutsideClick(ref);
  function handleClick() {
    setOpen(!open);
    setShowDropdown(!showDropdown);
  }
  return (
    <div className="relative">
      <div ref={ref} onClick={handleClick}>
        {trigger}
      </div>
      {showDropdown && open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
          {children}
        </div>
      )}
    </div>
  );
}
