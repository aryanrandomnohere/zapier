import { folderInterface } from "@repo/types";
import { UserPlusIcon } from "lucide-react";
import FolderRowAction from "./FolderRowAction";
import useFolders from "@/app/hooks/useFolders";

export default function FolderRows() {
  const { folders, isLoading } = useFolders();
  if (isLoading) return <div>Loading...</div>;
  return (
    <tbody>
      {folders &&
        folders.map((folder: folderInterface) => (
          <tr key={folder.id} className="border-b border-gray-100">
            <td className="py-4 px-6 hover:underline cursor-pointer">
              {folder.name}
            </td>
            <td className="py-4 px-6">
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 bg-[#AEE0FC] rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-semibold">
                    {folder.user.firstname[0].toUpperCase() +
                      folder.user.lastname[0].toUpperCase()}
                  </span>
                </div>
                <span>
                  {folder.user.firstname + " " + folder.user.lastname}
                </span>
              </div>
            </td>

            <td className="py-4 px-6">
              <div className="flex items-center justify-start gap-1">
                <UserPlusIcon className="w-4 h-4" />
                <FolderRowAction
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
