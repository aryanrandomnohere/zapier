"use client";
import React, { useState, useEffect } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import axios from "axios";
import { useParams } from "next/navigation";
import { DatePickerModal } from "./DatePickerModal";
import OptionDropdown from "./OptionDropdown";
import ZapRunIcons from "./ZapRunIcons";
import {
  InlineLoading,
  LoadingSpinner,
} from "../../../components/ui/LoadingSpinner";
import { ListSkeleton } from "../../../components/ui/Skeleton";

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  imageUrl?: string; // optional
}

export interface ZapHistoryItem {
  id: string;
  zapId: number;
  type:
    | "ZAP_CREATED"
    | "ZAP_TURNED_OFF"
    | "ZAP_DELETED"
    | "OWNER_CHANGED"
    | "ZAP_RESTORED"
    | "ZAP_TURNED_ON"
    | "VERSION_PUBLISHED"
    | "APPROVAL_REQUEST_SENT"
    | "APPROVAL_REQUEST_APPROVED"
    | "APPROVAL_REQUEST_DENIED"
    | "APPROVAL_REQUEST_CANCELLED";
  message: string;
  createdAt: string; // ISO string
  createdBy: User;
}

export default function ZapHistory() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [runsPerPage] = useState(10);
  const [dateFilter, setDateFilter] = useState("All time");
  const [statusFilter, setStatusFilter] = useState("All types");
  const [history, setHistory] = useState<ZapHistoryItem[]>([]);
  const filteredHistory = history.filter((h) => {
    const statusMatch = statusFilter === "All types" || statusFilter === h.type;

    const dateMatch = (() => {
      if (dateFilter === "All time") return true;

      const now = new Date();
      const itemDate = new Date(h.createdAt);

      switch (dateFilter) {
        case "Last 24 hours":
          return now.getTime() - itemDate.getTime() <= 24 * 60 * 60 * 1000;
        case "Last 7 days":
          return now.getTime() - itemDate.getTime() <= 7 * 24 * 60 * 60 * 1000;
        case "Last 30 days":
          return now.getTime() - itemDate.getTime() <= 30 * 24 * 60 * 60 * 1000;
        case "Last 60 days":
          return now.getTime() - itemDate.getTime() <= 60 * 24 * 60 * 60 * 1000;
        default:
          // Handle specific date format like "6/6/2025"
          return itemDate.toLocaleDateString() === dateFilter;
      }
    })();

    return statusMatch && dateMatch;
  });
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const { zapId } = useParams();

  const statusOptions = [
    { value: "All types", label: "All types", color: "text-gray-900" },
    {
      value: "ZAP_CREATED",
      label: "Created",
      icon: "zap",
      color: "text-green-600",
    },
    {
      value: "ZAP_TURNED_OFF",
      label: "Turned off",
      icon: "pause",
      color: "text-orange-600",
    },
    {
      value: "ZAP_TURNED_ON",
      label: "Turned on",
      icon: "play",
      color: "text-green-600",
    },
    {
      value: "VERSION_PUBLISHED",
      label: "Published",
      icon: "check",
      color: "text-blue-600",
    },
  ];

  const paginatedHistory = filteredHistory.slice(
    (currentPage - 1) * runsPerPage,
    currentPage * runsPerPage,
  );

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const totalPages = Math.ceil(filteredHistory.length / runsPerPage);
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

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const res = await axios.get<ZapHistoryItem[]>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/zap-history/${zapId}`,
          {
            withCredentials: true,
          },
        );
        setHistory(res.data);
      } catch (error) {
        console.error("Error fetching history", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="bg-opacity-50 flex items-start justify-center px-1 pl-3">
      <div className="rounded-lg w-full min-w-xs max-h-[90vh] space-y-6">
        {/* Header */}
        <div className="px-1 py-4 border-b border-gray-200 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">
              Change history
            </h2>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            A lot of changes applied to this Zap.
          </p>
        </div>
        <div className="relative min-h-fit">
          <label className="block text-xs font-medium text-gray-700 mb-0.5">
            Date
          </label>
          <button
            onClick={() => setIsDateModalOpen(!isDateModalOpen)}
            className="flex gap-2.5 text-xs items-center w-full px-4 text-start py-2 border-2 border-blue-500 rounded-md bg-white cursor-pointer"
          >
            <CalendarDays size={18} /> {dateFilter}
          </button>

          <DatePickerModal
            isOpen={isDateModalOpen}
            onClose={() => setIsDateModalOpen(false)}
            onDateSelect={(date: string) => setDateFilter(date)}
            selectedValue={dateFilter}
            title="Date"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-0.5">
            Change type
          </label>
          <OptionDropdown
            trigger={
              <div className="w-full px-4 py-2 border-2 border-blue-500 rounded-md text-xs bg-white text-left flex items-center justify-between hover:cursor-pointer">
                <span>
                  {statusOptions.find((o) => o.value === statusFilter)?.label}
                </span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
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
        {loading ? (
          <div className="space-y-4">
            <InlineLoading text="Loading history..." size="md" />
            <ListSkeleton count={5} />
          </div>
        ) : (
          <>
            {paginatedHistory.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">No history found</p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  {paginatedHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
                            {item.createdBy.firstname.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {item.message}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.createdBy.firstname} {item.createdBy.lastname}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {Math.ceil(filteredHistory.length / runsPerPage) > 1 && (
                  <div className="flex items-center justify-center gap-1 pt-4">
                    {getPaginationNumbers().map((pageNum, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (typeof pageNum === "number") {
                            setCurrentPage(pageNum);
                          }
                        }}
                        disabled={pageNum === "..."}
                        className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
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
            )}
          </>
        )}
      </div>
    </div>
  );
}
