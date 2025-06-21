"use client"
import {  ItemType } from "@repo/types";
import ChangeItem from "./ChangeItem";
import MetaDataField from "./MetaDataField";
import { useRecoilState } from "recoil";
import { configureStepDetails } from "@/app/RecoilState/currentZap";
import { metadata } from "framer-motion/client";

export default function AddMetaData({item,index,onFieldChange}: {item: ItemType,index: number,onFieldChange: (fieldNumber: number, value: string, type:string) => void}) {
  const [configureStepRequired, setConfiguredStepDetails] = useRecoilState(configureStepDetails);
  const metaData = index != -1 && item.metadata ?  item.metadata[index] : item.metadata[0].fields[configureStepRequired.fieldIndex].options[configureStepRequired.optionIndex].configureStep;
  return (
    <div className="flex flex-col justify-between h-full mb-8 w-full">
      {index === 0 && <div className="flex flex-col w-full text-xs">
        <div className="flex gap-0.5 text-sm">App<div className="text-red-400">*</div></div>
        <ChangeItem item={item} />
      </div>}

      <div className="flex flex-col gap-6">{metaData && metaData.fields.map((field) => {
          return (
          <div key={field.fieldLabel}><MetaDataField onFieldChange={onFieldChange} field={field} /></div>
          )  })}</div>
    </div>
  )
}
