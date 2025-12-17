"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Folder, FileText } from "lucide-react";
import { useParams } from "next/navigation";
import useZaps from "@/app/hooks/useZaps";
import useFolders from "@/app/hooks/useFolders";
import axios from "axios";

export default function ZapDetails() {
  const [showFolderDropdown, setShowFolderDropdown] = useState(false);
  const { zapId } = useParams();
  const { zaps } = useZaps();
  const { folders } = useFolders();
  const requiredZap = zaps.find((zap) => Number(zap.id) === Number(zapId));
  console.log(requiredZap?.folder.name);
  const [selectedFolder, setSelectedFolder] = useState(
    requiredZap?.folder.name || "",
  );

  // const [selectedTimezone, setSelectedTimezone] = useState("Choose a timezone");
  // const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);

  const folderOptions = folders?.map((folder) => {
    return {
      name: folder.name,
      id: folder.id,
    };
  });
  useEffect(() => {
    setSelectedFolder(requiredZap?.folder.name || "");
  }, [requiredZap?.folder.name]);

  return (
    <div className="bg-opacity-50 flex items-start justify-center px-1 pl-3 z-[1000] min-h-[30rem] ">
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
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-[1000] max-h-60 overflow-y-auto">
                  {folderOptions?.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedFolder(option.name);
                        setShowFolderDropdown(false);
                        axios
                          .put(
                            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/move`,
                            {
                              zapId: Number(zapId),
                              folderId: Number(option.id),
                            },
                            {
                              withCredentials: true,
                            },
                          )
                          .then((res) => {
                            console.log(res);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                      className="w-full px-4 py-2 text-left hover:cursor-pointer hover:bg-gray-50 text-sm flex items-center gap-2"
                    >
                      <Folder size={16} className="text-gray-500" />
                      {option.name}
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

          {/* Create a template Section
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Create a template
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              Allow teammates to create their own Zaps using your Zap as a
              template.
            </p>

            <button className="w-full px-4 py-2 bg-[#D5D7FC] border border-gray-300 rounded-md text-xs text-gray-700 text-left flex items-center gap-2 hover:cursor-pointer hover:bg-[#847EFE] hover:border-gray-400 transition-colors">
              <FileText size={16} className="text-gray-500" />
              <span>Create template</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
