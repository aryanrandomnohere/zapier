"use client";
import { ItemType, onStepEnum } from "@repo/types";
import { useRecoilState } from "recoil";
import { configureStepDetails } from "@/app/RecoilState/currentZap";
import { useState } from "react";
import { lazy } from "react";

const ChangeItem = lazy(() => import("./ChangeItem"));
const MetaDataField = lazy(() => import("./MetaDataField"));

export default function AddMetaData({
  item,
  index,
  onFieldChange,
  imagePath,
}: {
  item: ItemType;
  index: number;
  imagePath: string;
  onFieldChange: (fieldNumber: number, value: string, type: onStepEnum) => void;
}) {
  const [configureId, setConfiguredStepDetails] =
    useRecoilState(configureStepDetails);
  const [editingField, setEditingField] = useState("");
  const metaData =
    index === onStepEnum.SETUP && item.metadata
      ? item.metadata
      : index === onStepEnum.CONFIGURATION &&
          item.metadata.optionConfiguration[configureId].configurationStep
        ? item.metadata.optionConfiguration[configureId].configurationStep
        : null;

  return (
    <div className="flex flex-col justify-between  mb-8 w-full">
      {index === 0 && (
        <div className="flex flex-col w-full text-xs">
          <div className="flex gap-0.5 text-xs font-bold pb-1">
            App<div className="text-red-400">*</div>
          </div>
          <ChangeItem item={item} />
        </div>
      )}

      <div className="flex flex-col mt-2 gap-6">
        {metaData &&
          index != onStepEnum.TEST &&
          metaData.fields.map((field) => {
            return (
              <div key={field.fieldLabel}>
                <MetaDataField
                  imagePath={imagePath}
                  onFieldChange={onFieldChange}
                  selectedField={editingField}
                  setEditingField={setEditingField}
                  type={item.type}
                  id={item.id}
                  field={field}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
