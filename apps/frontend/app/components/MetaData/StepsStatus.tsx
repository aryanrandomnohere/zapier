"use client";
import { selectedRecord } from "@/app/RecoilState/store/recordsAtom";
import { itemStepMetaData, onStepEnum } from "@repo/types";
import { FaRegCircle } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";

export default function StepsStatus({
  step,
  unique,
  panelIndex,
  stepIndex,
  setIndex,
  checkValidity,
}: {
  step: itemStepMetaData | null;
  unique: onStepEnum;
  panelIndex: onStepEnum;
  stepIndex: number;
  setIndex: (index: number) => void;
  checkValidity: (onStepEnum: onStepEnum, panelIndex?: onStepEnum) => boolean;
}) {
  const selectedRecordId = useRecoilValue(selectedRecord);
  if (!step) return;
  const isClickable =
    unique === onStepEnum.TEST
      ? checkValidity(onStepEnum.SETUP) &&
        checkValidity(onStepEnum.CONFIGURATION)
      : unique === onStepEnum.CONFIGURATION
        ? checkValidity(onStepEnum.SETUP)
        : true;
  const validity =
    unique === onStepEnum.TEST ? !!selectedRecordId : checkValidity(unique);
  return (
    <div className="flex flex-col items-center">
      {" "}
      <button
        disabled={!isClickable}
        key={unique}
        onClick={() => setIndex(unique)}
        className={` text-center transition-opacity duration-300 ease-linear flex font-semibold items-center text-xs gap-1 px-0.5 mx-2 py-2.5 hover:cursor-pointer text-black `}
      >
        <span className="text-xs font-semibold">{step.stepName}</span>
        {step.completed === null && unique == panelIndex ? (
          <FaRegCircle />
        ) : step.completed === null && unique !== panelIndex ? (
          <div className="text-black/30 ">
            <IoTimerOutline size={18} />
          </div>
        ) : validity ? (
          <div className="text-green-700">
            <GoCheckCircleFill size={15} />
          </div>
        ) : (
          <div className="text-black  font-extrabold bg-yellow-400 px-[7px] py-[1px] border-0 rounded-full ">
            !
          </div>
        )}
      </button>
      {panelIndex === unique && (
        <div className="w-full transition-all duration-300 ease-linear h-0.5 bg-blue-700"></div>
      )}
    </div>
  );
}
<FaRegCircle />;
