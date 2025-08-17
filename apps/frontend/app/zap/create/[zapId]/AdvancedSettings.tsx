"use client";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function AdvancedSettings() {
  const [isOpen, setIsOpen] = useState(true);
  const [autoreplayOverride, setAutoreplayOverride] = useState("Always replay");
  const [errorRatioOption, setErrorRatioOption] = useState(
    "Turn off if errors occur (recommended)",
  );
  const [pathExecutionOption, setPathExecutionOption] =
    useState("Parallel execution");
  const [showAutoreplayDropdown, setShowAutoreplayDropdown] = useState(false);

  const autoreplayOptions = ["Always replay", "Never replay"];

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 flex items-start cursor-not-allowed justify-center px-1 pl-3 z-40">
      <div className="rounded-lg w-full max-w-xs max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-1 py-4 border-b border-gray-200 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">
              Advanced settings
            </h2>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Choose how your Zap{" "}
            <a href="#" className="text-blue-600 underline">
              handles errors
            </a>
            .
          </p>
        </div>

        {/* Content */}
        <div className="px-1 py-4 space-y-6 flex-1">
          {/* Autoreplay override */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Autoreplay override
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Set Autoreplay settings for this Zap if an error occurs. This
              overrides your account settings for Autoreplay.
            </p>

            <div className="relative">
              <button
                onClick={() =>
                  setShowAutoreplayDropdown(!showAutoreplayDropdown)
                }
                className="w-full px-4 py-2 border-2 border-blue-500 rounded-md text-xs bg-white text-left flex items-center justify-between hover:cursor-pointer"
              >
                <span>{autoreplayOverride}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {showAutoreplayDropdown && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                  {autoreplayOptions.map(
                    (option) =>
                      autoreplayOverride !== option && (
                        <button
                          key={option}
                          onClick={() => {
                            setAutoreplayOverride(option);
                            setShowAutoreplayDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:cursor-pointer hover:bg-gray-50 text-xs"
                        >
                          {option}
                        </button>
                      ),
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Error ratio override */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Error ratio override
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Determine whether this Zap should continue to run if it encounters
              a high number of errors.{" "}
              <a href="#" className="text-blue-600 underline">
                Learn more
              </a>
              .
            </p>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input
                  type="radio"
                  name="errorRatio"
                  value="Turn off if errors occur (recommended)"
                  checked={
                    errorRatioOption ===
                    "Turn off if errors occur (recommended)"
                  }
                  onChange={(e) => setErrorRatioOption(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="font-medium">
                  Turn off if errors occur (recommended)
                </span>
              </label>

              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input
                  type="radio"
                  name="errorRatio"
                  value="Keep running if errors occur"
                  checked={errorRatioOption === "Keep running if errors occur"}
                  onChange={(e) => setErrorRatioOption(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Keep running if errors occur</span>
              </label>
            </div>
          </div>

          {/* Path execution settings */}
          <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-sm font-semibold text-gray-900">
                Path execution settings
              </h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">
                Limited time option
              </span>
            </div>

            <div className="space-y-2 mb-3">
              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input
                  type="radio"
                  name="pathExecution"
                  value="Parallel execution"
                  checked={pathExecutionOption === "Parallel execution"}
                  onChange={(e) => setPathExecutionOption(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="font-medium">
                  Parallel execution{" "}
                  <span className="italic text-gray-500">(previous)</span>
                </span>
              </label>

              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input
                  type="radio"
                  name="pathExecution"
                  value="Sequential execution"
                  checked={pathExecutionOption === "Sequential execution"}
                  onChange={(e) => setPathExecutionOption(e.target.value)}
                  className="w-4 h-4"
                />
                <span>
                  Sequential execution{" "}
                  <span className="italic text-gray-500">(new)</span>
                </span>
              </label>
            </div>

            <p className="text-xs text-gray-600">
              This option will be available till September 30, 2025. After this
              date all Zaps will move to Sequential execution and this setting
              will be removed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
