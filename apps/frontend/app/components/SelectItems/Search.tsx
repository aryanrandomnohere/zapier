"use client";
import { ExternalLink, Search as SearchIcon, X } from "lucide-react";

export default function Search() {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-full gap-2 sm:gap-0 pb-3 border-b border-black/5">
      <div className="flex w-full gap-2 sm:gap-3 text-stone-400 items-center">
        <div className="rotate-90 group-focus-within:text-blue-500">
          <SearchIcon />
        </div>
        <input
          className="text-xs flex-1 outline-none border-0 text-black placeholder:text-black"
          placeholder="Search 7,000+ apps and tools"
        />
        <X size={16} className="text-sm text-stone-400 cursor-pointer" />
      </div>
      <a
        href=""
        className="flex gap-1 items-center min-w-fit text-xs underline text-stone-400 font-semibold cursor-not-allowed mt-2 sm:mt-0"
      >
        Browse all <ExternalLink size={16} />
      </a>
    </div>
  );
}
