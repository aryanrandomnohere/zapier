"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Field, onStepEnum } from "@repo/types";
import { useRecoilState, useRecoilValue } from "recoil";
import { zapCreateState } from "@/app/RecoilState/store/zapCreate";
import {
  configureStepDetails,
  selectedItemMetaData,
} from "@/app/RecoilState/currentZap";
import { selectedRecord } from "@/app/RecoilState/store/recordsAtom";
import axios from "axios";
import {
  actionTested,
  skippedAction,
} from "@/app/RecoilState/store/actionAtom";
import { metadata } from "@/app/layout";

interface DataInFormProps {
  fields?: Field[];
  handlePublish: () => void;
  notLastStep: boolean;
  handleNextStep: () => void;
}

const DataInForm: React.FC<DataInFormProps> = ({
  fields = [],
  handlePublish,
  notLastStep,
  handleNextStep,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tested, setTested] = useRecoilState(actionTested);
  const [skipped, setSkipped] = useRecoilState(skippedAction);
  const [loading, setLoading] = useState();
  const [zapState, setZapState] = useRecoilState(zapCreateState);
  const [metaData, setMetaData] = useRecoilState(selectedItemMetaData);
  const selectedRecordId = useRecoilValue(selectedRecord);
  const configureId = useRecoilValue(configureStepDetails);
  enum tabIdEnum {
    DATA_IN = "data_in",
    DATA_OUT = "data_out",
  }
  const [tabId, setTabId] = useState(tabIdEnum.DATA_IN);

  useEffect(() => {
    if (metaData.index === null || metaData.index === undefined) return;
    if (zapState.selectedItems[metaData.index]?.dataOut) {
      setTested(true);
    }
  }, [zapState.selectedItems[metaData.index || 1]?.dataOut, metaData.index]);

  const checkPublishability = () => {
    let isPublishable = true;
    zapState.selectedItems.map((step, i) => {
      if (
        step.metadata?.fields[0].fieldValue ||
        zapState.selectedItems.length > 1
      ) {
        if (
          !(
            CheckStepValidity(
              onStepEnum.SETUP,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            CheckStepValidity(
              onStepEnum.CONFIGURATION,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            CheckStepValidity(
              onStepEnum.TEST,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            !!selectedRecordId
          )
        )
          isPublishable = false;
      } else {
        isPublishable = false;
      }
    });
    return isPublishable;
  };

  const CheckStepValidity = (
    Index: onStepEnum,
    index?: number,
    specificCongigId?: string | null,
  ) => {
    if (metaData.index === null || metaData.index === undefined) {
      return false;
    }
    const ofIndex = index ?? metaData.index;
    const stepConfigurationId = specificCongigId || configureId;

    const currentStep =
      Index === onStepEnum.CONFIGURATION
        ? zapState.selectedItems[ofIndex]?.metadata.optionConfiguration[
            stepConfigurationId
          ].configurationStep
        : zapState.selectedItems[ofIndex]?.metadata;
    if (!currentStep?.fields) {
      console.log("Field does not exist returnning");
      return false;
    }

    // Check if all required fields in the current step have values
    return currentStep.fields.every((field) => {
      if (field.required) {
        return field.fieldValue && field.fieldValue.trim() !== "";
      }
      return true;
    });
  };

  // Sample data matching the design
  const fieldsToRender = fields;
  // Separate fields with values and empty fields
  const filledFields = fieldsToRender.filter(
    (field) => field.fieldValue !== null && field.fieldValue !== "",
  );
  const emptyFields = fieldsToRender.filter(
    (field) => field.fieldValue === null || field.fieldValue === "",
  );

  const renderFieldValue = (field: Field) => {
    const content =
      field.fieldValue || `empty ${!field.required ? "(optional)" : ""}`;
    return <span className="text-xs text-gray-700 font-medium">{content}</span>;
  };

  const handleTestAction = async () => {
    if (!selectedRecordId || (selectedRecordId && selectedRecordId === ""))
      return;
    if (metaData.index === null || metaData.index === undefined) return;
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/actions/test`,
      {
        actionId: zapState.selectedItems[metaData.index].stepId,
      },
      {
        withCredentials: true,
      },
    );
    console.log(response);
    if (response.data.success) {
      setZapState({
        ...zapState,
        selectedItems: zapState.selectedItems.map((item) => {
          if (
            item.stepId ===
            zapState.selectedItems[response.data.sortingOrder || metaData.index]
              ?.stepId
          ) {
            return { ...item, dataOut: response.data.dataOut };
          }
          return item;
        }),
      });
      setTested(true);
    }

    setTested(true);
  };
  if (metaData.index === null || metaData.index === undefined) return;

  return (
    <div className="w-full flex flex-col  max-w-md">
      {/* Header - Outside the box */}
      <div className="flex gap-1">
        <div
          className="mb-0 ml-2 mx-3"
          onClick={() => setTabId(tabIdEnum.DATA_IN)}
        >
          <h2 className="text-xs font-medium text-gray-900 mb-2 pl-3 cursor-pointer">
            Data In
          </h2>
          {tabId === tabIdEnum.DATA_IN && (
            <div className="h-0.5 w-12 bg-blue-500 mb-0 pl-3"></div>
          )}
        </div>
        <div
          className="mb-0 ml-2 mx-3"
          onClick={() => {
            console.log("clicked data out");
            setTabId(tabIdEnum.DATA_OUT);
          }}
        >
          <h2 className="text-xs font-medium text-gray-900 mb-2 pl-3 cursor-pointer ">
            Data Out
          </h2>
          {tabId === tabIdEnum.DATA_OUT && (
            <div className="h-0.5 w-20 bg-blue-500 mb-0 pl-3"></div>
          )}
        </div>
      </div>
      {/* Main container */}
      {tabId === tabIdEnum.DATA_IN && (
        <div className="bg-white border border-gray-200 mx-3 rounded-lg shadow-sm">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                className="w-full pl-10 pr-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                placeholder="Search item data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="p-3 space-y-3">
            {/* Fields with values */}
            {filledFields.map((field) => (
              <div key={field.name} className="flex items-center gap-3">
                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded border">
                  {field.fieldLabel}
                </span>
                {renderFieldValue(field)}
              </div>
            ))}

            {/* Empty Fields Section */}
            {emptyFields.length > 0 && (
              <>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-xs font-medium text-gray-900 mb-3">
                    Empty fields:
                  </h3>
                  <div className="space-y-3">
                    {emptyFields.map((field) => (
                      <div key={field.name} className="flex items-center gap-3">
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded border">
                          {field.fieldLabel}
                        </span>
                        {renderFieldValue(field)}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {tabId === tabIdEnum.DATA_OUT &&
        zapState.selectedItems[metaData.index]?.dataOut && (
          <div className="bg-white border border-gray-200 mx-3 rounded-lg shadow-sm">
            <div className="p-3 space-y-3">
              {Object.entries(
                zapState.selectedItems[metaData.index]?.dataOut || {},
              ).map(([key, value]) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded border">
                    {key}
                  </span>
                  {renderFieldValue({
                    fieldValue: value,
                    fieldLabel: key,
                    name: key,
                    fieldInputType: "text",
                    fieldPlaceholder: "",
                    required: false,
                    fieldNumber: 0,
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

      <div className=" absolute w-full bottom-0">
        <div className="w-full border-t border-black/10 self-start justify-start">
          <div className="flex gap-1 w-full my-4 px-2 ">
            {(tested || skipped) &&
            !zapState.selectedItems[metaData.index]?.dataOut ? (
              <button
                disabled={!selectedRecordId}
                className={`w-1/2 text-black ${
                  selectedRecordId
                    ? "bg-transparent hover:bg-gray-500/50 hover:cursor-pointer"
                    : "cursor-not-allowed bg-gray-400"
                } border border-gray-400 py-2 rounded text-sm font-bold text-center transition-all duration-200`}
                onClick={() => handleTestAction()}
              >
                {tested ? "Retest step" : "Test step"}
                <div className="text-xs text-gray-500">
                  {" "}
                  {!selectedRecordId ? " (No Record Selected)" : ""}
                </div>
              </button>
            ) : !zapState?.selectedItems[metaData?.index]?.dataOut ? (
              <button
                className={`w-1/2 text-black hover:bg-gray-500/50 border border-gray-400 bg-transparent py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
                onClick={() => setSkipped(true)}
              >
                Skip test
              </button>
            ) : (
              <></>
            )}
            {skipped || tested ? (
              notLastStep ? (
                <button
                  onClick={handleNextStep}
                  className={` ${!zapState?.selectedItems[metaData?.index]?.dataOut ? "w-1/2" : "w-full"} bg-blue-700 text-white hover:bg-blue-800" py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
                >
                  Next Step
                </button>
              ) : (
                <button
                  disabled={!checkPublishability()}
                  onClick={handlePublish}
                  className={`  ${!zapState?.selectedItems[metaData?.index]?.dataOut ? "w-1/2" : "w-full"} ${!checkPublishability() ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 "} text-white hover:bg-blue-800" py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
                >
                  Publish
                </button>
              )
            ) : !zapState?.selectedItems[metaData?.index]?.dataOut ? (
              <button
                disabled={!selectedRecordId}
                onClick={handleTestAction}
                className={`flex flex-col w-1/2 bg-blue-700 text-white ${!selectedRecordId ? "cursor-not-allowed bg-gray-400 " : "hover:bg-blue-800"} py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
              >
                Test step
                <div className="text-xs text-gray-500">
                  {" "}
                  {!selectedRecordId ? " (No Record Selected)" : ""}
                </div>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataInForm;
