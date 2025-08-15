"use client";
import { itemTestMetaData } from "@repo/types";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { selectedItemMetaData } from "../RecoilState/currentZap";
import { zapCreateState } from "../RecoilState/store/zapCreate";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSquare } from "react-icons/fa6";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { userAtom } from "../RecoilState/store/userAtom";
import { lazy } from "react";

const Triggerdata = lazy(() => import("./TriggerData/Triggerdata"));
const DataInForm = lazy(() => import("./DataInField/FieldData"));

export default function TestItem({
  item,
  type,
  id,
  handlePublish,
  handleComplete,
}: {
  item: itemTestMetaData;
  type: string;
  id: string;
  handlePublish: () => void;
  handleComplete: () => void;
}) {
  const [zap, setZap] = useRecoilState(zapCreateState);
  const [metadata, setMetaData] = useRecoilState(selectedItemMetaData);
  const [user, setUser] = useRecoilState(userAtom);
  const { zapId } = useParams();
  console.log(type);
  useEffect(() => {
    async function handleSaveTrigger() {
      let triggerSaved = false;
      if (!metadata || metadata.index === null || metadata.index === undefined)
        return;
      let userId = user?.userId;
      if (!user) {
        const session = await getSession();
        setUser(session?.user);
        userId = session?.user.userId;
      }
      const body =
        type == "trigger"
          ? {
              triggerId: zap.selectedItems[0].id,
              triggerConfiguration: zap.selectedItems[0].metadata,
              userId: userId,
            }
          : {
              actionId: id,
              actionConfiguration: zap.selectedItems[metadata.index].metadata,
              userId: userId,
              sortingOrder: metadata.index,
            };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${type === "trigger" ? "updatetrigger" : "updateaction"}/${zapId}`,
        body,
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        triggerSaved = true;
      }
    }
    handleSaveTrigger();
  }, []);

  if (
    metadata.index == null ||
    metadata.index == undefined ||
    !metadata.isOpen
  ) {
    console.log("Returning some error", metadata);
    return null;
  }
  return (
    <div className="flex flex-col text-xs min-h-full ">
      <div className="flex px-3 mt-2  justify-center gap-6 w-full">
        <div className="">
          {item.type === "action" && (
            <div className="flex gap-6 ">
              {" "}
              <div className="flex items-center">
                <div className="text-red-500 rounded p-1 border border-black/10">
                  <FaSquare size={30} />
                </div>
                <IoIosArrowRoundForward size={24} />
                <img
                  src={zap.selectedItems[metadata.index].imagePath}
                  alt="logo"
                  className="w-8 h-8 p-1 rounded border border-black/10"
                />
              </div>
              <div className="flex flex-col max-w-2/3">
                <div className="font-bold my-2">{item.does}</div>
                <div>{item.aboutDoes}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      {item.type == "trigger" ? (
        <div>
          <Triggerdata
            appId={zap.selectedItems[metadata.index].appId || "google"}
            handleComplete={handleComplete}
            id={id}
            triggerName={zap.selectedItems[metadata.index].name}
            item={item}
            zapImage={zap.selectedItems[metadata.index].imagePath}
          />
        </div>
      ) : (
        zap.selectedItems[metadata.index].metadata?.fields[0].fieldValue &&
        zap.selectedItems[metadata.index]?.metadata?.optionConfiguration && (
          <DataInForm
            handlePublish={handlePublish}
            fields={
              zap.selectedItems[metadata.index]?.metadata?.optionConfiguration[
                //@ts-ignore
                zap.selectedItems[metadata.index].metadata?.fields[0].fieldValue
              ].configurationStep.fields
            }
          />
        )
      )}
    </div>
  );
}
