"use client";
import { useState } from "react";
import { ChevronDown, Trash2, RotateCcw } from "lucide-react";

export default function SelectRunsDropdown({
  selectedRuns,
  setSelectedRuns,
  allRuns,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectAll = () => {
    const allRunIds = new Set(allRuns.map((run) => run.id));
    setSelectedRuns(allRunIds);
    setShowDropdown(false);
  };

  const handleClearSelection = () => {
    setSelectedRuns(new Set());
    setShowDropdown(false);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-600">
          Select runs to replay steps{" "}
          <span className="text-gray-400">
            ({selectedRuns.size} runs selected)
          </span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <Trash2 size={16} />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <RotateCcw size={16} />
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-indigo-500 rounded-md text-sm text-gray-900"
        >
          <span>Select runs</span>
          <ChevronDown size={16} />
        </button>

        {showDropdown && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-40">
            <button
              onClick={handleSelectAll}
              className="w-full px-4 py-2 text-left hover:bg-indigo-50 text-sm text-indigo-600 font-medium"
            >
              Select all on page
            </button>
            <button
              onClick={handleClearSelection}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm text-gray-700"
            >
              Clear selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
