import DropDownOptions from "@/app/ui/DropDownOptions";
import {
  Clock,
  Copy,
  FolderOpen,
  Grid,
  Pencil,
  Trash,
  UserRound,
} from "lucide-react";
import { ReactNode } from "react";

export default function RowAction({ trigger }: { trigger: ReactNode }) {
  return (
    <DropDownOptions trigger={trigger}>
      {" "}
      <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg z-50">
        <div className="py-1 text-sm">
          {/* Rename */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-purple-50 text-purple-600">
            <Pencil size={16} className="text-purple-600" />
            Rename
          </button>

          {/* View history */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
            <Clock size={16} />
            View history
          </button>

          {/* Duplicate */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
            <Copy size={16} />
            Duplicate
          </button>

          {/* Change owner (disabled) */}
          <button
            disabled
            className="flex items-center gap-2 w-full px-4 py-2 text-gray-400 cursor-not-allowed"
          >
            <UserRound size={16} />
            Change owner
          </button>

          {/* Divider */}
          <div className="my-1 border-t border-gray-200"></div>

          {/* Move to project */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
            <Grid size={16} />
            Move to project
          </button>

          {/* Move to folder */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
            <FolderOpen size={16} />
            Move to folder
          </button>

          {/* Divider */}
          <div className="my-1 border-t border-gray-200"></div>

          {/* Delete */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
            <Trash size={16} />
            Delete
          </button>
        </div>
      </div>
    </DropDownOptions>
  );
}
