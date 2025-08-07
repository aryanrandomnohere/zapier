"use client";
import { TabType } from "@repo/types";
import { ChevronDown, Filter, Plus, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { BoltIcon, BookmarkIcon, FolderIcon, RefreshIcon } from "./FolderIcon";
import { ZapRows } from "./ZapRow";
import useZaps from "@/app/hooks/useZaps";
import CreateButton from "@/app/zap/dashboard/CreateButton";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import FolderRows from "./FolderRows";

const ZapTable: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("Zaps");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const { zaps, loading } = useZaps();

  // Pagination logic
  const totalPages = Math.ceil(zaps.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentZaps = zaps.slice(startIndex, endIndex);
  const currentFolders = zaps
    .filter((zap) => zap.folder && zap.folder.type != "subfolder")
    .map((zap) => zap.folder);
  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 5; // Show max 5 page numbers

    if (totalPages <= maxVisible) {
      // Show all pages if total is 5 or less
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
    } else {
      // Show first page, last page, and pages around current
      numbers.push(1);

      if (currentPage > 3) {
        numbers.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!numbers.includes(i)) {
          numbers.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        numbers.push("...");
      }

      if (totalPages > 1) {
        numbers.push(totalPages);
      }
    }

    return numbers;
  };

  return (
    <div className="bg-[#FFFDF9] h-fit ">
      {/* Header with Zaps title and action buttons */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">Zaps</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md border border-gray-200">
            <Trash2 size={16} />
            Trash
          </button>
          <RecoilContextProvider>
            <CreateButton />
          </RecoilContextProvider>
        </div>
      </div>

      <div className="flex items-center justify-between py-4">
        {/* Left Controls */}
        <div className="flex items-start gap-4">
          {/* Tabs */}
          <div className="flex border border-[#DAD6CE] rounded-md overflow-hidden">
            <button
              className={`px-3 py-1.5 text-sm flex items-center gap-1.5 border-r border-[#DAD6CE] ${
                selectedTab === "Zaps"
                  ? "text-[#6E56CF] bg-[#F5F2FF]" // selected state
                  : "text-[#3C3C3C] hover:bg-[#F9F7F3]" // default + hover
              }`}
              onClick={() => setSelectedTab("Zaps")}
            >
              <BoltIcon className="w-4 h-4" />
              Zaps
            </button>
            <button
              className={`px-3 py-1.5 text-sm flex items-center gap-1.5 ${
                selectedTab === "Folders"
                  ? "text-[#6E56CF] bg-[#F5F2FF]"
                  : "text-[#3C3C3C] hover:bg-[#F9F7F3]"
              }`}
              onClick={() => setSelectedTab("Folders")}
            >
              <FolderIcon className="w-4 h-4" />
              Folders
            </button>
          </div>

          {/* Dropdown */}
          <div className="flex items-center gap-2 border border-[#DAD6CE] rounded px-3 min-w-20 justify-between py-1.5 bg-[#FFFCF7] text-sm text-[#3C3C3C]">
            All
            <ChevronDown size={14} className="text-gray-500" />
          </div>

          {/* Filters */}
          <button className="flex items-center gap-2 border border-[#DAD6CE] rounded px-3 py-1.5 text-sm text-[#3C3C3C] hover:bg-[#F9F7F3] bg-[#FFFCF7]">
            <Filter size={14} />
            Filters
          </button>

          {/* Action buttons */}
          <div className="flex gap-1 bg-[#ECE9DF] rounded p-1">
            <button className="p-1 hover:bg-[#E1DED3] rounded">
              <BookmarkIcon />
            </button>
            <button className="p-1 hover:bg-[#E1DED3] rounded">
              <RefreshIcon />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by name or webhook"
            className="pl-8 pr-3 py-1.5 border border-[#DAD6CE] rounded-md w-72 text-sm focus:outline-none focus:ring-2 focus:ring-[#6E56CF] bg-[#FFFCF7] placeholder-gray-500"
          />
        </div>
      </div>

      {/* Table */}
      {selectedTab === "Zaps" && (
        <div className="bg-[#FFFDF9] border border-[#F3F0E8] rounded-lg">
          <table className="w-full">
            <thead className=" border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 min-w-96 text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-2">
                    Name
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                  Apps
                </th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                  Location
                </th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-2">
                    Last modified
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-2">
                    Status
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                  Owner
                </th>
              </tr>
            </thead>
            <ZapRows zaps={currentZaps} loading={loading} />
          </table>
        </div>
      )}
      {selectedTab === "Folders" && (
        <div className="bg-[#FFFDF9] border border-[#F3F0E8] rounded-lg">
          <table className="w-full">
            <thead className=" border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 w-full text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="text-left py-3 px-6 min-w-48 text-sm font-medium text-gray-700">
                  Owner
                </th>
                <th className="text-left py-3 px-6 min-w-48 text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <FolderRows />
          </table>
        </div>
      )}
      {/* Footer pagination */}
      <div className="flex items-center justify-between px-6 py-4 ">
        <span className="text-sm text-gray-600">
          {startIndex + 1}–{Math.min(endIndex, zaps.length)} of {zaps.length}
        </span>
        <div className="flex items-center gap-4">
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center gap-1">
              {getPaginationNumbers().map((pageNum, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (typeof pageNum === "number") {
                      setCurrentPage(pageNum);
                    }
                  }}
                  disabled={pageNum === "..."}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    pageNum === currentPage
                      ? "bg-blue-600 text-white"
                      : pageNum === "..."
                        ? "text-gray-400 cursor-default"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {itemsPerPage} per page
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZapTable;
