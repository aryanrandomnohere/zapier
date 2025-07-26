"use client";
import {
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { zapCreateState } from "../RecoilState/store/zapCreate";
import {
  configureStepDetails,
  onStep,
  OptionChanged,
  selectedItemMetaData,
} from "@/app/RecoilState/currentZap";
import { SlSizeFullscreen } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { FiEdit3 } from "react-icons/fi";
import { BiSolidZap } from "react-icons/bi";
import StepsStatus from "../components/MetaData/StepsStatus";
import AddMetaData from "../components/MetaData/AddMetaData";
import { useState, useMemo, useEffect } from "react";
import {
  itemStepMetaData,
  onStepEnum,
  selectedItemMetaDataType,
} from "@repo/types";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import TestItem from "../components/TestItem";
import { recordsAtom, selectedRecord } from "../RecoilState/store/recordsAtom";
import SelectItem from "../components/ZapCreate/SelectItem";
import { userAtom } from "../RecoilState/store/userAtom";
import { getSession } from "next-auth/react";
// Mock data for when metadata is not available

export default function SideModal({
  index,
  setMetaData,
  handlePublish
}: {
  index: number | null;
  setMetaData: (arg1: number | null, arg2: boolean) => void;
  handlePublish:()=>void;
}) {
  const [zap, setZapState] = useRecoilState(zapCreateState);

  const [selectedStep, setSelectedStep] = useState<onStepEnum>(
    onStepEnum.SETUP,
  );
  const [StepIndex, setStepIndex] = useRecoilState(onStep);
  const configureId = useRecoilValue(configureStepDetails);
  const optionChanged = useRecoilState(OptionChanged);
  const setSelectedRecordId = useSetRecoilState(selectedRecord);
  const setSelectedRecords = useSetRecoilState(recordsAtom);
  const [user, setUser] = useRecoilState(userAtom);

  if (index == null) return null;

  // const steps =
  //      zap.selectedItems[index].metadata
  //     || mockSteps;

  useEffect(() => {
    async function getUserInfo() {
      const response = await getSession();
      console.log(response);
      setUser(response?.user);
    }
    getUserInfo();
  }, []);

  const isCurrentStepValid = useMemo(() => {
    const currentStep =
      StepIndex === onStepEnum.CONFIGURATION
        ? zap.selectedItems[index]?.metadata.optionConfiguration[configureId]
            .configurationStep
        : zap.selectedItems[index]?.metadata;

    if (!currentStep?.fields) {
      console.log("Field does not exist returnning");
      return false;
    }

    // Check if all required fields in the current step have values
    console.log(currentStep);
    return currentStep.fields.every((field) => {
      if (field.required) {
        console.log(
          "using some logic to check if it's valid or not",
          field.fieldValue,
        );
        return field.fieldValue && field.fieldValue.trim() !== "";
      }
      console.log("Its valid");
      return true;
    });
  }, [StepIndex, optionChanged]);

  const CheckValidity = (Index: onStepEnum) => {
    const currentStep =
      Index === onStepEnum.CONFIGURATION
        ? zap.selectedItems[index]?.metadata.optionConfiguration[configureId]
            .configurationStep
        : zap.selectedItems[index]?.metadata;
    if (!currentStep?.fields) {
      console.log("Field does not exist returnning");
      return false;
    }

    // Check if all required fields in the current step have values
    console.log(currentStep);
    return currentStep.fields.every((field) => {
      if (field.required) {
        console.log(
          "using some logic to check if it's valid or not",
          field.fieldValue,
        );
        return field.fieldValue && field.fieldValue.trim() !== "";
      }
      console.log("Its valid");
      return true;
    });
  };

  const handleFieldChange = (
    fieldNumber: number,
    value: string,
    type: onStepEnum,
  ) => {
    if (!zap.selectedItems[index]?.metadata) return;
    if (type === onStepEnum.SETUP) {
      if (zap.selectedItems[index].id === "webhook") {
        setSelectedRecordId("");
        setSelectedRecords([]);
      }
      setZapState((prev) => {
        const newState = { ...prev };
        const newSelectedItems = [...newState.selectedItems];
        const updatedItem = { ...newSelectedItems[index] };

        if (!updatedItem.metadata || !updatedItem.metadata.fields) return prev;

        const updatedFields = [...updatedItem.metadata.fields];
        updatedFields[fieldNumber] = {
          ...updatedFields[fieldNumber],
          fieldValue: value,
        };

        const updatedMetadata = {
          ...updatedItem.metadata,
          fields: updatedFields,
        };

        const newItem = {
          ...updatedItem,
          metadata: updatedMetadata,
        };

        newSelectedItems[index] = newItem;

        return {
          ...newState,
          selectedItems: newSelectedItems,
        };
      });
    } else if (type === onStepEnum.CONFIGURATION) {
      console.log(value);
      setZapState((prev) => {
        const newState = { ...prev };
        const newSelectedItems = [...newState.selectedItems];
        const updatedItem = { ...newSelectedItems[index] };

        if (
          !updatedItem.metadata ||
          !updatedItem.metadata.optionConfiguration?.[configureId]
            ?.configurationStep?.fields
        ) {
          return prev;
        }

        const oldFields =
          updatedItem.metadata.optionConfiguration[configureId]
            .configurationStep.fields;
        const updatedFields = [...oldFields];
        updatedFields[fieldNumber] = {
          ...updatedFields[fieldNumber],
          fieldValue: value,
        };

        const updatedConfigStep = {
          ...updatedItem.metadata.optionConfiguration[configureId]
            .configurationStep,
          fields: updatedFields,
        };

        const updatedOptionConfig = {
          ...updatedItem.metadata.optionConfiguration,
          [configureId]: {
            ...updatedItem.metadata.optionConfiguration[configureId],
            configurationStep: updatedConfigStep,
          },
        };

        const updatedMetadata = {
          ...updatedItem.metadata,
          optionConfiguration: updatedOptionConfig,
        };

        const newItem = {
          ...updatedItem,
          metadata: updatedMetadata,
        };

        newSelectedItems[index] = newItem;

        return {
          ...newState,
          selectedItems: newSelectedItems,
        };
      });
    } else if (type === onStepEnum.TEST) {
      // Implement TEST field update logic here if needed
    }
  };

  const handleContinue = () => {
    if (!isCurrentStepValid) return;

    if (StepIndex === onStepEnum.CONFIGURATION) {
      setZapState((prev) => {
        const newState = { ...prev };
        const newSelectedItems = [...newState.selectedItems];

        const existingItem = newSelectedItems[index];
        if (
          !existingItem ||
          !existingItem.metadata.optionConfiguration ||
          !existingItem.metadata.optionConfiguration[configureId]
        ) {
          return prev;
        }

        const updatedConfigStep = {
          ...existingItem.metadata.optionConfiguration[configureId]
            .configurationStep,
          completed: true,
        };

        const updatedOptionConfig = {
          ...existingItem.metadata.optionConfiguration,
          [configureId]: {
            ...existingItem.metadata.optionConfiguration[configureId],
            configurationStep: updatedConfigStep,
          },
        };

        const updatedMetadata = {
          ...existingItem.metadata,
          optionConfiguration: updatedOptionConfig,
        };

        const updatedItem = {
          ...existingItem,
          metadata: updatedMetadata,
        };

        newSelectedItems[index] = updatedItem;

        return {
          ...newState,
          selectedItems: newSelectedItems,
        };
      });
    } else if (StepIndex === onStepEnum.TEST) {
      setZapState((prev) => {
        const newState = { ...prev };
        const newSelectedItems = [...newState.selectedItems];

        const existingItem = newSelectedItems[index];
        if (
          !existingItem ||
          !existingItem.metadata.optionConfiguration ||
          !existingItem.metadata.optionConfiguration[configureId]
        ) {
          return prev;
        }

        const updatedTestStep = {
          ...existingItem.metadata.optionConfiguration[configureId].testStep,
          completed: true,
        };

        const updatedOptionConfig = {
          ...existingItem.metadata.optionConfiguration,
          [configureId]: {
            ...existingItem.metadata.optionConfiguration[configureId],
            testStep: updatedTestStep,
          },
        };

        const updatedMetadata = {
          ...existingItem.metadata,
          optionConfiguration: updatedOptionConfig,
        };

        const updatedItem = {
          ...existingItem,
          metadata: updatedMetadata,
        };

        newSelectedItems[index] = updatedItem;

        return {
          ...newState,
          selectedItems: newSelectedItems,
        };
      });
    } else if (StepIndex === onStepEnum.SETUP) {
      setZapState((prev) => {
        const newSelectedItems = [...prev.selectedItems];
        const existingItem = newSelectedItems[index];

        if (!existingItem || !existingItem.metadata) return prev;

        const updatedMetadata = {
          ...existingItem.metadata,
          completed: true,
        };

        const updatedItem = {
          ...existingItem,
          metadata: updatedMetadata,
        };

        newSelectedItems[index] = updatedItem;

        return {
          ...prev,
          selectedItems: newSelectedItems,
        };
      });
    } else {
      setMetaData(null, false);
    }

    // Step navigation
    if (StepIndex === onStepEnum.SETUP) {
      const configStepExists =
        zap.selectedItems[index].metadata.optionConfiguration?.[configureId]
          ?.configurationStep;

      setStepIndex(
        configStepExists ? onStepEnum.CONFIGURATION : onStepEnum.TEST,
      );
    } else if (StepIndex === onStepEnum.CONFIGURATION) {
      setStepIndex(onStepEnum.TEST);
    }
  };

  if (!zap.selectedItems[index]?.metadata) {
    return (
      <div className="min-h-full relative flex flex-col items-center justify-center w-96 border-blue-600 border-1 z-20 mx-6 transform-all ease-in-out duration-300  bg-white">
        <div className="text-sm text-gray-500 font-medium bg-gray-50 rounded-md p-4">
          We don't support this trigger yet
        </div>
      </div>
    );
  }
  return (
    <div
      className={`min-h-full flex flex-col items-center justify-between w-96 border-blue-800 border-2 z-20  rounded transform-all ease-in-out duration-300 bg-white`}
    >
      <div className={`flex flex-col items-center w-full`}>
        <div className="flex justify-between w-full items-center bg-blue-300/10">
          <div className="flex items-center gap-1 text-sm font-bold">
            {zap.selectedItems[index].imagePath ? (
              <img
                src={zap.selectedItems[index].imagePath}
                className="m-2 w-10 h-10 p-1.5 border border-black/20 bg-white rounded"
              />
            ) : (
              <div className="flex items-center justify-center m-2 w-10 h-10 p-1.5 border border-black/20 bg-white rounded">
                <BiSolidZap size={22} />
              </div>
            )}
            {index + 1}.{" "}
            {zap.selectedItems[0].metadata?.fields[0].fieldValue ||
              "Select an event"}{" "}
            <FiEdit3 size={16} />
          </div>
          <div className="flex items-center gap-2 m-2">
            <SlSizeFullscreen size={18} />
            <div
              onClick={() => {
                console.log("closing");
                setMetaData(null, false);
              }}
              className="cursor-pointer"
            >
              <RxCross2 size={20} />
            </div>
          </div>
        </div>

        {/* selectedField */}
        <div className="flex items-center justify-start gap-0.5 h-10 p-1 w-full border-b border-black/10">
          <StepsStatus
            checkValidity={CheckValidity}
            stepIndex={StepIndex}
            unique={onStepEnum.SETUP}
            step={zap.selectedItems[index]?.metadata}
            setIndex={setStepIndex}
          />
          <MdKeyboardArrowRight size={20} />
          {configureId &&
            !!zap.selectedItems[index].metadata.optionConfiguration[configureId]
              ?.configurationStep && (
              <StepsStatus
                checkValidity={CheckValidity}
                setIndex={setStepIndex}
                stepIndex={StepIndex}
                unique={onStepEnum.CONFIGURATION}
                step={
                  zap.selectedItems[index].metadata.optionConfiguration[
                    configureId
                  ].configurationStep
                }
              />
            )}
          {configureId &&
            !!zap.selectedItems[index].metadata.optionConfiguration[configureId]
              ?.configurationStep && <MdKeyboardArrowRight size={20} />}
          {configureId &&
          !!zap.selectedItems[index].metadata.optionConfiguration[configureId]
            ?.testStep ? (
            <StepsStatus
              checkValidity={CheckValidity}
              stepIndex={StepIndex}
              unique={onStepEnum.TEST}
              step={
                zap.selectedItems[index].metadata.optionConfiguration[
                  configureId
                ].testStep
              }
              setIndex={setStepIndex}
            />
          ) : (
            <div className="text-xs font-semibold flex items-center px-1 gap-1 py-2.5">
              {" "}
              Test{" "}
              <div className="text-black/30 ">
                {" "}
                <IoTimerOutline size={18} />{" "}
              </div>
            </div>
          )}
        </div>
        {StepIndex === onStepEnum.SETUP && (
          <div className="flex gap-1 w-full  px-2.5 ">
            <div className="self-start p-2 w-full">
              <AddMetaData
                imagePath={zap.selectedItems[0].imagePath}
                index={StepIndex}
                key={selectedStep}
                item={zap.selectedItems[index]}
                onFieldChange={handleFieldChange}
              />
            </div>
          </div>
        )}
        {StepIndex === onStepEnum.CONFIGURATION && (
          <div className="flex gap-1 w-full  px-2.5">
            <div className="self-start p-2 w-full">
              <AddMetaData
                imagePath={zap.selectedItems[0].imagePath}
                index={StepIndex}
                key={selectedStep}
                item={zap.selectedItems[index]}
                onFieldChange={handleFieldChange}
              />
            </div>
          </div>
        )}
        {StepIndex === onStepEnum.TEST && (
          <div className="min-h-full w-full">
            {" "}
            <TestItem
              handlePublish={handlePublish}
              id={zap.selectedItems[index].id}
              type={zap.selectedItems[index].type}
              item={
                zap.selectedItems[index].metadata.optionConfiguration[
                  configureId
                ].testStep
              }
            />{" "}
          </div>
        )}
      </div>
      {StepIndex != onStepEnum.TEST && (
        <div className="w-full border-t border-black/10">
          <div className="w-full my-4 px-2">
            <button
              onClick={handleContinue}
              disabled={!isCurrentStepValid}
              className={`w-full py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer
              ${
                isCurrentStepValid
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-black/10 text-black/40 cursor-not-allowed"
              } `}
            >
              {isCurrentStepValid ? "Continue" : "To continue, choose an event"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
