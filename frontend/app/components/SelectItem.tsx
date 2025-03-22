import FilterItems from "./SelectItems/FilterItems";
import Search from "./SelectItems/Search";


export default function SelectItem() {
  return (
    <div className="flex flex-col w-[530px] h-[560px]">
     <Search/>
    <FilterItems/>
    </div>
  );
}
