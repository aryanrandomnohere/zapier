import React from "react";

export default function JsonData({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="flex items-center gap-1 text-xs p-2">
      <span className="text-gray-600 bg-blue-200/20 px-2 py-1 rounded border border-gray-200 font-medium">
        {label}
      </span>
      { value && <span className="text-gray-800">{value}</span>}
    </div>
  );
}
