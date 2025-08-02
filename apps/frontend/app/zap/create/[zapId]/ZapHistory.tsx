import { useEffect, useState } from "react";
import { DatePickerModal } from "./DatePickerModal";
import OptionDropdown from "./OptionDropdown";
import { CalendarDays, ChevronDown } from "lucide-react";
import ZapRunIcons from "./ZapRunIcons";
import axios from "axios";
import { useParams } from "next/navigation";
import HistoryList from "./HistoryList";
import PaginatedMap from "./PaginatedMap";

const statusOptions = [
  { value: "", label: "All statuses" },
  {
    value: "ZAP_CREATED",
    label: "Zap Created",
    icon: "calender",
    color: "text-green-600",
  },
  {
    value: "ZAP_TURNED_OFF",
    label: "Zap turned off",
    icon: "closedtoggle",
    color: "text-red-600",
  },
  {
    value: "ZAP_DELETED",
    label: "Zap deleted",
    icon: "bin",
    color: "text-blue-600",
  },
  {
    value: "OWNER_CHANGED",
    label: "Owner changed",
    icon: "swapowner",
    color: "text-yellow-600",
  },
  {
    value: "ZAP_RESTORED",
    label: "Zap restored",
    icon: "reversearrow",
    color: "text-yellow-600",
  },
  {
    value: "ZAP_TURNED_ON",
    label: "Zap turned on",
    icon: "opentoggle",
    color: "text-yellow-600",
  },
];

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
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [dateFilter, setDateFilter] = useState<string>("Last 30 days");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [history, setHistory] = useState<ZapHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const runsPerPage = 4;
  const { zapId } = useParams();

  const totalPages = Math.ceil(history.length / runsPerPage);
  const paginatedHistory = history.slice(
    (currentPage - 1) * runsPerPage,
    currentPage * runsPerPage,
  );

  useEffect(() => {
    const fetchHistory = async () => {
      console.log("Fetching history");
      try {
        const res = await axios.get<ZapHistoryItem[]>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/zap-history/${zapId}`,
        );
        console.log(res.data);
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
    <div className=" bg-opacity-50  flex items-start justify-center px-1 pl-3">
      <div className=" rounded-lg  w-full min-w-xs max-h-[90vh] space-y-6">
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
              <div
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="w-full px-4 py-2 border-2 border-blue-500 rounded-md text-xs bg-white text-left flex items-center justify-between hover:cursor-pointer "
              >
                <span>All types</span>
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

        {!loading ? (
          <HistoryList history={paginatedHistory} />
        ) : (
          <p>Loaing history...</p>
        )}

        <PaginatedMap
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
