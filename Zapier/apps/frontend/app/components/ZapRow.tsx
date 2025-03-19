import { useState } from "react";
import { zapInterface } from "../types";
import ToggleButton from "./buttons/ToggleButton";
import { IoIosArrowForward } from "react-icons/io";

export default function ZapRow({zaps}:{zaps:zapInterface[]}) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [activeZap, setActiveZap] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center border-b border-black/20 w-full py-4 h-full">{zaps.map((zap:zapInterface)=>(<div className="flex w-6/6 justify-between items-center gap-1" key={zap.id}><div className="flex w-1/6 gap-1 items-center"><input
      type="checkbox"
      defaultChecked
      className="w-5 h-5 rounded-md border-2 border-gray-400 bg-white checked:bg-blue-500 hover:cursor-pointer checked:border-blue-500 focus:ring-0 focus:ring-blue-300 transition duration-200"
    /><div>{zap.trigger.type.name}</div> {zap.actions.map((action)=>(<div>{action.actionDetails.name}</div>))}</div>
    <div className="flex justify-center w-1/6">{zap.name || "Untitled Zap"}</div><div className="flex justify-center w-1/6 items-center gap-7">  <div className="text-sm min-w-24 w-1/3">{zap.lastEdited || "Nov 13, 2023"}</div>
    <div className="w-1/3"><ToggleButton isChecked={isChecked} setIsChecked={setIsChecked}/></div><div className="w-1/3 mr-20"><IoIosArrowForward className="text-2xl" /></div></div></div>) )}
    </div>
  )
}
