import FilterItems from "./SelectItems/FilterItems";
import Options from "./SelectItems/Options";
import Search from "./SelectItems/Search";


export default function SelectItem() {
  return (
    <div className="flex flex-col w-[520px] h-[540px]">
     <Search/>
    <FilterItems/>
    <Options type="triggers" />
    </div>
  );
}
