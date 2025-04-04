"use client"
import {  ItemType } from "@repo/types";
import ChangeItem from "./ChangeItem";

export default function AddMetaData({item}: {item: ItemType}) {

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col w-full text-xs">
        <div className="flex gap-0.5 text-sm">App<div className="text-red-400">*</div></div>
        <ChangeItem item={item} />
      </div>
      {/* {item.metadata?.map(step) */}
    </div>
  )
}
