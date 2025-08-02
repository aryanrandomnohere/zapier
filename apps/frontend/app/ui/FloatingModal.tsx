import React from "react";

export default function FloatingModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute right-[21.5rem] max-w-[27rem] overflow-y-auto top-7 shadow-2xl shadow-black/40 transform-all duration-300 ease-in-out w-full mt-1 bg-white border border-gray-200 rounded-md z-50">
      {children}
    </div>
  );
}
