"use client";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
import { useState, useMemo, useEffect } from "react";
import { itemStepMetaData, onStepEnum } from "@repo/types";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { recordsAtom, selectedRecord } from "../RecoilState/store/recordsAtom";
import { userAtom } from "../RecoilState/store/userAtom";
import { getSession } from "next-auth/react";
import { triggerTested } from "../RecoilState/store/triggerAtom";
import axios from "axios";
import { useParams } from "next/navigation";
// Mock data for when metadata is not available

import ChangeItem from "../components/MetaData/ChangeItem";
import AddMetaData from "../components/MetaData/AddMetaData";
import StepsStatus from "../components/MetaData/StepsStatus";
import TestItem from "../components/TestItem";

export default function SideModal({
  handlePublish,
  CheckStepValidity,
}: {
  handlePublish: () => void;
  CheckStepValidity: (
    onStepEnum: onStepEnum,
    panelIndex?: onStepEnum,
  ) => boolean;
}) {
  const [zap, setZapState] = useRecoilState(zapCreateState);
  const [selectedStep, setSelectedStep] = useState<onStepEnum>(
    onStepEnum.SETUP,
  );
  const [panelIndex, setpanelIndex] = useRecoilState(onStep);
  const configureId = useRecoilValue(configureStepDetails);
  const optionChanged = useRecoilState(OptionChanged);
  const setSelectedRecordId = useSetRecoilState(selectedRecord);
  const setSelectedRecords = useSetRecoilState(recordsAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const [metaData, setMetaData] = useRecoilState(selectedItemMetaData);
  const index = metaData.index;
  const setOnStep = useSetRecoilState(onStep);
  const setConfigurationId = useSetRecoilState(configureStepDetails);
  const setTestedTrigger = useSetRecoilState(triggerTested);
  const { zapId } = useParams();
  if (index == null) return null;

  // const steps =
  //      zap.selectedItems[index].metadata
  //     || mockSteps;

  useEffect(() => {
    async function getUserInfo() {
      const response = await getSession();
      setUser(response?.user);
    }
    getUserInfo();
  }, []);

  const isCurrentStepValid = useMemo(() => {
    const currentStep =
      panelIndex === onStepEnum.CONFIGURATION
        ? zap.selectedItems[index]?.metadata.optionConfiguration[configureId]
            .configurationStep
        : zap.selectedItems[index]?.metadata;

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
  }, [panelIndex, optionChanged]);

  const handleFieldChange = (
    fieldNumber: number,
    value: string,
    type: onStepEnum,
  ) => {
    if (!zap.selectedItems[index]?.metadata) return;
    if (type === onStepEnum.SETUP) {
      if (zap.selectedItems[index].type === "trigger") {
        setSelectedRecordId("");
        setSelectedRecords([]);
        setTestedTrigger(false);
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
  const handleComplete = () => {
    setMetaData((prev) => {
      return { ...prev, index: 1 };
    });
    setOnStep(onStepEnum.SETUP);
    if (zap.selectedItems[1]?.metadata?.fields[0].fieldValue)
      setConfigurationId(zap.selectedItems[1].metadata?.fields[0].fieldValue);
  };
  const handleContinue = async () => {
    if (!isCurrentStepValid) return;
    let triggerSaved = false;
    if (!metaData || metaData.index === null || metaData.index === undefined)
      return;
    let userId = user?.userId;
    if (!user) {
      const session = await getSession();
      setUser(session?.user);
      userId = session?.user.userId;
    }
    const body =
      zap.selectedItems[index].type == "trigger"
        ? {
            triggerId: zap.selectedItems[0].id,
            triggerConfiguration: zap.selectedItems[0].metadata,
            userId: userId,
          }
        : {
            actionId: zap.selectedItems[index].id,
            actionConfiguration: zap.selectedItems[metaData.index].metadata,
            userId: userId,
            sortingOrder: metaData.index,
          };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${zap.selectedItems[index].type === "trigger" ? "updatetrigger" : "updateaction"}/${zapId}`,
      body,
      {
        withCredentials: true,
      },
    );
    if (response.data.success) {
      triggerSaved = true;
    }

    if (panelIndex === onStepEnum.CONFIGURATION) {
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
          stepName:
            existingItem.metadata.optionConfiguration[configureId]
              .configurationStep?.stepName || "",
          type:
            existingItem.metadata.optionConfiguration[configureId]
              .configurationStep?.type || "",
          stepNumber:
            existingItem.metadata.optionConfiguration[configureId]
              .configurationStep?.stepNumber || 0,
          optionConfiguration:
            existingItem.metadata.optionConfiguration[configureId]
              .configurationStep?.optionConfiguration || {},
          triggerType:
            (existingItem.metadata.optionConfiguration[configureId]
              .configurationStep?.triggerType as any) || "polling",
          stepDescription:
            existingItem.metadata.optionConfiguration[configureId]
              .configurationStep?.stepDescription || "",
          fields:
            existingItem.metadata.optionConfiguration[configureId]
              .configurationStep?.fields || [],
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
    } else if (panelIndex === onStepEnum.TEST) {
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
    } else if (panelIndex === onStepEnum.SETUP) {
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
      setMetaData({ index: null, isOpen: false });
    }

    // Step navigation
    if (panelIndex === onStepEnum.SETUP) {
      const configStepExists =
        zap.selectedItems[index].metadata.optionConfiguration?.[configureId]
          ?.configurationStep;

      setpanelIndex(
        configStepExists ? onStepEnum.CONFIGURATION : onStepEnum.TEST,
      );
    } else if (panelIndex === onStepEnum.CONFIGURATION) {
      setpanelIndex(onStepEnum.TEST);
    }
  };
  console.log(zap.selectedItems[index], configureId);

  if (!zap.selectedItems[index]?.metadata) {
    return (
      <div className="min-h-full relative flex flex-col items-center justify-center w-96 border-blue-600 border-1 z-20 mx-6 transform-all ease-in-out duration-300  bg-[#FFFDF9]">
          <ChangeItem item={zap.selectedItems[index]} />
          <div className="text-sm text-gray-500 font-medium bg-gray-50 rounded-md p-4">
              We don't support this trigger yet
            </div>
      </div>
    );
  }
  return (
    <div
      className={`min-h-full flex flex-col items-center justify-between w-96 border-blue-800 border-2 z-50  rounded transform-all ease-in-out duration-300 bg-[#FFFDF9]`}
    >
      <div className={`flex flex-col items-center w-full`}>
        <div className="flex justify-between w-full items-center bg-blue-300/10">
          <div className="flex items-center gap-1 text-sm font-bold">
            {zap.selectedItems[index].imagePath ? (
              <img
                src={zap.selectedItems[index].imagePath}
                className="m-2 w-10 h-10 p-1.5 border border-black/20 bg-[#FFFDF9] rounded"
              />
            ) : (
              <div className="flex items-center justify-center m-2 w-10 h-10 p-1.5 border border-black/20 bg-[#FFFDF9] rounded">
                <BiSolidZap size={22} />
              </div>
            )}
            {index + 1}.{" "}
            {zap.selectedItems[index].metadata?.fields[0].fieldValue ||
              "Select an event"}{" "}
            <FiEdit3 size={16} />
          </div>
          <div className="flex items-center gap-2 m-2">
            <SlSizeFullscreen size={18} />
            <div
              onClick={() => {
                console.log("closing");
                setMetaData({ index: null, isOpen: false });
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
            checkValidity={CheckStepValidity}
            panelIndex={panelIndex}
            unique={onStepEnum.SETUP}
            stepIndex={index}
            step={zap.selectedItems[index]?.metadata}
            setIndex={setpanelIndex}
          />
          <MdKeyboardArrowRight size={20} />
          {configureId &&
            !!zap.selectedItems[index].metadata.optionConfiguration[configureId]
              ?.configurationStep && (
              <StepsStatus
                checkValidity={CheckStepValidity}
                setIndex={setpanelIndex}
                panelIndex={panelIndex}
                stepIndex={index}
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
              checkValidity={CheckStepValidity}
              panelIndex={panelIndex}
              unique={onStepEnum.TEST}
              stepIndex={index}
              step={
                zap.selectedItems[index].metadata.optionConfiguration[
                  configureId
                ].testStep as any
              }
              setIndex={setpanelIndex}
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
        {panelIndex === onStepEnum.SETUP && (
          <div className="flex gap-1 w-full  px-2.5 ">
            <div className="self-start p-2 w-full">
              <AddMetaData
                imagePath={zap.selectedItems[0].imagePath}
                index={panelIndex}
                key={selectedStep}
                item={zap.selectedItems[index]}
                onFieldChange={handleFieldChange}
              />
            </div>
          </div>
        )}
        {panelIndex === onStepEnum.CONFIGURATION && (
          <div className="flex gap-1 w-full  px-2.5">
            <div className="self-start p-2 w-full">
              <AddMetaData
                imagePath={zap.selectedItems[0].imagePath}
                index={panelIndex}
                key={selectedStep}
                item={zap.selectedItems[index]}
                onFieldChange={handleFieldChange}
              />
            </div>
          </div>
        )}
        {panelIndex === onStepEnum.TEST && (
          <div className="min-h-full w-full">
            {" "}
            <TestItem
              handlePublish={handlePublish}
              id={zap.selectedItems[index].id}
              type={zap.selectedItems[index].type}
              handleComplete={handleComplete}
              item={
                zap.selectedItems[index].metadata.optionConfiguration[
                  configureId
                ].testStep
              }
            />{" "}
          </div>
        )}
      </div>
      {panelIndex != onStepEnum.TEST && (
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
