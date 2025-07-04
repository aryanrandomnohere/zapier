"use client";
import { useState } from "react";
import { zapInterface } from "../../../../packages/types/src";
import ToggleButton from "./buttons/ToggleButton";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { MdOutlineAttachEmail, MdOutlineWebhook } from "react-icons/md";
import { SiSolana } from "react-icons/si";
import { LuFileSpreadsheet } from "react-icons/lu";
export default function ZapRow({ zaps }: { zaps: zapInterface[] }) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [activeZap, setActiveZap] = useState<boolean>(false);
  const router = useRouter();
  const handleZapClick = (id: string) => {
    router.push(`/zap/create/${id}`);
  };

  return (
    <div className="flex flex-col justify-center h-full">
      {zaps.map((zap: zapInterface) => {
        if (!zap.trigger || !zap.trigger) {
          return <></>;
        }
        return (
          <div
            className="flex w-6/6 justify-between  border-b border-black/20 pr-10 py-4 items-center gap-1"
            key={zap.id}
          >
            <div className="flex  w-fit gap-2 items-center">
              <input
                type="checkbox"
                defaultChecked
                className="min-w-5 min-h-5 rounded-md border-2 border-gray-400 bg-white checked:bg-blue-500 hover:cursor-pointer checked:border-blue-500 focus:ring-0 focus:ring-blue-300 transition duration-200"
              />
              <div>
                <img
                  src={zap.trigger.type.imagePath}
                  alt="trigger"
                  className="w-8 h-8 border border-gray-400 rounded-md p-0.5"
                />
              </div>{" "}
              {zap.actions.map((action, i) => (
                <div key={action.id}>
                  <img
                    src={zap.actions[i].actionDetails.imagePath}
                    alt="trigger"
                    className="w-8 h-8 border border-gray-400 rounded-md p-0.5"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center w-1/6 text-sm">
              {zap.name || "Untitled Zap"}
            </div>
            <div className="flex justify-center w-1/6 items-center gap-7">
              {" "}
              <div className="text-sm min-w-24 w-1/3">
                {zap.lastEdited || "Nov 13, 2023"}
              </div>
              <div className="w-1/3">
                <ToggleButton
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
              </div>
              <div
                onClick={() => handleZapClick(zap.id)}
                className="w-1/3 mr-20 ml-5 hover:cursor-pointer"
              >
                <IoIosArrowForward className="text-2xl" />
              </div>
            </div>
          </div>
        );
      })}
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
