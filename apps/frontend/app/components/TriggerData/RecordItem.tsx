import { RecordMetadata } from "@repo/types";
import { ChevronRight, MoreHorizontal } from "lucide-react";

// Individual Record Item Component
interface RecordItemProps {
  record: RecordMetadata;
  onRecordClick: (record: RecordMetadata) => void;
  selectedRecord:string
}

export const RecordItem: React.FC<RecordItemProps> = ({ record, onRecordClick, selectedRecord }) => {
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'just now';
    if (diffInHours === 1) return '1 hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const isModified = record.type === 'modified';
// ${  isModified ? 'bg-blue-50 border-blue-200' : 'bg-white' }.  ${isModified ? 'text-blue-900' : 'text-gray-900'}${isModified ? 'text-blue-700' : 'text-gray-600'}
  return (
    <div 
      className={`border-2  rounded-lg p-2 mb-1.5 cursor-pointer text-sm ${selectedRecord == record.id ? "border-blue-700 bg-blue-700/5" : "border-gray-200 hover:bg-gray-50  " } transition-colors `}
      onClick={() => onRecordClick(record)}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className={`text-xs font-bold `}>
              {record.title}
            </h3>
            {isModified && (
              <button className="p-1 hover:bg-blue-100 rounded">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            )}
          </div>
          <p className={`text-xs mt-0.5 `}>
            {isModified 
              ? `created ${getTimeAgo(record.createdAt)}`
              : `original record pulled on ${getTimeAgo(record.pulledAt)}`
            }
          </p>
        </div>
        <ChevronRight className={`w-5 h-5 ${isModified ? 'text-blue-600' : 'text-gray-400'}`} />
      </div>
    </div>
  );
};