"use client";
import { ToggleButtonProps } from "@repo/types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isChecked,
  setIsChecked,
}) => {
  return (
    <div
      className={`relative w-9 h-5 rounded-full cursor-pointer transition-colors duration-200 ${
        isChecked ? "bg-blue-500" : "bg-gray-300"
      }`}
      onClick={setIsChecked}
    >
      <div
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
          isChecked ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </div>
  );
};
