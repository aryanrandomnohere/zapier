"use client";
import { useState } from "react";
import { zapInterface } from "../../../../../packages/types/src";

import { useRouter } from "next/navigation";
import { MdOutlineAttachEmail, MdOutlineWebhook } from "react-icons/md";
import { SiSolana } from "react-icons/si";
import { LuFileSpreadsheet } from "react-icons/lu";
import Row from "./Row";
import useZaps from "@/app/hooks/useZaps";
import RecoilProvider from "@/app/dashboard/RecoilProvider";
export default function ZapRows() {
  const { zaps, loading, error } = useZaps();
  const router = useRouter();
  const handleZapClick = (id: string) => {
    router.push(`/zap/create/${id}`);
  };

  if (loading) return <div>Loading...</div>;

  return (
   <RecoilProvider> <div className="flex flex-col justify-center h-full">
      {zaps.map((zap: zapInterface) => (
        <Row key={zap.id} zap={zap} handleZapClick={handleZapClick} />
      ))}
    </div>
    </RecoilProvider>
  );
}

const ActionIcon = ({ action }: { action: string }) => {
  switch (action) {
    case "sheet":
      return <LuFileSpreadsheet color="black" size={20} />;
    case "webhook":
      return <MdOutlineWebhook color="black" size={20} />;
    case "email":
      return <MdOutlineAttachEmail color="black" size={20} />;
    case "solana":
      return <SiSolana color="black" size={20} />;
    default:
      return <MdOutlineWebhook color="black" size={20} />;
  }
};
