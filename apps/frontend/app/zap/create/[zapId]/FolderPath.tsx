import { Folder } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

export default function ZapHeader() {
  return (
    <div className="flex items-center space-x-2 bg-[#3B2F2F] px-4 text-white text-sm">
      {/* Folder */}
      <div className="flex items-center space-x-1 text-gray-300">
        <Folder className="w-4 h-4" />
        <span className="truncate max-w-[100px]">Aryan Rathor...</span>
      </div>

      {/* Slash Separator */}
      <span className="text-gray-400">/</span>

      {/* Avatar */}
      <div className="flex items-center space-x-2 hover:bg-white/20  py-2 px-2 hover:cursor-pointer">
        <div className="flex items-center space-x-1">
          <div className="rounded-full bg-pink-200 text-black w-6 h-6 text-xs font-bold flex items-center justify-center">
            AR
          </div>
          <span className="font-medium">Untitled Zap</span>
        </div>

        {/* Draft badge */}
        <div className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded ml-2">
          Draft
        </div>

        {/* Optional dropdown */}
        <div className="text-white/50">
          <IoIosArrowDown size={16} />
        </div>
      </div>
    </div>
  );
}
