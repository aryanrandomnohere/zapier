"use client";
import FolderRows from "@/app/components/ZapDashboard/FolderRows";
import useFolders from "@/app/hooks/useFolders";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import ZapFilters from "@/app/components/ZapDashboard/ZapFilters";
import { InlineLoading } from "@/app/components/ui/LoadingSpinner";

export default function Page() {
  const { folders, refetchFolders, loading } = useFolders();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const totalPages = Math.ceil((folders?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFolders = folders?.slice(startIndex, endIndex) || [];
  const router = useRouter();

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
      for (let i = start; i <= end; i++)
        if (!numbers.includes(i)) numbers.push(i);
      if (currentPage < totalPages - 2) numbers.push("...");
      if (totalPages > 1) numbers.push(totalPages);
    }
    return numbers;
  };

 
  return (
    <>
      <div className="flex gap-2 mb-4 items-center">
        <div
          className="text-sm text-blue-600 hover:underline cursor-pointer"
          onClick={() => router.push("/zap/dashboard")}
        >
          Zap
        </div>
        <ArrowRight size={14} className="text-blue-600" />
        <div
          className="text-sm text-blue-600 hover:underline cursor-pointer"
          onClick={() => router.push("/zap/dashboard/folders")}
        >
          Folders
        </div>
      </div>

      <RecoilContextProvider>
        <ZapFilters type="folders" refetchZaps={refetchFolders} />
      </RecoilContextProvider>
       
      {!loading ? <> <div className=" bg-[#FFFDF9] border border-[#F3F0E8] rounded-lg">
        <table className="w-full min-w-[320px] text-sm md:text-base">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="text-left py-2 px-3 md:px-6 w-1/2">Name</th>
              <th className="text-left py-2 px-3 md:px-6 w-1/4">Owner</th>
              <th className="text-center py-2 px-3 md:px-6 w-1/4">Actions</th>
            </tr>
          </thead>
          <FolderRows
            folders={currentFolders}
            refetchFolders={refetchFolders}
          />
        </table>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-2">
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
          {totalPages > 1 && (
            <div className="flex items-center gap-1">
              {getPaginationNumbers().map((pageNum, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof pageNum === "number" && setCurrentPage(pageNum)
                  }
                  disabled={pageNum === "..."}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
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
        </div>
      </div></> : 
       <div className="flex justify-center items-center min-h-[200px] w-full">
       <InlineLoading text="Loading Zaps..." />
     </div>}
    </>
  );
}
