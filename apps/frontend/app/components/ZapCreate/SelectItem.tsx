"use client";
import { useModal } from "../../ui/Modal";
import { lazy } from "react";

const FilterItems = lazy(() => import("../SelectItems/FilterItems"));
const Options = lazy(() => import("../SelectItems/Options"));
const Search = lazy(() => import("../SelectItems/Search"));

export default function SelectItem({
  type,
  index,
}: {
  type: "actions" | "triggers";
  index?: number;
}) {
  const { close } = useModal();

  return (
    <div className="flex flex-col w-[520px] h-[540px]">
      <Search />
      <FilterItems />
      <Options type={type} onClose={close} index={index} />
    </div>
  );
}
