import React from "react";
import JsonData from "./JsonData";
import { TbPointFilled } from "react-icons/tb";

export default function RecordJsonData({
  data,
  type,
}: {
  data: Record<string, any>; // allow nested objects
  type?: string;
}) {
  return (
    <div className="space-y-0.5 w-full h-full">
      {Object.entries(data).map(([label, value]) => {
        if (typeof value === "object" && value !== null) {
          return (
            <>
              <div className="flex items-center">
                {type && type === "nested" && (
                  <div className="text-sm">
                    <TbPointFilled className="text-blue-500/40" />
                  </div>
                )}
                <JsonData label={label} />
              </div>
              <div className="pl-10 ">
                {" "}
                <RecordJsonData data={value} type="nested" />
              </div>
            </>
          );
        }
        return (
          <div className="flex items-center">
            {type && type === "nested" && (
              <div className="text-sm">
                <TbPointFilled className="text-blue-500/40" />
              </div>
            )}
            <JsonData key={label} label={label} value={value} />{" "}
          </div>
        );
      })}
    </div>
  );
  ``;
}
