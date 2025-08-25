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
    <div className="flex flex-col w-full sm:w-[520px] h-screen sm:h-[540px] p-2 sm:p-1 sm:overflow-hidden overflow-auto ">
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
