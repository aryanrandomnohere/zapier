import { useState } from "react";
import { ChevronDown, Folder, FileText } from "lucide-react";

export default function ZapDetails() {
  const [selectedFolder, setSelectedFolder] = useState("Home");
  const [showFolderDropdown, setShowFolderDropdown] = useState(false);
  // const [selectedTimezone, setSelectedTimezone] = useState("Choose a timezone");
  // const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);

  const folderOptions = [
    "Home",
    "Work Projects",
    "Personal",
    "Marketing",
    "Sales",
  ];

  // const timezoneOptions = [
  //   "Choose a timezone",
  //   "UTC",
  //   "America/New_York",
  //   "America/Los_Angeles",
  //   "Europe/London",
  //   "Asia/Tokyo"
  // ];

  return (
    <div className="bg-opacity-50 flex items-start justify-center px-1 pl-3 z-40">
      <div className="rounded-lg w-full max-w-xs max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-1 py-4 border-b border-gray-200 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">Details</h2>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Key information about this Zap.
          </p>
        </div>

        {/* Content */}
        <div className="px-1 py-4 space-y-6 flex-1">
          {/* Folder Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Folder</h3>
            <p className="text-xs text-gray-600 mb-3">
              Move this Zap to another folder to help organize your account.
            </p>

            <div className="relative">
              <button
                onClick={() => setShowFolderDropdown(!showFolderDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-left flex items-center justify-between hover:cursor-pointer hover:border-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Folder size={16} className="text-gray-500" />
                  <span>{selectedFolder}</span>
                </div>
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {showFolderDropdown && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                  {folderOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedFolder(option);
                        setShowFolderDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:cursor-pointer hover:bg-gray-50 text-sm flex items-center gap-2"
                    >
                      <Folder size={16} className="text-gray-500" />
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Timezone Section - Hidden/Commented for now */}
          {/* 
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Timezone
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Override the timezone set at your account level by selecting a new timezone for this Zap.
            </p>
            
            <div className="relative">
              <button
                onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-left flex items-center justify-between hover:cursor-pointer hover:border-gray-400"
              >
                <span className="text-gray-500">{selectedTimezone}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {showTimezoneDropdown && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                  {timezoneOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedTimezone(option);
                        setShowTimezoneDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:cursor-pointer hover:bg-gray-50 text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              All schedules and times for this Zap will be calculated relative to this timezone.
            </p>
          </div>
          */}

          {/* Create a template Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Create a template
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              Allow teammates to create their own Zaps using your Zap as a
              template.
            </p>

            <button className="w-full px-4 py-3 bg-[#D5D7FC] border border-gray-300 rounded-md text-sm text-gray-700 text-left flex items-center gap-2 hover:cursor-pointer hover:bg-[#847EFE] hover:border-gray-400 transition-colors">
              <FileText size={16} className="text-gray-500" />
              <span>Create template</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
