import { CircleQuestionMark, Trash } from "lucide-react";
import Link from "next/link";

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

      <Link href={`/zap/create/${id}`} className="flex items-center gap-2 mb-4">
        <img
          src={triggerImage}
          alt="trigger"
          className="w-7 h-7 border p-0.5 rounded-sm border-black/20"
        />
        {actions.map((a, i) => (
          <img
            key={i}
            src={a.imagePath}
            alt="action"
            className="w-7 h-7 border p-0.5 rounded-sm border-black/20"
          />
        ))}
      </Link>

      <p className="text-xs text-gray-500 mb-1">Edited {lastEdited}</p>
      <p className="text-sm font-medium text-gray-900">
        {name || "Untitled Zap"}
      </p>
    </div>
  );
}
