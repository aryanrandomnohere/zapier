import FilterItems from "./SelectItems/FilterItems";
import Options from "./SelectItems/Options";
import Search from "./SelectItems/Search";
import { useModal } from "../ui/Modal";

export default function SelectItem({ type }: { type: "actions" | "triggers" }) {
  const { close } = useModal();

  return (
    <div className="flex flex-col w-[520px] h-[540px]">
      <Search />
      <FilterItems />
      <Options type={type} onClose={close} />
    </div>
  );
}
