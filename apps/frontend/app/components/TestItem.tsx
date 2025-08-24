"use client";
import { itemTestMetaData, onStepEnum } from "@repo/types";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { onStep, selectedItemMetaData } from "../RecoilState/currentZap";
import { zapCreateState } from "../RecoilState/store/zapCreate";
import { ArrowRight, Square } from "lucide-react";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { userAtom } from "../RecoilState/store/userAtom";
import Triggerdata from "./TriggerData/Triggerdata";
import DataInForm from "./DataInField/FieldData";

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
  const setOnStep = useSetRecoilState(onStep);
  console.log(type);

  const handleNextStep = () => {
    console.log("handleNextStep");
    setMetaData((prev) => ({
      ...prev,
      index: (prev?.index || 0) + 1,
    }));
    setOnStep(onStepEnum.SETUP);
  };
  useEffect(() => {
    async function handleSaveTrigger() {
      let triggerSaved = false;
      if (!metadata || metadata.index === null || metadata.index === undefined)
        return;
      let userId: string | undefined = user?.userId
        ? String(user.userId)
        : undefined;
      if (!user) {
        const session = await getSession();
        setUser(
          session?.user
            ? {
                ...session.user,
                name: session.user.name || "",
                email: session.user.email || "",
                image: session.user.image || "",
                userId: String(session.user.userId),
              }
            : undefined,
        );
        userId = session?.user.userId ? String(session.user.userId) : undefined;
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
                  <Square size={22} />
                </div>
                <ArrowRight size={24} />
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
            appId={zap.selectedItems[metadata.index].appId}
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
            handleNextStep={handleNextStep}
            notLastStep={metadata.index !== zap.selectedItems.length - 1}
            handlePublish={handlePublish}
            fields={
              zap.selectedItems[metadata.index]?.metadata?.optionConfiguration[
                //@ts-ignore gemini
                zap.selectedItems[metadata.index].metadata?.fields[0].fieldValue
              ].configurationStep.fields
            }
          />
        )
      )}
    </div>
  );
}
