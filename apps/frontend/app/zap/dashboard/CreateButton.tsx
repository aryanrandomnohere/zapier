"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import axios from "axios";
import { userAtom } from "../../RecoilState/store/userAtom";
import { useRecoilState } from "recoil";
import { Plus } from "lucide-react";
import { LoadingButton } from "../../components/ui/LoadingSpinner";
import DropDownOptions from "@/app/ui/DropDownOptions";
import { BoltIcon, FolderIcon } from "@/app/components/ZapDashboard/FolderIcon";
import CreateFolderSimple from "@/app/components/ZapDashboard/CreateFolderSimple";

export default function CreateButton() {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userAtom);
  const [isCreating, setIsCreating] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const { tabId, id } = useParams();

  useEffect(() => {
    async function handleLoadSession() {
      const session = await getSession();
      setUser(session?.user);
    }
    if (!user) handleLoadSession();
  });

  async function handleCreateZap() {
    if (isCreating) return;

    setIsCreating(true);
    try {
      console.log(user?.userId);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/draft`,
        {
          folderId: id,
        },
        {
          withCredentials: true,
        },
      );
      console.log(response);
      router.push(`/zap/create/${response.data.zapId}`);
    } catch (e) {
      console.error(e);
    } finally {
      setIsCreating(false);
    }
  }

  async function handleCreateFolder(folderName: string = "New Folder") {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/folders/create`,
        {
          name: folderName,
          type: "root",
        },
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      router.push(`/zap/dashboard/folder/${response.data.data.id}`);
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  }

  return (
    <>
      <DropDownOptions
        trigger={
          <button className="flex items-center gap-2 px-4 py-2 text-sm hover:cursor-pointer text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            <div className="flex gap-1 items-center font-bold">
              <Plus className="font-extrabold" size={18} />
              Create
            </div>
          </button>
        }
      >
        <div className="flex flex-col gap-2">
          <LoadingButton
            type="secondary"
            loading={isCreating}
            onClick={handleCreateZap}
          >
            <BoltIcon /> New Zap
          </LoadingButton>
          <LoadingButton
            type="secondary"
            onClick={() => setShowFolderModal(true)}
          >
            <FolderIcon /> New folder
          </LoadingButton>
        </div>
      </DropDownOptions>

      {/* Modal outside of dropdown */}
      {showFolderModal && (
        <div
          className="fixed inset-0 w-full h-screen bg-black/60 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowFolderModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl p-6 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <CreateFolderSimple
              onClose={() => setShowFolderModal(false)}
              onSave={(folderName) => {
                handleCreateFolder(folderName);
                setShowFolderModal(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
