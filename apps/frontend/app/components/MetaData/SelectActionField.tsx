import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  recordsAtom,
  selectedRecord,
} from "@/app/RecoilState/store/recordsAtom";
import { onStepEnum } from "@repo/types";

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
  onFieldChange: (fieldNumber: number, value: string, stepEnum: any) => void;
  fieldNumber: number;
  onStepEnum: onStepEnum;
  fieldLabel: string;
  imagePath: string;
  setValue: (value: string) => void;
}

const DittoComponent: React.FC<DittoComponentProps> = ({
  currentValue,
  cursorPosition,
  onFieldChange,
  fieldNumber,
  onStepEnum,
  fieldLabel,
  imagePath,
  setValue,
}) => {
  const records = useRecoilValue(recordsAtom);
  const selectedRecordId = useRecoilValue(selectedRecord);
  const [activeTab, setActiveTab] = useState<
    "previous" | "inUse" | "variables"
  >("previous");
  const [searchTerm, setSearchTerm] = useState("");

  const record = records.find((record) => record.id === selectedRecordId);
  if (!record) return null;

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
    onFieldChange(fieldNumber, updatedValue, onStepEnum);
  };

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
            {filteredFields.map(([fieldName, fieldValue]) => (
              <div
                key={fieldName}
                onClick={() => handleFieldClick(fieldName)}
                className="flex justify-between items-start p-1 rounded hover:bg-blue-600/5 cursor-pointer transition"
              >
                <div className="flex gap-1.5 border items-center rounded-sm border-black/20 hover:border-blue-600 p-0.5">
                  <img
                    src={imagePath}
                    alt="logo"
                    className="w-[21px] h-[21px] p-0.5"
                  />
                  <p className="text-xs font-bold text-gray-900">
                    {fieldName[0].toUpperCase() +
                      fieldName.slice(1, fieldName.length)}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{fieldValue}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DittoComponent;
