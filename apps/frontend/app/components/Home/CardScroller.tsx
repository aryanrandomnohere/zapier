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
    <div className="bg-[#FDFCFB] p-4 shadow-md rounded min-w-xl min-h-80 max-h-80 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl w-full pb-4 border-b border-black/20 font-bold  text-gray-900">
          {title}
        </h2>
        {rightSlot}
      </div>
      <div className=" h-full overflow-x-auto max-w-[39rem] ">
        <div className="flex gap-2 py-8 items-center w-max">{children}</div>
      </div>
    </div>
  );
}
