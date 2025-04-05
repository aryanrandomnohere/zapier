"use client"
import { useRecoilState} from "recoil"
import { zapCreateState } from "../RecoilState/store/zapCreate"
import { selectedItemMetaData } from "@/app/RecoilState/currentZap"
import { SlSizeFullscreen } from "react-icons/sl"
import { RxCross2 } from "react-icons/rx"
import { FiEdit3 } from "react-icons/fi"
import { BiSolidZap } from "react-icons/bi"
import StepsStatus from "../components/MetaData/StepsStatus"
import { IoIosArrowForward } from "react-icons/io"
import AddMetaData from "../components/MetaData/AddMetaData"
import { useState, useMemo } from "react"
import { itemStepMetaData, selectedItemMetaDataType } from "@repo/types"
// Mock data for when metadata is not available
const mockSteps: itemStepMetaData[] = [
  {
    stepName: "Setup",
    stepNumber: 1,
    stepDescription: "Select the app and trigger event.",
    completed: false,
    configurefiledRequired: true,
    fields: [
      {
        name: "triggerEvent",
        fieldInputType: "dropdown",
        fieldLabel: "Trigger Event",
        fieldPlaceholder: "Select a trigger event",
        fieldValue: "Custom Frequency",
        required: true,
        options: [{id: "Every Day", description: "Every Day", type: "instant"}, {id: "Every Week", description: "Every Week", type: "instant"}, {id: "Custom Frequency", description: "Custom Frequency", type: "instant"}],
      }
    ]
  },
  {
    stepName: "Configure",
    stepNumber: 2,
    stepDescription: "Define the scheduling frequency.",
    completed: false,
    fields: [
      {
        name: "interval",
        fieldInputType: "number",
        fieldLabel: "Interval",
        fieldPlaceholder: "Enter interval in minutes",
        fieldValue: "15",
        required: true,
      },
      {
        name: "timeZone",
        fieldInputType: "dropdown",
        fieldLabel: "Time Zone",
        fieldPlaceholder: "Select a time zone",
        fieldValue: "UTC",
        required: true,
        options: [
          { id: "UTC", description: "UTC", type: "timezone" },
          { id: "PST", description: "PST", type: "timezone" },
          { id: "EST", description: "EST", type: "timezone" },
          { id: "IST", description: "IST", type: "timezone" },
        ]
      }
    ]
  },
  {
    stepName: "Test",
    stepNumber: 3,
    stepDescription: "Test the workflow before activation.",
    completed: null,
    fields: [
      {
        name: "testRun",
        fieldInputType: "dropdown",
        fieldLabel: "Run a test?",
        fieldPlaceholder: "Select Yes or No",
        fieldValue: "Yes",
        required: true,
        options: [
          { id: "Yes", description: "Yes", type: "boolean" },
          { id: "No", description: "No", type: "boolean" },
        ]
      }
    ]
  }
];
const MockItem = {
  id: "webhook",
  name: "Webhook",
  imagePath: "https://zapier-images.imgix.net/storage/services/6aafbb717d42f8b42f5be2e4e89e1a15.png?auto=format%2Ccompress&fit=crop&h=128&ixlib=python-3.0.0&q=50&w=128",
  metadata: mockSteps
} 

export default function SideModal() {
  const [zap, setZapState] = useRecoilState(zapCreateState)
  const [metaData, setMetaData] = useRecoilState<selectedItemMetaDataType>(selectedItemMetaData)
  const [selectedStep, setSelectedStep] = useState<number>(0)
  const {index} = metaData;
  const [StepIndex, setStepIndex] = useState(0)

  if(index == null) return null
  
  const steps = zap.selectedItems[index]?.metadata && 
                zap.selectedItems[index]?.metadata.length > 0 
                ? zap.selectedItems[index].metadata 
                : mockSteps;

  const isCurrentStepValid = useMemo(() => {
    const currentStep = steps[StepIndex];
    if (!currentStep?.fields) return false;

    // Check if all required fields in the current step have values
    return currentStep.fields.every(field => {
      if (field.required) {
        return field.fieldValue && field.fieldValue.trim() !== '';
      }
      return true;
    });
  }, [StepIndex, zap.selectedItems[index]?.metadata]);

  const handleFieldChange = (fieldName: string, value: string) => {
    // This function is not being used currently
    console.log("Field changed:", fieldName, value);
  };

  const handleContinue = () => {
    if (isCurrentStepValid) {
      if (StepIndex < zap.selectedItems[index]?.metadata.length - 1) {
        setStepIndex(StepIndex + 1);
      } else {
        // Handle completion
        setMetaData(prev => ({...prev, index: null, isOpen: false}));
      }
    }
  };


if (!zap.selectedItems[index]?.metadata) {
  return (
    <div className="min-h-full flex flex-col items-center justify-center w-96 border-blue-700 border-1 z-20 mx-6 transform-all ease-in-out duration-300 bg-white">
      <div className="text-sm text-gray-500 font-medium bg-gray-50 rounded-md p-4">
        We don't support this trigger yet
      </div>
    </div>
  )
}
                
  return (
    <div className="min-h-full flex flex-col items-center justify-between w-96 border-blue-700 border-1 z-20 mx-6 transform-all ease-in-out duration-300 bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-between w-full items-center bg-blue-300/10">
          <div className="flex items-center gap-1 text-sm font-bold"> 
            {zap.selectedItems[index].imagePath ? 
              <img src={zap.selectedItems[index].imagePath} className="m-2 w-10 h-10 p-1.5 border border-black/20 bg-white rounded" /> : 
              <div className="flex items-center justify-center m-2 w-10 h-10 p-1.5 border border-black/20 bg-white rounded">
                <BiSolidZap size={22} />
              </div>
            }
            {index+1}. Select an event <FiEdit3 size={16} />
          </div>
          <div className="flex items-center gap-2 m-2">
            <SlSizeFullscreen size={18} />
            <div onClick={() => setMetaData(prev => ({...prev, index: null, isOpen: false}))} className="cursor-pointer">
              <RxCross2 size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-0.5 h-10 p-1 w-full border-b border-black/10">
          {zap.selectedItems[index]?.metadata.map((step, i) => (
            <StepsStatus key={i} stepIndex={StepIndex} unique={i} step={step} setIndex={setStepIndex} />
          ))}
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
            className={`w-full py-2 rounded text-sm font-bold text-center transition-all duration-200
              ${isCurrentStepValid 
                ? 'bg-blue-700 text-white hover:bg-blue-800' 
                : 'bg-black/10 text-black/40 cursor-not-allowed'
              } ${StepIndex === zap.selectedItems[index]?.metadata.length - 1 ? "!bg-blue-500" : ""}`}
          >
            {StepIndex === zap.selectedItems[index]?.metadata.length - 1 ? 'Complete' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}
