import {
  Grid,
  Share,
  MessageSquare,
  Calendar,
  Clock,
  Activity,
  Settings,
  FileText,
  Zap,
} from "lucide-react";

export default function LeftBar() {
  return (
    <div className="min-w-12 bg-[#3B2F2F] flex flex-col justify-between items-center py-4 text-zinc-300">
      {/* Top Icons */}
      <div className="flex flex-col space-y-6">
        <Grid className="w-5 h-5" />
        <Share className="w-5 h-5" />
        <MessageSquare className="w-5 h-5" />
        <Calendar className="w-5 h-5" />
        <Clock className="w-5 h-5" />
        <Activity className="w-5 h-5" />
        <Settings className="w-5 h-5" />
        <FileText className="w-5 h-5" />
      </div>

      {/* Bottom Glow Button */}
      <div className="bg-gradient-to-br from-orange-500 to-purple-600 p-1 rounded-lg">
        <div className="bg-[#3B2F2F] p-1 rounded-md">
          <Zap className="w-5 h-5 text-orange-400" fill="#ff4f00" />
        </div>
      </div>
    </div>
  );
}

``;
