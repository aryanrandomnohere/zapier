"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { useModal } from "@/ui/Modal";

export default function CreateFolder({
  handleCreateFolder,
}: {
  handleCreateFolder: (folderName: string) => void;
}) {
  const [folderName, setFolderName] = useState("");
  const { close } = useModal();

  const handleSave = () => {
    if (folderName.trim()) {
      handleCreateFolder(folderName.trim());
      close();
    }
  };

  const handleCancel = () => {
    setFolderName("");
    close();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && folderName.trim()) {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div
      className="flex flex-col w-96 h-32 justify-center p-1 items-start gap-4"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="flex justify-between items-center w-full text-1xl font-bold">
        Create New Folder{" "}
        <X
          className="w-6 h-6 cursor-pointer hover:text-gray-500"
          onClick={close}
        />
      </h1>
      <div className="flex flex-col w-full items-start gap-1">
        <label htmlFor="folderName" className="flex gap-1 text-xs font-bold">
          Folder Name <span className="text-red-500">*</span>{" "}
          <div className="text-xs text-gray-500">(required)</div>
        </label>
        <input
          type="text"
          id="folderName"
          placeholder="Folder Name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={handleKeyDown}
          className="w-full border border-gray-300 rounded text-sm p-1"
          maxLength={20}
          autoFocus
        />
        <div className="text-xs text-gray-500">Maximum 20 characters</div>
        <div className="flex gap-2 items-end justify-end self-end">
          <button
            className="flex bg-blue-200 text-sm font-medium text-blue-500 px-2 py-1 rounded hover:bg-blue-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="flex bg-blue-600 text-sm font-medium text-white px-2 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400"
            onClick={handleSave}
            disabled={!folderName.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
