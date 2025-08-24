"use client";
import { folderInterface } from "@repo/types";
import FolderRowAction from "./FolderRowAction";
import { useRouter } from "next/navigation";

export default function FolderRows({
  folders,
  refetchFolders,
}: {
  folders: folderInterface[];
  refetchFolders: () => void;
}) {
  const router = useRouter();

  return (
    <tbody>
      {folders &&
        folders.map((folder: folderInterface) => (
          <tr
            key={folder.id}
            className="border-b border-gray-100 text-sm md:text-base"
          >
            {/* Name */}
            <td
              onClick={() => router.push(`/zap/dashboard/folders/${folder.id}`)}
              className="py-2 px-3 md:py-4 md:px-6 hover:underline cursor-pointer max-w-[150px] md:max-w-none truncate"
            >
              {folder.name} {folder.type === "personal" ? "(Personal)" : ""}
            </td>

            {/* Owner */}
            <td className="py-2 px-3 md:py-4 md:px-6 max-w-[120px] md:max-w-none">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="w-6 h-6 bg-[#AEE0FC] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-xs font-semibold">
                    {folder.user.firstname[0].toUpperCase() +
                      folder.user.lastname[0].toUpperCase()}
                  </span>
                </div>
                <span className="truncate">
                  {folder.user.firstname + " " + folder.user.lastname}
                </span>
              </div>
            </td>

            {/* Actions */}
            <td className="py-2 px-3 md:py-4 md:px-6">
              <div className="flex items-center justify-center gap-1">
                <FolderRowAction
                  folder={folder}
                  refetchFolders={refetchFolders}
                  trigger={
                    <span className="text-lg font-extrabold text-[#280200] hover:cursor-pointer p-1 transition-all rounded duration-150 hover:bg-black/5">
                      ⋮
                    </span>
                  }
                />
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
