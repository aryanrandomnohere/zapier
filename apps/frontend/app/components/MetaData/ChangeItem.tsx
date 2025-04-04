"use client"
import Modal from "@/app/ui/Modal";
import { ItemType } from "@repo/types";
import SelectItem from "../SelectItem";

export default function ChangeItem({item}: {item:ItemType}) {
  return (
      
      <Modal>
        <Modal.Open opens="select">
    <div className="hover:cursor-pointer flex justify-between px-3 py-2 border border-black/30 rounded min-w-full">
    <div className="flex items-center bg-yellow-500/10 min-w-32 justify-center rounded px-1 py-0.5 gap-1 border border-black/30">
        <img src={item.imagePath} className="w-4 h-4" /> 
        {item.name}
      </div>
          <button className="text-blue-500 border border-black/30 rounded px-2 py-0.5 hover:bg-gray-100 font-bold">Change</button></div>
        </Modal.Open>
        <Modal.Window name="select">
          <SelectItem type="triggers" />
        </Modal.Window>
      </Modal>
  )
}