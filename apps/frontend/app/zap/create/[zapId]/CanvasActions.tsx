"use client";
import React from "react";
import { lazy } from "react";

const DropDownMenu = lazy(() => import("@/app/ui/DropDownMenu"));

export default function CanvasActions({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <DropDownMenu type="normal" trigger={trigger}>
      <ul className="text-white text-sm p-1 space-y-1.5">
        <li className="px-2 py-0.5  hover:bg-violet-600  cursor-pointer">
          Custom zoom
        </li>
        <li className="flex justify-between px-2 py-0.5  hover:bg-violet-600  cursor-pointer">
          <span>Zoom in</span>
          <span className="text-zinc-400">+</span>
        </li>
        <li className="flex justify-between px-2 py-0.5 hover:bg-violet-600 cursor-pointer rounded">
          <span>Zoom out</span>
          <span className="text-white">-</span>
        </li>
        <li className="flex justify-between px-2 py-0.5  hover:bg-violet-600  cursor-pointer">
          <span>Zoom to fit</span>
          <span className="text-zinc-400">\</span>
        </li>
        <li className="px-2 py-0.5 text-zinc-500 cursor-not-allowed">
          Review changes
        </li>
        <li className="px-2 py-0.5 text-zinc-500 cursor-not-allowed">
          Collapse paths
        </li>
      </ul>
    </DropDownMenu>
  );
}
