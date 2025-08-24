import React from "react";
import clsx from "clsx";

export default function FloatingModal({
  children,
  ref,
  type = "shifted", // default to shifted
}: {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement | null>;
  type?: "shifted" | "below";
}) {
  return (
    <div
      ref={ref}
      className={clsx(
        "absolute max-w-[27rem] overflow-y-auto shadow-2xl shadow-black/40 transform-all duration-300 ease-in-out w-full mt-1 bg-white border border-gray-200 rounded-md z-50",
        type === "shifted" && "right-[21.5rem] top-7",
        type === "below" && "right-0 top-full mt-2",
      )}
    >
      {children}
    </div>
  );
}
