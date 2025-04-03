import { useRecoilState} from "recoil"
import { zapCreateState } from "../RecoilState/store/zapCreate"
import { selectedItemMetaData } from "../RecoilState/currentZap"
import { SlSizeFullscreen } from "react-icons/sl"
import { RxCross2 } from "react-icons/rx"
import { FiEdit3 } from "react-icons/fi"
import { BiSolidZap } from "react-icons/bi"
import StepsStatus from "../components/MetaData/StepsStatus"
import { IoIosArrowForward } from "react-icons/io"

// Mock data for when metadata is not available
const mockSteps = [
  {
    stepName: "Setup",
    stepNumber: 1,
    stepDescription: "Select the app and trigger event.",
    completed: true,
    fields: [
      {
        name: "app",
        fieldInputType: "dropdown",
        fieldLabel: "App",
        fieldPlaceholder: "Select an app",
        fieldValue: "Schedule by Zapier",
        required: true,
        options: ["Schedule by Zapier", "Google Sheets", "Slack"],
      },
      {
        name: "triggerEvent",
        fieldInputType: "dropdown",
        fieldLabel: "Trigger Event",
        fieldPlaceholder: "Select a trigger event",
        fieldValue: "Custom Frequency",
        required: true,
        options: ["Every Day", "Every Week", "Custom Frequency"],
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
        options: ["UTC", "PST", "EST", "IST"],
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
        options: ["Yes", "No"],
      }
    ]
  }
];

export default function SideModal() {
  const [zap,setZapState] = useRecoilState(zapCreateState)
  const [metaData,setMetaData] = useRecoilState(selectedItemMetaData)
  const {index} = metaData;
  if(index == null) return null
  
  // Use mock data if metadata is undefined, null, or doesn't exist
  const steps = zap.selectedItems[index]?.metadata && 
                zap.selectedItems[index]?.metadata.length > 0 
                ? zap.selectedItems[index].metadata 
                : mockSteps;
                
  return (
    <div className="min-h-full
       flex flex-col items-center  w-96 border-blue-700 border-1 z-20 m-2 transform-all ease-in-out duration-300  bg-white ">
    <div className="flex justify-between w-full items-center bg-blue-300/10">
      <div className=" flex items-center gap-1 text-sm font-bold"> 
     {zap.selectedItems[index].imagePath ? <img src={zap.selectedItems[index].imagePath} className=" m-2 w-10 h-10 p-1.5 border border-black/20 bg-white rounded" /> : <div className=" flex items-center justify-center m-2 w-10 h-10 p-1.5 border border-black/20 bg-white rounded"><BiSolidZap size={22} /></div> }
         {index+1}. Select an event <FiEdit3 size={16} /></div>
      <div className="flex items-center gap-2 m-2"><SlSizeFullscreen size={18} /><div onClick={() => {
        setMetaData(prev => ({...prev, index: null, isOpen: false}));
      }} className="cursor-pointer"><RxCross2 size={20} /></div>
      </div>
    </div>
    <div className="flex items-center justify-start gap-0.5 h-10 p-1 w-full">
      {steps.map((step, i) => (<>
        <StepsStatus key={i} step={step} />
        {i<steps.length-1 && <div className="text-gray-400"><IoIosArrowForward size={22} /></div>}
        </>
      ))}
    </div>
    </div>
  )
}
