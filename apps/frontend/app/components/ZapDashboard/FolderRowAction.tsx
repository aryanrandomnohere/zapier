import DropDownOptions from "@/app/ui/DropDownOptions";
import {
  Pencil,
  UserRoundPlus,
  FolderPlus,
  FolderOpen,
  Trash,
} from "lucide-react";
import { ReactNode } from "react";

export default function FolderRowAction({ trigger }: { trigger: ReactNode }) {
  return (
    <DropDownOptions trigger={trigger}>
      <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg z-50">
        <div className="py-1 text-sm">
          {/* Rename */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-purple-50 text-purple-600">
            <Pencil size={16} className="text-purple-600" />
            Rename
          </button>

          {/* Share */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
            <UserRoundPlus size={16} />
            Share
          </button>

          {/* Create subfolder */}
          <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700">
            <FolderPlus size={16} />
            Create subfolder
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
