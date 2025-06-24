import { itemStepMetaData, itemTestMetaData } from "@repo/types";
import React from "react";
import { useRecoilState } from "recoil";
import { selectedItemMetaData } from "../RecoilState/currentZap";
import { zapCreateState } from "../RecoilState/store/zapCreate";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSquare } from "react-icons/fa6";
import Triggerdata from "./TriggerData/Triggerdata";

export default function TestItem({ item }: { item: itemTestMetaData }) {
  const [zap,setZap] = useRecoilState(zapCreateState)
  const [metadata,setMetaData] = useRecoilState(selectedItemMetaData)
  console.log(JSON.stringify(item));
  if(metadata.index == null || metadata.index == undefined || !metadata.isOpen) {
    console.log("Returning some error", metadata)
    return null;
  };
  return (
    <div className="flex flex-col text-xs overflow-y-auto ">
      <div className="flex justify-center gap-6 w-full">
        <div className="flex gap-1 " > 
          {item.type === "trigger" && <div className="flex items-center">  
             <img
                src={zap.selectedItems[metadata.index].imagePath}
                alt="logo"
                className="w-8 h-8 p-1 border border-black/10 rounded"
              />
            <IoIosArrowRoundForward size={24} />
                   <FaSquare size={30} className="text-red-500 rounded p-1 border border-black/10" />
               </div>}
   
        {item.type === "action" && <div className="flex items-center">
               <FaSquare size={30} className="text-red-500 rounded p-1 border border-black/10" />
            <IoIosArrowRoundForward size={24} />
             <img
                src={zap.selectedItems[metadata.index].imagePath}
                alt="logo"
                className="w-8 h-8 p-1 rounded border border-black/10"
              /> 
          </div>}
        </div>
        <div className="flex flex-col max-w-2/3">
          <div className="font-bold my-2">{item.does}</div>
          <div>{item.aboutDoes}</div>
        </div>
      </div>
      { item.type == "trigger" && 
      <div>
        <Triggerdata/>
        </div>}
    </div>
  );
}
