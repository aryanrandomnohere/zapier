import { itemTestMetaData } from "@repo/types";
import React, { useEffect, useState } from "react";

export default function Task({
  item,
  imagePath,
}: {
  item: itemTestMetaData;
  imagePath: string;
}) {
  const [fetchedUrl, setFetchedUrl] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {}, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      fetchedUrl || "https://hooks.zapier.com/hooks/c...",
    );
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <div className=" m-2.5 border transform transition-all duration-150 bg-sky-500/5 border-gray-200 rounded p-3 ">
      {/* Header */}
      <div className="mb-2">
        <h3 className="text-xs font-bold text-gray-900 ">
          {item.userTriggered?.title}
        </h3>
        <p className="text-xs text-gray-600 ">{item.userTriggered?.subtitle}</p>
      </div>

      {/* URL Input with Copy Button */}
      <div className="mb-2 bg-yellow-400/50 border border-black/35 ">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded">
          <div className="flex items-center pl-1.5 pr-2">
            <img
              src={imagePath}
              alt="logo"
              className="w-6 h-6 bg-white p-[3px] border border-black/20 rounded"
            />
          </div>
          <input
            type="text"
            value={fetchedUrl || "https://hooks.zapier.com/hooks/c..."}
            readOnly
            className="flex-1 bg-transparent border-0 text-xs text-gray-700 py-2 px-1 focus:outline-none focus:ring-0"
          />
          <button
            onClick={handleCopy}
            className={`px-2 py-1 mr-1.5 text-xs font-medium hover:cursor-pointer bg-blue-400/50 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-all duration-150 ${
              isPressed ? "scale-105" : "scale-100"
            }`}
          >
            Copy
          </button>
        </div>
      </div>
      <div className={`flex justify-between ${isOpen ? "flex-col" : ""} `}>
        {/* Description */}
        <div className="text-xs text-gray-600 ">
          <p className="">
            {isOpen
              ? item.userTriggered?.description
              : item.userTriggered?.description.slice(0, 36) + "..."}
          </p>
          {isOpen && (
            <a
              href={item.userTriggered?.learnMoreUrl}
              className="text-blue-600 hover:text-blue-700 underline"
            >
              {item.userTriggered?.learnMoreText}
            </a>
          )}
        </div>

        {/* Show Less Link */}
        <div className="flex hover:cursor-pointer justify-end">
          <button
            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "less" : "more"}
          </button>
        </div>
      </div>
    </div>
  );
}
