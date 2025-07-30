import { GetHistoryIcon } from "./GetHistoryIcon";

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

interface HistoryListProps {
  history: ZapHistoryItem[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  return date.toLocaleDateString('en-US', options);
};

export default function HistoryList({ history }: HistoryListProps) {
  return (
    <div className="space-y-2">
      {history.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:shadow-sm transition-shadow"
        >
          {/* Left: Icon + Message */}
          <div className="flex self-start justify-center gap-3 flex-1">
            <div className="flex-shrink-0">
              {GetHistoryIcon(item.type)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">
                {item.message}
              </span>
            </div>
          </div>

          {/* Right: Date + User */}
          <div className="flex items-center justify-center gap-3 flex-shrink-0">
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {formatDate(item.createdAt)}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-xs font-medium">
                {item.createdBy.firstname.charAt(0)}{item.createdBy.lastname.charAt(0)}
              </div>
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                {item.createdBy.firstname}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}