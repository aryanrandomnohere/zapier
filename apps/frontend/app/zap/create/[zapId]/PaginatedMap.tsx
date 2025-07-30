import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function PaginatedMap({totalPages, currentPage, setCurrentPage}:{totalPages:number, currentPage:number, setCurrentPage:(param:number)=>void}) {
    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
      };
    
      const handlePrev = () => goToPage(currentPage - 1);
      const handleNext = () => goToPage(currentPage + 1);
    
  return (
    <>{totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="p-2 text-[#584D4D] bg-[#ECE9DF] hover:text-gray-600 disabled:opacity-50"
          >
            <ChevronLeft size={18} color="black" />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`p-1.5 px-3.5 rounded text-base ${
                currentPage === i + 1
                  ? "bg-[#D5D7FC] text-black"
                  : "bg-[#ECE9DF] text-[#584D4D]"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="p-2 bg-[#ECE9DF] text-[#584D4D] hover:text-gray-600 disabled:opacity-50"
          >
            <ChevronRight size={18} color="black" />
          </button>
        </div>
      )}</>
  )
}
