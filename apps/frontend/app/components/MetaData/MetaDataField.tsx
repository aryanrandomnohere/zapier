"use client"
import { Field, FieldOption} from "@repo/types"
import { useState } from "react"
import { BiSolidZap } from "react-icons/bi"
import { FaArrowRightArrowLeft } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"



interface MetaDataFieldProps {
  field: Field
  onFieldChange: (fieldNumber: number, value: string) => void
}

export default function MetaDataField({ field, onFieldChange }: MetaDataFieldProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [value, setValue] = useState(field.fieldValue || field.fieldPlaceholder)

  if (field.fieldInputType === "dropdown") {
    return (
      <div className="flex flex-col relative w-full">
        <div className="flex gap-1 text-xs font-bold">{field.fieldLabel} <div className="text-red-400">*</div></div>
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex justify-between items-center px-3 py-2 border border-black/20 rounded hover:border-blue-500 cursor-pointer"
        >
          <div className="flex items-center gap-2 text-xs font-medium">
            {field.fieldValue || field.fieldPlaceholder}
          </div>
          <div className="text-xs text-gray-500">
          <FaArrowRightArrowLeft className="text-black/50 rotate-90" />
                      </div>
        </div>

        {isOpen && (
          <div className="absolute top-4 shadow-2xl shadow-black/40 right-full mr-1 transform-all duration-300 ease-in-out w-full mt-1 bg-white border border-gray-200 rounded-md z-50">
            <div className="p-2">
              <div className="flex items-center gap-2 px-2 py-1.5 bg-white mb-3.5 border border-black/20 rounded focus:border focus:border-blue-600">
                <div className="text-gray-500">
                  <IoSearch size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="outline-none w-full text-sm "
                />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {field.options?.filter(option => 
                option.id.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((option: FieldOption, index: number) => (<div key={index}  onClick={() => {
                onFieldChange(field.fieldNumber, option.id)
                setIsOpen(false)
              }} className="flex flex-col gap-0.5 mb-2 mx-3 px-3 py-1.5  hover:bg-blue-50 cursor-pointer text-xs font-medium">
                <div
                  className="flex items-center gap-1 font-semibold"
                 
                >
                  {option.id}<div className="flex items-center gap-1 text-xs font-semibold bg-yellow-500/20 rounded px-1"> <BiSolidZap className="border border-black rounded-full p-[0.5px]" size={11} />  {option.type}</div>
                </div>
                <div>{option.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  if (field.fieldInputType === "text") {
    return (
      <div className="flex flex-col relative w-full">
        <div className="flex gap-1 text-xs font-bold">{field.fieldLabel} <div className="text-red-400">*</div></div>
      <input
        type={field.fieldInputType}
        placeholder={field.fieldPlaceholder}
          defaultValue={field.fieldValue || undefined}
          onChange={(e) => onFieldChange(field.fieldNumber, e.target.value)}
          className="px-3 py-2 border border-black/20 rounded w-full text-sm hover:border-blue-500 focus:border-blue-500 outline-none"
          required={field.required}
        />
      </div>
    )
  }
  console.log(field)
  return (
    <div className="flex flex-col relative w-full">
      <div className="flex gap-1 text-xs font-bold">{field.fieldLabel} <div className="text-red-400">*</div></div>
    <input
      type={field.fieldInputType}
      placeholder={field.fieldPlaceholder}
        defaultValue={field.fieldValue || undefined}
        onChange={(e) => onFieldChange(field.fieldNumber, e.target.value)}
        className="px-3 py-2 border border-black/20 rounded w-full text-sm hover:border-blue-500 focus:border-blue-500 outline-none"
        required={field.required}
      />
    </div>
  )
}
