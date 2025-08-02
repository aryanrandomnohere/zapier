import { ItemType, onStepEnum } from "@repo/types";
import { RiPushpinLine } from "react-icons/ri";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { zapCreateState } from "@/app/RecoilState/store/zapCreate";
import { onStep, selectedItemMetaData } from "@/app/RecoilState/currentZap";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import axios from "axios";
import { useParams } from "next/navigation";

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
}: {
  items?: ItemType[] | MockItem[];
  title: string;
  onClose: () => void;
  index?: number;
}) {
  const [Item, setItem] = useRecoilState(zapCreateState);
  const setMetaData = useSetRecoilState(selectedItemMetaData);
  const user = useRecoilValue(userAtom);
  const setOnStep = useSetRecoilState(onStep);
  const { zapId } = useParams();

  if (!items) return null;

  // --- API update function (for real items) ---
  async function handleUpdateStep({
    availabelStepId,
    ItemType,
    metaData,
  }: {
    availabelStepId: string;
    ItemType: string;
    metaData: any;
  }) {
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

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${ItemType === "trigger" ? "updatetrigger" : "updateaction"}/${zapId}`,
      body,
    );

    if (Item.selectedCell)
      setItem((prev) => {
        const updated = structuredClone(prev);
        updated.selectedItems[
          ItemType === "trigger" ? 0 : updated.selectedCell || 1
        ].stepId = response.data.stepId;
        return updated;
      });
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
    setItem((zap) => {
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
    <div className="flex flex-col gap-1 w-full">
      <div className="font-semibold text-sm text-stone-500">{title}</div>
      {items.map((item, index: number) => (
        <div
          onClick={() => handleClick(item)}
          key={item.id}
          className="flex p-1.5 hover:cursor-pointer transform transition-all duration-200 ease-in-out rounded group hover:bg-blue-500/10 min-w items-center gap-2 text-sm font-semibold justify-start hover:justify-between group-hover:justify-between"
        >
          <div className="flex gap-1.5 items-center">
            <img
              src={item.imagePath}
              alt="LOGO"
              className="w-5 h-5 hover:cursor-pointer"
            />
            {item.name}
          </div>
          <div className="hidden group-hover:flex text-blue-400">
            <RiPushpinLine size={16} />
          </div>
        </div>
      ))}
    </div>
  );
}
