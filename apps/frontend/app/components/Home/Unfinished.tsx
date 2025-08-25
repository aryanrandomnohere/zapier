"use client";
import useZaps from "../../hooks/useZaps";
import CardScroller from "./CardScroller";
import { ZapCard } from "./ZapCard";
import { InlineLoading, CardLoading } from "../ui/LoadingSpinner";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import CreateButton from "@/app/zap/dashboard/CreateButton";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Unfinished() {
  const { zaps, loading, error } = useZaps();
  const [isCreating, setIsCreating] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  const router = useRouter();
  async function handleCreateZap() {
    if (isCreating) return;
    setIsCreating(true);
    try {
      console.log(user?.userId);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/draft`,
        {},
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

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <InlineLoading text="Loading Zaps..." />
      </div>
    );
  }

  // Commented out skeleton loading
  // return (
  //   <div className="space-y-10">
  //     <CardScroller title="Unfinished Zaps">
  //       {Array.from({ length: 4 }).map((_, index) => (
  //         <CardLoading key={index} />
  //       ))}
  //     </CardScroller>
  //   </div>
  // );

  return (
    <div className="space-y-10 max-h-80">
      {/* Unfinished Zaps */}
      <CardScroller title="Unfinished Zaps">
        {zaps.length > 0 ? (
          zaps.map((zap) => (
            <ZapCard
              msg={zap.published ? "Published" : "Not published"}
              id={Number(zap.id)}
              key={zap.id}
              name={zap.name}
              lastEdited={formatEditedTime(zap.lastEdited)}
              triggerImage={zap.trigger?.type?.imagePath}
              actions={zap.actions.map((a) => ({
                imagePath: a.actionDetails?.imagePath,
              }))}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-8 max-w-xs px-16 text-gray-500">
            <p className="text-lg font-medium">No Zaps Created Yet</p>
            <button
              onClick={handleCreateZap}
              disabled={isCreating}
              className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isCreating ? "Creating..." : "Create your first Zap"}
            </button>
          </div>
        )}
      </CardScroller>
    </div>
  );
}

function formatEditedTime(lastEdited: string): string {
  const editedDate = new Date(lastEdited);
  const diffMs = Date.now() - editedDate.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins} minutes ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hours ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
}
