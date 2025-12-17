// Alternative approach: Pass zoomToFit as a prop to CanvasActions

"use client";
import React from "react";
import DropDownMenu from "@/app/ui/DropDownMenu";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { zoomToFitTriggerAtom } from "@/app/RecoilState/store/zapCreate";

export default function CanvasActions({
  trigger,
  setZoomLevel,
}: {
  trigger: React.ReactNode;
  setZoomLevel: SetterOrUpdater<number>;
}) {
  const setZoomToFitTrigger = useSetRecoilState(zoomToFitTriggerAtom);

  const handleZoomToFit = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Triggering zoom to fit");
    setZoomToFitTrigger(true); // This will trigger the zoom to fit in MovableCells
  };

  return (
    <DropDownMenu type="normal" trigger={trigger}>
      <ul className="text-white text-sm p-1 space-y-1.5">
        <li
          onClick={(e) => {
            e.stopPropagation();
            setZoomLevel((prev: number) => Math.min(prev + 0.15, 2));
          }}
          className="flex justify-between px-2 py-0.5  hover:bg-violet-600  cursor-pointer"
        >
          <span>Zoom in</span>
          <span className="text-zinc-400">+</span>
        </li>
        <li
          onClick={(e) => {
            e.stopPropagation();
            setZoomLevel((prev: number) => Math.max(prev - 0.15, 0.3));
          }}
          className="flex justify-between px-2 py-0.5 hover:bg-violet-600 cursor-pointer rounded"
        >
          <span>Zoom out</span>
          <span className="text-white">-</span>
        </li>
        <li
          onClick={handleZoomToFit}
          className="flex justify-between px-2 py-0.5  hover:bg-violet-600  cursor-pointer"
        >
          <span>Zoom to fit</span>
          <span className="text-zinc-400">⌘0</span>
        </li>
      </ul>
    </DropDownMenu>
  );
}

// Then in your parent component, you would pass the zoomToFit function:
// <CanvasActions
//   trigger={trigger}
//   setZoomLevel={setZoomLevel}
//   onZoomToFit={zoomToFit}
// />
