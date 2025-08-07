import React, { useEffect, useState } from "react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import axios from "axios";
import { userAtom } from "../../RecoilState/store/userAtom";
import { useRecoilState } from "recoil";
import { Plus } from "lucide-react";
import {
  LoadingButton,
  LoadingSpinner,
} from "../../components/ui/LoadingSpinner";
import DropDownOptions from "@/app/ui/DropDownOptions";
import { BoltIcon, FolderIcon } from "@/app/components/ZapDashboard/FolderIcon";

export default function CreateButton() {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userAtom);
  const [isCreating, setIsCreating] = useState(false);

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
          userId: user?.userId,
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

  return (
    <DropDownOptions
      trigger={
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md">
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
        <LoadingButton type="secondary">
          <FolderIcon /> New folder
        </LoadingButton>
      </div>
    </DropDownOptions>
  );
}
