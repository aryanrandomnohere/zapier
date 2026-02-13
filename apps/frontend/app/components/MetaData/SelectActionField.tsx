import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  recordsAtom,
  selectedRecord,
} from "@/app/RecoilState/store/recordsAtom";
import { onStepEnum } from "@repo/types";
import SelectField from "./SelectField";
import { ArrowRight, Square } from "lucide-react";
import {
  configureStepDetails,
  onStep,
  selectedItemMetaData,
} from "@/app/RecoilState/currentZap";
import { zapCreateState } from "@/app/RecoilState/store/zapCreate";

interface RecordMetadata {
  id: string;
  type: "modified" | "original";
  createdAt: string;
  pulledAt: string;
  title: string;
  JsonData: Record<string, string>;
}

interface DittoComponentProps {
  currentValue: string;
  cursorPosition: number;
  onFieldChange: (
    fieldNumber: number,
    value: string,
    stepEnum: onStepEnum,
  ) => void;
  fieldNumber: number;
  currentStep: onStepEnum;
  fieldLabel: string;
  imagePath: string;
  setValue: (value: string) => void;
}

const DittoComponent: React.FC<DittoComponentProps> = ({
  currentValue,
  cursorPosition,
  onFieldChange,
  fieldNumber,
  currentStep,
  fieldLabel,
  imagePath,
  setValue,
}) => {
  const records = useRecoilValue(recordsAtom);
  const selectedRecordId = useRecoilValue(selectedRecord);
  const setSideModalState = useSetRecoilState(selectedItemMetaData);
  const setOnStep = useSetRecoilState(onStep);
  const zap = useRecoilValue(zapCreateState);
  const setConfigureId = useSetRecoilState(configureStepDetails);
  const [activeTab, setActiveTab] = useState<
    "previous" | "inUse" | "variables"
  >("previous");
  const [searchTerm, setSearchTerm] = useState("");

  const record = records.find((record) => record.id === selectedRecordId);

  const fields = record?.JsonData || {};

  const filteredFields = Object.entries(fields).filter(
    ([key, value]) =>
      key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleFieldClick = (fieldName: string) => {
    let newValue = currentValue;
    let insertPosition = cursorPosition;

    if (
      cursorPosition > 0 &&
      currentValue[cursorPosition - 1] === "/" &&
      currentValue[cursorPosition - 2] === " "
    ) {
      newValue =
        currentValue.slice(0, cursorPosition - 1) +
        currentValue.slice(cursorPosition);
      insertPosition = cursorPosition - 1;
    }

    const fieldReference = `{{${fieldName}}}`;
    const updatedValue =
      newValue.slice(0, insertPosition) +
      fieldReference +
      newValue.slice(insertPosition);
    setValue(updatedValue);
    onFieldChange(fieldNumber, updatedValue, currentStep);
  };

  function handleCompleteStep() {
    setSideModalState({
      isOpen: true,
      index: 0,
    });
    if (
      zap.selectedItems[0].metadata.fields[0].fieldValue === "" ||
      zap.selectedItems[0].metadata.fields[0].fieldValue === null
    ) {
      setOnStep(onStepEnum.SETUP);
      return;
    }
    setOnStep(onStepEnum.TEST);
    setConfigureId(zap.selectedItems[0].metadata.fields[0].fieldValue);
  }
  // if (!selectedRecordId || !record) {
  //   return (
  //     <div className="flex flex-col w-full p-4">
  //       {/* Header */}
  //       <h2 className="text-sm font-semibold mb-3">Select the event</h2>

  //       {/* Description Box */}
  //       <div className="w-full rounded p-4 bg-[#F3F0FF] flex flex-col items-center">
  //         {/* Inner heading */}
  //         <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">
  //           First, you need to complete this step
  //         </h3>

  //         {/* Icon Section */}
  //         <div className="flex items-center gap-2 mb-3">
  //           {/* Left Icon (Square red) */}
  //           <div className="text-red-500 rounded p-1 border border-black/10">
  //             <FaSquare size={20} />
  //           </div>
  //           {/* Arrow */}
  //           <IoIosArrowRoundForward size={20} className="text-gray-500" />
  //           {/* Right Icon (Webhook image) */}
  //           <img
  //             src={imagePath}
  //             alt="logo"
  //             className="w-5 h-5 p-1 border border-black/10 rounded"
  //           />
  //         </div>

  //         {/* Instruction Text */}
  //         <p className="text-center text-gray-700 text-xs leading-4">
  //           Configuring the step gives you access to Webhooks by Zapier&apos;s data
  //           to use in fields like this one. Go complete this step & come back to
  //           have access to its data.
  //         </p>

  //         {/* Button */}
  //         <button
  //           onClick={handleCompleteStep}
  //           className="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-3 py-1.5 mt-4 transition-colors text-xs font-medium hover:cursor-pointer "
  //         >
  //           Complete this step
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full text-xs bg-white rounded border border-black/20">
      {/* Header */}
      <div className="flex items-center justify-start gap-1 px-4 py-2 ">
        <p className="text-xs font-bold text-black">
          Insert data for{" "}
          <span className="text-indigo-600 font-semibold">{fieldLabel}</span>
        </p>
        <span className="text-[10px]  border p-[1px] rounded text-gray-500">
          Dynamic
        </span>
      </div>

      {/* Search input */}
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-xs border px-3 py-1.5 rounded-sm focus:outline-none  focus:ring-1 focus:ring-blue-600"
        />
      </div>

      {!(!selectedRecordId || !record) ? (
        <div className="w-full text-xs bg-white rounded border border-black/20">
          {/* Tabs */}
          <div className="flex space-x-3 px-4 py-1 pb-1.5 border-b border-black/10 text-xs font-medium">
            <button
              onClick={() => setActiveTab("previous")}
              className={`pb-1.5 hover:cursor-pointer ${activeTab === "previous" ? "border-b-2 border-blue-500 text-black" : "text-black"}`}
            >
              Previous Steps
            </button>
            <button
              onClick={() => setActiveTab("inUse")}
              className={`pb-1.5 hover:cursor-pointer ${activeTab === "inUse" ? "border-b-2 border-blue-500 text-black" : "text-black"}`}
            >
              In-use Data
            </button>
            <button
              onClick={() => setActiveTab("variables")}
              className={`pb-1.5 hover:cursor-pointer ${activeTab === "variables" ? "border-b-2 border-black text-black" : "text-black"}`}
            >
              Variables
            </button>
          </div>

          {/* Field list */}
          <div className="max-h-64 overflow-y-auto px-4 py-3">
            {filteredFields.length === 0 ? (
              <p className="text-xs text-gray-500">No matching fields</p>
            ) : (
              <div className="space-y-0.5">
                <h4 className="text-xs text-gray-500 font-bold mb-1">
                  Selected Record :
                </h4>
                {filteredFields.map(([fieldName, fieldValue]) => {
                  return (
                    <SelectField
                      key={fieldName}
                      fieldName={fieldName}
                      fieldValue={fieldValue}
                      handleFieldClick={handleFieldClick}
                      imagePath={imagePath}
                      parentPath=""
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full p-4">
          {/* Header */}
          <h2 className="text-sm font-semibold mb-3">Select the event</h2>

          {/* Description Box */}
          <div className="w-full rounded p-4 bg-[#F3F0FF] flex flex-col items-center">
            {/* Inner heading */}
            <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">
              First, you need to complete this step
            </h3>

            {/* Icon Section */}
            <div className="flex items-center gap-2 mb-3">
              {/* Left Icon (Square red) */}
              <div className="text-red-500 rounded p-1 border border-black/10">
                <Square size={22} />
              </div>
              {/* Arrow */}
              <ArrowRight size={20} className="text-gray-500" />
              {/* Right Icon (Webhook image) */}
              <img
                src={imagePath}
                alt="logo"
                className="w-9 h-9 p-1 border border-black/10 rounded"
              />
            </div>

            {/* Instruction Text */}
            <p className="text-center text-gray-700 text-xs leading-4">
              Configuring the step gives you access to Webhooks by Zapier&apos;s
              data to use in fields like this one. Go complete this step & come
              back to have access to its data.
            </p>

            {/* Button */}
            <button
              onClick={handleCompleteStep}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-3 py-1.5 mt-4 transition-colors text-xs font-medium hover:cursor-pointer "
            >
              Complete this step
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DittoComponent;
// <div
//   key={fieldName}
//   onClick={() => handleFieldClick(fieldName)}
//   className="flex justify-between items-start p-1 rounded hover:bg-blue-600/5 cursor-pointer transition"
// >
//   <div className="flex gap-1.5 border items-center rounded-sm border-black/20 hover:border-blue-600 p-0.5">
//     <img
//       src={imagePath}
//       alt="logo"
//       className="w-[21px] h-[21px] p-0.5"
//     />
//     <p className="text-xs font-bold text-gray-900">
//       {fieldName[0].toUpperCase() +
//         fieldName.slice(1, fieldName.length)}
//     </p>
//     <p className="text-xs text-gray-500 truncate">{fieldValue}</p>
//   </div>
// </div>
