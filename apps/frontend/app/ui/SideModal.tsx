"use client"
import { useRecoilState, useRecoilValue} from "recoil"
import { zapCreateState } from "../RecoilState/store/zapCreate"
import { configureStepDetails, onStep, OptionChanged, selectedItemMetaData } from "@/app/RecoilState/currentZap"
import { SlSizeFullscreen } from "react-icons/sl"
import { RxCross2 } from "react-icons/rx"
import { FiEdit3 } from "react-icons/fi"
import { BiSolidZap } from "react-icons/bi"
import StepsStatus from "../components/MetaData/StepsStatus"
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
            optionIndex:0,
            description: "Triggers when a POST, PUT, or GET request is made to a Zapier URL.",
            type: "instant",
            configureStepRequired: true,
            configureStep: {
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
                }
              ]
            },
          },
          {
            id: "Catch Raw Hook",
             optionIndex:1,
            description: "Triggers when a POST, PUT, or GET request is made to a Zapier URL. Gives the request body unparsed (max 2 MB) and also includes headers.",
            type: "instant",
            configureStepRequired:false,
            
          },
          {
            id: "Retrieve Poll",
             optionIndex:2,
            description: "Triggers when a request to a URL returns new entries.",
            type: "polling",
            configureStepRequired:true,
            configureStep:{
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
                }
              ]
              
            }
          }
        ]
        ,
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
        fieldNumber: 0,
        fieldInputType: "dropdown",
        fieldLabel: "Run a test?",
        fieldPlaceholder: "Select Yes or No",
        fieldValue: "Yes",
        required: true,
        options: [
          { id: "Yes", optionIndex:0, description: "Yes", type: "boolean", configureStepRequired:false },
          { id: "No", optionIndex:1, description: "No", type: "boolean", configureStepRequired:false },
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
  const [StepIndex, setStepIndex] = useRecoilState(onStep)
  const configureStepRequired = useRecoilValue(configureStepDetails);
  const optionChanged = useRecoilState(OptionChanged);
  if(index == null) return null
  
  const steps = zap.selectedItems[index]?.metadata && 
                zap.selectedItems[index]?.length > 0 
                ? zap.selectedItems[index].metadata 
                : mockSteps;

  const isCurrentStepValid = useMemo(() => {
    const currentStep = StepIndex != -1 ? zap.selectedItems[index]?.metadata[StepIndex]: zap.selectedItems[index]?.metadata[0].fields[configureStepRequired.fieldIndex].options[configureStepRequired.optionIndex].configureStep
    if (!currentStep?.fields) {
      console.log("Field does not exist returnning")
      return false;
    }

    // Check if all required fields in the current step have values
    console.log(currentStep)
    return currentStep.fields.every(field => {
      if (field.required) {
        console.log("using some logic to check if it's valid or not", field.fieldValue)
        return field.fieldValue && field.fieldValue.trim() !== '';
      }
      console.log('Its valid')
      return true;
    });
  }, [StepIndex, optionChanged]);

  const handleFieldChange = (fieldNumber: number, value: string, type:string) => {
    if(!zap.selectedItems[index]?.metadata) return;
   if(type != "configuration"){ setZapState(prev => {
      // Create a deep copy of the previous state
      const newState = {...prev};
      const newSelectedItems = [...newState.selectedItems];
      
      // Create a deep copy of the item we're modifying
      const updatedItem = {...newSelectedItems[index]};
      if(!updatedItem.metadata) return prev;
      const updatedMetadata = [...updatedItem.metadata];
      const updatedStep = {...updatedMetadata[StepIndex]};
      console.log("Field is not itterable", updatedStep.fields)
      const updatedFields = [...updatedStep.fields];
      
      // Find and update the specific field
    
        updatedFields[fieldNumber] = {
          ...updatedFields[fieldNumber],
          fieldValue: value
        };
      
  
      // Reconstruct the state with our updates
      updatedStep.fields = updatedFields;
      updatedMetadata[StepIndex] = updatedStep;
      updatedItem.metadata = updatedMetadata;
      newSelectedItems[index] = updatedItem;
      return {
        ...newState,
        selectedItems: newSelectedItems
      };
    });} else if(configureStepRequired.isRequired && configureStepRequired.fieldIndex != -1 && configureStepRequired.optionIndex != -1 ){
      setZapState(prev=> {
          console.log('hi')
          const newState = {...prev};
          const newSelectedItems= [...newState.selectedItems]
          const newUpdatedItem = {...newSelectedItems[index]}
          if(!newUpdatedItem.metadata){ 
            console.log("Metadata does not exist returninig")  
            return prev
          };
          const newUpdatedMetaData = [...newUpdatedItem.metadata]
          const newUpdatedStep = {...newUpdatedMetaData[0]}
          const newUpdatedFields = [...newUpdatedStep.fields]
          const newUpdatedField = {...newUpdatedFields[configureStepRequired.fieldIndex]};
          if(!newUpdatedField.options) return prev;
          const newUpdatedOptions = [...newUpdatedField.options]
          const newUpdatedOption = {...newUpdatedOptions[configureStepRequired.optionIndex]}
          const newUpdatedConfigurationStep = {...newUpdatedOption.configureStep}
          if(!newUpdatedConfigurationStep.fields) return prev;
          const newUpdatedConfigurationStepField = [...newUpdatedConfigurationStep.fields]
          if(!newUpdatedConfigurationStepField) return prev;
          newUpdatedConfigurationStepField[fieldNumber] = {
            ...newUpdatedConfigurationStepField[fieldNumber] ,
            fieldValue:value
          };
          console.log(newUpdatedConfigurationStepField)
           //Reconstructing the state with our updates
          newUpdatedConfigurationStep.fields = newUpdatedConfigurationStepField;
          console.log( newUpdatedOption)
          newUpdatedOption.configureStep = newUpdatedConfigurationStep;
          newUpdatedOptions[configureStepRequired.optionIndex] = newUpdatedOption;
          console.log( newUpdatedOptions[configureStepRequired.optionIndex])
          newUpdatedField.options = newUpdatedOptions;
          newUpdatedFields[configureStepRequired.fieldIndex] = newUpdatedField;
          newUpdatedStep.fields = newUpdatedFields;
          newUpdatedMetaData[0] = newUpdatedStep;
          newUpdatedItem.metadata = newUpdatedMetaData;
          newSelectedItems[index] = newUpdatedItem;
          newState.selectedItems = newSelectedItems;
          console.log(newState)
          return newState;
        })
      }

    
  };
 const handleContinue = () => {
  if (!isCurrentStepValid) return;

  if (StepIndex === -1) {
    setZapState(prev => {
      const newSelectedItems = [...prev.selectedItems];
      const item = { ...newSelectedItems[index] };

      if (
        item?.metadata?.[0]?.fields?.[configureStepRequired.fieldIndex]?.options?.[configureStepRequired.optionIndex]?.configureStep
      ) {
        const metadata = [...item.metadata];
        const step = { ...metadata[0] };

        const fields = [...step.fields];
        const field = { ...fields[configureStepRequired.fieldIndex] };

        const options = [...field.options];
        const option = { ...options[configureStepRequired.optionIndex] };

        const configureStep = {
          ...option.configureStep,
          completed: true
        };

        option.configureStep = configureStep;
        options[configureStepRequired.optionIndex] = option;
        field.options = options;
        fields[configureStepRequired.fieldIndex] = field;
        step.fields = fields;
        metadata[0] = step;
        item.metadata = metadata;
        newSelectedItems[index] = item;

        return {
          ...prev,
          selectedItems: newSelectedItems
        };
      }

      return prev;
    });
  } 
  else if (
    zap.selectedItems[index]?.metadata &&
    StepIndex < zap.selectedItems[index].metadata.length - 1
  ) {
    setZapState(prev => {
      const newSelectedItems = [...prev.selectedItems];
      const item = { ...newSelectedItems[index] };

      if (!item.metadata) return prev;

      const metadata = [...item.metadata];
      metadata[StepIndex] = {
        ...metadata[StepIndex],
        completed: true
      };

      item.metadata = metadata;
      newSelectedItems[index] = item;

      return {
        ...prev,
        selectedItems: newSelectedItems
      };
    });

   
  } 
  else {
    setMetaData(prev => ({
      ...prev,
      index: null,
      isOpen: false
    }));
  }
   if (StepIndex === 0) {
      setStepIndex(-1);
    } else if (StepIndex === -1) {
      setStepIndex(1);
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
      console.log(configureStepRequired)         
  return (
    <div className="min-h-full flex flex-col items-center justify-between w-96 border-blue-700 border-1 z-20  transform-all ease-in-out duration-300 bg-white">
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
            <div onClick={() =>{ 
              
              setMetaData(prev => ({...prev, index: null, isOpen: false}))
          }} className="cursor-pointer">
              <RxCross2 size={20} />
            </div>
          </div>
        </div>
      
        {/* selectedField */}
        <div className="flex items-center justify-start gap-0.5 h-10 p-1 w-full border-b border-black/10">
     
             <StepsStatus stepIndex={StepIndex} unique={0} step={zap.selectedItems[index]?.metadata[0]} setIndex={setStepIndex} />
             {configureStepRequired.isRequired  && <StepsStatus setIndex={setStepIndex} stepIndex={StepIndex} unique={-1} step={zap.selectedItems[index]?.metadata[0].fields[configureStepRequired.fieldIndex ]?.options[configureStepRequired.optionIndex].configureStep}/>}
             <StepsStatus stepIndex={StepIndex} unique={1} step={zap.selectedItems[index]?.metadata[1]} setIndex={setStepIndex} />
             

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
              ${isCurrentStepValid 
                ? 'bg-blue-700 text-white hover:bg-blue-800' 
                : 'bg-black/10 text-black/40 cursor-not-allowed'
              } ${StepIndex === zap.selectedItems[index]?.metadata.length - 1 ? "!bg-blue-500" : ""}`}
          >
            {isCurrentStepValid ? 'Continue' : 'To continue, choose an event'}
          </button>
        </div>
      </div>
    </div>
  )
}
