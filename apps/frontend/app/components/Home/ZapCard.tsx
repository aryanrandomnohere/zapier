import { CircleQuestionMark, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { BoltIcon } from "../ZapDashboard/FolderIcon";

interface ZapCardProps {
  name: string;
  msg: string;
  lastEdited: string;
  triggerImage: string;
  actions: { imagePath: string }[];
  id: number;
}

export function ZapCard({
  name,
  lastEdited,
  msg,
  triggerImage,
  actions,
  id,
}: ZapCardProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  if (pageLoading) {
    return (
      <div className="fixed bg-black/50 bg-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex  items-center justify-center h-screen z-[9999] w-screen gap-4 text-white text-2xl font-bold">
        This May Take a While, Setting Up the Zap Creation Environment{" "}
        <LoadingSpinner size="lg" color="primary" />
      </div>
    );
  }
  return (
    <div className="min-w-[270px] max-w-sm p-4 border border-black/20 rounded shadow-sm bg-white ">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center justify-center gap-1">
          <span className="text-xs bg-yellow-300 text-black font-bold px-2 py-0.5 rounded">
            {msg}
          </span>
          <button className="text-gray-500 text-sm font-bold" title="Help">
            <CircleQuestionMark size={18} />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <button className="text-gray-500 text-sm font-bold" title="Delete">
            <Trash size={18} />
          </button>
        </div>
      </div>

      <div
        onClick={() => {
          setPageLoading(true);
          router.push(`/zap/create/${id}`);
        }}
        className="flex items-center gap-2 mb-4 hover:cursor-pointer"
      >
        {triggerImage ? (
          <img
            src={triggerImage}
            alt="trigger"
            className="w-7 h-7 border p-0.5 rounded-sm border-black/20"
          />
        ) : (
          <div className="flex items-center justify-center w-7 h-7 border p-0.5 rounded-sm border-black/20 bg-gray-200">
            <BoltIcon />{" "}
          </div>
        )}
        {actions.map((a, i) =>
          a.imagePath ? (
            <img
              key={i}
              src={a.imagePath}
              alt="action"
              className="w-7 h-7 border p-0.5 rounded-sm border-black/20"
            />
          ) : (
            <div
              key={i}
              className="flex items-center justify-center w-7 h-7 border p-0.5 rounded-sm border-black/20 "
            >
              <BoltIcon />{" "}
            </div>
          ),
        )}
      </div>

      <p className="text-xs text-gray-500 mb-1">Edited {lastEdited}</p>
      <p className="text-sm font-medium text-gray-900">
        {name || "Untitled Zap"}
      </p>
    </div>
  );
}
