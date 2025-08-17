"use client";
import { ZapRows } from "@/app/components/ZapDashboard/ZapRow";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import useZaps from "@/app/hooks/useZaps";
import ZapTable from "@/app/components/ZapDashboard/ZapTable";
import ZapFilters from "@/app/components/ZapDashboard/ZapFilters";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
export default function Page() {
  const { zaps, loading } = useZaps();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const totalPages = Math.ceil(zaps.length / itemsPerPage);
  console.log(JSON.stringify(zaps, null, 2));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentZaps = zaps.slice(startIndex, endIndex);
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
    <>
      <RecoilContextProvider>
        <ZapFilters />
      </RecoilContextProvider>
      <ZapTable zaps={currentZaps} loading={loading} />{" "}
      {/* ✅ use paginated data */}
      <div className="flex items-center justify-between py-4">
        <span className="text-sm text-gray-600">
          {startIndex + 1}–{Math.min(endIndex, zaps.length)} of {zaps.length}
        </span>
        <div className="flex items-center ">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {itemsPerPage} per page
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex my-4 items-center justify-center gap-2 ">
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
