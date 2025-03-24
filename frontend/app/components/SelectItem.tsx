import FilterItems from "./SelectItems/FilterItems";
import Options from "./SelectItems/Options";
import Search from "./SelectItems/Search";


export default function SelectItem({setItem,cellData}:{setItem:()=>void,cellData:()=>void}) {
  return (
    <div className="flex flex-col w-[520px] h-[540px]">
     <Search/>
    <FilterItems/>
    <Options setItem={()=>setItem()} type="triggers"  />
    </div>
  );
}
