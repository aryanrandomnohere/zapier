import { ItemType } from "@repo/types";
import { RiPushpinLine } from "react-icons/ri";
import { useRecoilState, useSetRecoilState } from "recoil";
import { zapCreateState } from "@/app/RecoilState/store/zapCreate";
import { selectedItemMetaData } from "@/app/RecoilState/currentZap";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import axios from "axios";
import { useParams } from "next/navigation";

export default function OptionList({
  items,
  title,
  onClose,
}: {
  items?: ItemType[];
  title: string;
  onClose: () => void;
}) {
  const [Item, setItem] = useRecoilState(zapCreateState);
  const [metadata, setMetaData] = useRecoilState(selectedItemMetaData);
  const [user, setUser] = useRecoilState(userAtom);
  const { zapId } = useParams();
  if (!items) return null;

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

    console.log();
  }

  function handleClick(item: ItemType, index: number) {
    if (Item.selectedCell === undefined) return;
    setItem((zap) => {
      if (Item.selectedCell === null) return zap;
      if (Item.selectedCell === 0) {
        return {
          ...zap,
          selectedItems: [
            item,
            ...Item.selectedItems.slice(1, Item.selectedItems.length),
          ],
        };
      }
      return {
        ...zap,
        selectedItems: [
          ...Item.selectedItems.slice(0, Item.selectedCell),
          item,
          ...Item.selectedItems.slice(
            (Item.selectedCell || 0) + 1,
            Item.selectedItems.length,
          ),
        ],
      };
    });
    handleUpdateStep({
      availabelStepId: item.id,
      ItemType: item.type,
      metaData: item.metadata,
    });

    setMetaData((prev) => ({ index: Item.selectedCell, isOpen: true }));
    onClose();
  }

  return (
    <div className="flex flex-col gap-1 w-full ">
      <div className="font-semibold text-sm text-stone-500">{title}</div>
      {items.map((item: ItemType, index: number) => (
        <div
          onClick={() => {
            if (!item?.serviceType) return;
            handleClick(item, index);
          }}
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
