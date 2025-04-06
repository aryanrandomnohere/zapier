import { itemStepMetaData } from "@repo/types";
import { FaRegCircle } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";

export default function StepsStatus({ step, unique, stepIndex,setIndex}: { step: itemStepMetaData, unique: number, stepIndex: number,setIndex: (index: number) => void }) {
  const isActive = step.completed === null;
  const isCompleted = step.completed === true;

  return (
    <div key={unique} onClick={() =>{setIndex(Number(unique))}} className={` text-center transform-all duration-100 ease-linear flex font-semibold items-center text-xs gap-1 px-3 py-2.5 hover:cursor-pointer text-black ${Number(stepIndex) === Number(unique) ? "border-b-2 border-blue-700" : ""}`}>
      <span className="text-xs font-semibold">{step.stepName}</span>
      {step.completed === null && unique == stepIndex ? 
        <FaRegCircle /> : step.completed === null && unique !== stepIndex ? <div className="text-black/30 "><IoTimerOutline size={18} /></div> : 
        step.completed ? 
          <div className="text-green-500"><GoCheckCircleFill size={18} /></div> : 
          <div className="text-yellow-500  rounded-full"><MdError className="text-yellow-400 rounded-full bg-black "  size={14} /></div>
      }
    </div>
  )
}
 <FaRegCircle /> 