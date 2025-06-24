"use client";
import { useRecoilState, useRecoilValue } from "recoil";
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
import { useState, useMemo } from "react";
import {
  itemStepMetaData,
  onStepEnum,
  optionConfiguration,
  selectedItemMetaDataType,
} from "@repo/types";
import { MdKeyboardArrowRight } from "react-icons/md";
// Mock data for when metadata is not available
const mockSteps: itemStepMetaData = {
  stepName: "Setup",
  stepNumber: 1,
  stepDescription: "Select the app and trigger event.",
  completed: false,
  fields: [
    {
      name: "triggerEvent",
      fieldNumber: 0,
      fieldInputType: "dropdown",
      fieldLabel: "Trigger Event",
      fieldPlaceholder: "Select a trigger event",
      fieldValue: "",
      required: true,
      options: [
        {
          id: "Catch Hook",
          optionIndex: 0,
          description:
            "Triggers when a POST, PUT, or GET request is made to a Zapier URL.",
          type: "instant",
        },
        {
          id: "Catch Raw Hook",
          optionIndex: 1,
          description:
            "Triggers when a POST, PUT, or GET request is made to a Zapier URL. Gives the request body unparsed (max 2 MB) and also includes headers.",
          type: "instant",
        },
        {
          id: "Retrieve Poll",
          optionIndex: 2,
          description: "Triggers when a request to a URL returns new entries.",
          type: "polling",
        },
      ],
    },
  ],
};

const mockOptionConfig: optionConfiguration = {
  "Catch Hook": {
    configurationStep: {
      stepName: "Configure",
      stepNumber: 2,
      stepDescription: "Define the scheduling frequency.",
      completed: false,
      fields: [
        {
          name: "Child Key",
          fieldNumber: 0,
          fieldInputType: "text",
          fieldLabel: "Pick off a Child Key",
          fieldPlaceholder: "Enter text..",
          fieldValue: "",
          required: false,
        },
      ],
    },
    testStep: null,
  },
  "Retrieve Poll": {
    configurationStep: {
      stepName: "Configure",
      stepNumber: -1,
      stepDescription: "Define the scheduling frequency.",
      completed: false,
      fields: [
        {
          name: "url",
          fieldNumber: 0,
          fieldInputType: "text",
          fieldLabel: "URL",
          fieldPlaceholder: "Enter text..",
          fieldValue: "",
          required: true,
        },
        {
          name: "key",
          fieldNumber: 1,
          fieldInputType: "text",
          fieldLabel: "Key",
          fieldPlaceholder: "Enter text..",
          fieldValue: "",
          required: false,
        },
        {
          name: "deduplication_key",
          fieldNumber: 2,
          fieldInputType: "text",
          fieldLabel: "Deduplication Key",
          fieldPlaceholder: "Enter text..",
          fieldValue: "",
          required: false,
        },
        {
          name: "xpath",
          fieldNumber: 1,
          fieldInputType: "text",
          fieldLabel: "Xpath",
          fieldPlaceholder: "Enter text..",
          fieldValue: "",
          required: false,
        },
        {
          name: "basic_auth",
          fieldNumber: 1,
          fieldInputType: "text",
          fieldLabel: "Basic Auth",
          fieldPlaceholder: "Enter text..",
          fieldValue: "",
          required: false,
        },
      ],
    },
    testStep: {},
  },
};

const MockItem = {
  id: "webhook",
  name: "Webhook",
  imagePath:
    "https://zapier-images.imgix.net/storage/services/6aafbb717d42f8b42f5be2e4e89e1a15.png?auto=format%2Ccompress&fit=crop&h=128&ixlib=python-3.0.0&q=50&w=128",
  metadata: mockSteps,
};

