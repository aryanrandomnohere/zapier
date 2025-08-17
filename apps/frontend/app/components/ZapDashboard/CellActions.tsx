import { zapCreateState } from "@/app/RecoilState/store/zapCreate";
import axios from "axios";
import {
  Copy,
  Link,
  MessageCircleCodeIcon,
  MessageSquareCode,
} from "lucide-react";
import { Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ItemType, zapOperations } from "@repo/types";
import {
  currentOperationAtom,
  extendedStepNotesAtom,
  leftbarIsOpenAtom,
  selectedNotesAtom,
} from "@/app/RecoilState/store/leftbarAtom";

export default function CellActions({
  index,
  copiedItem,
  setCopiedItem,
}: {
  index: number;
  copiedItem: ItemType | null;
  setCopiedItem: (item: ItemType | null) => void;
}) {
  const [reallyDelete, setReallyDelete] = useState(false);
  const [zapState, setZapState] = useRecoilState(zapCreateState);
  const [expandedStep, setExpandedStep] = useRecoilState(extendedStepNotesAtom);
  const [selectedItems, setSelectedItems] = useRecoilState(selectedNotesAtom);
  const setIsOpen = useSetRecoilState(leftbarIsOpenAtom);
  const setCurrentOperation = useSetRecoilState(currentOperationAtom);
  const { zapId } = useParams();
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!reallyDelete) {
      e.stopPropagation();
      setReallyDelete(true);
    } else {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/actions/delete/${zapState.selectedItems[index - 1].stepId}`,
        { withCredentials: true },
      );

      if (response.data.success) {
        setZapState((prev) => {
          const updatedItems = [...prev.selectedItems];
          updatedItems.splice(index - 1, 1); // remove the item at index - 1
          return { ...prev, selectedItems: updatedItems };
        });
      }
    }
  };
  const handleDuplicate = async () => {
    if (index === 1) return;
    if (!zapState?.selectedItems[index - 1]?.metadata) {
      setZapState((prev) => {
        const newAction = { ...prev.selectedItems[index - 1] };
        const updatedItems = [...prev.selectedItems];
        updatedItems.splice(index, 0, newAction);

        return { ...prev, selectedItems: updatedItems };
      });

      return;
    }
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/actions/dublicate`,
      {
        dublicateId: zapState.selectedItems[index - 1].stepId,
        zapId: Number(zapId),
      },
      { withCredentials: true },
    );

    setZapState((prev) => {
      const newAction = { ...prev.selectedItems[index - 1] }; // clone the one at index-1
      newAction.stepId = response.data.data.stepId;

      // clone array (don’t mutate prev directly)
      const updatedItems = [...prev.selectedItems];
      updatedItems.splice(index, 0, newAction); // insert at index

      return { ...prev, selectedItems: updatedItems };
    });
  };

  console.log(copiedItem);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <button
        onClick={() => handleDuplicate()}
        className={`flex items-center gap-2 w-full p-1.5 transition-all duration-150 ${
          index === 1
            ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
            : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
        }`}
      >
        <Copy size={16} />
        Duplicate
      </button>

      {/* Change owner */}
      <button
        onClick={() => {
          setCopiedItem(zapState.selectedItems[index - 1]);
          console.log(zapState.selectedItems[index - 1], index - 1);
        }}
        className={`flex items-center gap-2 w-full p-1.5 transition-all duration-150 ${
          false
            ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
            : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
        }`}
      >
        <Copy size={16} />
        Copy
      </button>
      <button
        onClick={async () => {
          if (copiedItem) {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/actions/paste`,
              {
                zapId: Number(zapId),
                actionId: copiedItem.stepId,
                index: index + 1,
              },
              { withCredentials: true },
            );
            if (response.data.success) {
              setZapState((prev) => {
                const updatedItems = [...prev.selectedItems];
                updatedItems.splice(index, 0, {
                  ...copiedItem,
                  stepId: response.data.stepId,
                });
                console.log(updatedItems);
                return { ...prev, selectedItems: updatedItems };
              });
            }
            setCopiedItem(null);
          }
        }}
        disabled={!copiedItem || copiedItem.type === "trigger"}
        className={`flex items-center gap-2 w-full p-1.5 transition-all duration-150 ${
          !copiedItem || copiedItem.type === "trigger"
            ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
            : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
        }`}
      >
        <Link size={16} />
        Paste below
      </button>

      {/* Change owner */}
      <button
        onClick={async () => {
          if (copiedItem) {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/actions/paste-to-replace`,
              {
                zapId: Number(zapId),
                actionId: zapState.selectedItems[index - 1].stepId,
                index: index - 1,
                actionToReplaceWithId: copiedItem.stepId,
              },
              { withCredentials: true },
            );
            if (response.data.success) {
              setZapState((prev) => {
                const updatedItems = [...prev.selectedItems];
                updatedItems[index - 1] = {
                  ...copiedItem,
                  stepId: response.data.stepId,
                };
                console.log(updatedItems);
                return { ...prev, selectedItems: updatedItems };
              });
            }
            setCopiedItem(null);
          }
        }}
        disabled={
          !copiedItem ||
          (copiedItem.type === "action" && index === 1) ||
          (copiedItem.type === "trigger" && index === 0)
        }
        className={`flex items-center gap-2 w-full p-1.5 transition-all duration-150 ${
          !copiedItem ||
          (copiedItem.type === "action" && index === 1) ||
          (copiedItem.type === "trigger" && index === 0)
            ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
            : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
        }`}
      >
        <Link size={16} />
        Paste to replace
      </button>

      {/* Divider */}
      <div className="my-1 border-t min-w-full border-gray-200"></div>
      {/* Add Note */}
      <button
        onClick={() => {
          const updatedSet = new Set(selectedItems).add(
            zapState.selectedItems[index - 1].stepId,
          );
          setSelectedItems(updatedSet);
          setCurrentOperation(zapOperations.NOTES);
          setIsOpen(true);
          setExpandedStep(zapState.selectedItems[index - 1].stepId);
        }}
        className={`flex items-center gap-2 w-full p-1.5 transition-all duration-150 ${
          false
            ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
            : "hover:bg-gray-100 text-gray-700 hover:cursor-pointer"
        }`}
      >
        <MessageSquareCode size={16} />
        Add Note
      </button>

      {/* Delete */}
      <button
        onClick={(e) => handleDelete(e)}
        disabled={false}
        className={`flex items-center gap-2 w-full p-1.5 transition-all duration-150 ${
          false
            ? "cursor-not-allowed text-gray-400 hover:bg-transparent"
            : "hover:bg-red-50 text-red-600 hover:text-red-600 hover:cursor-pointer"
        }`}
      >
        <Trash size={16} />
        {reallyDelete ? "Really Delete ?" : "Delete"}
      </button>
    </div>
  );
}
