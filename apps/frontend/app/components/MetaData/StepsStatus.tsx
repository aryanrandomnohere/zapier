import { itemStepMetaData, onStepEnum } from "@repo/types";
import {
  FaCircleExclamation,
  FaExclamation,
  FaRegCircle,
} from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";

export default function StepsStatus({
  step,
  unique,
  stepIndex,
  setIndex,
  checkValidity,
}: {
  step: itemStepMetaData | null;
  unique: onStepEnum;
  stepIndex: onStepEnum;
  setIndex: (index: number) => void;
  checkValidity: (index: onStepEnum) => boolean;
}) {
  if (!step) return;
  const isClickable =
    unique === onStepEnum.TEST
      ? checkValidity(onStepEnum.SETUP) &&
        checkValidity(onStepEnum.CONFIGURATION)
      : unique === onStepEnum.CONFIGURATION
        ? checkValidity(onStepEnum.SETUP)
        : true;
  return (
    <button
      disabled={!isClickable}
      key={unique}
      onClick={() => setIndex(unique)}
      className={` text-center transition-opacity duration-300 ease-linear flex font-semibold items-center text-xs gap-1 px-1 mx-2 py-2.5 hover:cursor-pointer text-black ${stepIndex === unique ? "border-b-2 border-blue-700" : ""}`}
    >
      <span className="text-xs font-semibold">{step.stepName}</span>
      {step.completed === null && unique == stepIndex ? (
        <FaRegCircle />
      ) : step.completed === null && unique !== stepIndex ? (
        <div className="text-black/30 ">
          <IoTimerOutline size={18} />
        </div>
      ) : checkValidity(unique) ? (
        <div className="text-green-700">
          <GoCheckCircleFill size={15} />
        </div>
      ) : (
        <div className="  rounded-full">
          <FaExclamation
            className="text-black font-extrabold bg-yellow-400 p-1 border-0 rounded-full "
            size={15}
          />
        </div>
      )}
    </button>
  );
}
<FaRegCircle />;
