"use client"
import SecondaryButton from "../components/buttons/SecondaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import ZapTable from "../components/ZapTable";


export default function page() {
 
  function handleCreateZap() {
  
  }
  return (
    <div className="flex justify-end w-full  items-center h-full">
      <div className="flex justify-between items-center mt-12 mr-5 min-w-7/12">
      <div className="w-full text-lg"><ZapTable/></div>
      </div>
      <SecondaryButton onClick={handleCreateZap} size="small">
      <div className="flex gap-1 items-center"><AiOutlinePlus className="text-white font-semibold" />Create</div></SecondaryButton>
      </div> )
}


