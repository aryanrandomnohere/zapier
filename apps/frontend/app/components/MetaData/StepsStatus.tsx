import { itemStepMetaData } from "@repo/types";
import { GoCheckCircleFill } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";

export default function StepsStatus({ step, key}: { step: itemStepMetaData, key: number }) {
  const isActive = step.completed === null;
  const isCompleted = step.completed === true;

  return (
    <div key={key} className={`flex items-center text-sm gap-1 px-3 py-1.5 rounded-md hover:cursor-pointer ${isActive ? ' text-black/30' : isCompleted ? ' text-gray-600' : ' text-gray-600'}`}>
      <span className="text-sm font-medium">{step.stepName}</span>
      {step.completed === null ? 
        <div className="text-black/30 "><IoTimerOutline size={18} /></div> : 
        step.completed ? 
          <div className="text-green-500"><GoCheckCircleFill size={18} /></div> : 
          <div className="text-yellow-500  rounded-full"><MdError className="text-yellow-400 rounded-full bg-black "  size={18} /></div>
      }
    </div>
  )
}
