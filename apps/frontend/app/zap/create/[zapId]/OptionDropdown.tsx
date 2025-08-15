"use client";
import React from "react";
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
  function handleClick() {
    console.log("toggled dd", showDropdown);
    setShowDropdown(!showDropdown);
  }
  return (
    <div className="relative">
      {trigger}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
          {children}
        </div>
      )}
    </div>
  );
}
