"use client";
import useFolders from "@/app/hooks/useFolders";
import useZaps from "@/app/hooks/useZaps";
import { FolderIcon } from "@/app/components/ZapDashboard/FolderIcon";
import { useParams } from "next/navigation";
import ZapTable from "@/app/components/ZapDashboard/ZapTable";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";
import ZapFilters from "@/app/components/ZapDashboard/ZapFilters";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const { id } = useParams();
  const { zaps, loading: zapsLoading, refetchZaps } = useZaps();
  const { folders, loading: foldersLoading } = useFolders();
  const folder = folders?.find((folder) => folder.id === Number(id));
  const filteredZaps = zaps?.filter((zap) => zap.folder.id === Number(id));
  return (
    <div>
      <div className="flex gap-2 mb-4 items-center">
        <div
          className="text-sm text-blue-600 hover:underline cursor-pointer"
          onClick={() => router.push("/zap/dashboard")}
        >
          Zap
        </div>
        <ArrowRight size={14} className="text-blue-600" />
        <div
          className="text-sm text-blue-600 hover:underline cursor-pointer"
          onClick={() => router.push("/zap/dashboard/folders")}
        >
          Folders
        </div>
        <ArrowRight size={14} className="text-blue-600" />
        <div className="text-sm text-blue-600 hover:underline cursor-pointer">
          {folder?.name}
        </div>
      </div>
      <RecoilContextProvider>
        <ZapFilters type="zaps" refetchZaps={refetchZaps} />
      </RecoilContextProvider>
      {foldersLoading ? (
        <LoadingSpinner />
      ) : (
        <h1 className="flex my-2 items-center gap-2 text-2xl font-bold">
          <FolderIcon className="w-8 h-8" /> {folder?.name}
        </h1>
      )}

      <RecoilContextProvider>
        <ZapTable
          zaps={filteredZaps}
          loading={zapsLoading}
          refetchZaps={refetchZaps}
        />
      </RecoilContextProvider>
    </div>
  );
}
