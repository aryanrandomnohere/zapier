import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  X,
  Search,
  ChevronDown,
  MoreHorizontal,

  Trash2,
  CalendarDays,
} from "lucide-react";
import { IoReload } from "react-icons/io5";
import { DatePickerModal } from "./DatePickerModal";
import ZapRunIcons from "./ZapRunIcons";
import OptionDropdown from "./OptionDropdown";
import PaginatedMap from "./PaginatedMap";

interface ZapRun {
  id: string;
  status: "PENDING" | "RUNNING" | "SUCCESS" | "FAILED";
  createdAt: string;
  metadata: Record<string, any>;
  zap: {
    name: string;
    actions: { actionDetails: { id: string; name: string } }[];
  };
}

export default function ZapRunList() {
  const [runs, setRuns] = useState<ZapRun[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("Last 30 days");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRuns, setSelectedRuns] = useState<Set<string>>(new Set());
  const { zapId } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [zapRunEdit, setZapRunEdit] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const runsPerPage = 4;

  const statusOptions = [
    { value: "", label: "All statuses" },
    {
      value: "SUCCESS",
      label: "Success",
      icon: "tick",
      color: "text-green-600",
    },
    { value: "FAILED", label: "Failed", icon: "cross", color: "text-red-600" },
    {
      value: "RUNNING",
      label: "Running",
      icon: "play",
      color: "text-blue-600",
    },
    {
      value: "PENDING",
      label: "Pending",
      icon: "pending",
      color: "text-yellow-600",
    },
  ];

  useEffect(() => {
    fetchRuns();
  }, [zapId, statusFilter, dateFilter]);

  async function fetchRuns() {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 30);
    const params: any = { fromDate: fromDate.toISOString() };
    if (statusFilter) params.status = statusFilter;

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap-runs/${zapId}`,
        { params },
      );
      setRuns(data);
    } catch (error) {
      console.error("Failed to fetch runs:", error);
    }
  }

  const filteredRuns = runs.filter((run) => {
    if (statusFilter && run.status !== statusFilter) return false;
    if (
      searchQuery &&
      !JSON.stringify(run).toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRuns.length / runsPerPage);
  const paginatedRuns = filteredRuns.slice(
    (currentPage - 1) * runsPerPage,
    currentPage * runsPerPage,
  );

  
  const handleSelectAll = () => {
    const allRunIds = new Set(runs.map((run) => run.id));
    setSelectedRuns(allRunIds);
    setShowDropdown(false);
  };

  const handleClearSelection = () => {
    setSelectedRuns(new Set());
    setShowDropdown(false);
  };

  const handleReFetchZap = () => {
    fetchRuns();
  };

  const handleDeleteZap = () => {
    if (selectedRuns.size < 1) return;
    console.log("Deleting zaps with ids", selectedRuns.entries());
  };

  const handleRunSelection = (runId: string) => {
    const newSelected = new Set(selectedRuns);
    if (newSelected.has(runId)) {
      newSelected.delete(runId);
    } else {
      newSelected.add(runId);
    }
    setSelectedRuns(newSelected);
  };

  const getStatusDisplay = (status: string) => {
    const option = statusOptions.find((opt) => opt.value === status);
    return option || { label: status, icon: "", color: "text-gray-600" };
  };

  return (
    <div className=" bg-opacity-50  flex items-start justify-center px-1 pl-3 z-40">
      <div className=" rounded-lg  w-full max-w-xs max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-1 py-4 border-b border-gray-200 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">Zap runs</h2>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            A log of all automation activity within your Zap, which can help
            with troubleshooting.{" "}
            <a href="#" className="text-blue-600 underline">
              Learn more
            </a>
            . Access these runs in{" "}
            <a href="#" className="text-blue-600 underline">
              Zap History
            </a>
            .
          </p>
        </div>

        {/* Content */}
        <div className="px-1 py-4 space-y-2 flex-1">
          {/* Search */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search within Zap run data"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Date Filter */}
          <div>
          <button
            onClick={() => setIsDateModalOpen(!isDateModalOpen)}
            className="flex gap-2.5 items-center w-full px-4 text-start py-2 border-2 border-blue-500 rounded-md text-xs bg-white cursor-pointer"
          >
           <CalendarDays size={18} /> {dateFilter}
          </button>

            <DatePickerModal
              isOpen={isDateModalOpen}
              onClose={() => setIsDateModalOpen(false)}
              onDateSelect={(date) => setDateFilter(date)}
              selectedValue={dateFilter}
              title="Date"
            />
          </div>
          {/* Status Filter */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              Status
            </label>

            <OptionDropdown
              trigger={
                <button
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  className="w-full px-4 py-2 border-2 border-blue-500 rounded-md text-xs bg-white text-left flex items-center justify-between hover:cursor-pointer "
                >
                  <span>{statusFilter || "All statuses"}</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
              }
              showDropdown={showStatusDropdown}
              setShowDropdown={setShowStatusDropdown}
            >
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setStatusFilter(option.value);
                    setShowStatusDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:cursor-pointer hover:bg-gray-50 flex items-center gap-3 text-xs"
                >
                  <input
                    type="checkbox"
                    checked={statusFilter === option.value}
                    readOnly
                    className="w-4 h-4 hover:cursor-pointer rounded"
                  />
                  {option.icon && (
                    <span className={`${option.color} font-bold`}>
                      <ZapRunIcons icon={option.icon} />
                    </span>
                  )}
                  <span className={option.color}>{option.label}</span>
                </button>
              ))}
            </OptionDropdown>
          </div>

          {/* Results Count */}
          <p className="text-xs text-gray-600">
            <strong>{filteredRuns.length} runs</strong> based on applied filters
          </p>

          {/* Select and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="text-xs text-gray-600">
                Select runs to replay steps{" "}
                <span className="text-gray-400">
                  ({selectedRuns.size} runs selected)
                </span>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-between w-full items-center">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-3 py-1 bg-white border hover:cursor-pointer hover:border-indigo-500 rounded text-sm text-gray-900 max-w-44"
              >
                <span>Select Runs</span>
                <ChevronDown size={18} />
              </button>
              <div className="flex items-center gap-1">
                <div
                  onClick={handleDeleteZap}
                  className={`bg-[#D5D7FC] hover:bg-[#847DFE] p-3 rounded hover:cursor-pointer ${
                    selectedRuns.size < 1 ? "cursor-not-allowed" : ""
                  } `}
                >
                  <Trash2 size={15} />
                </div>
                <div
                  onClick={handleReFetchZap}
                  className="bg-[#D5D7FC] hover:bg-[#847DFE] p-3 rounded hover:cursor-pointer"
                >
                  <IoReload size={15} />
                </div>
              </div>
            </div>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-0.5 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-24 max-w-44 ">
                <button
                  onClick={handleSelectAll}
                  className="w-full px-4 py-2 text-left  text-xs hover:bg-[#F7F6FD] "
                >
                  Select all on page
                </button>
                {selectedRuns.size > 0 && (
                  <button
                    onClick={handleClearSelection}
                    className="w-full px-4 py-2 text-left hover:bg-[#F7F6FD] text-xs text-gray-700"
                  >
                    Clear selection
                  </button>
                )}
              </div>
            )}
          </div>

          <button
            className={`flex items-center ${
              selectedRuns.size === 0
                ? "bg-[#ECE9DF] text-black cursor-not-allowed"
                : "bg-blue-700 text-white hover:bg-blue-500 hover:cursor-pointer"
            } gap-2 px-3 py-2  border border-gray-300 rounded text-sm   text-gray-600 min-w-32`}
          >
            <span>
              Replay{" "}
              {selectedRuns.size > 0 ? selectedRuns.size + " run" : "runs"}
            </span>
            <ChevronDown size={18} />
          </button>

          {/* Runs List */}
          <div className="space-y-2">
            {paginatedRuns.map((run) => {
              const statusDisplay = getStatusDisplay(run.status);

              return (
                <div className="flex flex-col" key={run.id}>
                  {zapRunEdit === run.id && (
                    <div
                      onClick={() => setZapRunEdit(null)}
                      className="text-blue-600 underline text-xs self-end hover:cursor-pointer"
                    >
                      Exit Run View
                    </div>
                  )}
                  <div
                    onClick={() => setZapRunEdit(run.id)}
                    className={`border-2 rounded-md p-3 flex items-center gap-3 
                      hover:cursor-pointer hover:bg-[#F7F6FD]   ${
                        zapRunEdit === run.id
                          ? "border-blue-700"
                          : "border-gray-200"
                      } hover:border-blue-700 
                  `}
                  >
                    <input
                      type="checkbox"
                      checked={selectedRuns.has(run.id)}
                      onChange={() => handleRunSelection(run.id)}
                      className="w-4 h-4 hover:cursor-pointer rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`${statusDisplay.color} font-bold text-xs`}
                        >
                          <ZapRunIcons icon={statusDisplay.icon || ""} />
                        </span>
                        <span
                          className={`${statusDisplay.color} text-xs font-medium`}
                        >
                          {statusDisplay.label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {run.zap.actions.length} task
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(run.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        {new Date(run.createdAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: true,
                        })}
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {/* {totalPages > 1 && (
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
          )} */}
            <PaginatedMap currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
