"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import useZaps from "@/app/hooks/useZaps";
import ZapTable from "@/app/components/ZapDashboard/ZapTable";
import ZapFilters from "@/app/components/ZapDashboard/ZapFilters";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";

export default function ZapDashboardClient() {
  const { zaps, loading, refetchZaps } = useZaps();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const totalPages = Math.ceil(zaps.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentZaps = zaps.slice(startIndex, endIndex);

  useEffect(() => {
    refetchZaps();
  }, []);

  // Pagination helper
  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) numbers.push(i);
    } else {
      numbers.push(1);
      if (currentPage > 3) numbers.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) numbers.push(i);
      if (currentPage < totalPages - 2) numbers.push("...");
      if (totalPages > 1) numbers.push(totalPages);
    }
    return numbers;
  };

  return (
    <>
      <RecoilContextProvider>
        <ZapFilters refetchZaps={refetchZaps} />
        <ZapTable
          zaps={currentZaps}
          loading={loading}
          refetchZaps={refetchZaps}
        />
      </RecoilContextProvider>

      {/* ✅ Pagination summary + per-page selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4">
        <span className="text-sm text-gray-600 text-center sm:text-left">
          {startIndex + 1}–{Math.min(endIndex, zaps.length)} of {zaps.length}
        </span>

        <div className="flex items-center justify-center sm:justify-end">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {" "}
              {itemsPerPage} per page{" "}
            </span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* ✅ Responsive Pagination */}
      {totalPages > 1 && (
        <div className="flex overflow-x-auto no-scrollbar my-4 items-center justify-center sm:justify-center gap-2 px-2">
          {getPaginationNumbers().map((pageNum, index) => (
            <button
              key={index}
              onClick={() =>
                typeof pageNum === "number" && setCurrentPage(pageNum)
              }
              disabled={pageNum === "..."}
              className={`px-3 py-2 rounded-lg text-sm font-medium shrink-0 transition-colors 
                ${
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
