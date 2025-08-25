"use client";
import { ItemType, onStepEnum } from "@repo/types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { zapCreateState } from "../../RecoilState/store/zapCreate";
import { selectedItemMetaData, onStep } from "../../RecoilState/currentZap";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../RecoilState/store/userAtom";
import { useParams } from "next/navigation";
import axios, { AxiosResponse } from "axios";
import { Pin } from "lucide-react";
import { useState } from "react";
import { LoadingSpinner } from "../ui/LoadingSpinner";

type MockItem = {
  id: string;
  name: string;
  imagePath: string;
};

export default function OptionList({
  items,
  title,
  onClose,
  index,
  insertingOrNew,
}: {
  items?: ItemType[] | MockItem[];
  title: string;
  onClose: () => void;
  index?: number;
  insertingOrNew?: "inserting" | "new" | "change";
}) {
  const [Item, setItem] = useRecoilState(zapCreateState);
  const setMetaData = useSetRecoilState(selectedItemMetaData);
  const setOnStep = useSetRecoilState(onStep);
  const user = useRecoilValue(userAtom);
  const { zapId } = useParams();
  const [updatingStep, setUpdatingStep] = useState<string | null>(null);

  async function handleUpdateStep({
    availabelStepId,
    ItemType,
    metaData,
  }: {
    availabelStepId: string;
    ItemType: string;
    //@ts-ignore gemini
    metaData: any;
  }) {
    setUpdatingStep(availabelStepId);
    try {
      const body =
        ItemType === "trigger"
          ? {
              triggerId: availabelStepId,
              triggerConfiguration: metaData,
              userId: user?.userId || Number(8),
            }
          : {
              actionId: availabelStepId,
              actionConfiguration: metaData,
              userId: Number(user?.userId) || 8,
              sortingOrder: Item.selectedItems.length - 1,
            };

      let response: AxiosResponse;
      if (
        index !== Item.selectedItems.length - 1 &&
        ItemType === "trigger" &&
        insertingOrNew !== "inserting"
      ) {
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${ItemType === "trigger" ? "updatetrigger" : "updateaction"}/${zapId}`,
          body,
          {
            withCredentials: true,
          },
        );
      } else {
        if (index === undefined) return;
        response = await axios.put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/actions/insert`,
          {
            ...body,
            zapId: Number(zapId),
            order: index,
          },
          {
            withCredentials: true,
          },
        );
      }
      console.log(response);
      console.log(Item.selectedItems, ItemType === "trigger" ? 0 : index || 1);
      //@ts-ignore gemini
      setItem((prev: any) => {
        const updated = structuredClone(prev);
        updated.selectedItems[ItemType === "trigger" ? 0 : index || 1].stepId =
          response.data.stepId;
        return updated;
      });
    } catch (error) {
      console.error("Error updating step:", error);
    } finally {
      setUpdatingStep(null);
    }
  }

  // --- Handle click for both real and mock items ---
  function handleClick(item: ItemType | MockItem) {
    const finalIndex = index ?? Item.selectedCell;

    // Detect if item is mock (no type/serviceType fields)
    const isMock = !("type" in item && "serviceType" in item);

    // Normalize item: convert mock to ItemType structure
    const normalizedItem: ItemType = isMock
      ? ({
          ...item,
          type: "trigger", // default type for mock
          serviceType: "mock",
          metadata: {},
        } as ItemType)
      : (item as ItemType);

    // Update Recoil state
    //@ts-ignore gemini
    setItem((zap: any) => {
      if (finalIndex === null) return zap;

      if (finalIndex === 0) {
        return {
          ...zap,
          selectedItems: [
            normalizedItem,
            ...Item.selectedItems.slice(1, Item.selectedItems.length),
          ],
        };
      }

      return {
        ...zap,
        selectedItems: [
          ...Item.selectedItems.slice(0, finalIndex),
          normalizedItem,
          ...Item.selectedItems.slice(
            (finalIndex || 0) + 1,
            Item.selectedItems.length,
          ),
        ],
      };
    });

    // Only update step in backend for real items
    if (!isMock) {
      handleUpdateStep({
        availabelStepId: (item as ItemType).id,
        ItemType: (item as ItemType).type,
        metaData: (item as ItemType).metadata,
      });
    }

    // Open metadata modal
    setMetaData((prev) => ({ index: finalIndex, isOpen: true }));
    setOnStep(onStepEnum.SETUP);
    onClose();
  }

  return (
    <div className="flex flex-col gap-1 w-full overflow-auto max-h-[240px] sm:max-h-full">
    <div className="font-semibold text-sm text-stone-500">{title}</div>
    {items?.map((item: ItemType | MockItem, idx: number) => {
      const isDisabled =
        updatingStep === item.id || !("metadata" in item) || !item.metadata;
  
      return (
        <div
          key={item.id}
          onClick={() => {
            if (isDisabled) return;
            handleClick(item);
          }}
          className={`flex p-1.5 items-center gap-2 text-sm font-semibold rounded transform transition-all duration-300 ease-in-out
            ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500/10 hover:cursor-pointer hover:scale-105"}
          `}
        >
          {updatingStep === item.id ? (
            <LoadingSpinner size="sm" color="primary" />
          ) : (
            <img
              src={item.imagePath}
              alt="logo"
              className="w-5 h-5 hover:cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110"
            />
          )}
          <span className={isDisabled ? "text-gray-400" : ""}>{item.name}</span>
        </div>
      );
    })}
  </div>
  

  );
}
