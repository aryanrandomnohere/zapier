import React from "react";

export default function FloatingModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute overflow-y-auto top-4 shadow-2xl shadow-black/40 right-full mr-1 transform-all duration-300 ease-in-out w-full mt-1 bg-white border border-gray-200 rounded-md z-50">
      {children}
    </div>
  );
}
