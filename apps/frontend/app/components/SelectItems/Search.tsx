"use client";
import { GoLinkExternal } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
export default function Search() {
  return (
    <div className="flex justify-between min-w-full group pb-3 border-b border-black/5">
      <div className="flex w-full gap-3 text-stone-400 items-center">
        <div className="rotate-90 group-focus-within:text-blue-500 ">
          <IoSearch />
        </div>
        <input
          className="text-xs min-w-96 outline-none border-0 text-black placeholder:text-black "
          placeholder="Search 7,000+ apps and tools"
        />
        <RxCross2 className=" text-sm text-stone-400 min-w-fit " />
      </div>
      <a
        href="https://zapier.com/apps"
        className="flex gap-1 items-center text-xs underline text-stone-400 font-semibold min-w-fit"
      >
        Browse all <GoLinkExternal />
      </a>
    </div>
  );
}
