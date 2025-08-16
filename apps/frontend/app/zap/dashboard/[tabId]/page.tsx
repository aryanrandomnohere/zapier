"use client";
import FolderRows from "@/app/components/ZapDashboard/FolderRows";
import useFolders from "@/app/hooks/useFolders";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const { folders } = useFolders();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const totalPages = Math.ceil((folders?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFolders = folders?.slice(startIndex, endIndex) || [];

  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
    } else {
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
    <>
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
          <FolderRows folders={currentFolders} /> {/* ✅ pass sliced data */}
        </table>
      </div>
      <div className="flex items-center justify-between  py-4 ">
        <span className="text-sm text-gray-600">
          {startIndex + 1}–{Math.min(endIndex, folders?.length || 0)} of{" "}
          {folders?.length || 0}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {itemsPerPage} per page
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-4">
          {getPaginationNumbers().map((pageNum, index) => (
            <button
              key={index}
              onClick={() => {
                if (typeof pageNum === "number") {
                  setCurrentPage(pageNum);
                }
              }}
              disabled={pageNum === "..."}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors hover:cursor-pointer ${
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
    </>
  );
}
