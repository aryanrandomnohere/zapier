import React from "react";
import JsonData from "./JsonData";

export default function RecordJsonData({
  data,
}: {
  data: Record<string, string>;
}) {
  return (
    <div className="space-y-0.5 w-full h-full">
      {Object.entries(data).map(([label, value]) => (
        <JsonData label={label} value={value} />
      ))}
    </div>
  );
}
