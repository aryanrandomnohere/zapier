import { RecordMetadata } from "@repo/types";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import FloatingModal from "../FloatingModal";
import RecordJsonData from "./RecordJsonData";

// Individual Record Item Component
interface RecordItemProps {
  record: RecordMetadata;
  onRecordClick: (record: RecordMetadata) => void;
  selectedRecord: string;
  setSelectedRecord: (id: string) => void;
}

export const RecordItem: React.FC<RecordItemProps> = ({
  record,
  onRecordClick,
  setSelectedRecord,
  selectedRecord,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) return "just now";
    if (diffInHours === 1) return "1 hour ago";
    if (diffInHours < 24) return `${diffInHours} hours ago`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isModified = record.type === "modified";
  // ${  isModified ? 'bg-blue-50 border-blue-200' : 'bg-white' }.  ${isModified ? 'text-blue-900' : 'text-gray-900'}${isModified ? 'text-blue-700' : 'text-gray-600'}
  return (
    <div
      className={`relative  border-2 rounded-lg p-2 mb-1.5 cursor-pointer text-sm ${selectedRecord == record.id ? "border-blue-700 bg-blue-700/5" : "border-gray-200 hover:bg-gray-50  "} transition-colors `}
      onClick={() => {
        onRecordClick(record);
        setSelectedRecord(record.id);
        setIsOpen(!isOpen);
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className={`text-xs font-bold p-1 pl-0 `}>{record.title}</h3>
            {isModified && (
              <button className="p-1 hover:bg-blue-100 rounded">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            )}
          </div>
          <p className={`text-xs mt-0.5 `}>
            {isModified
              ? `created ${getTimeAgo(record.createdAt)}`
              : `original record pulled on ${getTimeAgo(record.pulledAt)}`}
          </p>
        </div>
        <ChevronRight
          className={`w-5 h-5 ${isModified ? "text-blue-600" : "text-gray-400"}`}
        />
      </div>
      {isOpen && (
        <FloatingModal>
          <RecordJsonData data={record.JsonData} />
        </FloatingModal>
      )}
    </div>
  );
};
