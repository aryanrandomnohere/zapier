"use client";
import { ItemType, TabType } from "@repo/types";
import {
  ArrowUpDown,
  ChevronDown,
  Filter,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { BoltIcon, BookmarkIcon, FolderIcon, RefreshIcon } from "./FolderIcon";
import useZaps from "@/app/hooks/useZaps";
import CreateButton from "@/app/zap/dashboard/CreateButton";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import DropDownMenu from "@/app/ui/DropDownMenu";
import { useRecoilState } from "recoil";
import {
  appFilterAtom,
  statusFilterAtom,
} from "@/app/RecoilState/store/dashBoardFilters";
import axios from "axios";

interface Service {
  id: string;
  name: string;
  imagePath: string;
  type: string;
}

const ZapFilters: React.FC<{
  type?: "folders" | "zaps";
  refetchZaps: () => void;
}> = ({ type, refetchZaps }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [search, setSearch] = useState("");
  const { tabId } = useParams();
  const [selectedTab, setSelectedTab] = useState<TabType>(
    (tabId as TabType) || "Zaps",
  );
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [appFilter, setAppFilter] = useRecoilState(appFilterAtom);
  const [statusFilter, setStatusFilter] = useRecoilState(statusFilterAtom);
  const [Apps, setApps] = useState<Service[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/open/getservices`,
        { withCredentials: true },
      );
      console.log(response.data.services);
      setApps(response.data.data.services);
    };
    getServices();
  }, []);

  useEffect(() => {
    setSelectedTab((tabId as TabType) || "Zaps");
  }, [tabId]);
  // Pagination logic
  const { zaps, loading } = useZaps();
  const totalPages = Math.ceil(zaps.length / itemsPerPage);
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
    <div className="bg-[#FFFDF9] h-fit  flex flex-col ">
      {/* Header with Zaps title and action buttons */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">
          {type === "folders" ? "Folders" : "Zaps"}
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/zap/dashboard/folders/trash")}
            className="flex hover:cursor-pointer items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md border border-gray-200"
          >
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
            <Link
              href="/zap/dashboard"
              className={`px-3 py-1.5 text-sm flex hover:cursor-pointer items-center gap-1.5 border-r border-[#DAD6CE] ${
                selectedTab === "Zaps"
                  ? "text-[#6E56CF] bg-[#F5F2FF]" // selected state
                  : "text-[#3C3C3C] hover:bg-[#F9F7F3]" // default + hover
              }`}
              onClick={() => setSelectedTab("Zaps")}
            >
              <BoltIcon className="w-4 h-4" />
              Zaps
            </Link>
            <Link
              href="/zap/dashboard/folders"
              className={`px-3 py-1.5 text-sm flex hover:cursor-pointer items-center gap-1.5 ${
                selectedTab === "folders"
                  ? "text-[#6E56CF] bg-[#F5F2FF]"
                  : "text-[#3C3C3C] hover:bg-[#F9F7F3]"
              }`}
            >
              <FolderIcon className="w-4 h-4" />
              Folders
            </Link>
          </div>

          {/* Dropdown */}
          {/* <DropDownMenu
            type="normal"
            menuClassName="bg-[#FFFDF9]"
            trigger={
              <div className="flex items-center gap-2 border border-[#DAD6CE] rounded px-3 min-w-20 justify-between py-1.5 bg-[#FFFCF7] text-sm text-[#3C3C3C]">
                All
                <ChevronDown size={14} className="text-gray-500" />
              </div>
            }
          >
            <div className="flex flex-col gap-2 items-center w-full text-xl py-2">
              <label className="text-sm font-medium px-4 hover:cursor-pointer hover:bg-blue-300/20 cursor-not-allowed text-start hover:text-blue-700  p-1 min-w-full">
                All
              </label>
              <label className="text-sm font-medium px-4 hover:cursor-pointer hover:bg-blue-300/20 cursor-not-allowed text-start hover:text-blue-700  p-1 min-w-full">
                Onwed by me
              </label>
              <label className="text-sm font-medium px-4 hover:cursor-pointer hover:bg-blue-300/20 cursor-not-allowed text-start hover:text-blue-700  p-1 min-w-full">
                Shared with me
              </label>
            </div>
          </DropDownMenu> */}

          {/* Filters */}
          {/* {type !== "folders" && <button
            onClick={() => setFilterIsOpen(!filterIsOpen)}
            className={`flex hover:cursor-pointer items-center gap-2 border border-[#DAD6CE] rounded px-3 py-1.5 text-sm text-[#3C3C3C] hover:bg-[#F9F7F3] bg-[#FFFCF7] ${filterIsOpen ? "bg-blue-300/20 text-blue-700" : "bg-[#FFFCF7]"}`}
          >
            <Filter size={14} />
            Filters
          </button>} */}

          {/* Action buttons */}
          <div className="flex gap-1 bg-[#ECE9DF] rounded p-1">
            {/* <button
              onClick={handleSetDefaultFilters}
              className="p-1 hover:bg-[#E1DED3] rounded hover:cursor-pointer"
            >
              <BookmarkIcon />
            </button> */}
            <button
              onClick={() => refetchZaps()}
              className="p-1 hover:bg-[#E1DED3] rounded hover:cursor-pointer"
            >
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {/* 
      {filterIsOpen && type !== "folders" && (
        <div className="flex gap-2">
          <div className="flex p-1 gap-2 flex-col">
            <DropDownMenu
              
              type="normal"
              menuClassName="bg-[#FFFDF9]"
              trigger={
                <div className="flex flex-col justify-center gap-2">
                  <label className="text-sm font-medium">Status</label>
                  <div className="border min-w-72 hover:cursor-pointer flex items-center justify-between   border-[#DAD6CE] rounded px-4 py-1.5 text-sm text-[#3C3C3C] font-semibold  hover:bg-[#F9F7F3] bg-[#FFFCF7]">
                    {statusFilter} <ArrowUpDown size={14} />
                  </div>
                </div>
              }
            >
              <div className="flex min-w-72 flex-col gap-2 items-center w-full text-xl py-2 ">
                {["ON", "OFF", "ALL"].map((s) => (
                  <div
                    key={s}
                    onClick={() =>
                      setStatusFilter(() => s as "ON" | "OFF" | "ALL")
                    }
                    className="flex justify-center w-full items-center  "
                  >
                    <label className="text-sm px-4 hover:cursor-pointer hover:bg-blue-300/20  text-start hover:text-blue-700  p-1 min-w-full font-semibold">
                      {s}
                    </label>
                  </div>
                ))}
              </div>
            </DropDownMenu>
          </div>
          <div className="flex p-1 gap-2">
            <DropDownMenu
              type="normal"
              menuClassName="bg-[#FFFDF9]"
              trigger={
                <div className="flex flex-col justify-center gap-2">
                  <label className="text-sm font-medium">App</label>
                  <div className="border min-w-72 hover:cursor-pointer flex items-center justify-between   border-[#DAD6CE] rounded px-3 py-1.5 text-sm text-[#3C3C3C] font-semibold  hover:bg-[#F9F7F3] bg-[#FFFCF7]">
                    {appFilter} <ArrowUpDown size={14} />
                  </div>
                </div>
              }
            >
              <div className="flex min-w-72 overflow-y-auto max-h-96 flex-col gap-2 items-center w-full text-xl py-2">
                <div
                  onClick={() => setAppFilter(() => "ALL")}
                  className="flex justify-center w-full items-center  "
                >
                  <BoltIcon />{" "}
                  <label className="text-sm font-medium px-4 hover:cursor-pointer hover:bg-blue-300/20  text-start hover:text-blue-700  p-1 min-w-full">
                    All
                  </label>
                </div>
                {Apps &&
                  Apps.map((s) => (
                    <div
                      key={s.id}
                      onClick={() =>
                        setAppFilter(() => s.id as "ALL" | "ON" | "OFF")
                      }
                      className="flex justify-center w-full items-center  "
                    >
                      <label className="flex gap-4 px-4 text-sm hover:cursor-pointer hover:bg-blue-300/20  text-center hover:text-blue-700  p-1 min-w-full font-semibold">
                        <img
                          src={s.imagePath}
                          alt={s.name}
                          className="rounded border p-0.5 w-6 h-6  border-gray-200/50"
                        />{" "}
                        {s.name}
                      </label>
                    </div>
                  ))}
              </div>
            </DropDownMenu>
          </div>{" "}
        </div>
      )} */}
    </div>
  );
};

export default ZapFilters;
