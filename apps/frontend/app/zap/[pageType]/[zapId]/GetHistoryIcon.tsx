"use client";
import {
  Calendar,
  ToggleLeft,
  ToggleRight,
  Trash2,
  RefreshCcw,
  UserCheck,
  Send,
  CheckCircle,
  XCircle,
  Play,
} from "lucide-react";

export function GetHistoryIcon(type: string) {
  switch (type) {
    case "ZAP_CREATED":
      return <Calendar className="text-green-600" size={20} />;
    case "ZAP_TURNED_OFF":
      return <ToggleLeft className="text-red-600" size={20} />;
    case "ZAP_TURNED_ON":
      return <ToggleRight className="text-green-600" size={20} />;
    case "ZAP_DELETED":
      return <Trash2 className="text-blue-600" size={20} />;
    case "ZAP_RESTORED":
      return <RefreshCcw className="text-yellow-600" size={20} />;
    case "OWNER_CHANGED":
      return <UserCheck className="text-yellow-600" size={20} />;
    case "VERSION_PUBLISHED":
      return <Play className="text-green-600" size={20} />;
    case "APPROVAL_REQUEST_SENT":
      return <Send className="text-blue-600" size={20} />;
    case "APPROVAL_REQUEST_APPROVED":
      return <CheckCircle className="text-green-600" size={20} />;
    case "APPROVAL_REQUEST_DENIED":
      return <XCircle className="text-red-600" size={20} />;
    case "APPROVAL_REQUEST_CANCELLED":
      return <XCircle className="text-gray-600" size={20} />;
    default:
      return null;
  }
}
