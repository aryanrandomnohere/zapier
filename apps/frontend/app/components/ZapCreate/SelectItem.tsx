"use client";
import { useModal } from "../../ui/Modal";
import FilterItems from "../SelectItems/FilterItems";
import Options from "../SelectItems/Options";
import Search from "../SelectItems/Search";

export default function SelectItem({
  type,
  index,
  insertingOrNew,
}: {
  type: "actions" | "triggers";
  index?: number;
  insertingOrNew?: "inserting" | "new" | "change";
}) {
  const { close } = useModal();

  return (
    <div className="flex flex-col w-[520px] h-[540px]">
      <Search />
      <FilterItems />
      <Options
        type={type}
        onClose={close}
        index={index}
        insertingOrNew={insertingOrNew}
      />
    </div>
  );
}
