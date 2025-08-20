"use client";
import Link from "next/link";
import { ReactNode } from "react";

export default function LinkButton({
  children,
  size = "small",
  onClick,
  href,
}: {
  children: ReactNode;
  size: string;
  onClick?: () => void;
  href?: string;
}) {
  return (
    <Link
      href={href || ""}
      className={` flex lg:items-center ${size === "small" ? "text-sm" : "text-base"} rounded hover:bg-stone-200/50 p-2 transform transition-all duration-100 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
