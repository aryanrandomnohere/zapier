"use client";
import { useState } from "react";
import { zapInterface } from "../../../../../packages/types/src";
import ToggleButton from "../buttons/ToggleButton";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { MdOutlineAttachEmail, MdOutlineWebhook } from "react-icons/md";
import { SiSolana } from "react-icons/si";
import { LuFileSpreadsheet } from "react-icons/lu";
import Row from "./Row";
import useZaps from "@/app/hooks/useZaps";
export default function ZapRows() {
  const { zaps, loading, error } = useZaps();
  const router = useRouter();
  const handleZapClick = (id: string) => {
    router.push(`/zap/create/${id}`);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center h-full">
      {zaps.map((zap: zapInterface) => (
        <Row key={zap.id} zap={zap} handleZapClick={handleZapClick} />
      ))}
    </div>
  );
}

const ActionIcon = ({ action }: { action: string }) => {
  const IconStyle = "text-2xl text-black";
  switch (action) {
    case "sheet":
      return <LuFileSpreadsheet className={IconStyle} />;
    case "webhook":
      return <MdOutlineWebhook className={IconStyle} />;
      g;
    case "email":
      return <MdOutlineAttachEmail className={IconStyle} />;
    case "solana":
      return <SiSolana className={IconStyle} />;
    default:
      return <MdOutlineWebhook className={IconStyle} />;
  }
};
