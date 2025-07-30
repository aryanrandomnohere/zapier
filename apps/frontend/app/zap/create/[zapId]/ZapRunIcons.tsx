import {
  CheckCircle,
  XCircle,
  PlayCircle,
  Clock,
  Calendar,
  Trash2,
  ToggleRight,
  ToggleLeft,
  RefreshCcw,
  UserCheck,
} from "lucide-react";

type ZapRunIconsProps = {
  icon: string;
  className?: string;
};

export default function ZapRunIcons({ icon, className }: ZapRunIconsProps) {
  switch (icon) {
    case "tick":
      return <CheckCircle className={className} size={16} />;
    case "cross":
      return <XCircle className={className} size={16} />;
    case "play":
      return <PlayCircle className={className} size={16} />;
    case "pending":
      return <Clock className={className} size={16} />;
    case "calender": // Zap Created
      return <Calendar className={className} size={16} />;
    case "bin": // Zap Deleted
      return <Trash2 className={className} size={16} />;
    case "closedtoggle": // Zap turned off
      return <ToggleLeft className={className} size={16} />;
    case "opentoggle": // Zap turned on
      return <ToggleRight className={className} size={16} />;
    case "reversearrow": // Zap restored
      return <RefreshCcw className={className} size={16} />;
    case "swapowner": // Owner changed
      return <UserCheck className={className} size={16} />;
    default:
      return null;
  }
}
