"use client";
import DropDownMenu from "@/app/ui/DropDownMenu";

export default function ZapActions({
  trigger,
  handleRename,
  handleDublicate,
  handleDelete,
}: {
  trigger: React.ReactNode;
  handleRename: () => void;
  handleDublicate: () => void;
  handleDelete: () => void;
}) {
  return (
    <DropDownMenu type="normal" trigger={trigger}>
      <ul className="flex flex-col justify-center  text-white text-sm p-1 space-y-1.5">
        <li
          onClick={handleRename}
          className="px-2 py-0.5 hover:bg-blue-700 cursor-pointer"
        >
          Rename
        </li>
        <li
          onClick={handleDublicate}
          className="px-2 py-0.5 hover:bg-blue-700 cursor-pointer"
        >
          Duplicate
        </li>
        <li
          onClick={handleDelete}
          className="px-2 py-0.5 hover:bg-red-700 cursor-pointer"
        >
          Delete
        </li>
      </ul>
    </DropDownMenu>
  );
}
