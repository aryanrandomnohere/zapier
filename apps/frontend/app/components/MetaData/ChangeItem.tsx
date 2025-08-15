"use client";
import Modal from "@/app/ui/Modal";
import { ItemType } from "@repo/types";
import { lazy } from "react";

const SelectItem = lazy(() => import("../ZapCreate/SelectItem"));

export default function ChangeItem({ item }: { item: ItemType }) {
  return (
    <Modal>
      <Modal.Open opens="select">
        <div className="hover:cursor-pointer flex justify-between px-3 py-2 border border-black/20 rounded min-w-full">
          <div className="flex items-center bg-yellow-500/10 min-w-fit justify-center rounded p-2 gap-1 border border-black/30 text-xs font-semibold">
            <img src={item.imagePath} className="w-4 h-4" />
            {item.name}
          </div>
          <button className="text-blue-500 text-xs border border-black/20 rounded px-2 py-[1px] hover:bg-gray-100 font-bold hover:cursor-pointer">
            Change
          </button>
        </div>
      </Modal.Open>
      <Modal.Window name="select">
        <SelectItem type="triggers" />
      </Modal.Window>
    </Modal>
  );
}
