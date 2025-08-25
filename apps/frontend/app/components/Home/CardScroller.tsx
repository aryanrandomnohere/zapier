import React from "react";

interface CardScrollerProps {
  title: string;
  children: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export default function CardScroller({
  title,
  children,
  rightSlot,
}: CardScrollerProps) {
  return (
    <div className="bg-[#FDFCFB] p-4 shadow-md rounded-lg space-y-10 max-w-2xl">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-900 border-b border-black/20 pb-4 flex-1">
          {title}
        </h2>
        {rightSlot && <div className="ml-2">{rightSlot}</div>}
      </div>

      {/* Scroll container */}
      <div className="overflow-x-auto">
        <div className="flex gap-3 py-6 items-stretch w-max">{children}</div>
      </div>
    </div>
  );
}
