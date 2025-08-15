"use client";
import { ReactNode } from "react";

export default function PrimaryButton({
  onClick,
  size = "small",
  children,
}: {
  onClick?: () => void;
  size: string;
  children: ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center ${size === "small" ? "text-sm px-3 py-2" : "text-xl px-10 py-2.5"} transform transition-all duration-400 font-semibold bg-amber-600 hover:bg-amber-700 hover:cursor-pointer hover:shadow-xl  text-white rounded-lg `}
    >
      {children}
    </div>
  );
}
