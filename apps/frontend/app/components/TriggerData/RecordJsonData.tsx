import React from "react";
import JsonData from "./JsonData";
import { Dot } from "lucide-react";

export default function RecordJsonData({
  data,
  type,
}: {
  //@ts-ignore gemini
  data: Record<string, any>; // allow nested objects
  type?: string;
}) {
  return (
    <div className="space-y-0.5 w-full h-full">
      {Object.entries(data).map(([label, value]) => {
        if (typeof value === "object" && value !== null) {
          return (
            <div key={label + String(value)}>
              <div className="flex items-center">
                {type && type === "nested" && (
                  <div className="text-sm">
                    <Dot className="text-blue-500/40" />
                  </div>
                )}
                <JsonData label={label} />
              </div>
              <div className="pl-10 ">
                {" "}
                <RecordJsonData data={value} type="nested" />
              </div>
            </div>
          );
        }
        return (
          <div key={label} className="flex items-center">
            {type && type === "nested" && (
              <div className="text-sm">
                <Dot className="text-blue-500/40" />
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
