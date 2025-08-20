"use client";
import { selectedRecord } from "@/RecoilState/store/recordsAtom";
import { itemStepMetaData, onStepEnum } from "@repo/types";
import { CheckCircle2, Circle, Timer } from "lucide-react";
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
  checkValidity: (onStepEnum: onStepEnum, panelIndex: onStepEnum) => boolean;
}) {
  const selectedRecordId = useRecoilValue(selectedRecord);
  if (!step) return;
  const isClickable =
    unique === onStepEnum.TEST
      ? checkValidity(onStepEnum.SETUP, stepIndex) &&
        checkValidity(onStepEnum.CONFIGURATION, stepIndex)
      : unique === onStepEnum.CONFIGURATION
        ? checkValidity(onStepEnum.SETUP, stepIndex)
        : true;
  const validity =
    unique === onStepEnum.TEST && stepIndex === 0
      ? !!selectedRecordId
      : checkValidity(unique, stepIndex);
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
          <Circle />
        ) : step.completed === null && unique !== panelIndex ? (
          <div className="text-black/30 ">
            <Timer size={18} />
          </div>
        ) : validity ? (
          <div className="text-green-700">
            <CheckCircle2 size={15} />
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