export default function SideModal() {
  const [zap, setZapState] = useRecoilState(zapCreateState);
  const [metaData, setMetaData] =
    useRecoilState<selectedItemMetaDataType>(selectedItemMetaData);
  const [selectedStep, setSelectedStep] = useState<onStepEnum>(
    onStepEnum.SETUP,
  );
  const { index } = metaData;
  const [StepIndex, setStepIndex] = useRecoilState(onStep);
  const configureId = useRecoilValue(configureStepDetails);
  const optionChanged = useRecoilState(OptionChanged);
  if (index == null) return null;

  const steps =
    zap.selectedItems[index]?.metadata && zap.selectedItems[index]?.length > 0
      ? zap.selectedItems[index].metadata
      : mockSteps;

  const isCurrentStepValid = useMemo(() => {
    const currentStep =
      StepIndex === onStepEnum.CONFIGURATION
        ? zap.selectedItems[index]?.optionConfiguration[configureId]
            .configurationStep
        : StepIndex === onStepEnum.TEST
          ? zap.selectedItems[index]?.optionConfiguration[configureId].testStep
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
        ? zap.selectedItems[index]?.optionConfiguration[configureId]
            .configurationStep
        : Index === onStepEnum.TEST
          ? zap.selectedItems[index]?.optionConfiguration[configureId].testStep
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
      setZapState((prev) => {
        // Create a deep copy of the previous state
        const newState = { ...prev };
        const newSelectedItems = [...newState.selectedItems];

        // Create a deep copy of the item we're modifying
        const updatedItem = { ...newSelectedItems[index] };
        if (!updatedItem.metadata) return prev;
        const updatedMetadata = { ...updatedItem.metadata };
        // const updatedStep = {...updatedMetadata[StepInd};
        console.log("Field is not itterable", updatedMetadata.fields);
        const updatedFields = [...updatedMetadata.fields];

        // Find and update the specific field
        updatedFields[fieldNumber] = {
          ...updatedFields[fieldNumber],
          fieldValue: value,
        };

        // Reconstruct the state with our updates
        // updatedStep.fields = updatedFields;
        updatedMetadata.fields = updatedFields;
        updatedItem.metadata = updatedMetadata;
        newSelectedItems[index] = updatedItem;
        return {
          ...newState,
          selectedItems: newSelectedItems,
        };
      });
    } else if (type == onStepEnum.CONFIGURATION) {
      setZapState((prev) => {
        const newState = { ...prev };
        const newSelectedItems = [...newState.selectedItems];
        const updatedItem = { ...newSelectedItems[index] };

        if (!updatedItem.metadata) return prev;

        const updatedOptionConfig = {
          ...updatedItem.optionConfiguration,
        };

        const updatedConfigStep = {
          ...updatedOptionConfig[configureId].configurationStep,
        };

        const updatedFields = [...updatedConfigStep.fields];

        // Update the specific field
        updatedFields[fieldNumber] = {
          ...updatedFields[fieldNumber],
          fieldValue: value,
        };

        // Rebuild configuration step
        updatedConfigStep.fields = updatedFields;

        // Rebuild option configuration
        updatedOptionConfig[configureId] = {
          ...updatedOptionConfig[configureId],
          configurationStep: updatedConfigStep,
        };

        // Rebuild the item
        updatedItem.optionConfiguration = updatedOptionConfig;

        // Place updated item back in selectedItems
        newSelectedItems[index] = updatedItem;

        // Return the new state
        return {
          ...newState,
          selectedItems: newSelectedItems,
        };
      });
    } else if (type == onStepEnum.TEST) {
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
          !existingItem.optionConfiguration ||
          !existingItem.optionConfiguration[configureId]
        ) {
          return prev; // nothing to update
        }

        const updatedConfigStep = {
          ...existingItem.optionConfiguration[configureId].configurationStep,
          completed: true,
        };

        const updatedOptionConfig = {
          ...existingItem.optionConfiguration,
          [configureId]: {
            ...existingItem.optionConfiguration[configureId],
            configurationStep: updatedConfigStep,
          },
        };

        const updatedItem = {
          ...existingItem,
          optionConfiguration: updatedOptionConfig,
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
        const updatedItem = { ...newSelectedItems[index] };
        if (!updatedItem.metadata) return prev;
        let updatedMetadata = {
          ...updatedItem.optionConfiguration[configureId].configurationStep,
        };
        updatedMetadata = {
          ...updatedMetadata,
          completed: true,
        };
        // Reconstruct the state with our updates
        // if(!updatedMetadata) return
        updatedItem.metadata = updatedMetadata;
        newSelectedItems[index] = updatedItem;
        return {
          ...newState,
          selectedItems: newSelectedItems,
        };
      });
    } else if (StepIndex === onStepEnum.SETUP) {
      setZapState((prev) => {
        const newSelectedItems = [...prev.selectedItems];
        const item = { ...newSelectedItems[index] };

        if (!item.metadata) return prev;

        let metadata = { ...item.metadata };
        metadata = {
          ...metadata,
          completed: true,
        };

        item.metadata = metadata;
        newSelectedItems[index] = item;

        return {
          ...prev,
          selectedItems: newSelectedItems,
        };
      });
    } else {
      setMetaData((prev) => ({
        ...prev,
        index: null,
        isOpen: false,
      }));
    }
    if (StepIndex === onStepEnum.SETUP) {
      if (
        zap.selectedItems[index].optionConfiguration[configureId]
          .configurationStep
      )
        setStepIndex(onStepEnum.CONFIGURATION);
      else setStepIndex(onStepEnum.TEST);
    } else if (StepIndex === onStepEnum.CONFIGURATION) {
      setStepIndex(onStepEnum.TEST);
    }
  };

  if (!zap.selectedItems[index]?.metadata) {
    return (
      <div className="min-h-full flex flex-col items-center justify-center w-96 border-blue-700 border-1 z-20 mx-6 transform-all ease-in-out duration-300  bg-white">
        <div className="text-sm text-gray-500 font-medium bg-gray-50 rounded-md p-4">
          We don't support this trigger yet
        </div>
      </div>
    );
  }
  return (
    <div className={`min-h-full flex flex-col items-center justify-between w-96 border-blue-700 border-1 z-20   transform-all ease-in-out duration-300 bg-white`}>
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
            {index + 1}. Select an event <FiEdit3 size={16} />
          </div>
          <div className="flex items-center gap-2 m-2">
            <SlSizeFullscreen size={18} />
            <div
              onClick={() => {
                setMetaData((prev) => ({
                  ...prev,
                  index: null,
                  isOpen: false,
                }));
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
            !!zap.selectedItems[index].optionConfiguration[configureId]
              ?.configurationStep && (
              <StepsStatus
                checkValidity={CheckValidity}
                setIndex={setStepIndex}
                stepIndex={StepIndex}
                unique={onStepEnum.CONFIGURATION}
                step={
                  zap.selectedItems[index].optionConfiguration[configureId]
                    .configurationStep
                }
              />
            )}
          {configureId &&
            !!zap.selectedItems[index].optionConfiguration[configureId]
              ?.configurationStep && <MdKeyboardArrowRight size={20} />}
          {configureId &&
          !!zap.selectedItems[index].optionConfiguration[configureId]
            ?.testStep ? (
            <StepsStatus
              checkValidity={CheckValidity}
              stepIndex={StepIndex}
              unique={onStepEnum.TEST}
              step={
                zap.selectedItems[index].optionConfiguration[configureId]
                  .testStep
              }
              setIndex={setStepIndex}
            />
          ) : (
            <div> test</div>
          )}
        </div>
        <div className="self-start p-2 w-full">
          <AddMetaData
            index={StepIndex}
            key={selectedStep}
            item={zap.selectedItems[index]}
            onFieldChange={handleFieldChange}
          />
        </div>
      </div>
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
              } ${StepIndex === onStepEnum.TEST ? "!bg-blue-500" : ""}`}
          >
            {isCurrentStepValid ? "Continue" : "To continue, choose an event"}
          </button>
        </div>
      </div>
    </div>
  );
}
