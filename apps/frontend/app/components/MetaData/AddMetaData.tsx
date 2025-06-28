"use client";
import { ItemType, onStepEnum } from "@repo/types";
import ChangeItem from "./ChangeItem";
import MetaDataField from "./MetaDataField";
import { useRecoilState } from "recoil";
import { configureStepDetails } from "@/app/RecoilState/currentZap";

export default function AddMetaData({
  item,
  index,
  onFieldChange,
}: {
  item: ItemType;
  index: number;
  onFieldChange: (fieldNumber: number, value: string, type: onStepEnum) => void;
}) {
  const [configureId, setConfiguredStepDetails] =
    useRecoilState(configureStepDetails);
  const metaData =
    index === onStepEnum.SETUP && item.metadata
      ? item.metadata
      : index === onStepEnum.CONFIGURATION &&
          item.optionConfiguration[configureId].configurationStep
        ? item.optionConfiguration[configureId].configurationStep
        : index === onStepEnum.TEST &&
            item.optionConfiguration[configureId].testStep
          ? item.optionConfiguration[configureId].testStep
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
                <MetaDataField onFieldChange={onFieldChange} field={field} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
